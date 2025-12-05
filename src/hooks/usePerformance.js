import { useState, useEffect, useCallback, useRef } from 'react';

export const usePerformance = () => {
  const [metrics, setMetrics] = useState({
    pageLoadTime: null,
    renderCount: 0,
    componentMountTime: null,
    memoryUsage: null,
    connectionType: null,
    isSlowConnection: false,
  });

  const renderCountRef = useRef(0);
  const mountTimeRef = useRef(null);
  const performanceObserverRef = useRef(null);

  // Track component mount time
  useEffect(() => {
    mountTimeRef.current = performance.now();

    return () => {
      if (mountTimeRef.current) {
        const mountDuration = performance.now() - mountTimeRef.current;
        setMetrics(prev => ({
          ...prev,
          componentMountTime: mountDuration
        }));
      }
    };
  }, []);

  // Track render count
  useEffect(() => {
    renderCountRef.current += 1;
    setMetrics(prev => ({
      ...prev,
      renderCount: renderCountRef.current
    }));
  });

  // Get page load metrics
  const getPageLoadMetrics = useCallback(() => {
    try {
      const navigation = performance.getEntriesByType('navigation')[0];
      if (navigation) {
        return {
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          firstContentfulPaint: null, // Will be populated by Performance Observer
          largestContentfulPaint: null, // Will be populated by Performance Observer
        };
      }
    } catch (error) {
      console.warn('Performance navigation API not supported:', error);
    }
    return null;
  }, []);

  // Get memory usage (Chrome only)
  const getMemoryUsage = useCallback(() => {
    try {
      if ('memory' in performance) {
        return {
          usedJSMemorySize: performance.memory.usedJSMemorySize,
          totalJSMemorySize: performance.memory.totalJSMemorySize,
          jsMemoryLimit: performance.memory.jsMemoryLimit,
        };
      }
    } catch (error) {
      console.warn('Performance memory API not supported:', error);
    }
    return null;
  }, []);

  // Get connection information
  const getConnectionInfo = useCallback(() => {
    try {
      if ('connection' in navigator) {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        return {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
          saveData: connection.saveData,
        };
      }
    } catch (error) {
      console.warn('Network Information API not supported:', error);
    }
    return null;
  }, []);

  // Check if connection is slow
  const checkSlowConnection = useCallback(() => {
    const connectionInfo = getConnectionInfo();
    if (connectionInfo) {
      return connectionInfo.effectiveType === 'slow-2g' ||
             connectionInfo.effectiveType === '2g' ||
             connectionInfo.saveData === true;
    }
    return false;
  }, [getConnectionInfo]);

  // Performance Observer for Web Vitals
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            setMetrics(prev => {
              const newMetrics = { ...prev };

              switch (entry.entryType) {
                case 'paint':
                  if (entry.name === 'first-contentful-paint') {
                    newMetrics.firstContentfulPaint = entry.startTime;
                  }
                  break;
                case 'largest-contentful-paint':
                  newMetrics.largestContentfulPaint = entry.startTime;
                  break;
                case 'layout-shift':
                  if (!newMetrics.cumulativeLayoutShift) {
                    newMetrics.cumulativeLayoutShift = 0;
                  }
                  newMetrics.cumulativeLayoutShift += entry.value;
                  break;
                case 'first-input':
                  newMetrics.firstInputDelay = entry.processingStart - entry.startTime;
                  break;
                default:
                  break;
              }

              return newMetrics;
            });
          });
        });

        // Observe different performance entry types
        const entryTypes = ['paint', 'largest-contentful-paint', 'layout-shift', 'first-input'];
        entryTypes.forEach(type => {
          try {
            observer.observe({ entryType: type });
          } catch (error) {
            console.warn(`Performance observation for ${type} not supported:`, error);
          }
        });

        performanceObserverRef.current = observer;

        return () => {
          if (performanceObserverRef.current) {
            performanceObserverRef.current.disconnect();
          }
        };
      } catch (error) {
        console.warn('Performance Observer not supported:', error);
      }
    }
  }, []);

  // Update metrics on mount and periodically
  useEffect(() => {
    const updateMetrics = () => {
      const pageMetrics = getPageLoadMetrics();
      const memoryMetrics = getMemoryUsage();
      const connectionMetrics = getConnectionInfo();
      const isSlowConn = checkSlowConnection();

      setMetrics(prev => ({
        ...prev,
        pageLoadTime: pageMetrics?.loadTime || null,
        memoryUsage: memoryMetrics,
        connectionType: connectionMetrics,
        isSlowConnection: isSlowConn,
      }));
    };

    // Initial update
    updateMetrics();

    // Update every 30 seconds
    const interval = setInterval(updateMetrics, 30000);

    return () => clearInterval(interval);
  }, [getPageLoadMetrics, getMemoryUsage, getConnectionInfo, checkSlowConnection]);

  // Measure function execution time
  const measureFunction = useCallback((fn, name = 'Anonymous Function') => {
    return (...args) => {
      const start = performance.now();
      const result = fn(...args);
      const end = performance.now();

      console.log(`${name} execution time: ${end - start} milliseconds`);

      // If it's a promise, measure async execution
      if (result && typeof result.then === 'function') {
        return result.then(res => {
          const asyncEnd = performance.now();
          console.log(`${name} async completion time: ${asyncEnd - start} milliseconds`);
          return res;
        });
      }

      return result;
    };
  }, []);

  // Mark performance milestones
  const markMilestone = useCallback((name) => {
    try {
      performance.mark(name);
    } catch (error) {
      console.warn('Performance mark not supported:', error);
    }
  }, []);

  // Measure between two milestones
  const measureBetween = useCallback((startMark, endMark, measureName) => {
    try {
      performance.measure(measureName, startMark, endMark);
      const measure = performance.getEntriesByName(measureName)[0];
      return measure ? measure.duration : null;
    } catch (error) {
      console.warn('Performance measure not supported:', error);
      return null;
    }
  }, []);

  // Get performance grade based on metrics
  const getPerformanceGrade = useCallback(() => {
    const { firstContentfulPaint, largestContentfulPaint, firstInputDelay, cumulativeLayoutShift } = metrics;

    let score = 0;
    let checks = 0;

    // First Contentful Paint (Good: <1.8s, Poor: >3s)
    if (firstContentfulPaint !== null && firstContentfulPaint !== undefined) {
      checks++;
      if (firstContentfulPaint < 1800) score += 25;
      else if (firstContentfulPaint < 3000) score += 15;
      else score += 5;
    }

    // Largest Contentful Paint (Good: <2.5s, Poor: >4s)
    if (largestContentfulPaint !== null && largestContentfulPaint !== undefined) {
      checks++;
      if (largestContentfulPaint < 2500) score += 25;
      else if (largestContentfulPaint < 4000) score += 15;
      else score += 5;
    }

    // First Input Delay (Good: <100ms, Poor: >300ms)
    if (firstInputDelay !== null && firstInputDelay !== undefined) {
      checks++;
      if (firstInputDelay < 100) score += 25;
      else if (firstInputDelay < 300) score += 15;
      else score += 5;
    }

    // Cumulative Layout Shift (Good: <0.1, Poor: >0.25)
    if (cumulativeLayoutShift !== null && cumulativeLayoutShift !== undefined) {
      checks++;
      if (cumulativeLayoutShift < 0.1) score += 25;
      else if (cumulativeLayoutShift < 0.25) score += 15;
      else score += 5;
    }

    if (checks === 0) return 'Unknown';

    const averageScore = score / checks;

    if (averageScore >= 20) return 'Good';
    if (averageScore >= 10) return 'Needs Improvement';
    return 'Poor';
  }, [metrics]);

  // Log performance summary
  const logPerformanceSummary = useCallback(() => {
    console.group('Performance Summary');
    console.log('Metrics:', metrics);
    console.log('Grade:', getPerformanceGrade());
    console.log('Render Count:', renderCountRef.current);

    if (metrics.memoryUsage) {
      console.log('Memory Usage (MB):', {
        used: (metrics.memoryUsage.usedJSMemorySize / 1048576).toFixed(2),
        total: (metrics.memoryUsage.totalJSMemorySize / 1048576).toFixed(2),
        limit: (metrics.memoryUsage.jsMemoryLimit / 1048576).toFixed(2),
      });
    }

    console.groupEnd();
  }, [metrics, getPerformanceGrade]);

  return {
    metrics,
    measureFunction,
    markMilestone,
    measureBetween,
    getPerformanceGrade,
    logPerformanceSummary,
    renderCount: renderCountRef.current,
  };
};

// Hook for measuring component render time
export const useRenderTime = (componentName = 'Component') => {
  const renderStartTime = useRef(null);

  useEffect(() => {
    renderStartTime.current = performance.now();
  });

  useEffect(() => {
    if (renderStartTime.current) {
      const renderTime = performance.now() - renderStartTime.current;
      if (process.env.NODE_ENV === 'development') {
        console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`);
      }
    }
  });

  return renderStartTime.current ? performance.now() - renderStartTime.current : null;
};

// Hook for detecting slow renders
export const useSlowRenderDetection = (threshold = 16, componentName = 'Component') => {
  const [slowRenders, setSlowRenders] = useState(0);
  const renderStartTime = useRef(null);

  useEffect(() => {
    renderStartTime.current = performance.now();
  });

  useEffect(() => {
    if (renderStartTime.current) {
      const renderTime = performance.now() - renderStartTime.current;
      if (renderTime > threshold) {
        setSlowRenders(prev => prev + 1);
        if (process.env.NODE_ENV === 'development') {
          console.warn(`Slow render detected in ${componentName}: ${renderTime.toFixed(2)}ms`);
        }
      }
    }
  });

  return slowRenders;
};

export default usePerformance;

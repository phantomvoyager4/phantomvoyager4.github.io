import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const LoadingSpinner = ({
  size = 'medium',
  text = 'Loading...',
  showText = true,
  className = '',
  variant = 'spinner'
}) => {
  const { palette } = useTheme();

  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
    xlarge: 'w-16 h-16'
  };

  const textSizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
    xlarge: 'text-xl'
  };

  if (variant === 'dots') {
    return (
      <div className={`flex items-center justify-center space-x-1 ${className}`}>
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className={`${sizeClasses[size]} rounded-full`}
            style={{ backgroundColor: palette.icon }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: index * 0.2
            }}
          />
        ))}
        {showText && (
          <span
            className={`ml-3 ${textSizeClasses[size]}`}
            style={{ color: palette.headerText }}
          >
            {text}
          </span>
        )}
      </div>
    );
  }

  if (variant === 'pulse') {
    return (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <motion.div
          className={`${sizeClasses[size]} rounded-full`}
          style={{ backgroundColor: palette.icon }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {showText && (
          <motion.p
            className={`mt-3 ${textSizeClasses[size]}`}
            style={{ color: palette.headerText }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {text}
          </motion.p>
        )}
      </div>
    );
  }

  // Default spinner variant
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} border-2 rounded-full`}
        style={{
          borderColor: `${palette.icon}30`,
          borderTopColor: palette.icon
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      {showText && (
        <p
          className={`mt-3 ${textSizeClasses[size]} font-InriaSerif`}
          style={{ color: palette.headerText }}
        >
          {text}
        </p>
      )}
    </div>
  );
};

// Full page loading component
export const FullPageLoader = ({ text = 'Loading...', variant = 'spinner' }) => {
  const { palette } = useTheme();

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: palette.bg }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <LoadingSpinner
        size="large"
        text={text}
        variant={variant}
        className="text-center"
      />
    </motion.div>
  );
};

// Skeleton loader for cards
export const CardSkeleton = ({ className = '' }) => {
  const { palette } = useTheme();

  return (
    <div
      className={`animate-pulse ${className}`}
      style={{ backgroundColor: palette.headerBg }}
    >
      <div
        className="h-48 rounded-lg mb-4"
        style={{ backgroundColor: `${palette.icon}20` }}
      />
      <div
        className="h-4 rounded mb-2"
        style={{ backgroundColor: `${palette.icon}20` }}
      />
      <div
        className="h-4 rounded w-3/4"
        style={{ backgroundColor: `${palette.icon}20` }}
      />
    </div>
  );
};

// Inline loader for buttons
export const ButtonLoader = ({ size = 'small' }) => {
  const { palette } = useTheme();

  return (
    <motion.div
      className={`${size === 'small' ? 'w-4 h-4' : 'w-5 h-5'} border-2 rounded-full`}
      style={{
        borderColor: 'transparent',
        borderTopColor: 'currentColor'
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

// Music note animation loader
export const MusicLoader = ({ className = '' }) => {
  const { palette } = useTheme();

  const notes = ['♪', '♫', '♪', '♬'];

  return (
    <div className={`flex items-center justify-center space-x-2 ${className}`}>
      {notes.map((note, index) => (
        <motion.span
          key={index}
          className="text-2xl font-bold"
          style={{ color: palette.icon }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut"
          }}
        >
          {note}
        </motion.span>
      ))}
      <motion.span
        className="ml-3 text-lg font-InriaSerif"
        style={{ color: palette.headerText }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        Loading music...
      </motion.span>
    </div>
  );
};

export default LoadingSpinner;

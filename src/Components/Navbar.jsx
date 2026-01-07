// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useScrollLock } from "./useScrollLock";

function Menu({ open, onClose, palette }) {
  useScrollLock(open);
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  const getMenuItems = () => {
    const currentPath = location.pathname;
    
    const baseItems = [
      {
        label: "Linktree",
        href: "https://linktr.ee/kashiami",
        external: true,
        icon: (
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
        ),
      },
      {
        label: "Github repo",
        href: "https://github.com/phantomvoyager4/phantomvoyager4.github.io",
        external: true,
        icon: (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        ),
      },
    ];

    const allPageItems = [
      {
        label: "Direct contact",
        href: "/contact",
        external: false,
        icon: (
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        ),
      },
      {
        label: "About me",
        href: "/about",
        external: false,
        icon: (
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        ),
      },
      {
        label: "Statistics",
        href: "/stats",
        external: false,
        icon: (
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        ),
      },
    ];

    if (currentPath === "/") {
      return [...baseItems, ...allPageItems];
    }

    const filteredItems = allPageItems.filter(item => item.href !== currentPath);
    
    return [...baseItems, ...filteredItems];
  };

  const menuItems = getMenuItems();

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: -20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-transparent z-40"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          {/* Menu Container */}
          <motion.nav
            className="fixed top-14 sm:top-16 left-4 sm:left-6 w-64 sm:w-72 rounded-2xl shadow-2xl z-50 overflow-hidden"
            style={{
              backgroundColor: palette.navbarBackground,
              border: `1px solid ${palette.cardStroke}40`,
              boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px ${palette.cardStroke}20`,
            }}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div
              className="flex items-center justify-between p-4 border-b"
              style={{ borderBottomColor: `${palette.cardStroke}20` }}
            >
              <h3
                className="font-InriaSerif text-lg font-semibold"
                style={{ color: palette.navbarText }}
              >
                Menu
              </h3>
              <motion.button
                onClick={onClose}
                className="p-2 rounded-lg transition-colors"
                whileHover={{
                  scale: 1.1,
                  backgroundColor:
                    palette.icon === "#181818"
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(0, 0, 0, 0.05)",
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close menu"
              >
                <svg
                  className="w-5 h-5"
                  style={{ color: palette.navbarText }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
            </div>

            {/* Menu Items */}
            <div className="p-2">
              {menuItems.map((item) => (
                <motion.div key={item.label} variants={itemVariants}>
                  {item.external ? (
                    <motion.a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 group"
                      onClick={onClose}
                      whileHover={{
                        x: 4,
                        backgroundColor:
                          palette.icon === "#181818"
                            ? "rgba(255, 255, 255, 0.1)"
                            : "rgba(0, 0, 0, 0.05)",
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div
                        className="flex items-center justify-center w-8 h-8 rounded-lg"
                        style={{
                          backgroundColor: `${palette.cardIcon}15`,
                          color: palette.cardIcon,
                        }}
                      >
                        {item.icon}
                      </div>
                      <span
                        className="font-InriaSerif text-base group-hover:translate-x-1 transition-transform"
                        style={{ color: palette.navbarText }}
                      >
                        {item.label}
                      </span>
                      <svg
                        className="w-3 h-3 ml-auto opacity-50"
                        style={{ color: palette.navbarText }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </motion.a>
                  ) : (
                    <Link to={item.href} onClick={onClose}>
                      <motion.div
                        className="flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 group"
                        whileHover={{
                          x: 4,
                          backgroundColor:
                            palette.icon === "#181818"
                              ? "rgba(255, 255, 255, 0.1)"
                              : "rgba(0, 0, 0, 0.05)",
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div
                          className="flex items-center justify-center w-8 h-8 rounded-lg"
                          style={{
                            backgroundColor: `${palette.cardIcon}15`,
                            color: palette.cardIcon,
                          }}
                        >
                          {item.icon}
                        </div>
                        <span
                          className="font-InriaSerif text-base group-hover:translate-x-1 transition-transform"
                          style={{ color: palette.navbarText }}
                        >
                          {item.label}
                        </span>
                        <svg
                          className="w-3 h-3 ml-auto opacity-50"
                          style={{ color: palette.navbarText }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </motion.div>
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <motion.div
              className="p-4 border-t"
              style={{ borderTopColor: `${palette.cardStroke}20` }}
              variants={itemVariants}
            >
              <p
                className="text-xs text-center opacity-70 font-InriaSerif"
                style={{ color: palette.navbarText }}
              >
                Kashiami © 2024
              </p>
            </motion.div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}

export default Menu;

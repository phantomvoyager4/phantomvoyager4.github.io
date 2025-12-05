// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

const CTAButton = ({
  href,
  children,
  variant = "primary",
  size = "medium",
  external = false,
  onClick,
  className = "",
  icon,
  iconPosition = "left",
  disabled = false,
  ...props
}) => {
  const { palette } = useTheme();

  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return {
          backgroundColor: palette.icon,
          color: palette.headerBg,
          borderColor: palette.icon,
        };
      case "secondary":
        return {
          backgroundColor: "transparent",
          color: palette.icon,
          borderColor: palette.icon,
        };
      case "outline":
        return {
          backgroundColor: "transparent",
          color: palette.headerText,
          borderColor: palette.cardStroke,
        };
      case "ghost":
        return {
          backgroundColor: "transparent",
          color: palette.headerText,
          borderColor: "transparent",
        };
      default:
        return {
          backgroundColor: palette.icon,
          color: palette.headerBg,
          borderColor: palette.icon,
        };
    }
  };

  const getHoverStyles = () => {
    switch (variant) {
      case "primary":
        return {
          backgroundColor: `${palette.icon}dd`,
          color: palette.headerBg,
        };
      case "secondary":
        return {
          backgroundColor: palette.icon,
          color: palette.headerBg,
        };
      case "outline":
        return {
          backgroundColor: `${palette.cardStroke}20`,
          color: palette.headerText,
        };
      case "ghost":
        return {
          backgroundColor: `${palette.headerText}10`,
          color: palette.headerText,
        };
      default:
        return {
          backgroundColor: `${palette.icon}dd`,
          color: palette.headerBg,
        };
    }
  };

  const baseClasses = `
    inline-flex items-center justify-center font-InriaSerif font-medium
    rounded-lg border-2 transition-all duration-200 cursor-pointer
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${sizeClasses[size]} ${className}
  `;

  const buttonContent = (
    <>
      {icon && iconPosition === "left" && (
        <span className="mr-2 flex-shrink-0">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="ml-2 flex-shrink-0">{icon}</span>
      )}
      {external && (
        <svg
          className="ml-2 w-4 h-4 flex-shrink-0"
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
      )}
    </>
  );

  const motionProps = {
    className: baseClasses,
    style: getVariantStyles(),
    whileHover: disabled ? {} : { ...getHoverStyles(), scale: 1.05 },
    whileTap: disabled ? {} : { scale: 0.95 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
    disabled,
    ...props,
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={onClick}
        {...motionProps}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} {...motionProps}>
      {buttonContent}
    </motion.button>
  );
};

// Specialized CTA button variants
export const LinktreeCTA = ({ className = "", ...props }) => {
  const linktreeUrl =
    import.meta.env.VITE_LINKTREE_URL || "https://linktr.ee/kashiami";

  return (
    <CTAButton
      href={linktreeUrl}
      variant="primary"
      external
      size="large"
      className={className}
      icon={
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
      }
      {...props}
    >
      Listen Now
    </CTAButton>
  );
};

export const ContactCTA = ({ className = "", ...props }) => {
  const contactEmail =
    import.meta.env.VITE_CONTACT_EMAIL || "obywatelnumer04230@gmail.com";

  return (
    <CTAButton
      href={`mailto:${contactEmail}`}
      variant="secondary"
      external
      className={className}
      icon={
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
      }
      {...props}
    >
      Contact
    </CTAButton>
  );
};

export const MusicCTA = ({ platform, href, children, ...props }) => {
  const getPlatformIcon = (platform) => {
    switch (platform?.toLowerCase()) {
      case "spotify":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.42.179-.78.721-.84 4.561-1.021 8.52-.6 11.64 1.32.42.18.479.78.061 1.081zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.48.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
        );
      case "apple":
      case "applemusic":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C20.627.33 19.777.006 18.902.006 18.168.006 17.45.24 16.774.24c-.65 0-1.287-.24-1.998-.24-.738 0-1.482.317-2.097.317-.656 0-1.369-.317-2.063-.317-.55 0-1.167.317-1.692.317-.317 0-.65-.317-.998-.317-.317 0-.65.317-.982.317C6.57.317 5.924 0 5.267 0c-.55 0-1.167.317-1.692.317-.317 0-.65-.317-.998-.317C1.95 0 1.297.317.641.317c-.55 0-1.097.24-1.692.24C-.37.557-.37.875-.37 1.233v20.3c0 1.31.24 2.19 1.692 2.19.317 0 .65-.24.998-.24.55 0 1.097.24 1.692.24.317 0 .65-.24.982-.24.317 0 .65.24.998.24.55 0 1.097-.24 1.692-.24.317 0 .656.24.998.24.55 0 1.097-.24 1.692-.24.738 0 1.482.24 2.097.24.656 0 1.369-.24 2.063-.24.55 0 1.167.24 1.692.24.317 0 .65-.24.998-.24.317 0 .65.24.982.24.656 0 1.369-.24 2.063-.24.725 0 1.407.24 2.18.24 1.118 0 1.863-1.733 2.18-3.043.175-.72.24-1.452.24-2.19V6.124zm-7.68 1.364c.982 1.462 1.692 3.549 1.692 5.533 0 4.58-2.847 6.776-6.413 6.776-1.297 0-2.847-.24-4.144-.24-1.297 0-2.847.24-4.144.24-3.566 0-6.413-2.196-6.413-6.776 0-1.984.71-4.071 1.692-5.533 1.5-2.263 3.85-3.662 6.413-3.662 1.297 0 2.847.24 4.144.24 1.297 0 2.847-.24 4.144-.24 2.563 0 4.913 1.399 6.413 3.662z" />
          </svg>
        );
      case "youtube":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        );
      default:
        return (
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
              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
            />
          </svg>
        );
    }
  };

  return (
    <CTAButton
      href={href}
      variant="outline"
      external
      icon={getPlatformIcon(platform)}
      {...props}
    >
      {children}
    </CTAButton>
  );
};

export default CTAButton;

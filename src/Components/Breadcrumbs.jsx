import { useLocation, Link } from "react-router-dom";

function Breadcrumbs({ palette }) {
  const location = useLocation();
  
  // Parse pathname normally now that we're using BrowserRouter
  const pathnames = location.pathname
    .split("/")
    .filter((x) => x);

  // Don't show breadcrumbs on home page
  if (pathnames.length === 0) {
    return null;
  }

  const breadcrumbMap = {
    about: "About Me",
    stats: "Statistics",
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "88px",
        left: "0",
        zIndex: "30",
        display: "block",
        width: "auto",
        padding: "4px 16px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px", maxWidth: "90rem", margin: "0 auto", color: palette.cardText }}>
        <Link
          to="/"
          style={{ color: palette.cardText, textDecoration: "none", fontFamily: "InriaSerif", fontSize: "1rem" }}
        >
          Home
        </Link>
        {pathnames.map((value, index) => {
          const href = `/${pathnames.slice(0, index + 1).join("/")}`;
          const label = breadcrumbMap[value] || value;
          const isLast = index === pathnames.length - 1;

          return (
            <div key={href} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: palette.cardText, opacity: 0.5, fontSize: "1rem" }}>/</span>
              {isLast ? (
                <span style={{ color: palette.cardText, opacity: 0.7, fontFamily: "InriaSerif", fontSize: "1rem" }}>
                  {label}
                </span>
              ) : (
                <Link
                  to={href}
                  style={{ color: palette.cardText, textDecoration: "none", fontFamily: "InriaSerif", fontSize: "1rem" }}
                >
                  {label}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Breadcrumbs;

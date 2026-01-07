import { useLocation, Link } from "react-router-dom";

function Breadcrumbs({ palette }) {
  const location = useLocation();
  
  const pathnames = location.pathname
    .split("/")
    .filter((x) => x);

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
        top: window.innerWidth < 640 ? "56px" : "88px",
        left: "0",
        zIndex: "30",
        display: "block",
        width: "auto",
        padding: window.innerWidth < 640 ? "2px 12px" : "4px 16px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: window.innerWidth < 640 ? "4px" : "8px", maxWidth: "90rem", margin: "0 auto", color: palette.cardText }}>
        <Link
          to="/"
          style={{ color: palette.cardText, textDecoration: "none", fontFamily: "InriaSerif", fontSize: window.innerWidth < 640 ? "0.75rem" : "1rem" }}
        >
          Home
        </Link>
        {pathnames.map((value, index) => {
          const href = `/${pathnames.slice(0, index + 1).join("/")}`;
          const label = breadcrumbMap[value] || value;
          const isLast = index === pathnames.length - 1;

          return (
            <div key={href} style={{ display: "flex", alignItems: "center", gap: window.innerWidth < 640 ? "4px" : "8px" }}>
              <span style={{ color: palette.cardText, opacity: 0.5, fontSize: window.innerWidth < 640 ? "0.75rem" : "1rem" }}>/</span>
              {isLast ? (
                <span style={{ color: palette.cardText, opacity: 0.7, fontFamily: "InriaSerif", fontSize: window.innerWidth < 640 ? "0.75rem" : "1rem" }}>
                  {label}
                </span>
              ) : (
                <Link
                  to={href}
                  style={{ color: palette.cardText, textDecoration: "none", fontFamily: "InriaSerif", fontSize: window.innerWidth < 640 ? "0.75rem" : "1rem" }}
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

import { Col } from "react-bootstrap";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { theme } from "../theme";
// import "./ProjectCard.css";
export const ProjectCard = ({ title, description, image, tag, gradient, liveUrl, codeUrl }) => {
  return (
    <Col xs={12} sm={6} lg={4} className="mb-4">
      <div
        style={{
          background: theme.colors.surface,
          borderRadius: theme.radius.md,
          overflow: "hidden",
          border: `1px solid ${theme.colors.border}`,
          height: "100%",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow = theme.shadow.cardHover;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >

{/* <div
  style={{
    position: "relative",
    aspectRatio: "16/10",
    overflow: "hidden",
  }}
>
  {image ? (
    <img
      src={image}
      alt={title}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        display: "block",
         background: "#fff",
      }}
    />
  ) : (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: gradient,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontFamily: theme.fonts.display,
          fontWeight: 700,
          color: "rgba(255,255,255,0.9)",
          fontSize: "1.3rem",
        }}
      >
        {title.slice(0, 2).toUpperCase()}
      </span>
    </div>
  )}

  {tag && (
    <span
      style={{
        position: "absolute",
        top: "14px",
        left: "14px",
        fontFamily: theme.fonts.mono,
        fontSize: "0.7rem",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        background: "rgba(11,18,32,0.75)",
        color: "#fff",
        padding: "5px 10px",
        borderRadius: "999px",
      }}
    >
      {tag}
    </span>
  )}
</div> */}

<div className="project-preview">
  {image ? (
    <img
      src={image}
          loading="lazy"
      alt={title}
      className="project-preview-image"
    />
  ) : (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: gradient,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontFamily: theme.fonts.display,
          fontWeight: 700,
          color: "#fff",
          fontSize: "1.3rem",
        }}
      >
        {title.slice(0, 2).toUpperCase()}
      </span>
    </div>
  )}

  {tag && (
    <span
      style={{
        position: "absolute",
        top: "14px",
        left: "14px",
        fontFamily: theme.fonts.mono,
        fontSize: "0.7rem",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        background: "rgba(11,18,32,0.75)",
        color: "#fff",
        padding: "5px 10px",
        borderRadius: "999px",
      }}
    >
      {tag}
    </span>
  )}
</div>
        <div style={{ padding: "22px" }}>
          <h4
            style={{
              fontFamily: theme.fonts.display,
              fontWeight: 700,
              fontSize: "1.1rem",
              color: theme.colors.ink,
              marginBottom: "10px",
            }}
          >
            {title}
          </h4>
          <p style={{ fontFamily: theme.fonts.body, color: theme.colors.muted, fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "16px" }}>
            {description}
          </p>

          <div className="d-flex gap-3">
            <a href={liveUrl || "#"} target="_blank" rel="noreferrer" style={{ color: theme.colors.accent, display: "flex", alignItems: "center", gap: "6px", fontFamily: theme.fonts.body, fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}>
              <FaExternalLinkAlt size={12} /> Live
            </a>
            <a href={codeUrl || "#"} target="_blank" rel="noreferrer" style={{ color: theme.colors.muted, display: "flex", alignItems: "center", gap: "6px", fontFamily: theme.fonts.body, fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}>
              <FaGithub size={14} /> Code
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};

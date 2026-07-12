import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import { theme, eyebrowStyle, sectionHeadingStyle } from "../theme";
import graduationImg from "../asset/graduation pic.png";

const EDUCATION = [
  {
    degree: "BS Computer Science / Information Technology",
    place: "University of Sindh",
    period: "2020 — 2024",
    detail: "Web Development, Database Systems, Algorithms & Data Structures",
  },
];

const EducationCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: theme.colors.surface,
        border: `1px solid ${hovered ? theme.colors.accent : theme.colors.border}`,
        borderRadius: theme.radius.md,
        padding: "30px 32px",
        boxShadow: hovered ? theme.shadow.cardHover : theme.shadow.card,
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
      }}
    >
      <Row className="align-items-center g-4">
        {/* Image — left side, inside the same card. Fixed-ratio wrapper with
            overflow hidden clips the zoom so it never breaks the circle shape,
            and it never collapses on mobile since aspect-ratio is explicit. */}
        <Col xs={12} md={4}>
          <div
            style={{
              width: "100%",
              maxWidth: "180px",
              aspectRatio: "1 / 1",
              margin: "0 auto",
              borderRadius: "50%",
              overflow: "hidden",
              border: `1px solid ${theme.colors.accent}`,
              boxShadow: theme.shadow.card,
            }}
          >
            <img
              src={graduationImg}
              alt="Graduation"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transform: hovered ? "scale(1.12)" : "scale(1)",
                transition: "transform 0.4s ease",
              }}
            />
          </div>
        </Col>

        <Col xs={12} md={8}>
          <div className="d-flex align-items-start gap-3 mb-3">
            <span
              style={{
                width: "46px",
                height: "46px",
                minWidth: "46px",
                borderRadius: "50%",
                background: theme.colors.accentSoft,
                color: theme.colors.accentDark,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background-color 0.25s ease, color 0.25s ease",
                ...(hovered && { background: theme.colors.accent, color: "#fff" }),
              }}
            >
              <FaGraduationCap size={20} />
            </span>
            <div>
              <h3
                style={{
                  fontFamily: theme.fonts.display,
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  color: theme.colors.ink,
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                {item.degree}
              </h3>
              <div className="d-flex align-items-center flex-wrap gap-2 mt-1">
                <div className="d-flex align-items-center gap-1">
                  <FaMapMarkerAlt size={12} color={theme.colors.muted} />
                  <span style={{ fontFamily: theme.fonts.body, color: theme.colors.muted, fontSize: "0.9rem" }}>
                    {item.place}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: theme.fonts.mono,
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: theme.colors.accentDark,
                    background: theme.colors.accentSoft,
                    padding: "6px 14px",
                    borderRadius: "999px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.period}
                </span>
              </div>
            </div>
          </div>

          <div style={{ height: "1px", background: theme.colors.border, margin: "18px 0" }} />

          <div className="d-flex flex-wrap gap-2">
            {item.detail.split(",").map((course) => (
              <span
                key={course}
                style={{
                  fontFamily: theme.fonts.body,
                  fontSize: "0.82rem",
                  color: theme.colors.muted,
                  background: theme.colors.paper,
                  border: `1px solid ${theme.colors.border}`,
                  padding: "6px 14px",
                  borderRadius: "999px",
                }}
              >
                {course.trim()}
              </span>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export const Education = () => {
  return (
    <section id="education" style={{ background: theme.colors.paper, padding: "90px 0" }}>
      <Container style={{ maxWidth: theme.maxWidth }}>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <div className="text-center mb-5">
                <span style={eyebrowStyle}>BACKGROUND</span>
                <h2
                  style={{
                    ...sectionHeadingStyle,
                    fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                    color: theme.colors.ink,
                    marginTop: "10px",
                  }}
                >
                  Education
                </h2>
              </div>

              <Row className="justify-content-center">
                <Col xs={12} lg={9}>
                  {EDUCATION.map((item) => (
                    <EducationCard key={item.degree} item={item} />
                  ))}
                </Col>
              </Row>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};

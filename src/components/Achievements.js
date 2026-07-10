import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { theme, eyebrowStyle, sectionHeadingStyle } from "../theme";

// EDIT ME: add your real achievements, awards, or certifications
const ACHIEVEMENTS = [
  { icon: "🏆", title: "Award for Outstanding Contribution in Academics", year: "2023" },
  { icon: "🚀", title: "Shipped a funded final-year project to production", year: "2024" },
  { icon: "📜", title: "Completed an advanced React certification", year: "2025" },
];

export const Achievements = () => {
  return (
    <section id="achievements" style={{ background: theme.colors.ink, padding: "90px 0" }}>
      <Container style={{ maxWidth: theme.maxWidth }}>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <div className="text-center mb-5">
                <span style={{ ...eyebrowStyle, color: theme.colors.accent }}>MILESTONES</span>
                <h2
                  style={{
                    ...sectionHeadingStyle,
                    fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                    color: "#fff",
                    marginTop: "10px",
                  }}
                >
                  Achievements
                </h2>
              </div>

              <Row className="g-4 justify-content-center">
                {ACHIEVEMENTS.map((item) => (
                  <Col xs={12} md={6} lg={4} key={item.title}>
                    <div
                      style={{
                        background: theme.colors.inkSoft,
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: theme.radius.md,
                        padding: "28px",
                        height: "100%",
                      }}
                    >
                      <div style={{ fontSize: "1.8rem", marginBottom: "12px" }}>{item.icon}</div>
                      <h3
                        style={{
                          fontFamily: theme.fonts.display,
                          fontWeight: 600,
                          fontSize: "1.05rem",
                          color: "#fff",
                          lineHeight: 1.5,
                          marginBottom: "6px",
                        }}
                      >
                        {item.title}
                      </h3>
                      <span style={{ fontFamily: theme.fonts.mono, fontSize: "0.8rem", color: theme.colors.accent }}>
                        {item.year}
                      </span>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};

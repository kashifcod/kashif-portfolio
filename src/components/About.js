import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { theme, eyebrowStyle, sectionHeadingStyle } from "../theme";

// EDIT ME: update these numbers to reflect your real experience
const STATS = [
  { value: "1+", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "15+", label: "Happy Clients" },
];

export const About = () => {
  return (
    <section id="about" style={{ background: theme.colors.surface, padding: "90px 0" }}>
      <Container style={{ maxWidth: theme.maxWidth }}>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <Row className="align-items-center g-5">
                <Col xs={12} md={6}>
                  <span style={eyebrowStyle}>ABOUT ME</span>
                  <h2
                    style={{
                      ...sectionHeadingStyle,
                      fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                      color: theme.colors.ink,
                      margin: "10px 0 18px",
                    }}
                  >
                    A little about my work
                  </h2>
                  <p style={{ fontFamily: theme.fonts.body, color: theme.colors.muted, fontSize: "1rem", lineHeight: 1.75 }}>
                    {/* EDIT ME: replace with your real bio */}
                    Shopify & Frontend Developer with hands-on experience building responsive e-commerce websites using Shopify, React.js, JavaScript, Liquid, HTML, and CSS. Skilled in converting Figma designs into high-performance web applications, developing custom Shopify sections, integrating APIs, and optimizing user experience.

                  </p>
                  <p style={{ fontFamily: theme.fonts.body, color: theme.colors.muted, fontSize: "1rem", lineHeight: 1.75 }}>
                    Outside of client work, I like exploring new frontend
                    tools, contributing to small open-source projects, and
                    refining my design eye.
                  </p>
               
                </Col>

                <Col xs={12} md={6}>
                  <Row className="g-3">
                    {STATS.map((stat) => (
                      <Col xs={4} key={stat.label}>
                        <div
                          style={{
                            background: theme.colors.paper,
                            border: `1px solid ${theme.colors.border}`,
                            borderRadius: theme.radius.md,
                            padding: "26px 12px",
                            textAlign: "center",
                          }}
                        >
                          <div
                            style={{
                              fontFamily: theme.fonts.display,
                              fontWeight: 700,
                              fontSize: "1.8rem",
                              color: theme.colors.accent,
                            }}
                          >
                            {stat.value}
                          </div>
                          <div
                            style={{
                              fontFamily: theme.fonts.body,
                              fontSize: "0.82rem",
                              color: theme.colors.muted,
                              marginTop: "6px",
                            }}
                          >
                            {stat.label}
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};

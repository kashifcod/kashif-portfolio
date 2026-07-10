import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { theme, eyebrowStyle } from "../theme";
import Resume from "../asset/KASHIF_ALI.pdf";
const ROLES = ["Frontend Developer", "Shopify Developer", "Wordpress Developer"];

export const Banner = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = ROLES[roleIndex];
    const speed = isDeleting ? 45 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = fullText.substring(0, text.length + 1);
        setText(next);
        if (next === fullText) setTimeout(() => setIsDeleting(true), 1200);
      } else {
        const next = fullText.substring(0, text.length - 1);
        setText(next);
        if (next === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      style={{
        background: `linear-gradient(180deg, ${theme.colors.paper} 0%, #FFFFFF 100%)`,
        paddingTop: "150px",
        paddingBottom: "90px",
      }}
    >
      <Container style={{ maxWidth: theme.maxWidth }}>
        <Row className="align-items-center">
          <Col xs={12} md={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span style={eyebrowStyle}>PORTFOLIO / 2026</span>

                  <h1
                    style={{
                      fontFamily: theme.fonts.display,
                      fontWeight: 700,
                      fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
                      color: theme.colors.ink,
                      letterSpacing: "-0.03em",
                      marginTop: "14px",
                      marginBottom: "18px",
                    }}
                  >
                    Hi, I'm Kashif Ali.
                  </h1>

                  <div
                    style={{
                      fontFamily: theme.fonts.mono,
                      fontSize: "1.05rem",
                      background: theme.colors.ink,
                      color: "#D7FFEF",
                      borderRadius: theme.radius.sm,
                      padding: "14px 18px",
                      display: "inline-flex",
                      alignItems: "center",
                      marginBottom: "24px",
                      maxWidth: "100%",
                    }}
                  >
                    <span style={{ color: "#6B7A99" }}>const&nbsp;</span>
                    <span style={{ color: "#8FD6FF" }}>role&nbsp;</span>
                    <span style={{ color: "#6B7A99" }}>=&nbsp;</span>
                    <span style={{ color: theme.colors.accent }}>"{text}</span>
                    <span
                      style={{
                        display: "inline-block",
                        width: "2px",
                        height: "1.05rem",
                        background: theme.colors.accent,
                        marginLeft: "2px",
                        animation: "blink 0.9s step-end infinite",
                      }}
                    />
                    <span style={{ color: theme.colors.accent }}>"</span>
                    <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
                  </div>

                  <p
                    style={{
                      fontFamily: theme.fonts.body,
                      color: theme.colors.muted,
                      fontSize: "1.05rem",
                      lineHeight: 1.7,
                      maxWidth: "560px",
                      marginBottom: "32px",
                    }}
                  >
                    Building Shopify Stores That Convert Visitors into Customers. <br />
                    Clean Code. Responsive Design. Better User Experience.
                  </p>

                  <div className="d-flex flex-wrap gap-3">
                    <a href="#projects" style={{ textDecoration: "none" }}>
                      <button
                        style={{
                          fontFamily: theme.fonts.body,
                          fontWeight: 600,
                          fontSize: "0.95rem",
                          color: "#fff",
                          background: theme.colors.accent,
                          border: "1px solid black",
                          borderRadius: theme.radius.sm,
                          padding: "14px 28px",
                          boxShadow: theme.shadow.card,
                        }}
                      >
                        View My Work
                      </button>
                    </a>
                   <a
                    href={Resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                      <button
                        style={{
                          fontFamily: theme.fonts.body,
                          fontWeight: 600,
                          fontSize: "0.95rem",
                          color: theme.colors.ink,
                          background: "transparent",
                          border: `1px solid ${theme.colors.border}`,
                          borderRadius: theme.radius.sm,
                          padding: "14px 28px",
                        }}
                      >
                        Download CV
                      </button>
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={5} className="mt-5 mt-md-0">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <div
                    style={{
                      background: theme.colors.surface,
                      borderRadius: theme.radius.lg,
                      boxShadow: theme.shadow.card,
                      overflow: "hidden",
                      border: `1px solid ${theme.colors.border}`,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "6px",
                        padding: "12px 16px",
                        background: theme.colors.paper,
                        borderBottom: `1px solid ${theme.colors.border}`,
                      }}
                    >
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF6159" }} />
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFC02E" }} />
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }} />
                    </div>
                    <div style={{ padding: "24px", fontFamily: theme.fonts.mono, fontSize: "0.85rem" }}>
                      <div style={{ color: theme.colors.muted, marginBottom: "10px" }}>
                        <span style={{ color: theme.colors.accent }}>{"function"}</span> greet() {"{"}
                      </div>
                      <div style={{ color: theme.colors.ink, marginLeft: "16px", marginBottom: "10px" }}>
                        return <span style={{ color: theme.colors.accentDark }}>"Welcome to my portfolio"</span>;
                      </div>
                      <div style={{ color: theme.colors.muted, marginBottom: "18px" }}>{"}"}</div>
                      <div style={{ height: "10px", background: theme.colors.paper, borderRadius: "6px", marginBottom: "8px", width: "85%" }} />
                      <div style={{ height: "10px", background: theme.colors.paper, borderRadius: "6px", marginBottom: "8px", width: "70%" }} />
                      <div style={{ height: "10px", background: theme.colors.accentSoft, borderRadius: "6px", width: "45%" }} />
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

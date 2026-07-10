import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  // SiNodedotjs,
  SiGit,
  SiBootstrap,
    SiWordpress,
  SiShopify,
   SiNetlify,
  SiVercel,
  SiClaude,
  // SiMongodb,
} from "react-icons/si";
import { theme, eyebrowStyle, sectionHeadingStyle } from "../theme";

const SKILLS = [
  { name: "HTML", icon: SiHtml5, color: "#E44D26" },
    { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#D7B221" },
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  // { name: "Node.js", icon: SiNodedotjs, color: "#3C873A" },
    { name: "WordPress", icon: SiWordpress, color: "#21759B" },
    { name: "Shopify", icon: SiShopify, color: "#7AB55C" },
      { name: "Git", icon: SiGit, color: "#F1502F" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
  { name: "Vercel", icon: SiVercel, color: "#000000" },
  { name: "Claude AI", icon: SiClaude, color: "#D97706" },
  // { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

export const Skills = () => {
  return (
    <section id="skills" style={{ background: theme.colors.paper, padding: "90px 0" }}>
      <Container style={{ maxWidth: theme.maxWidth }}>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <div className="text-center mb-5">
                <span style={eyebrowStyle}>WHAT I WORK WITH</span>
                <h2
                  style={{
                    ...sectionHeadingStyle,
                    fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                    color: theme.colors.ink,
                    marginTop: "10px",
                  }}
                >
                  Technical Skills
                </h2>
              </div>

              <Row className="g-4 justify-content-center">
                {SKILLS.map(({ name, icon: Icon, color }) => (
                  <Col xs={6} sm={4} md={3} lg={2} key={name}>
                    <div
                      style={{
                        background: theme.colors.surface,
                        borderRadius: theme.radius.md,
                        border: `1px solid ${theme.colors.border}`,
                        padding: "28px 12px",
                        textAlign: "center",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-6px)";
                        e.currentTarget.style.boxShadow = theme.shadow.cardHover;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <Icon size={34} color={color} />
                      <h5
                        style={{
                          fontFamily: theme.fonts.body,
                          fontWeight: 600,
                          fontSize: "0.9rem",
                          color: theme.colors.ink,
                          marginTop: "14px",
                          marginBottom: 0,
                        }}
                      >
                        {name}
                      </h5>
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

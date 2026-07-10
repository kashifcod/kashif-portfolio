
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { theme } from "../theme";
 
const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "testimonials", label: "Testimonials" },
  { id: "connect", label: "Contact" },
];
 
// EDIT ME: replace with your own social links
const SOCIALS = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/kashif-ali-26aba3205/", brand: "#0A66C2", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/kashifcod", brand: "#FFFFFF", label: "GitHub" },
  { icon: FaWhatsapp, href: "https://wa.me/00000000000", brand: "#25D366", label: "WhatsApp" },
];
 
const FooterNavLink = ({ id, label }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={`#${id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: theme.fonts.body,
        fontSize: "0.9rem",
        color: hovered ? theme.colors.accent : "rgba(255,255,255,0.65)",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        marginBottom: "10px",
        transform: hovered ? "translateX(4px)" : "translateX(0)",
        transition: "color 0.2s ease, transform 0.2s ease",
      }}
    >
      <span
        style={{
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          background: hovered ? theme.colors.accent : "rgba(255,255,255,0.3)",
          transition: "background-color 0.2s ease",
        }}
      />
      {label}
    </a>
  );
};
 
const SocialIcon = ({ icon: Icon, href, brand, label }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: hovered ? brand : "rgba(255,255,255,0.06)",
        border: `1px solid ${hovered ? brand : "rgba(255,255,255,0.12)"}`,
        color: hovered ? (brand === "#FFFFFF" ? theme.colors.ink : "#fff") : "rgba(255,255,255,0.75)",
        transform: hovered ? "scale(1.12) translateY(-2px)" : "scale(1)",
        boxShadow: hovered ? `0 8px 18px ${brand}55` : "none",
        transition: "all 0.25s ease",
      }}
    >
      <Icon size={16} />
    </a>
  );
};
 
export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
 
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire this up to your real newsletter/ESP endpoint.
    setSubscribed(true);
    setEmail("");
  };
 
  return (
    <footer
      style={{
        background: theme.colors.ink,
        borderTop: `1px solid rgba(15,157,116,0.25)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* subtle decorative glow */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-80px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.colors.accent}22 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />
 
      <Container style={{ maxWidth: theme.maxWidth, padding: "70px 15px 30px", position: "relative" }}>
        <Row className="g-4">
          <Col xs={12} md={4}>
            <h3
              style={{
                fontFamily: theme.fonts.display,
                fontWeight: 700,
                fontSize: "1.3rem",
                color: "#fff",
                marginBottom: "12px",
              }}
            >
              KASHIF ALI
            </h3>
            <p style={{ fontFamily: theme.fonts.body, color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", maxWidth: "300px" }}>
              Frontend Shopify Developer building fast, responsive, and accessible web experiences.
            </p>
            <div className="d-flex gap-3 mt-3">
              {SOCIALS.map((social, i) => (
                <SocialIcon key={i} {...social} />
              ))}
            </div>
          </Col>
 
          <Col xs={6} md={3}>
            <h6
              style={{
                fontFamily: theme.fonts.mono,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: theme.colors.accent,
                marginBottom: "18px",
              }}
            >
              Navigate
            </h6>
            {NAV_LINKS.map((link) => (
              <FooterNavLink key={link.id} {...link} />
            ))}
          </Col>
 
          <Col xs={12} md={5}>
            <h6
              style={{
                fontFamily: theme.fonts.mono,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: theme.colors.accent,
                marginBottom: "18px",
              }}
            >
              Stay Updated
            </h6>
            <p style={{ fontFamily: theme.fonts.body, color: "rgba(255,255,255,0.55)", fontSize: "0.88rem", marginBottom: "16px" }}>
              Occasional notes on new projects, no spam.
            </p>
 
            {subscribed ? (
              <p style={{ fontFamily: theme.fonts.body, color: "#D7FFEF", fontSize: "0.9rem" }}>
                ✅ Thanks — you're on the list.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="d-flex" style={{ gap: "10px", flexWrap: "wrap" }}>
                <input
                  type="email"
                  required
                  value={email}
                  placeholder="you@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: "1 1 200px",
                    background: theme.colors.inkSoft,
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: theme.radius.sm,
                    padding: "12px 16px",
                    color: "#fff",
                    fontFamily: theme.fonts.body,
                    fontSize: "0.9rem",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    fontFamily: theme.fonts.body,
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    color: "#fff",
                    background: theme.colors.accent,
                    border: "none",
                    borderRadius: theme.radius.sm,
                    padding: "12px 22px",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(15,157,116,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Subscribe
                </button>
              </form>
            )}
          </Col>
        </Row>
 
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            marginTop: "50px",
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <span style={{ fontFamily: theme.fonts.body, color: "rgba(255,255,255,0.45)", fontSize: "0.82rem" }}>
            © {new Date().getFullYear()} Kashif Ali. All rights reserved.
          </span>
          <span style={{ fontFamily: theme.fonts.mono, color: "rgba(255,255,255,0.35)", fontSize: "0.78rem" }}>
            Built with React & Bootstrap
          </span>
        </div>
      </Container>
    </footer>
  );
};
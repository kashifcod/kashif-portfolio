import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
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
];
 
// EDIT ME: replace with your own social links
const SOCIALS = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/kashif-ali-26aba3205/", brand: "#0A66C2", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/kashifcod", brand: "#181717", label: "GitHub" },
  { icon: FaWhatsapp, href: "https://wa.me/03147179170", brand: "#25D366", label: "WhatsApp" },
];
 
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
 
  return (
    <Navbar
      expand="md"
      fixed="top"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "saturate(180%) blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(11,18,32,0.06)" : "none",
        transition: "all 0.3s ease",
        padding: "14px 0",
      }}
    >
      <Container style={{ maxWidth: theme.maxWidth }}>
        <Navbar.Brand
          href="#home"
          className="d-flex align-items-center gap-2"
          style={{ transition: "transform 0.2s ease" }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <span
            style={{
              width: "38px",
              height: "38px",
              borderRadius: theme.radius.sm,
              background: theme.colors.ink,
              color: theme.colors.accent,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: theme.fonts.mono,
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            K-A
          </span>
          <span
            style={{
              fontFamily: theme.fonts.display,
              fontWeight: 700,
              fontSize: "1.05rem",
              color: theme.colors.ink,
            }}
          >
            KASHIF ALI
          </span>
        </Navbar.Brand>
 
        <Navbar.Toggle aria-controls="main-nav" style={{ border: "none", boxShadow: "none" }} />
 
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto d-flex align-items-center gap-1">
            {NAV_LINKS.map(({ id, label }) => {
              const isActive = activeLink === id;
              return (
                <Nav.Link
                  key={id}
                  href={`#${id}`}
                  onClick={() => setActiveLink(id)}
                  style={{
                    fontFamily: theme.fonts.body,
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    color: isActive ? theme.colors.accentDark : theme.colors.muted,
                    background: isActive ? theme.colors.accentSoft : "transparent",
                    padding: "8px 16px",
                    borderRadius: theme.radius.sm,
                    position: "relative",
                    transition: "color 0.2s ease, background-color 0.2s ease, transform 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = theme.colors.ink;
                      e.currentTarget.style.background = theme.colors.paper;
                    }
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = theme.colors.muted;
                      e.currentTarget.style.background = "transparent";
                    }
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {label}
                </Nav.Link>
              );
            })}
          </Nav>
 
          <div className="d-flex align-items-center gap-3 ms-md-4 mt-3 mt-md-0">
            <div className="d-flex align-items-center gap-3">
              {SOCIALS.map(({ icon: Icon, href, brand, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  style={{
                    color: theme.colors.muted,
                    display: "flex",
                    transition: "color 0.2s ease, transform 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = brand;
                    e.currentTarget.style.transform = "scale(1.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = theme.colors.muted;
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <Icon size={23} />
                </a>
              ))}
            </div>
 
            <a href="#connect" style={{ textDecoration: "none" }}>
              <button
                style={{
                  fontFamily: theme.fonts.body,
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: "#fff",
                  background: theme.colors.ink,
                  border: "none",
                  borderRadius: theme.radius.sm,
                  padding: "10px 20px",
                  whiteSpace: "nowrap",
                  boxShadow: "0 0 0 rgba(15,157,116,0)",
                  transition: "background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = theme.colors.accent;
                  e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(15,157,116,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = theme.colors.ink;
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 0 0 rgba(15,157,116,0)";
                }}
              >
                Let's Talk
              </button>
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
 
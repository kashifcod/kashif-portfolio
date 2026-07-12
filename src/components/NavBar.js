 import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
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
  { icon: FaWhatsapp, href: "https://wa.me/qr/EG3IQLDDGBFLL1", brand: "#25D366", label: "WhatsApp" },
];
 
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
 
  // close the mobile panel automatically if the viewport grows back to desktop size
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
 
  const handleLinkClick = (id) => {
    setActiveLink(id);
    setMobileOpen(false);
  };
 
  const isSolid = scrolled || mobileOpen;
 
  const desktopLinkStyle = (id) => ({
    fontFamily: theme.fonts.body,
    fontWeight: 500,
    fontSize: "0.95rem",
    color: activeLink === id ? theme.colors.accentDark : theme.colors.muted,
    background: activeLink === id ? theme.colors.accentSoft : "transparent",
    padding: "8px 16px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    transition: "color 0.2s ease, background-color 0.2s ease, transform 0.2s ease",
  });
 
  const mobileLinkStyle = (id) => ({
    fontFamily: theme.fonts.body,
    fontWeight: 600,
    fontSize: "1rem",
    color: activeLink === id ? theme.colors.accentDark : theme.colors.ink,
    background: activeLink === id ? theme.colors.accentSoft : "transparent",
    padding: "12px 16px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    display: "block",
  });
 
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1030,
        backgroundColor: isSolid ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: isSolid ? "saturate(180%) blur(12px)" : "none",
        boxShadow: isSolid ? "0 1px 0 rgba(11,18,32,0.06)" : "none",
        transition: "all 0.3s ease",
        padding: "14px 0",
      }}
    >
      <Container style={{ maxWidth: theme.maxWidth }}>
        <div className="d-flex align-items-center justify-content-between">
          {/* Brand */}
          <a
            href="#home"
            onClick={() => handleLinkClick("home")}
            className="d-flex align-items-center gap-2"
            style={{ textDecoration: "none", transition: "transform 0.2s ease" }}
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
          </a>
 
          {/* Desktop nav links */}
          <div className="d-none d-md-flex align-items-center gap-1">
            {NAV_LINKS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => handleLinkClick(id)}
                style={desktopLinkStyle(id)}
                onMouseEnter={(e) => {
                  if (activeLink !== id) {
                    e.currentTarget.style.color = theme.colors.ink;
                    e.currentTarget.style.background = theme.colors.paper;
                  }
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  if (activeLink !== id) {
                    e.currentTarget.style.color = theme.colors.muted;
                    e.currentTarget.style.background = "transparent";
                  }
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {label}
              </a>
            ))}
          </div>
 
          {/* Desktop socials + CTA */}
          <div className="d-none d-md-flex align-items-center gap-3 ms-4">
            <div className="d-flex align-items-center gap-3">
              {SOCIALS.map(({ icon: Icon, href, brand, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  style={{ color: theme.colors.muted, display: "flex", transition: "color 0.2s ease, transform 0.2s ease" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = brand;
                    e.currentTarget.style.transform = "scale(1.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = theme.colors.muted;
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
 
            <a href="#connect" onClick={() => handleLinkClick("connect")} style={{ textDecoration: "none" }}>
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
 
          {/* Mobile hamburger toggle */}
          <button
            className="d-md-none"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
            style={{
              background: "transparent",
              border: "none",
              color: theme.colors.ink,
              fontSize: "1.4rem",
              padding: "6px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
 
        {/* Mobile dropdown panel — always has a solid background so it's readable
            regardless of scroll position or what's behind it on the page */}
        {mobileOpen && (
          <div
            className="d-md-none animate__animated animate__fadeIn"
            style={{
              marginTop: "16px",
              background: theme.colors.surface,
              border: `1px solid ${theme.colors.border}`,
              borderRadius: theme.radius.md,
              boxShadow: theme.shadow.cardHover,
              padding: "18px",
            }}
          >
            <div className="d-flex flex-column gap-1">
              {NAV_LINKS.map(({ id, label }) => (
                <a key={id} href={`#${id}`} onClick={() => handleLinkClick(id)} style={mobileLinkStyle(id)}>
                  {label}
                </a>
              ))}
            </div>
 
            <div style={{ height: "1px", background: theme.colors.border, margin: "16px 0" }} />
 
            <div className="d-flex align-items-center justify-content-center gap-4 mb-3">
              {SOCIALS.map(({ icon: Icon, href, brand, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  style={{ color: theme.colors.muted, transition: "color 0.2s ease, transform 0.2s ease" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = brand;
                    e.currentTarget.style.transform = "scale(1.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = theme.colors.muted;
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
 
            <a href="#connect" onClick={() => handleLinkClick("connect")} style={{ textDecoration: "none" }}>
              <button
                style={{
                  fontFamily: theme.fonts.body,
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "#fff",
                  background: theme.colors.accent,
                  border: "none",
                  borderRadius: theme.radius.sm,
                  padding: "12px 20px",
                  width: "100%",
                }}
              >
                Let's Talk
              </button>
            </a>
          </div>
        )}
      </Container>
    </div>
  );
};

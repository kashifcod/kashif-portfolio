import { useState, useEffect, useCallback } from "react";
import { Container } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { FaBriefcase, FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from "react-icons/fa";
import { theme, eyebrowStyle, sectionHeadingStyle } from "../theme";
 
// EDIT ME: add/update your real work experience
const EXPERIENCE = [
  {
    company: "ASCRO Labs",
    location: "UAE",
    role: "Shopify Developer | Custom Section, Product Listing Expert",
    period: "02/03/2026 — Present",
    current: true,
    points: [
      "Customized themes with Liquid/HTML/CSS/JS, built dynamic custom sections, integrated apps, and optimized store performance and UX.",
      "Managed Shopify bulk product listings with variants, Metafields & Metaobjects.",
    ],
  },
  {
    company: "Divert Marketing",
    location: "UK, London, England",
    role: "Shopify Developer",
    period: "03/2026 — 04/2026",
    current: false,
    points: [
      "Customized themes with Liquid/HTML/CSS/JS, built dynamic custom sections, integrated apps, and optimized store performance and UX.",
    ],
  },
  {
    company: "One Stop BTK",
    location: "",
    role: "Shopify Developer",
    period: "03/2025 — 02/2026",
    current: false,
    points: [
      "Developed a Shopify e-commerce responsive platform using HTML, JavaScript, and Bootstrap.",
      "Configured Shopify apps like Upcharge for packaging fees.",
      "Ensured fast performance and a secure checkout experience.",
    ],
  },
  {
    company: "Ornesol Pvt Ltd",
    location: "",
    role: "Frontend Developer",
    period: "01/07/2024 — 28/02/2025",
    current: false,
    points: [
      "Built responsive web applications for an ERP system using React.js and Bootstrap.",
      "Collaborated to enhance UI/UX, integrated APIs, and optimized performance & security.",
    ],
  },
];
 
const getVisibleCount = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 576) return 1;
  if (window.innerWidth < 992) return 2;
  return 3;
};
 
const AUTOPLAY_MS = 4500;
 
export const Experience = () => {
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
 
  useEffect(() => {
    const onResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
 
  const total = EXPERIENCE.length;
 
  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % total);
  }, [total]);
 
  const prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + total) % total);
  };
 
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [next, isPaused]);
 
  const visibleItems = Array.from({ length: Math.min(visibleCount, total) }, (_, i) => {
    const itemIndex = (index + i) % total;
    return { ...EXPERIENCE[itemIndex], key: `${itemIndex}-${i}` };
  });
 
  const arrowButtonStyle = {
    width: "44px",
    height: "44px",
    minWidth: "44px",
    borderRadius: "50%",
    background: theme.colors.surface,
    border: `1px solid ${theme.colors.border}`,
    color: theme.colors.ink,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: theme.shadow.card,
    transition: "transform 0.15s ease, background-color 0.15s ease",
  };
 
  return (
    <section id="experience" style={{ background: theme.colors.paper, padding: "90px 0" }}>
      <Container style={{ maxWidth: theme.maxWidth }}>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <div className="text-center mb-5">
                <span style={eyebrowStyle}>WORK HISTORY</span>
                <h2
                  style={{
                    ...sectionHeadingStyle,
                    fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                    color: theme.colors.ink,
                    marginTop: "10px",
                  }}
                >
                  Experience
                </h2>
              </div>
 
              <div
                className="d-flex align-items-center gap-3"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <button
                  aria-label="Previous experience"
                  onClick={prev}
                  style={arrowButtonStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.background = theme.colors.surface === "#FFFFFF" ? "#F0F1F3" : theme.colors.surface)}
                  onMouseLeaveCapture={(e) => (e.currentTarget.style.background = theme.colors.surface)}
                >
                  <FaChevronLeft size={14} />
                </button>
 
                <div className="flex-grow-1 overflow-hidden">
                  <div className="d-flex gap-4 align-items-stretch">
                    {visibleItems.map((job) => (
                      <div
                        key={job.key}
                        style={{
                          flex: `0 0 ${100 / visibleItems.length}%`,
                          maxWidth: `${100 / visibleItems.length}%`,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            background: theme.colors.surface,
                            border: `1px solid ${theme.colors.border}`,
                            borderRadius: theme.radius.md,
                            padding: "28px",
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                            cursor: "default",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.boxShadow = theme.shadow.cardHover;
                            e.currentTarget.style.borderColor = theme.colors.accent;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "none";
                            e.currentTarget.style.borderColor = theme.colors.border;
                          }}
                        >
                          <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                            <span
                              style={{
                                width: "42px",
                                height: "42px",
                                minWidth: "42px",
                                borderRadius: "50%",
                                background: theme.colors.accentSoft,
                                color: theme.colors.accentDark,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <FaBriefcase size={16} />
                            </span>
 
                            {job.current && (
                              <span
                                style={{
                                  fontFamily: theme.fonts.mono,
                                  fontSize: "0.7rem",
                                  fontWeight: 600,
                                  color: theme.colors.accentDark,
                                  background: theme.colors.accentSoft,
                                  padding: "4px 10px",
                                  borderRadius: "999px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                ● CURRENT
                              </span>
                            )}
                          </div>
 
                          <h3
                            style={{
                              fontFamily: theme.fonts.display,
                              fontWeight: 700,
                              fontSize: "1.1rem",
                              color: theme.colors.ink,
                              margin: "0 0 2px",
                            }}
                          >
                            {job.company}
                          </h3>
 
                          {job.location && (
                            <div className="d-flex align-items-center gap-1 mb-2">
                              <FaMapMarkerAlt size={11} color={theme.colors.muted} />
                              <span style={{ fontFamily: theme.fonts.body, fontSize: "0.8rem", color: theme.colors.muted }}>
                                {job.location}
                              </span>
                            </div>
                          )}
 
                          <p
                            style={{
                              fontFamily: theme.fonts.body,
                              fontStyle: "italic",
                              fontSize: "0.9rem",
                              color: theme.colors.accentDark,
                              margin: "0 0 6px",
                            }}
                          >
                            {job.role}
                          </p>
 
                          <span
                            style={{
                              fontFamily: theme.fonts.mono,
                              fontSize: "0.75rem",
                              color: theme.colors.muted,
                              display: "block",
                              marginBottom: "14px",
                            }}
                          >
                            {job.period}
                          </span>
 
                          <ul style={{ paddingLeft: "18px", margin: 0, flexGrow: 1 }}>
                            {job.points.map((point, i) => (
                              <li
                                key={i}
                                style={{
                                  fontFamily: theme.fonts.body,
                                  fontSize: "0.85rem",
                                  color: theme.colors.muted,
                                  lineHeight: 1.6,
                                  marginBottom: "8px",
                                }}
                              >
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
 
                <button
                  aria-label="Next experience"
                  onClick={next}
                  style={arrowButtonStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#F0F1F3")}
                  onMouseLeaveCapture={(e) => (e.currentTarget.style.background = theme.colors.surface)}
                >
                  <FaChevronRight size={14} />
                </button>
              </div>
 
              <div className="d-flex justify-content-center gap-2 mt-4">
                {EXPERIENCE.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => setIndex(i)}
                    style={{
                      width: i === index ? "20px" : "8px",
                      height: "8px",
                      borderRadius: "999px",
                      background: i === index ? theme.colors.accent : theme.colors.border,
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};
 
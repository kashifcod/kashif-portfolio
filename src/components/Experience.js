import { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
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

const AUTOPLAY_MS = 3000;
const CARD_WIDTH = 300; // fixed card size — never resizes
const GAP = 24;

const getVisibleCount = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 576) return 1;
  if (window.innerWidth < 992) return 2;
  return 3;
};

export const Experience = () => {
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [index, setIndex] = useState(0); // logical slide index, keeps incrementing
  const [noTransition, setNoTransition] = useState(false);
  const [paused, setPaused] = useState(false);
  const total = EXPERIENCE.length;
  const resetTimer = useRef(null);

  useEffect(() => {
    const onResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // slide right-to-left, one card per tick
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => i + 1), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused]);

  // seamless loop: after sliding past the last real card, snap back invisibly
  useEffect(() => {
    if (index === total) {
      resetTimer.current = setTimeout(() => {
        setNoTransition(true);
        setIndex(0);
      }, 550); // matches transition duration below
    }
    return () => clearTimeout(resetTimer.current);
  }, [index, total]);

  useEffect(() => {
    if (noTransition) {
      const raf = requestAnimationFrame(() => setNoTransition(false));
      return () => cancelAnimationFrame(raf);
    }
  }, [noTransition]);

  // extra clones at the end so the track has something to slide into
  const track = [...EXPERIENCE, ...EXPERIENCE.slice(0, visibleCount)];
  const viewportWidth = visibleCount * CARD_WIDTH + (visibleCount - 1) * GAP;
  const offset = index * (CARD_WIDTH + GAP);
  const centerOffset = Math.floor(visibleCount / 2);
  const activeIndex = (index + centerOffset) % total;

  return (
    <section id="experience" style={{ background: theme.colors.paper, padding: "90px 0" }}>
      <Container style={{ maxWidth: theme.maxWidth }}>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <div className="text-center mb-5">
                <span style={eyebrowStyle}>WORK HISTORY</span>
                <h2 style={{ ...sectionHeadingStyle, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: theme.colors.ink, marginTop: "10px" }}>
                  Experience
                </h2>
              </div>

              <div
                style={{ width: viewportWidth, maxWidth: "100%", margin: "0 auto", overflow: "hidden" }}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <div
                  style={{
                    display: "flex",
                    gap: GAP,
                    transform: `translateX(-${offset}px)`,
                    transition: noTransition ? "none" : "transform 0.55s ease",
                  }}
                >
                  {track.map((job, i) => {
                    const isActive = i % total === activeIndex;
                    return (
                      <div
                        key={i}
                        style={{
                          flex: `0 0 ${CARD_WIDTH}px`,
                          width: CARD_WIDTH,
                          background: theme.colors.surface,
                          border: `1px solid ${isActive ? theme.colors.accent : theme.colors.border}`,
                          borderRadius: theme.radius.md,
                          padding: "28px",
                          display: "flex",
                          flexDirection: "column",
                          transition: "border-color 0.3s ease",
                        }}
                      >
                        <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                          <span style={{ width: 42, height: 42, borderRadius: "50%", background: theme.colors.accentSoft, color: theme.colors.accentDark, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <FaBriefcase size={20} />
                          </span>
                          {job.current && (
                            <span style={{ fontFamily: theme.fonts.mono, fontSize: "0.7rem", fontWeight: 600, color: theme.colors.accentDark, background: theme.colors.accentSoft, padding: "4px 10px", borderRadius: "999px", whiteSpace: "nowrap" }}>
                              ● CURRENT
                            </span>
                          )}
                        </div>

                        <h3 style={{ fontFamily: theme.fonts.display, fontWeight: 700, fontSize: "1.1rem", color: theme.colors.ink, margin: "0 0 2px" }}>
                          {job.company}
                        </h3>

                        {job.location && (
                          <div className="d-flex align-items-center gap-1 mb-2">
                            <FaMapMarkerAlt size={11} color={theme.colors.muted} />
                            <span style={{ fontFamily: theme.fonts.body, fontSize: "0.8rem", color: theme.colors.muted }}>{job.location}</span>
                          </div>
                        )}

                        <p style={{ fontFamily: theme.fonts.body, fontStyle: "italic", fontSize: "0.9rem", color: theme.colors.accentDark, margin: "0 0 6px" }}>
                          {job.role}
                        </p>

                        <span style={{ fontFamily: theme.fonts.mono, fontSize: "0.75rem", color: theme.colors.muted, display: "block", marginBottom: "14px" }}>
                          {job.period}
                        </span>

                        <ul style={{ paddingLeft: 18, margin: 0, flexGrow: 1 }}>
                          {job.points.map((point, i2) => (
                            <li key={i2} style={{ fontFamily: theme.fonts.body, fontSize: "0.85rem", color: theme.colors.muted, lineHeight: 1.6, marginBottom: 8 }}>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="d-flex justify-content-center gap-2 mt-4">
                {EXPERIENCE.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => setIndex((i - centerOffset + total) % total)}
                    style={{
                      width: i === activeIndex ? 20 : 8,
                      height: 8,
                      borderRadius: 999,
                      background: i === activeIndex ? theme.colors.accent : theme.colors.border,
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
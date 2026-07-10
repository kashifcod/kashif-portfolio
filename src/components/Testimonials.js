import { useState, useEffect, useCallback } from "react";
import { Container } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { theme, eyebrowStyle, sectionHeadingStyle } from "../theme";
 
const TESTIMONIALS = [
  {
    quote: "A pleasure to work with  clear communication and clean, reliable code every time.",
    name: "Alex Carter",
    role: "Product Manager",
  },
  {
    quote: "Turned our Figma designs into a pixel-perfect, fast React app ahead of schedule.",
    name: "Priya Nair",
    role: "Design Lead",
  },
  {
    quote: "Reliable, detail-oriented, and easy to collaborate with delivered exactly what we needed.",
    name: "Daniel Osei",
    role: "Engineering Manager",
  },
  {
    quote: "Great eye for UI polish and performance. Our site feels noticeably faster and cleaner now.",
    name: "Meera Shah",
    role: "Founder, Startup",
  },
];
 
const initials = (name) =>
  name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
 
// how many cards to show side-by-side based on viewport width
const getVisibleCount = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 576) return 1;
  if (window.innerWidth < 992) return 2;
  return 3;
};
 
const AUTOPLAY_MS = 4000;
 
export const Testimonials = () => {
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
 
  useEffect(() => {
    const onResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
 
  const total = TESTIMONIALS.length;
 
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
 
  // build the slice of cards to display, wrapping around the array
  const visibleItems = Array.from({ length: Math.min(visibleCount, total) }, (_, i) => {
    const itemIndex = (index + i) % total;
    return { ...TESTIMONIALS[itemIndex], key: `${itemIndex}-${i}` };
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
    <section id="testimonials" style={{ background: theme.colors.surface, padding: "90px 0" }}>
      <Container style={{ maxWidth: theme.maxWidth }}>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <div className="text-center mb-5">
                <span style={eyebrowStyle}>KIND WORDS</span>
                <h2
                  style={{
                    ...sectionHeadingStyle,
                    fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                    color: theme.colors.ink,
                    marginTop: "10px",
                  }}
                >
                  What People Say
                </h2>
              </div>
 
              <div
                className="d-flex align-items-center gap-3"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <button
                  aria-label="Previous testimonials"
                  onClick={prev}
                  style={arrowButtonStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.background = theme.colors.paper)}
                  onMouseLeaveCapture={(e) => (e.currentTarget.style.background = theme.colors.surface)}
                >
                  <FaChevronLeft size={14} />
                </button>
 
                <div className="flex-grow-1 overflow-hidden">
                  <div className="d-flex gap-4">
                    {visibleItems.map((t) => (
                      <div
                        key={t.key}
                        style={{
                          flex: `0 0 ${100 / visibleItems.length}%`,
                          maxWidth: `${100 / visibleItems.length}%`,
                        }}
                      >
                        <div
                          style={{
                            background: theme.colors.paper,
                            border: `1px solid ${theme.colors.border}`,
                            borderRadius: theme.radius.md,
                            padding: "30px",
                            height: "100%",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            cursor: "default",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.boxShadow = theme.shadow.cardHover;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        >
                          <span
                            style={{
                              fontFamily: theme.fonts.display,
                              fontSize: "2rem",
                              color: theme.colors.accent,
                              lineHeight: 1,
                            }}
                          >
                            "
                          </span>
                          <p
                            style={{
                              fontFamily: theme.fonts.body,
                              color: theme.colors.ink,
                              fontSize: "1rem",
                              lineHeight: 1.7,
                              margin: "8px 0 20px",
                            }}
                          >
                            {t.quote}
                          </p>
                          <div className="d-flex align-items-center gap-3">
                            <div
                              style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                                background: theme.colors.accentSoft,
                                color: theme.colors.accentDark,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontFamily: theme.fonts.mono,
                                fontWeight: 600,
                                fontSize: "0.85rem",
                              }}
                            >
                              {initials(t.name)}
                            </div>
                            <div>
                              <div style={{ fontFamily: theme.fonts.body, fontWeight: 600, fontSize: "0.9rem", color: theme.colors.ink }}>
                                {t.name}
                              </div>
                              <div style={{ fontFamily: theme.fonts.body, fontSize: "0.8rem", color: theme.colors.muted }}>
                                {t.role}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
 
                <button
                  aria-label="Next testimonials"
                  onClick={next}
                  style={arrowButtonStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.background = theme.colors.paper)}
                  onMouseLeaveCapture={(e) => (e.currentTarget.style.background = theme.colors.surface)}
                >
                  <FaChevronRight size={14} />
                </button>
              </div>
 
              {/* dot indicators */}
              <div className="d-flex justify-content-center gap-2 mt-4">
                {TESTIMONIALS.map((_, i) => (
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
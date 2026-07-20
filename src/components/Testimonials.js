import { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { theme, eyebrowStyle, sectionHeadingStyle } from "../theme";

const TESTIMONIALS = [
  {
    quote: "Built us a fast, clean Shopify storefront with a smooth cart and checkout flow. Exactly what our jewellery brand needed.",
    name: "Sarah Whitfield",
    role: "Owner, Carat Filters Jewellery",
  },
  {
    quote: "Custom homepage sections and category banners came out better than we imagined, and everything loads fast.",
    name: "James Robinson",
    role: "Founder, The Robinson Family Store",
  },
  {
    quote: "Understood our fashion brand's identity right away and shipped custom sections that improved the whole shopping experience.",
    name: "Elena Brunner",
    role: "E-commerce Manager, Punk Rave",
  },
  {
    quote: "Delivered a polished, responsive store with dynamic sections well ahead of our launch deadline.",
    name: "Marcus Cole",
    role: "Brand Director, JogaStarz",
  },
  {
    quote: "Great communication throughout and a store that performs beautifully on both desktop and mobile.",
    name: "Ryan Fletcher",
    role: "Founder, Bark Strength",
  },
  {
    quote: "Reliable, detail-oriented, and easy to work with. Our storefront finally matches the quality of our products.",
    name: "Olivia Bennett",
    role: "Operations Lead, The Hookery",
  },
  {
    quote: "Rebuilt our Shopify theme with custom sections that are simple for our team to manage going forward.",
    name: "Tom Whitaker",
    role: "Co-Founder, Killer Labs",
  },
  {
    quote: "Homepage layouts and content sections were tailored exactly to our workwear brand and customers.",
    name: "Daniel Osei",
    role: "Marketing Manager, About Work",
  },
  {
    quote: "Professional from start to finish  clean code, thoughtful UX, and a store that's genuinely easy to maintain.",
    name: "Priya Nair",
    role: "Store Owner, IUM",
  },
];

const initials = (name) =>
  name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();

const AUTOPLAY_MS = 3000;
const CARD_WIDTH = 300; // fixed card size — never resizes
const GAP = 24;

const getVisibleCount = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 576) return 1;
  if (window.innerWidth < 992) return 2;
  return 3;
};

export const Testimonials = () => {
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [index, setIndex] = useState(0); // logical slide index, keeps incrementing
  const [noTransition, setNoTransition] = useState(false);
  const [paused, setPaused] = useState(false);
  const total = TESTIMONIALS.length;
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
  const track = [...TESTIMONIALS, ...TESTIMONIALS.slice(0, visibleCount)];
  const viewportWidth = visibleCount * CARD_WIDTH + (visibleCount - 1) * GAP;
  const offset = index * (CARD_WIDTH + GAP);
  const centerOffset = Math.floor(visibleCount / 2);
  const activeIndex = (index + centerOffset) % total;

  return (
    <section id="testimonials" style={{ background: theme.colors.surface, padding: "90px 0" }}>
      <Container style={{ maxWidth: theme.maxWidth }}>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <div className="text-center mb-5">
                <span style={eyebrowStyle}>KIND WORDS</span>
                <h2 style={{ ...sectionHeadingStyle, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: theme.colors.ink, marginTop: "10px" }}>
                  What People Say
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
                  {track.map((t, i) => {
                    const isActive = i % total === activeIndex;
                    return (
                      <div
                        key={i}
                        style={{
                          flex: `0 0 ${CARD_WIDTH}px`,
                          width: CARD_WIDTH,
                          background: theme.colors.paper,
                          border: `1px solid ${isActive ? theme.colors.accent : theme.colors.border}`,
                          borderRadius: theme.radius.md,
                          padding: "30px",
                          display: "flex",
                          flexDirection: "column",
                          transition: "border-color 0.3s ease",
                        }}
                      >
                        <span style={{ fontFamily: theme.fonts.display, fontSize: "2rem", color: theme.colors.accent, lineHeight: 1 }}>
                          "
                        </span>
                        <p style={{ fontFamily: theme.fonts.body, color: theme.colors.ink, fontSize: "1rem", lineHeight: 1.7, margin: "8px 0 20px", flexGrow: 1 }}>
                          {t.quote}
                        </p>
                        <div className="d-flex align-items-center gap-3">
                          <div
                            style={{
                              width: 40,
                              height: 40,
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
                    );
                  })}
                </div>
              </div>

              {/* number indicators */}
              <div className="d-flex justify-content-center gap-2 mt-4">
                {TESTIMONIALS.map((_, i) => {
                  const active = i === activeIndex;
                  return (
                    <span
                      key={i}
                      onClick={() => setIndex((i - centerOffset + total) % total)}
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: theme.fonts.mono,
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: active ? "#fff" : theme.colors.muted,
                        background: active ? theme.colors.accent : "transparent",
                        border: `1px solid ${active ? theme.colors.accent : theme.colors.border}`,
                        cursor: "pointer",
                        transition: "all 0.25s ease",
                      }}
                    >
                      {i + 1}
                    </span>
                  );
                })}
              </div>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};

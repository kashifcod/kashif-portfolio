import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import { theme, eyebrowStyle, sectionHeadingStyle } from "../theme";
 
// EDIT ME: add/update your real education history
const EDUCATION = [
  {
    degree: "BS Computer Science / Information Technology",
    place: "University of Sindh",
    period: "2020 — 2024",
    detail: "Web Development, Database Systems, Algorithms & Data Structures",
  },
];
 
// Original flat-illustration of a graduate — pure SVG, no external image/asset needed.
const GraduateIllustration = () => (
  <svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <circle cx="200" cy="205" r="150" fill={theme.colors.accentSoft} />
 
    {/* sparkles */}
    <circle cx="80" cy="90" r="6" fill={theme.colors.accent} opacity="0.6" />
    <circle cx="330" cy="120" r="5" fill={theme.colors.coral} opacity="0.6" />
    <circle cx="60" cy="260" r="4" fill={theme.colors.accent} opacity="0.5" />
    <circle cx="340" cy="290" r="6" fill={theme.colors.accentDark} opacity="0.5" />
    <path d="M300 70 l6 14 14 6 -14 6 -6 14 -6 -14 -14 -6 14 -6 z" fill={theme.colors.accent} opacity="0.7" />
 
    {/* legs */}
    <rect x="168" y="300" width="26" height="60" rx="10" fill={theme.colors.inkSoft} />
    <rect x="206" y="300" width="26" height="60" rx="10" fill={theme.colors.inkSoft} />
    <rect x="160" y="352" width="42" height="16" rx="8" fill={theme.colors.accentDark} />
    <rect x="198" y="352" width="42" height="16" rx="8" fill={theme.colors.accentDark} />
 
    {/* gown body */}
    <path
      d="M140 190 C140 160 160 145 200 145 C240 145 260 160 260 190 L272 320 C272 335 260 345 245 345 L155 345 C140 345 128 335 128 320 Z"
      fill={theme.colors.ink}
    />
    {/* gown v-neck trim */}
    <path d="M180 150 L200 210 L220 150" fill="none" stroke={theme.colors.accent} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    {/* tie */}
    <path d="M196 160 L204 160 L210 205 L200 220 L190 205 Z" fill={theme.colors.coral} />
 
    {/* left arm (raised, fist) */}
    <path d="M148 185 C110 185 95 150 100 110" fill="none" stroke={theme.colors.ink} strokeWidth="26" strokeLinecap="round" />
    <circle cx="100" cy="102" r="18" fill={theme.colors.ink} />
    <rect x="88" y="90" width="24" height="10" rx="5" fill={theme.colors.accent} />
 
    {/* right arm holding diploma */}
    <path d="M252 190 C288 195 300 175 296 140" fill="none" stroke={theme.colors.ink} strokeWidth="26" strokeLinecap="round" />
    <g transform="translate(268,110) rotate(20)">
      <rect x="0" y="0" width="70" height="18" rx="9" fill="#F7F8FA" stroke={theme.colors.border} />
      <rect x="-6" y="2" width="14" height="14" rx="7" fill={theme.colors.accent} />
      <rect x="62" y="2" width="14" height="14" rx="7" fill={theme.colors.accent} />
    </g>
 
    {/* neck */}
    <rect x="188" y="128" width="24" height="26" rx="8" fill="#F0B98D" />
 
    {/* head */}
    <circle cx="200" cy="105" r="46" fill="#FBCB9B" />
    {/* ears */}
    <circle cx="152" cy="108" r="8" fill="#FBCB9B" />
    <circle cx="248" cy="108" r="8" fill="#FBCB9B" />
    {/* hair */}
    <path d="M156 100 C150 60 180 40 200 40 C220 40 250 60 244 100 C238 82 220 74 200 74 C180 74 162 82 156 100 Z" fill="#3B2A20" />
    {/* face */}
    <circle cx="184" cy="108" r="5" fill={theme.colors.ink} />
    <circle cx="216" cy="108" r="5" fill={theme.colors.ink} />
    <path d="M186 128 C192 136 208 136 214 128" fill="none" stroke={theme.colors.ink} strokeWidth="4" strokeLinecap="round" />
    <circle cx="170" cy="118" r="6" fill={theme.colors.coral} opacity="0.35" />
    <circle cx="230" cy="118" r="6" fill={theme.colors.coral} opacity="0.35" />
 
    {/* graduation cap */}
    <rect x="180" y="58" width="40" height="14" rx="4" fill={theme.colors.inkSoft} />
    <path d="M120 54 L200 24 L280 54 L200 84 Z" fill={theme.colors.inkSoft} />
    <path d="M120 54 L200 84 L280 54" fill="none" stroke={theme.colors.ink} strokeWidth="2" opacity="0.3" />
    <line x1="255" y1="60" x2="255" y2="98" stroke={theme.colors.accent} strokeWidth="3" />
    <circle cx="255" cy="102" r="7" fill={theme.colors.accent} />
  </svg>
);
 
const EducationCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);
 
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: theme.colors.surface,
        border: `1px solid ${hovered ? theme.colors.accent : theme.colors.border}`,
        borderRadius: theme.radius.md,
        padding: "30px 32px",
        boxShadow: hovered ? theme.shadow.cardHover : theme.shadow.card,
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
      }}
    >
      <div className="d-flex align-items-start justify-content-between flex-wrap gap-2 mb-3">
        <div className="d-flex align-items-center gap-3">
          <span
            style={{
              width: "46px",
              height: "46px",
              minWidth: "46px",
              borderRadius: "50%",
              background: theme.colors.accentSoft,
              color: theme.colors.accentDark,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background-color 0.25s ease, color 0.25s ease",
              ...(hovered && { background: theme.colors.accent, color: "#fff" }),
            }}
          >
            <FaGraduationCap size={20} />
          </span>
          <div>
            <h3
              style={{
                fontFamily: theme.fonts.display,
                fontWeight: 700,
                fontSize: "1.2rem",
                color: theme.colors.ink,
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              {item.degree}
            </h3>
            <div className="d-flex align-items-center flex-wrap gap-2 mt-1">
              <div className="d-flex align-items-center gap-1">
                <FaMapMarkerAlt size={12} color={theme.colors.muted} />
                <span style={{ fontFamily: theme.fonts.body, color: theme.colors.muted, fontSize: "0.9rem" }}>
                  {item.place}
                </span>
              </div>
              <span
                style={{
                  fontFamily: theme.fonts.mono,
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: theme.colors.accentDark,
                  background: theme.colors.accentSoft,
                  padding: "6px 14px",
                  borderRadius: "999px",
                  whiteSpace: "nowrap",
                }}
              >
                {item.period}
              </span>
            </div>
          </div>
        </div>
      </div>
 
      <div style={{ height: "1px", background: theme.colors.border, margin: "18px 0" }} />
 
      <div className="d-flex flex-wrap gap-2">
        {item.detail.split(",").map((course) => (
          <span
            key={course}
            style={{
              fontFamily: theme.fonts.body,
              fontSize: "0.82rem",
              color: theme.colors.muted,
              background: theme.colors.paper,
              border: `1px solid ${theme.colors.border}`,
              padding: "6px 14px",
              borderRadius: "999px",
            }}
          >
            {course.trim()}
          </span>
        ))}
      </div>
    </div>
  );
};
 
export const Education = () => {
  return (
    <section id="education" style={{ background: theme.colors.paper, padding: "90px 0" }}>
      <Container style={{ maxWidth: theme.maxWidth }}>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <div className="text-center mb-5">
                <span style={eyebrowStyle}>BACKGROUND</span>
                <h2
                  style={{
                    ...sectionHeadingStyle,
                    fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                    color: theme.colors.ink,
                    marginTop: "10px",
                  }}
                >
                  Education
                </h2>
              </div>
 
              <Row className="align-items-center g-5">
                <Col xs={12} md={7}>
                  {EDUCATION.map((item) => (
                    <EducationCard key={item.degree} item={item} />
                  ))}
                </Col>
 
                <Col xs={12} md={5}>
                  <div style={{ maxWidth: "320px", margin: "0 auto" }}>
                    <GraduateIllustration />
                  </div>
                </Col>
              </Row>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};
 
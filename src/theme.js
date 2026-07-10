// Single source of truth for colors, fonts, and reusable style snippets.
// Change a value here and it updates across the whole site.

export const theme = {
  colors: {
    ink: "#0B1220",
    inkSoft: "#141F33",
    paper: "#F7F8FA",
    surface: "#FFFFFF",
    accent: "#0F9D74",
    accentDark: "#0B7A5A",
    accentSoft: "#E4F5EF",
    coral: "#FF6B4A",
    muted: "#64748B",
    border: "#E2E8F0",
  },
  fonts: {
    display: "'Space Grotesk', 'Segoe UI', sans-serif",
    body: "'Inter', 'Segoe UI', sans-serif",
    mono: "'JetBrains Mono', 'Courier New', monospace",
  },
  radius: {
    sm: "8px",
    md: "14px",
    lg: "22px",
  },
  shadow: {
    card: "0 10px 30px rgba(11, 18, 32, 0.08)",
    cardHover: "0 18px 40px rgba(11, 18, 32, 0.14)",
  },
  maxWidth: "1140px",
};

export const eyebrowStyle = {
  fontFamily: theme.fonts.mono,
  fontSize: "0.75rem",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: theme.colors.accent,
  fontWeight: 600,
};

export const sectionHeadingStyle = {
  fontFamily: theme.fonts.display,
  fontWeight: 700,
  letterSpacing: "-0.02em",
};

import { useEffect, useState } from "react";
import { theme } from "../theme";
const LINES = [
    "npm run portfolio",
    "compiling components...",
    "loading experience...",
    "ready ✓",
];

const SESSION_KEY = "portfolio_boot_played";

export const BootPreloader = () => {
    const alreadyPlayed =
        typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY) === "true";

    const [visible, setVisible] = useState(!alreadyPlayed);
    const [lineIndex, setLineIndex] = useState(0);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        if (alreadyPlayed) return undefined;

        if (lineIndex < LINES.length) {
            const t = setTimeout(() => setLineIndex((i) => i + 1), 260);
            return () => clearTimeout(t);
        }

        const fadeTimer = setTimeout(() => setFading(true), 200);
        const removeTimer = setTimeout(() => {
            setVisible(false);
            sessionStorage.setItem(SESSION_KEY, "true");
        }, 650);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, [lineIndex, alreadyPlayed]);

    useEffect(() => {
        document.body.style.overflow = visible ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [visible]);

    if (!visible) return null;

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 10000,
                background: theme.colors.ink,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: fading ? 0 : 1,
                transition: "opacity 0.4s ease",
            }}
        >
            <div style={{ fontFamily: theme.fonts.mono, fontSize: "0.95rem", width: "min(90vw, 420px)" }}>
                {LINES.slice(0, lineIndex).map((line, i) => {
                    const isLast = i === LINES.length - 1;
                    return (
                        <div
                            key={i}
                            style={{
                                marginBottom: "8px",
                                color: isLast ? "#D7FFEF" : "rgba(215,255,239,0.65)",
                            }}
                        >
                            <span style={{ color: theme.colors.accent }}>➜ </span>
                            {line}
                        </div>
                    );
                })}
                <span
                    style={{
                        display: "inline-block",
                        width: "8px",
                        height: "16px",
                        background: theme.colors.accent,
                        animation: "bootCursorBlink 0.9s step-end infinite",
                    }}
                />
                <style>{`@keyframes bootCursorBlink { 50% { opacity: 0; } }`}</style>
            </div>
        </div>
    );
};
import { useEffect, useState } from "react";
import { theme } from "../theme";

// Thin fixed bar at the very top of the page that fills as the visitor
// scrolls down — a small, quiet piece of brand identity that also gives
// people a sense of how much of the page is left.
export const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setProgress(pct);
        };
        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "3px",
                zIndex: 2000,
                background: "transparent",
                pointerEvents: "none",
            }}
        >
            <div
                style={{
                    height: "100%",
                    width: `${progress}%`,
                    background: theme.colors.accent,
                    transition: "width 0.1s linear",
                }}
            />
        </div>
    );
};

import { useEffect, useRef, useState } from "react";
import { theme } from "../theme";

// Custom cursor: a small dot + a trailing ring that grows and glows when
// hovering any interactive element. Desktop-only (checks for a fine
// pointer) — never activates on touch devices, so mobile is unaffected.
export const CursorFX = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [enabled, setEnabled] = useState(false);
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const isFinePointer =
            typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;
        setEnabled(isFinePointer);
        if (!isFinePointer) return undefined;

        const previousCursor = document.body.style.cursor;
        document.body.style.cursor = "none";

        const move = (e) => {
            const pos = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
            if (dotRef.current) dotRef.current.style.transform = pos;
            if (ringRef.current) ringRef.current.style.transform = pos;
        };

        const isInteractive = (el) => el && el.closest && el.closest("a, button, [data-cursor-hover]");

        const onOver = (e) => {
            if (isInteractive(e.target)) setHovering(true);
        };
        const onOut = (e) => {
            if (isInteractive(e.target)) setHovering(false);
        };

        window.addEventListener("mousemove", move);
        document.addEventListener("mouseover", onOver);
        document.addEventListener("mouseout", onOut);

        return () => {
            document.body.style.cursor = previousCursor;
            window.removeEventListener("mousemove", move);
            document.removeEventListener("mouseover", onOver);
            document.removeEventListener("mouseout", onOut);
        };
    }, []);

    if (!enabled) return null;

    return (
        <>
            <div
                ref={dotRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: theme.colors.accent,
                    pointerEvents: "none",
                    zIndex: 10001,
                    transform: "translate(-100px, -100px)",
                }}
            />
            <div
                ref={ringRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: hovering ? "52px" : "30px",
                    height: hovering ? "52px" : "30px",
                    borderRadius: "50%",
                    border: `1px solid ${hovering ? theme.colors.accent : "rgba(15,157,116,0.45)"}`,
                    background: hovering ? "rgba(15,157,116,0.10)" : "transparent",
                    pointerEvents: "none",
                    zIndex: 10000,
                    transform: "translate(-100px, -100px)",
                    transition:
                        "width 0.2s ease, height 0.2s ease, border-color 0.2s ease, background-color 0.2s ease",
                }}
            />
        </>
    );
};

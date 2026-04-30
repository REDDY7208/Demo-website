"use client";

import { useEffect, useRef, useState } from "react";

// Single flip tile
function FlipTile({ char, delay = 0, duration = 0.6 }) {
  const [displayed, setDisplayed] = useState(" ");
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setFlipping(true);
      setTimeout(() => {
        setDisplayed(char);
        setFlipping(false);
      }, duration * 500);
    }, delay * 1000);
    return () => clearTimeout(t);
  }, [char, delay, duration]);

  return (
    <span
      className="inline-flex items-center justify-center font-mono font-bold select-none"
      style={{
        width: "1ch",
        minWidth: "0.75em",
        height: "1.2em",
        background: "#1a1a1a",
        color: "#f5f0e8",
        borderRadius: "3px",
        margin: "1px",
        fontSize: "inherit",
        transform: flipping ? "rotateX(90deg)" : "rotateX(0deg)",
        transition: `transform ${duration * 0.5}s ease-in-out`,
        transformOrigin: "center",
        perspective: "200px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      {displayed === " " ? "\u00A0" : displayed}
    </span>
  );
}

// Row of tiles
function FlipRow({ text, rowDelay = 0, duration = 1.2 }) {
  const chars = text.split("");
  return (
    <div className="flex flex-wrap justify-center gap-[2px] my-1">
      {chars.map((char, i) => (
        <FlipTile
          key={i}
          char={char === " " ? " " : char.toUpperCase()}
          delay={rowDelay + i * (duration / (chars.length + 4))}
          duration={duration}
        />
      ))}
    </div>
  );
}

// Main board
export function TextFlippingBoard({ text = "", duration = 1.2, className = "" }) {
  const rows = text.split("\n");

  return (
    <div
      className={`flex flex-col items-center justify-center p-6 rounded-lg ${className}`}
      style={{
        background: "#111",
        border: "2px solid #333",
        boxShadow: "0 0 40px rgba(0,0,0,0.8), inset 0 0 20px rgba(0,0,0,0.5)",
        perspective: "800px",
      }}
    >
      {rows.map((row, i) => (
        <FlipRow
          key={`${row}-${i}`}
          text={row}
          rowDelay={i * 0.3}
          duration={duration}
        />
      ))}
    </div>
  );
}

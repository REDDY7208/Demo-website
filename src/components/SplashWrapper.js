"use client";

import { useState } from "react";
import SplashScreen from "./SplashScreen";

export default function SplashWrapper({ children }) {
  const [done, setDone] = useState(false);

  return (
    <>
      {!done && <SplashScreen onDone={() => setDone(true)} />}
      <div
        style={{
          opacity: done ? 1 : 0,
          transition: "opacity 0.5s ease",
          pointerEvents: done ? "auto" : "none",
        }}
      >
        {children}
      </div>
    </>
  );
}

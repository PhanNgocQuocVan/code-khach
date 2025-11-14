import React from "react";
import shape from "../assets/shape1.png";

// Renders multiple floating decorative shapes along left and right edges
const FloatingShapes = () => {
  const shapes = [
    // left side shapes
    { side: "left", top: "10%", size: 84, delay: "0s", duration: "6s" },
    { side: "left", top: "30%", size: 48, delay: "1s", duration: "5s" },
    { side: "left", top: "55%", size: 64, delay: "0.6s", duration: "7s" },
    { side: "left", top: "75%", size: 38, delay: "1.4s", duration: "6.5s" },
    // right side shapes
    { side: "right", top: "8%", size: 56, delay: "0.3s", duration: "6.2s" },
    { side: "right", top: "28%", size: 96, delay: "0.9s", duration: "7s" },
    { side: "right", top: "52%", size: 44, delay: "1.1s", duration: "5.5s" },
    { side: "right", top: "78%", size: 72, delay: "0.2s", duration: "6.8s" },
  ];

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-50">
      {shapes.map((s, i) => (
        <img
          key={i}
          src={shape}
          alt="decor"
          className={`floating-shape absolute`}
          style={{
            top: s.top,
            left: s.side === "left" ? "-0px" : "auto",
            right: s.side === "right" ? "-0px" : "auto",
            width: s.size,
            height: "auto",
            opacity: 0.95,
            transformOrigin: "center",
            animation: `floatY ${s.duration} ease-in-out ${s.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;

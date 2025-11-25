"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function StickyCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="sticky-cursor"
      animate={{
        x: pos.x - 8,
        y: pos.y - 8,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    />
  );
}

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FollowMouse: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const scrollY = window.scrollY || window.pageYOffset;
      setMousePosition({ x: event.clientX, y: event.clientY + scrollY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="follow-mouse"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 40,
        height: 40,
        borderRadius: "50%",
        backgroundColor: "rgba(124, 0, 254, 0.5)",
        pointerEvents: "none",
        zIndex: 1000,
      }}
      animate={{
        x: mousePosition.x - 25,
        y: mousePosition.y - 25,
      }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 20,
      }}
    />
  );
};

export default FollowMouse;

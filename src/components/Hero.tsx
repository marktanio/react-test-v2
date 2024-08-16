import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="bg-light text-center py-5 min-vh-100 d-flex align-items-center justify-content-center text-center hero-background hero"
      style={{ minHeight: "80vh" }}
    >
      <Container>
        <motion.h1
          className="hero-heading-custom mb-3"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            rotate: 2,
            transition: { duration: 0.3 },
          }}
        >
          Capture the Moment with John Doe
        </motion.h1>

        <motion.p
          className="lead"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Based in Cebu, I specialize in photography that brings the beauty of
          nature, the essence of products, and the vibrancy of street life into
          sharp focus. My lens captures the unseen, turning fleeting moments
          into lasting memories. Let’s create something extraordinary together.
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
            delay: 1.5,
          }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.button
            className="mt-5 px-5 custom-btn"
            style={{
              padding: "12px 24px",
              fontSize: "1.25rem",
              color: "#fff",
              border: "none",
              borderRadius: "30px",
              background:
                "linear-gradient(270deg, #17153B, #2E236C, #433D8B, #C8ACD6)",
              backgroundSize: "400% 400%",
              position: "relative",
              zIndex: 1,
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            whileHover={{ scale: 1.2 }}
          >
            Discover My Work
          </motion.button>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;

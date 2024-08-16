import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion, useInView } from "framer-motion";

const MainSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="main-section" className="py-5" ref={ref}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-left">
            <motion.img
              src="/react-test-v2/main-img.jpg"
              alt="Main"
              className="img-fluid mb-4 mb-md-0 custom-img"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              whileHover={{
                borderColor: "#C8ACD6",
              }}
            />
          </Col>
          <Col md={6}>
            <motion.div
              className="mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.75 }}
            >
              <h2
                className="mb-3 custom-main-heading"
                style={{ color: "purple" }}
              >
                Elevating Your Visual Experience
              </h2>
              <p>
                Welcome to my world of photography, where every shot tells a
                unique story. I’m dedicated to crafting stunning visuals that
                highlight the beauty and detail in every subject. Whether it’s
                the tranquility of nature, the precision of product shots, or
                the energy of street scenes, I bring a personal touch to each
                image. Explore my portfolio to see how I can bring your vision
                to life.
              </p>
            </motion.div>
            <motion.div
              className="d-flex flex-column"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
                delay: 1,
              }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="custom-card-style"
                animate={{
                  background: [
                    "linear-gradient(270deg, #17153B, #2E236C, #433D8B, #C8ACD6)",
                    "linear-gradient(270deg, #C8ACD6, #433D8B, #2E236C, #17153B)",
                  ],
                  backgroundSize: "400% 400%",
                  backgroundPosition: ["0% 50%", "100% 50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Card
                  className="mb-3 clickable-box"
                  style={{ cursor: "pointer", borderRadius: "15px" }}
                >
                  <Card.Body>
                    <Card.Title>Explore My Portfolio</Card.Title>
                    <Card.Text>
                      Dive into a collection of my work, showcasing the diverse
                      range of photography styles I specialize in.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MainSection;

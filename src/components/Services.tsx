import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion, useInView } from "framer-motion";

const Services: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section
      id="services"
      className="py-5 min-vh-50 d-flex align-items-center services-custom"
      ref={ref}
    >
      <Container fluid="md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-5"
        >
          <h2 className="text-white">Services Offered</h2>
        </motion.div>
        <Row className="g-4">
          <Col md={6}>
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.7)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-4"
            >
              <Card className="text-white text-center rounded-3 overflow-hidden">
                <Card.Img
                  src="/react-test-v2/nature-img.jpg"
                  alt="Nature Photography"
                  className="img-fluid service-image"
                />
                <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                  <Card.Title className="service-title">
                    Nature Photography
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: -1,
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.7)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card className="text-white text-center rounded-3 overflow-hidden">
                <Card.Img
                  src="/react-test-v2/product-img.jpg"
                  alt="Product Photography"
                  className="img-fluid service-image"
                />
                <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                  <Card.Title className="service-title">
                    Product Photography
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.7)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="h-100"
            >
              <Card className="text-white text-center rounded-3 overflow-hidden h-100">
                <Card.Img
                  src="/react-test-v2/street-img.jpg"
                  alt="Street Photography"
                  className="img-fluid service-image"
                />
                <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
                  <Card.Title className="service-title">
                    Street Photography
                  </Card.Title>
                </Card.ImgOverlay>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;

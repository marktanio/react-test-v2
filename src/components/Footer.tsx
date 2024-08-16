import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import Navbar from "./Navbar";

const Footer: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.footer
      className="text-white py-4 pb-5"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.6 }}
    >
      <Container>
        <Navbar />
        <Row className="mt-4 align-items-stretch">
          <Col md={6} className="d-flex flex-column justify-content-center">
            <div className="contact-item mb-3 text-center">
              <div className="icon-placeholder mb-2"></div>
              <h5>Contact:</h5>
              <p className="fs-4">+63 912 345 6789</p>
            </div>
            <div className="contact-item mb-3 text-center">
              <div className="icon-placeholder mb-2"></div>
              <h5>Email:</h5>
              <p className="fs-4">example@example.com</p>
            </div>
            <div className="contact-item text-center">
              <div className="icon-placeholder mb-2"></div>
              <h5>Location:</h5>
              <p className="fs-4">Cebu City, Philippines</p>
            </div>
          </Col>
          <Col md={6} className="p-0 d-flex align-items-stretch">
            <div className="map w-100" style={{ height: "100%" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.922570763752!2d123.89151111472295!3d10.315699592624471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9997e6e5f3e27%3A0xd4b31a8f5a54aeb!2sCebu%20City!5e0!3m2!1sen!2sph!4v1603407624178!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "15px" }}
                allowFullScreen
                aria-hidden="false"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.footer>
  );
};

export default Footer;

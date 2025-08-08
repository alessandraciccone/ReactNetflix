import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-black text-secondary py-4">
      <Container>
        <Row className="mb-3">
          <Col>
            <span>
              <i className="bi bi-facebook me-3"></i>
            </span>
            <span>
              <i className="bi bi-instagram me-3"></i>
            </span>
            <span>
              <i className="bi bi-twitter me-3"></i>
            </span>
            <span>
              <i className="bi bi-youtube"></i>
            </span>
          </Col>
        </Row>

        <Row className="row-cols-2 row-cols-md-4">
          <Col className="mb-3">
            <p>
              <a href="#" className="text-secondary text-decoration-none">
                Audio and Subtitles
              </a>
            </p>
            <p>
              <a href="#" className="text-secondary text-decoration-none">
                Media Center
              </a>
            </p>
            <p>
              <a href="#" className="text-secondary text-decoration-none">
                Privacy
              </a>
            </p>
            <p>
              <a href="#" className="text-secondary text-decoration-none">
                Contact Us
              </a>
            </p>
          </Col>
          <Col className="mb-3">
            <p>
              <a href="#" className="text-secondary text-decoration-none">
                Audio Description
              </a>
            </p>
            <p>
              <a href="#" className="text-secondary text-decoration-none">
                Investor Relations
              </a>
            </p>
            <p>
              <a href="#" className="text-secondary text-decoration-none">
                Legal Notices
              </a>
            </p>
          </Col>
          <Col className="mb-3">
            <p>
              <a href="#" className="text-secondary text-decoration-none">
                Help Center
              </a>
            </p>
            <p>
              <a href="#" className="text-secondary text-decoration-none">
                Jobs
              </a>
            </p>
            <p>
              <a href="#" className="text-secondary text-decoration-none">
                Cookie Preferences
              </a>
            </p>
          </Col>
          <Col className="mb-3">
            <p>
              <a href="#" className="text-secondary text-decoration-none">
                Gift Cards
              </a>
            </p>
            <p>
              <a href="#" className="text-secondary text-decoration-none">
                Terms of Use
              </a>
            </p>
            <p>
              <a href="#" className="text-secondary text-decoration-none">
                Corporate Information
              </a>
            </p>
          </Col>
        </Row>

        <Row>
          <Col className="px-0 text-start">
            <button
              type="button"
              className="btn btn-dark border border-1 border-secondary text-secondary"
            >
              Service Code
            </button>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="px-0">
            <p>&copy; 1997–2019 Netflix, Inc.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

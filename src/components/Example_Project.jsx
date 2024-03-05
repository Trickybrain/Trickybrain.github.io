import React from "react";
import { useAppContext } from "../appContext";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

export default function ExampleProject() {
  const { theme } = useAppContext();

  return (
    <Element name={"ExampleProject"} id="example-project">
      <section className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Example Projects</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Container className="text-center mt-4">
            {/* Project Description */}
            <p>
              This section is dedicated to discussing my example project in detail. Here, you can
              introduce the project, discuss the technologies used, challenges faced, and how you
              overcame them. You might also want to include screenshots or demos if applicable.
            </p>
            {/* Optionally, replace with actual content about your project */}
          </Container>
          <Row className="justify-content-center mt-4">
            <Col md={8}>
              {/* Include images, code snippets, or any other relevant content */}
              <img src="path/to/project/screenshot.png" alt="Project Screenshot" className="img-fluid" />
              {/* You can add more content here */}
            </Col>
          </Row>
          <Container className="text-center mt-5">
            {/* Link to GitHub or live demo if applicable */}
            <a href="https://github.com/yourusername/example-project" target="_blank" rel="noopener noreferrer">
              <Button variant={theme === "light" ? "outline-dark" : "outline-light"}>
                View on GitHub
              </Button>
            </a>
            {/* Add other links or calls to action as needed */}
          </Container>
        </Container>
      </section>
    </Element>
  );
}

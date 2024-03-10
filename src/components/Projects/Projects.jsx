import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import oeliks from "../../Assets/Projects/oeliks.png";
import testing from "../../Assets/Projects/testing.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oeliks}
              isBlog={false}
              title="oeliks.uz"
              description="The website offers a convenient platform for uploading and browsing advertisements. Users can effortlessly share their ads and discover a diverse range of offerings from others. Whether you're promoting products, services, events, or more, our platform provides an easy and efficient way to connect with your target audience. Join us today to maximize your advertising impact."
              ghLink="https://github.com/dragonsteam/oeliks-server"
              demoLink="http://oeliks.uz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={testing}
              isBlog={false}
              title="Knowladge testing"
              description="Go-to platform for testing your knowledge across a variety of subjects. From mathematics to history, science to literature, Quiz tester offers interactive quizzes that challenge and engage users of all levels. With instant feedback, customizable learning paths, and competitive challenges. Quiz tester provides a convenient way to expand your knowledge anytime, anywhere. Join a vibrant community of learners, sharpen your skills, and unlock your potential with Quiz tester."
              ghLink="https://github.com/nickphilomath"
              demoLink="https://bejewelled-cucurucho-e6b16e.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

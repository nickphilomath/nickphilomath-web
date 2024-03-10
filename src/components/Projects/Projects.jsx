import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import oeliks from "../../Assets/Projects/oeliks.png";

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

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import employee from "../../Assets/Projects/Face-Scan.jpg";
import training from "../../Assets/Projects/MOOC.png";
import pfeplatform from "../../Assets/Projects/pfe-stage-fin-etude.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I’ve worked on, focused on IT systems, automation,
          and software solutions.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Project 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employee}
              isBlog={false}
              title="Employee Monitoring System"
              description="An intelligent employee monitoring system with facial detection and automated break management. The system tracks presence and absences in real time and synchronizes data with Firebase for centralized monitoring."
              ghLink="https://github.com/badramzil01/Gestion-temps-des-employes"
            />
          </Col>

          {/* Project 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={training}
              isBlog={false}
              title="Training Management Desktop Application"
              description="A modern desktop application designed to manage internal training sessions and participant data. Built with Flutter and Firebase, featuring a smooth UI and efficient backend data handling."
              ghLink="https://github.com/badramzil01/E-ContactPro"
            />
          </Col>

          {/* Project 3 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pfeplatform}
              isBlog={false}
              title="PFE Project Management Platform"
              description="A web platform that facilitates collaboration between students and supervisors for final-year projects. Includes chat, document sharing, task management, calendar scheduling, meetings, and reclamation handling."
              ghLink="https://github.com/badramzil01/pfe-platform"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

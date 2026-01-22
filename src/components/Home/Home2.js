import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m an <b className="purple">Information Systems Engineer</b> with a
              strong background in IT support, systems administration, and
              infrastructure optimization. I enjoy solving technical problems
              and ensuring reliable, secure, and efficient IT environments.
              <br />
              <br />
              I have hands-on experience in incident management, user support,
              and system operations, along with building desktop and web
              applications as part of academic and professional projects.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, Java, C#, JavaScript, Flutter{" "}
                </b>
              </i>
              and I work comfortably with
              <b className="purple"> Windows & Linux </b> environments.
              <br />
              <br />
              My main interests include
              <i>
                <b className="purple">
                  {" "}
                  IT Operations, Cloud & DevOps, Cybersecurity{" "}
                </b>
              </i>
              and building intelligent systems through automation and data
              analysis.
              <br />
              <br />
              Whenever possible, I enjoy working with
              <b className="purple"> Cloud platforms </b> like{" "}
              <i>
                <b className="purple">AWS</b> and{" "}
                <b className="purple">Oracle Cloud</b>
              </i>{" "}
              to deliver practical and scalable IT solutions.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

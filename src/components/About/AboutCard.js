import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Badr Amzil</span>{" "}
            from <span className="purple">Rabat, Morocco</span>.
            <br />
            I’m an <span className="purple">Information Systems Engineer</span>{" "}
            with experience in IT support, systems administration, and building
            practical software solutions.
            <br />
            <br />
            Outside of technology, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always aim to improve systems, simplify processes, and create
            reliable solutions."
          </p>
          <footer className="blockquote-footer">Badr</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import StackGrid from "react-stack-grid";
import { about } from "./data/data";

const Officer = ({ item }) => {
  return (
    <div className="card m-3">
      <div className="card-body">
        <h4 className="card-title">{item.name}</h4>
        <h5 className="card-text">{item.position}</h5>
        <a
          href={"mailto:" + item.email}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.email}
        </a>
      </div>
    </div>
  );
};

const About = ({ size }) => {
  const { width } = size;
  return (
    <>
      <h2>About Us</h2>
      {about.about}
      <p className="h5 mt-3">Meet us on Mondays 7pm @ Siebel 3401!</p>
      <h3 className="mt-1">Exec</h3>
      <StackGrid columnWidth={width <= 768 ? "100%" : "33.33%"}>
        {about.exec.map(item => (
          <Officer item={item} key={item.name} />
        ))}
      </StackGrid>
    </>
  );
};

export default About;

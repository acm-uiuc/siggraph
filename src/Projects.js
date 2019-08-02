import React from "react";
import StackGrid from "react-stack-grid";
import { projects } from "./data/data";

const Project = ({ item }) => {
  return (
    <div className="card m-3">
      <div className="card-body">
        <h3 className="card-title">{item.name}</h3>
        <p className="card-text">{item.description}</p>
      </div>
    </div>
  );
};

const Projects = ({ size }) => {
  const { width } = size;
  return (
    <>
      <h2>Current</h2>
      <StackGrid columnWidth={width <= 768 ? "100%" : "33.33%"}>
        {projects.current.map(item => (
          <Project item={item} key={item.name} />
        ))}
      </StackGrid>
      <h2>Past</h2>
      <StackGrid columnWidth={width <= 768 ? "100%" : "33.33%"}>
        {projects.past.map(item => (
          <Project item={item} key={item.name} />
        ))}
      </StackGrid>
    </>
  );
};

export default Projects;

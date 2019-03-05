import React, { Fragment } from "react";
import { projects } from "./data/data";

const Project = ({ item }) => {
  return (
    <div className="card col m-3">
      <div className="card-body">
        <h3 className="card-title">{item.name}</h3>
        <p className="card-text">{item.description}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <Fragment>
      <h2>Current</h2>
      <div className="row mr-3 ml-3">
        {projects.current.map(item => (
          <Project item={item} key={item.name} />
        ))}
      </div>
      <h2>Past</h2>
      <div className="row mr-3 ml-3">
        {projects.current.map(item => (
          <Project item={item} key={item.name} />
        ))}
      </div>
    </Fragment>
  );
};

export default Projects;

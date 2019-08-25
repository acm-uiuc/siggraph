import React from "react";
import { Card, Button } from "react-bootstrap";
import StackGrid from "react-stack-grid";

import YouTube from "react-youtube";

import { projects } from "./data/data";

const Project = ({ item }) => {
  const opts = {
    height: 300,
    width: 640,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };
  return (
    <Card>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        {item.media && (
          <Button variant="secondary" block href={item.media}>
            Demo
          </Button>
        )}
      </Card.Body>
    </Card>
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

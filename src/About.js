import React from "react";
import { Card } from "react-bootstrap";
import StackGrid from "react-stack-grid";
import { about } from "./data/data";

const Officer = ({ item }) => {
  return (
    <Card>
      {item.media && (
        <Card.Img variant="top" src={process.env.PUBLIC_URL + item.media} />
      )}
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.position}
          <br />
          <a
            href={"mailto:" + item.email}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.email}
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

const getColumnWidth = width => {
  if (width < 540) {
    return "100%";
  } else if (width < 960) {
    return "50%";
  } else {
    return "25%";
  }
};

const About = ({ size }) => {
  const { width } = size;
  return (
    <>
      <h2>About Us</h2>
      {about.about}
      <p className="h5 mt-3">{about.meeting}</p>
      <h3 className="mt-1">Exec</h3>
      <StackGrid
        columnWidth={getColumnWidth(width)}
        monitorImagesLoaded
        gutterWidth={10}
      >
        {about.exec.map(item => (
          <Officer item={item} key={item.name} />
        ))}
      </StackGrid>
    </>
  );
};

export default About;

import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./Header";
import Footer from "./Footer";

import App from "./App";
import Projects from "./Projects";
import About from "./About";
import Gallery from "./Gallery";

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      width: 0,
      height: 0
    };
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  componentDidMount = () => {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  };
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
  };

  render() {
    return (
      <Router basename="/"> {/* When using HashRouter, we don't need the public URL as a basename */}
        <Switch>
          <DefaultLayout exact path="/" component={App} size={this.state} />
          <DefaultLayout
            path="/projects"
            component={Projects}
            size={this.state}
          />
          <DefaultLayout path="/about" component={About} size={this.state} />
          <DefaultLayout
            path="/gallery"
            component={Gallery}
            size={this.state}
          />
          <DefaultLayout component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

const DefaultLayout = ({ component: Component, size, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <>
          <div className="main-container">
            <Header />
            <Container>
              <Component {...matchProps} size={size} />
            </Container>
            <Footer />
          </div>
        </>
      )}
    />
  );
};

const Construction = () => <h1>This page is under construction</h1>;

const NotFound = () => (
  <h1 className="d-flex align-items-center justify-content-center">
    The page you're looking for does not exist :(
  </h1>
);

export default Navigation;

import React, { Component } from "react";

// TODO: use React attributes thing to set poster src and alt
class Poster extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <img className="poster" style ={{width: '100%'}} src={process.env.PUBLIC_URL + this.props.src} alt={this.props.alt} />
    );
  }
}

export default Poster;

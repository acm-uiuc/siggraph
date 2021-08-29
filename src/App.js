import React, { Component } from "react";

class App extends Component {
  render() {
    return (
        <img className="poster" style ={{width: '100%'}} src={process.env.PUBLIC_URL + '/assets/hi_tea.png'} alt="hi tea poster" />
    );
  }
}

export default App;

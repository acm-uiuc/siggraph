import React, { Component } from "react";

import Background from "./Background";

class App extends Component {
  render() {
    const { width, height } = this.props.size;
    return (
      <div className="App" style={{backgroundImage: "url('high_Tea.png')"}}>
        <Background width={width} height={height} />
        <h1 className="center w-100">SIGGRAPH @ UIUC</h1>
      </div>
    );
  }
}

export default App;

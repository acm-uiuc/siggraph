import React, { Component } from "react";

import Background from "./Background";

class App extends Component {
  render() {
    const { width, height } = this.props.size;
    {/*
    return (
      <div className="App">
        <Background width={width} height={height} />
        <h1 className="center w-100">SIGGRAPH @ UIUC</h1>
      </div>
    );
    */}
    return (
      <div style={{ height: '100%', position: 'absolute', left: '0px', width: '100%', overflow: 'hidden'}}>
      <center>
        <img className="poster" style ={{paddingbottom:'500px', height: '90%', width: '100%'}} src="/siggraph/assets/hi_tea.png" alt="hi tea poster" />
        </center>
      </div>

    );
  }
}

export default App;

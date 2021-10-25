import React, { Component } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

class Background extends Component {
  componentDidMount() {
    const { width, height } = this.props;

    //ADD SCENE
    this.scene = new THREE.Scene();
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(45, width / height, 1, 2000);
    this.camera.position.z = 15;
    //ADD LIGHT
    var pointLight = new THREE.PointLight(0xff0000, 1, 100);
    this.camera.add(pointLight);
    // var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
    // this.scene.add(ambientLight);
    this.scene.add(this.camera);
    //Test Orbit controls
    // var controls = new THREE.OrbitControls(this.camera);
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
    // ADD CUBE
    let that = this;
    const loader = new FBXLoader();
    loader.load("models/index.fbx", function(object) {
      object.traverse(function(child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });


      that.scene.add(object);
      that.cube = object;
      that.start();
    });
  }
  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };
  animate = () => {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };
  render() {
    const { width, height } = this.props;
    if (this.camera) {
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    }
    return (
      <div
        className="canvas"
        style={{ width: width, height: height }}
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}
export default Background;

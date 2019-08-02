import React, { Component } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { Button } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-feather";

const models = ["cookie", "gorillaobjrefined", "person2", "unicorn"];

class Gallery extends Component {
  state = {
    slideIndex: 0
  };

  componentDidMount() {
    const { width, height } = this.props.size;
    //ADD SCENE
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xa0a0a0);
    this.scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(45, width / height, 1, 2000);
    this.camera.position.set(100, 180, 300);
    //ADD LIGHT
    var light = new THREE.HemisphereLight(0xffffff, 0x444444);
    light.position.set(0, 200, 0);
    this.scene.add(light);
    light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0, 200, 100);
    light.castShadow = true;
    light.shadow.camera.top = 180;
    light.shadow.camera.bottom = -100;
    light.shadow.camera.left = -120;
    light.shadow.camera.right = 120;
    this.scene.add(light);
    // ADD GROUND
    var mesh = new THREE.Mesh(
      new THREE.PlaneBufferGeometry(2000, 2000),
      new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false })
    );
    mesh.rotation.x = -Math.PI / 2;
    mesh.receiveShadow = true;
    this.scene.add(mesh);
    var grid = new THREE.GridHelper(2000, 20, 0x000000, 0x000000);
    grid.material.opacity = 0.2;
    grid.material.transparent = true;
    this.scene.add(grid);

    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
    // ADD ITEM
    this.loadModel("models/gallery/" + models[this.state.slideIndex] + ".fbx");

    //ADD ORBIT CONTROLS
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 50, 0);
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
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
    this.controls.update();
  };
  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };
  loadModel = path => {
    let that = this;
    const loader = new FBXLoader();
    loader.load(
      path,
      function(object) {
        object.traverse(function(child) {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        object.scale.x = 10;
        object.scale.y = 10;
        object.scale.z = 10;
        that.scene.add(object);
        that.object = object;
        that.start();
      },
      function(xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% Loaded");
      },
      function(error) {
        console.log(error);
      }
    );
  };

  nextSlide = num => {
    this.scene.remove(this.object);
    let nextIndex =
      (this.state.slideIndex + num + models.length) % models.length;

    this.setState({
      slideIndex: nextIndex
    });
    this.loadModel("models/gallery/" + models[nextIndex] + ".fbx");
  };
  render() {
    const { width, height } = this.props.size;
    return (
      <>
        <div
          className="canvas"
          style={{ width: width, height: height }}
          ref={mount => {
            this.mount = mount;
          }}
        />
        <div className="d-flex justify-content-between align-items-center slide-controls">
          <Button variant="outline-dark" onClick={() => this.nextSlide(-1)}>
            <ChevronLeft />
          </Button>
          <Button variant="outline-dark" onClick={() => this.nextSlide(1)}>
            <ChevronRight />
          </Button>
        </div>
      </>
    );
  }
}

Gallery.defaultProps = {
  width: 900,
  height: 600
};

export default Gallery;

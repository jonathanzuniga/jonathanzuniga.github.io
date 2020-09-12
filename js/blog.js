var THREE = require('three');

/**
* Camera
**/

// Specify the portion of the scene visiable at any time (in degrees)
var fieldOfView = 45;

// Specify the camera's aspect ratio
var aspectRatio = window.innerWidth / window.innerHeight;

// Specify the near and far clipping planes. Only objects
// between those planes will be rendered in the scene
// (these values help control the number of items rendered
// at any given time)
var nearPlane = 1;
var farPlane = 200;

// Use the values specified above to create a camera
var camera = new THREE.PerspectiveCamera(
  fieldOfView, aspectRatio, nearPlane, farPlane
);

// Finally, set the camera's position in the z-dimension
camera.position.z = 200;


/**
* three.map.control
**/

// To turn on a map-like navigation:
var createPanZoom = require("three.map.control");

// We assume that three.js scene is hosted inside DOM element `container`
var container = document.getElementById("container");
var panZoom = createPanZoom(camera, container);

// That's it. panZoom wil now listen to events from `container`. You can pan and
// zoom with your mouse or fingers (on touch device)

// If you want to dispose three.js scene, make sure to call:
// panZoom.dispose();

/**
* Renderer
**/

// Create the canvas with a renderer
var renderer = new THREE.WebGLRenderer({antialias: false});

// Add support for retina displays
renderer.setPixelRatio(window.devicePixelRatio);

// Specify the size of the canvas
renderer.setSize( window.innerWidth, window.innerHeight );

// Add the canvas to the DOM
container.appendChild( renderer.domElement );

/**
* Images
**/

// Create a texture loader so we can load our image file
var loader = new THREE.TextureLoader();

// Load an image file into a custom material
var material = new THREE.MeshBasicMaterial({
  map: loader.load('../images/posts/2020/all.png')
});

/*
To build a custom geometry, we'll use the THREE.Geometry() class, which is the base class for most higher-order geometries
*/

var geometry = new THREE.Geometry();

/*
Now we need to push some vertices into that geometry to identify the coordinates the geometry should cover
*/

// Create a helper function that returns an int {-700,700}.
// We'll use this function to set each subimage's x and
// y coordinate positions
function getRandomInt() {
  var val = Math.random() * 700;
  return Math.random() > 0.5
    ? -val
    : val;
}

// Identify the subimage size in px
var image = {width: 683, height: 384};
const cols = 2;
const rows = 1;
const total = cols * rows;

// Identify the total number of cols & rows in the image atlas
var atlas = {width: image.width * cols, height: image.height * rows, cols, rows};

// For each of the 100 subimages in the montage, add four
// vertices (one for each corner), in the following order:
// lower left, lower right, upper right, upper left
for (var i=0; i < total; i++) {

  // Create x, y, z coords for this subimage
  var coords = {
    x: 0, //getRandomInt(),
    y: 0, //getRandomInt(),
    z: 0
  };

  geometry.vertices.push(
    new THREE.Vector3(
      coords.x,
      coords.y,
      coords.z
    ),
    new THREE.Vector3(
      coords.x + image.width,
      coords.y,
      coords.z
    ),
    new THREE.Vector3(
      coords.x + image.width,
      coords.y + image.height,
      coords.z
    ),
    new THREE.Vector3(
      coords.x,
      coords.y + image.height,
      coords.z
    )
  );

  // Add the first face (the lower-right triangle)
  var faceOne = new THREE.Face3(
    geometry.vertices.length-4,
    geometry.vertices.length-3,
    geometry.vertices.length-2
  )

  // Add the second face (the upper-left triangle)
  var faceTwo = new THREE.Face3(
    geometry.vertices.length-4,
    geometry.vertices.length-2,
    geometry.vertices.length-1
  )

  // Add those faces to the geometry
  geometry.faces.push(faceOne, faceTwo);

  // Identify this subimage's offset in the x dimension
  // An xOffset of 0 means the subimage starts flush with
  // the left-hand edge of the atlas
  var xOffset = (i % cols) * (image.width / atlas.width);

  // Identify this subimage's offset in the y dimension
  // A yOffset of 0 means the subimage starts flush with
  // the bottom edge of the atlas
  var yOffset = Math.floor(i / cols) * (image.height / atlas.height);

  // Use the xOffset and yOffset (and the knowledge that
  // each row and column contains only 10 images) to specify
  // the regions of the current image
  geometry.faceVertexUvs[0].push([
    new THREE.Vector2(xOffset, yOffset),
    new THREE.Vector2(xOffset+0.5, yOffset),
    new THREE.Vector2(xOffset+0.5, yOffset+1)
  ]);

  // Map the region of the image described by the lower-left,
  // upper-right, and upper-left vertices to `faceTwo`
  geometry.faceVertexUvs[0].push([
    new THREE.Vector2(xOffset, yOffset),
    new THREE.Vector2(xOffset+0.5, yOffset+1),
    new THREE.Vector2(xOffset, yOffset+1)
  ]);
}

// Combine our image geometry and material into a mesh
var mesh = new THREE.Mesh(geometry, material);

// Set the position of the image mesh in the x,y,z dimensions
mesh.position.set(0,0,0)

// Create the scene and a camera to view it
var scene = new THREE.Scene();

// Add the image to the scene
scene.add(mesh);
scene.background = new THREE.Color(0xffffff);

/**
* Render!
**/

// The main animation function that re-renders the scene each animation frame
function animate() {
requestAnimationFrame( animate );
  renderer.render( scene, camera );
}
animate();

import * as THREE from "three";
import { IcosahedronGeometry } from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js"

// Spencer's code

const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(w, h)
document.body.appendChild(renderer.domElement);
const fov = 75;
const aspect = w / h
const near = 0.1;
const far = 10
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;
const scene = new THREE.Scene()


const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true;
controls.dampingFactor = 0.03;

fetch('http://localhost:5000/api/model_info')
  .then(response => {
    // Log the response to check if it’s valid
    console.log('Server response:', response);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();})
  .then(data => {
    // Use the fetched data to update the Three.js sphere
    console.log('Fetched data:', data);
    controls.dampingFactor = (data[0]["amount"]);
  })
  .catch(error => console.error('Error fetching data:', error));

const geo = new THREE.IcosahedronGeometry(1.0, 2);
const mat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    flatShading: true
});
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

const wireMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true
});

const wireMesh = new THREE.Mesh(geo, wireMat);
wireMesh.scale.setScalar(1.001);
mesh.add(wireMesh);

const hemiLight = new THREE.HemisphereLight(0x0099ff, 0xaa5500)
scene.add(hemiLight)

function animate(t = 0) {
    requestAnimationFrame(animate);
    // mesh.rotation.y = t * 0.0001;
    renderer.render(scene, camera)
    controls.update();
}
animate();
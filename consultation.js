function showForm() {
    document.getElementById('contactForm').style.display = 'block';
}

// Three.js setup
const container = document.getElementById('chart-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Create 3D bars
const bars = [];
const barData = [
    { height: 2, color: 0x64ffda },
    { height: 1.5, color: 0x48c9b0 },
    { height: 2.5, color: 0x1abc9c }
];

barData.forEach((data, index) => {
    const geometry = new THREE.BoxGeometry(0.5, data.height, 0.5);
    const material = new THREE.MeshPhongMaterial({ color: data.color });
    const bar = new THREE.Mesh(geometry, material);
    bar.position.x = index * 1 - 1;
    bar.position.y = data.height / 2;
    bars.push(bar);
    scene.add(bar);
});

// Add lights
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040));

camera.position.z = 5;
camera.position.y = 2;

// Animation
function animate() {
    requestAnimationFrame(animate);
    
    bars.forEach(bar => {
        bar.rotation.y += 0.01;
    });
    
    renderer.render(scene, camera);
}

animate();

// Responsive resize
window.addEventListener('resize', () => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
});
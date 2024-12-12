        // Three.js Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, 400);
        document.getElementById('canvas3d').appendChild(renderer.domElement);

        // Create 3D Objects
        const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
        const material = new THREE.MeshPhongMaterial({ 
            color: 0x00ff00,
            wireframe: true
        });
        const torusKnot = new THREE.Mesh(geometry, material);
        scene.add(torusKnot);

        // Lighting
        const light = new THREE.PointLight(0xffffff, 1, 100);
        light.position.set(10, 10, 10);
        scene.add(light);

        camera.position.z = 30;

        // Animation
        function animate() {
            requestAnimationFrame(animate);
            torusKnot.rotation.x += 0.01;
            torusKnot.rotation.y += 0.01;
            renderer.render(scene, camera);
        }
        animate();

        // Responsive canvas
        window.addEventListener('resize', onWindowResize, false);
        function onWindowResize() {
            camera.aspect = window.innerWidth / 400;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, 400);
        }

        // Create charts using canvas
        function createChart(containerId, data) {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const container = document.getElementById(containerId);
            
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;
            container.appendChild(canvas);

            // Simple animated chart
            let progress = 0;
            function drawChart() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                ctx.strokeStyle = '#4CAF50';
                ctx.lineWidth = 2;
                
                for(let i = 0; i < progress; i++) {
                    ctx.lineTo(i * (canvas.width/100), 
                              canvas.height/2 + Math.sin(i/10) * 50);
                }
                ctx.stroke();
                
                if(progress < 100) {
                    progress++;
                    requestAnimationFrame(drawChart);
                }
            }
            drawChart();
        }

        // Initialize charts
        createChart('dataChart');
        createChart('predictChart');
        createChart('processChart');
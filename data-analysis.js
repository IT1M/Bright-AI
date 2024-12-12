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

 // Create Workflow Chart
 function createWorkflowChart() {
     const svg = document.getElementById('workflow-svg');
     const width = 800;
     const height = 250;

     // Define the workflow stages
     const stages = [
         {
             id: 1,
             title: "جمع البيانات",
             x: 680,
             y: 125,
             color: "#64ffda",
             details: "جمع وتنظيم البيانات من مصادر متعددة وتقييم جودتها"
         },
         {
             id: 2,
             title: "معالجة البيانات",
             x: 520,
             y: 125,
             color: "#64d8ff",
             details: "تنظيف وتحويل البيانات إلى صيغة مناسبة للتحليل"
         },
         {
             id: 3,
             title: "تحليل متقدم",
             x: 360,
             y: 125,
             color: "#64b5ff",
             details: "تطبيق خوارزميات الذكاء الاصطناعي والتعلم الآلي"
         },
         {
             id: 4,
             title: "النتائج والتوصيات",
             x: 200,
             y: 125,
             color: "#6495ff",
             details: "استخلاص النتائج وتقديم التوصيات العملية"
         }
     ];

     // Create arrowhead marker
     const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
     const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
     marker.setAttribute("id", "arrowhead");
     marker.setAttribute("markerWidth", "10");
     marker.setAttribute("markerHeight", "7");
     marker.setAttribute("refX", "1");
     marker.setAttribute("refY", "3.5");
     marker.setAttribute("orient", "auto");
     const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
     polygon.setAttribute("points", "10 0, 0 3.5, 10 7");
     polygon.setAttribute("fill", "#64ffda");
     marker.appendChild(polygon);
     defs.appendChild(marker);
     svg.appendChild(defs);

     // Create detail popup div
     const detailsDiv = document.createElement('div');
     detailsDiv.className = 'node-details';
     document.body.appendChild(detailsDiv);

     // Draw connecting arrows
     stages.forEach((stage, index) => {
         if (index > 0) {
             const prevStage = stages[index - 1];
             const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
             path.setAttribute("class", "workflow-arrow");
             path.setAttribute("d", `M${stage.x + 60} ${stage.y} L${prevStage.x - 60} ${prevStage.y}`);
             svg.appendChild(path);
         }
     });

     // Draw nodes
     stages.forEach(stage => {
         const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
         group.setAttribute("class", "workflow-node");

         const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
         circle.setAttribute("cx", stage.x);
         circle.setAttribute("cy", stage.y);
         circle.setAttribute("r", "50");
         circle.setAttribute("fill", stage.color);

         const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
         text.setAttribute("class", "workflow-text");
         text.setAttribute("x", stage.x);
         text.setAttribute("y", stage.y);

         // Split text into multiple lines
         const words = stage.title.split(' ');
         if (words.length > 1) {
             words.forEach((word, i) => {
                 const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                 tspan.textContent = word;
                 tspan.setAttribute("x", stage.x);
                 tspan.setAttribute("dy", i === 0 ? "-0.5em" : "1.2em");
                 text.appendChild(tspan);
             });
         } else {
             text.textContent = stage.title;
         }

         group.appendChild(circle);
         group.appendChild(text);

         // Add hover interactions
         group.addEventListener('mouseover', (e) => {
             detailsDiv.style.display = 'block';
             detailsDiv.textContent = stage.details;
             detailsDiv.style.left = e.pageX + 10 + 'px';
             detailsDiv.style.top = e.pageY + 10 + 'px';
             circle.setAttribute("r", "55");
         });

         group.addEventListener('mouseout', () => {
             detailsDiv.style.display = 'none';
             circle.setAttribute("r", "50");
         });

         group.addEventListener('mousemove', (e) => {
             detailsDiv.style.left = e.pageX + 10 + 'px';
             detailsDiv.style.top = e.pageY + 10 + 'px';
         });

         svg.appendChild(group);
     });
 }

 // Initialize the chart when the page loads
 window.addEventListener('load', createWorkflowChart);

 // تحليل البيانات التنبؤية
 const predictionCtx = document.getElementById('predictionChart').getContext('2d');
 const predictionChart = new Chart(predictionCtx, {
     type: 'line',
     data: {
         labels: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو'],
         datasets: [{
             label: 'المبيعات المتوقعة',
             data: [12, 19, 3, 5, 2, 3, 15],
             backgroundColor: 'rgba(75, 192, 192, 0.2)',
             borderColor: 'rgba(75, 192, 192, 1)',
             borderWidth: 1
         }]
     },
     options: {
         scales: {
             y: {
                 beginAtZero: true
             }
         }
     }
 });

 // تحليل سلوك العملاء
 const customerBehaviorCtx = document.getElementById('customerBehaviorChart').getContext('2d');
 const customerBehaviorChart = new Chart(customerBehaviorCtx, {
     type: 'bar',
     data: {
         labels: ['منتج A', 'منتج B', 'منتج C', 'منتج D', 'منتج E'],
         datasets: [{
             label: 'عدد المشتريات',
             data: [12, 19, 3, 5, 2],
             backgroundColor: [
                 'rgba(255, 99, 132, 0.2)',
                 'rgba(54, 162, 235, 0.2)',
                 'rgba(255, 206, 86, 0.2)',
                 'rgba(75, 192, 192, 0.2)',
                 'rgba(153, 102, 255, 0.2)'
             ],
             borderColor: [
                 'rgba(255, 99, 132, 1)',
                 'rgba(54, 162, 235, 1)',
                 'rgba(255, 206, 86, 1)',
                 'rgba(75, 192, 192, 1)',
                 'rgba(153, 102, 255, 1)'
             ],
             borderWidth: 1
         }]
     },
     options: {
         scales: {
             y: {
                 beginAtZero: true
             }
         }
     }
 });
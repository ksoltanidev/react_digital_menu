import React, { useRef, useEffect } from "react";
import * as THREE from 'three';

function ThreeScene() {
    const canvasRef = useRef(null);

    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    useEffect(() => {
        if (!canvasRef.current.children[0]) {
            // === THREE.JS CODE START ===
            var scene = new THREE.Scene();
            var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            var renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            canvasRef.current.appendChild(renderer.domElement);

            var geometry = new THREE.SphereGeometry(1,16,12);
            var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
            var cube = new THREE.Mesh(geometry, material);
            scene.add(cube);
            camera.position.z = 5;
            var animate = function () {
                requestAnimationFrame(animate);
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
                renderer.render(scene, camera);
            };
            animate();

            const handleResize = () => {
                    sizes.width = window.innerWidth;
                    sizes.height = window.innerHeight;
                    camera.aspect = sizes.width / sizes.height;
                    camera.updateProjectionMatrix();
                    renderer.setSize(sizes.width, sizes.height);
                    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            }
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
              };
        }
    })

    return (
        <div ref={canvasRef}>

        </div>
    )
}

export default ThreeScene;
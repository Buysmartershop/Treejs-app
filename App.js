// Importieren der benötigten Tree.js-Module
import * as THREE from 'three';

// Initialisierung der Szene, der Kamera und des Rendrers
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Erstellen des Charaktermodells (z.B. eine einfache Box)
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const character = new THREE.Mesh(geometry, material);
scene.add(character);

// Setzen der Anfangsposition des Charakters
character.position.set(0, 0, -5);

// Funktion zur Behandlung der Tastatureingabe für die Bewegung des Charakters
function handleKeyDown(event) {
    const speed = 0.1; // Geschwindigkeit der Bewegung

    switch(event.key) {
        case 'ArrowUp':
            character.position.z += speed;
            break;
        case 'ArrowDown':
            character.position.z -= speed;
            break;
        case 'ArrowLeft':
            character.position.x -= speed;
            break;
        case 'ArrowRight':
            character.position.x += speed;
            break;
    }
}

// Hinzufügen des Event Listeners für die Tastatureingabe
window.addEventListener('keydown', handleKeyDown);

// Funktion zum Rendern der Szene
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Aufruf der animate Funktion, um die Szene zu rendern
animate();

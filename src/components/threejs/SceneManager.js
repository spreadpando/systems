import * as THREE from 'three';
import SceneSubject from './SceneSubject';
import GeneralLights from './GeneralLights';
import {
    points
} from "./SceneSubject";
import {
    EventBus
} from '../..';

export default canvas => {
    var intersectArray = [];
    var intersects = [];
    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2(),
        INTERSECTED;
    const clock = new THREE.Clock();
    const origin = new THREE.Vector3(0, 0, 0);
    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }
    const mousePosition = {
        x: 0,
        y: 0
    }
    const scene = buildScene();
    const renderer = buildRender(screenDimensions);
    const camera = buildCamera(screenDimensions);
    const sceneSubjects = createSceneSubjects(scene);

    function buildScene() {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color("#FFF");
        return scene;
    }

    function buildRender({
        width,
        height
    }) {
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true
        });
        const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
        renderer.setPixelRatio(DPR);
        renderer.setSize(width, height);
        renderer.gammaInput = true;
        renderer.gammaOutput = true;
        return renderer;
    }

    function buildCamera({
        width,
        height
    }) {
        const aspectRatio = width / height;
        const fieldOfView = 30;
        const nearPlane = 4;
        const farPlane = 1000;
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
        camera.position.z = 60;
        return camera;
    }

    function createSceneSubjects(scene) {
        const sceneSubjects = [
            new GeneralLights(scene),
            new SceneSubject(scene)
        ];
        for (let i = 0; i < points.length; i++) {
            intersectArray.push(scene.children[2].children[0].children[i].children[0])
        };

        return sceneSubjects;

    }

    function update() {
        const elapsedTime = clock.getElapsedTime();

        for (let i = 0; i < sceneSubjects.length; i++)
            sceneSubjects[i].update(elapsedTime);

        updateCameraPositionRelativeToMouse();

        renderer.render(scene, camera);

    }




    function onWindowResize() {
        const {
            width,
            height
        } = canvas;

        screenDimensions.width = width;
        screenDimensions.height = height;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
    }

    function updateCameraPositionRelativeToMouse() {

        camera.position.x += ((mousePosition.x * 30) - 0.7 * camera.position.x) * 0.1;
        camera.position.y += (-(mousePosition.y * 30) - 0.7 * camera.position.y) * 0.1;
        camera.lookAt(origin);


    }



    function onMouseMove(x, y) {
        mousePosition.x = x / screenDimensions.width;
        mousePosition.y = y / screenDimensions.height;
        mouse.x = (mousePosition.x) * 2 - 1;
        mouse.y = -(mousePosition.y) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        intersects = raycaster.intersectObjects(intersectArray);

        if (intersects.length > 0) {

            if (INTERSECTED != intersects[0].object) {
                if (INTERSECTED) INTERSECTED.material.color.setHex(INTERSECTED.currentHex);
                INTERSECTED = intersects[0].object;
                INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
                INTERSECTED.material.color.setHex(0xfa2222);
            }
        } else {
            if (INTERSECTED) INTERSECTED.material.color.setHex(INTERSECTED.currentHex);
            INTERSECTED = null;

        }
    }

    function onMouseClick(event) {
        if (intersects.length > 0) {
            EventBus.fire(intersects[0].object.name);
        }
    }



    return {
        update,
        onWindowResize,
        onMouseMove,
        onMouseClick
    }
}

/*
const mouse = new THREE.Vector2(),
    INTERSECTED;
const raycaster = new THREE.Raycaster();

raycaster.setFromCamera(mouse, camera);
var intersects = raycaster.intersectObjects(scene.children, true);
if (intersects.length > 0) {
    if (INTERSECTED != intersects[0].object) {
        if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
        INTERSECTED = intersects[0].object;
        INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
        INTERSECTED.material.emissive.setHex(0xff0000);
    }
} else {
    if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
    INTERSECTED = null;
}
*/
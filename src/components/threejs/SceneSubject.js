import * as THREE from 'three';
import {
    areComponentsEqual
} from 'react-hot-loader';
import threeEntryPoint from './threeEntryPoint';
export const points = ["UXD", "AUDIO", "VISUAL", "C.V.", "DEV", "P.R."];
export default scene => {
    var group = new THREE.Group;
    var banners = new THREE.Group;
    var starsGeometry = new THREE.Geometry();
    for (var i = 0; i < points.length; i++) {
        var starGeometry = new THREE.Geometry();
        var canvas = document.createElement("canvas");
        var size = 1024;
        canvas.width = size;
        canvas.height = size;
        var context1 = canvas.getContext('2d');
        context1.fillStyle = "#000000";
        context1.textAlign = "left";
        context1.font = "normal 195px Cutive Mono, monospace";
        context1.fillText(points[i], size / 4, size / 3);
        var texture1 = new THREE.Texture(canvas);
        texture1.needsUpdate = true;
        var star = new THREE.Vector3();
        star.x = THREE.Math.randFloatSpread(20) * 1.2;
        star.y = THREE.Math.randFloatSpread(20) + 10;
        star.z = THREE.Math.randFloatSpread(20) * 1.2;
        starGeometry.vertices.push(star);
        starsGeometry.vertices.push(star);
        var textMaterial = new THREE.PointsMaterial({
            size: 10,
            map: texture1,
            depthTest: false,
            transparent: true
        });
        var pointMaterial = new THREE.PointsMaterial({
            size: 1.7,
            color: 0x000000,
            depthTest: true,
            transparent: true,
            //colorsneedsUpdate: true
        });
        var bulletPoint = new THREE.Points(starGeometry, pointMaterial);
        var banner = new THREE.Points(starGeometry, textMaterial);

        switch (i) {
            case i:
                bulletPoint.name = points[i];
                break;
        }
        banner.add(bulletPoint)

        banners.add(banner);
    }
    group.add(banners);
    var lineMaterial = new THREE.LineBasicMaterial({
        color: 0x000000,
        depthTest: true,
        opacity: 0.2,
        transparent: true
    });
    var line = new THREE.LineLoop(starsGeometry, lineMaterial);
    group.add(line);
    scene.add(group);

    function update(time) {
        //group.rotation.x += Math.random() * 0.005;
        group.rotation.y += Math.random() * 0.005;
        // group.rotation.z += Math.random() * 0.005;
    }
    return {
        update,

    }
}





/*
export default scene => {
    var points = ["_background", "_project", "_cv", "_contact", "_info"];
    var starsGeometry = new THREE.Geometry;
    var group = new THREE.Group;


    for (var i = 0; i < points.length; i++) {
        var starGeometry = new THREE.Geometry();
        var canvas = document.createElement("canvas");
        var size = 512;
        canvas.width = size;
        canvas.height = size;
        var context1 = canvas.getContext('2d');
        context1.fillStyle = "#000000";
        context1.textAlign = "left";
        context1.font = "50px courier";
        context1.fillText(points[i], size / 4, size / 4);
        var texture1 = new THREE.Texture(canvas);
        texture1.needsUpdate = true;
        var star = new THREE.Vector3();
        star.x = THREE.Math.randFloatSpread(7);
        star.y = THREE.Math.randFloatSpread(7);
        star.z = THREE.Math.randFloatSpread(7);
        starGeometry.vertices.push(star);
        starsGeometry.vertices.push(star);
        var textMaterial = new THREE.PointsMaterial({
            size: 10,
            map: texture1,
            depthTest: false,
            transparent: true
        });

        var banner = new THREE.Points(starGeometry, textMaterial);
        switch (i) {
            case 0:
                banner.userData = {
                    URL: "div1"
                };
                break;
            case 1:
                banner.userData = {
                    URL: "div2"
                };
                break;
            case 2:
                banner.userData = {
                    URL: "div3"
                };
                break;
            case 3:
                banner.userData = {
                    URL: "div4"
                };
                break;
            case 4:
                banner.userData = {
                    URL: "div5"
                };
                break;
        }
        group.add(banner);
    }
    var bullet = new THREE.PointsMaterial({
        color: 0x000000,
        size: .1,
        depthTest: true,
        fog: false,
    });
    var bulletPoint = new THREE.Points(starsGeometry, bullet);

    var lineMaterial = new THREE.LineBasicMaterial({
        color: 0x0000ff,
        depthTest: true,
        opacity: 1.0,
        transparent: true
    });

    var line = new THREE.Line(starsGeometry, lineMaterial);
    group.add(bulletPoint);
    group.add(line);
    scene.add(group);


    function update(time) {
        group.rotation.x += 0.005
        group.rotation.y += 0.003


    }
    return {
        update,

    }
}


*/





/*
export default scene => {
    var starsGeometry = new THREE.Geometry();
    var size = 400; // CHANGED
    var canvas1 = document.createElement('canvas');
    canvas1.width = size;
    canvas1.height = size;
    var context1 = canvas1.getContext('2d');
    context1.fillStyle = '#000000'; // CHANGED
    context1.textAlign = 'center';
    context1.font = '70px courier';
    context1.fillText("some text", size / 2, size / 2);
    var texture1 = new THREE.Texture(canvas1);
    texture1.needsUpdate = true;

    for (var i = 0; i < 20; i++) {
        var star = new THREE.Vector3();
        star.x = THREE.Math.randFloatSpread(60);
        star.y = THREE.Math.randFloatSpread(60);
        star.z = THREE.Math.randFloatSpread(60);
        starsGeometry.vertices.push(star);

    }
    var starsMaterial = new THREE.PointsMaterial({
        size: 10,
        map: texture1,
        depthTest: false,
        transparent: true
    });


    var starField = new THREE.Points(starsGeometry, starsMaterial);
    var line = new THREE.Line(starsGeometry);
    line.material.depthTest = false;
    line.material.opacity = 1.0;
    line.material.transparent = true;
    var lines = new THREE.LineSegments(starsGeometry);
    lines.material.depthTest = false;
    lines.material.opacity = 1.0;
    lines.material.transparent = true;

    starField.add(line);
    starField.add(lines);

    scene.add(starField);

    //
    function update(time) {
        starField.rotation.x += 0.001;
        starField.rotation.y += 0.002;


    }
    return {
        update
    }
}*/

/* import alphaTexture from '../../assets/textures/stripes_gradient.jpg';
export default scene => {
    const group = new THREE.Group();

    const subjectGeometry = deformGeometry(new THREE.TetrahedronGeometry(10, 1));


    const subjectMaterial = new THREE.MeshStandardMaterial({
        color: "#000",
        transparent: true,
        side: THREE.DoubleSide,
        alphaTest: 1
    });
    subjectMaterial.alphaMap = new THREE.TextureLoader().load(alphaTexture);
    subjectMaterial.alphaMap.magFilter = THREE.NearestFilter;
    subjectMaterial.alphaMap.wrapT = THREE.RepeatWrapping;
    subjectMaterial.alphaMap.repeat.y = 1;

    const subjectMesh = new THREE.Mesh(subjectGeometry, subjectMaterial);

    const subjectWireframe = new THREE.LineSegments(
        new THREE.EdgesGeometry(subjectGeometry),
        new THREE.LineBasicMaterial({
            color: 0x000000
        }));

    group.add(subjectMesh);
    group.add(subjectWireframe);
    scene.add(group);

    group.rotation.z = Math.PI / 4;

    const speed = 0.02;
    const textureOffsetSpeed = 0.02;

    function deformGeometry(geometry) {
        for (let i = 0; i < geometry.vertices.length; i += 2) {
            const scalar = 1 + Math.random() * 0.7;
            geometry.vertices[i].multiplyScalar(scalar)
        }

        return geometry;
    }

    function update(time) {
        const angle = time * speed;

        group.rotation.y = angle;

        subjectMaterial.alphaMap.offset.y = 0.55 + time * textureOffsetSpeed;

        subjectWireframe.material.color.setHSL(Math.sin(angle * 2), 0.5, 0.5);

        const scale = (Math.sin(angle * 8) + 6.4) / 5;
        subjectWireframe.scale.set(scale, scale, scale)
    }

    return {
        update
    }
} */
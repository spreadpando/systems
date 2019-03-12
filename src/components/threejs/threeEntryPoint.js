import SceneManager from './SceneManager';

export default container => {
    const canvas = createCanvas(document, container);
    const sceneManager = new SceneManager(canvas);
    bindEventListeners();
    render();

    function createCanvas(document, container) {
        const canvas = document.createElement('canvas');
        container.appendChild(canvas);
        return canvas;
    }

    function bindEventListeners() {
        window.onresize = resizeCanvas;
        window.onmousemove = mouseMove;
        window.onclick = mouseClick;
        resizeCanvas();
    }

    function resizeCanvas() {
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.position = 'absolute';
        canvas.style.top = '0px';
        canvas.style.left = '0px';
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        sceneManager.onWindowResize()
    }


    function mouseMove({
        pageX,
        pageY
    }) {
        sceneManager.onMouseMove(pageX, pageY);
    }

    function mouseClick(event) {
        sceneManager.onMouseClick(event);

    }

    function render(time) {
        requestAnimationFrame(render);
        sceneManager.update();






    }
}
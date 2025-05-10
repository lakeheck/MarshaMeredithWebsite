import { Fluid } from "./Fluid.js";
import { WeatherGUI } from "./WeatherGUI.js";
import { config } from "./config.js";

let canvas;
let gl;
let fluid;
let weatherGUI;

function start() {
    canvas = document.getElementById('glCanvas');
    gl = canvas.getContext('webgl2');
    if (!gl) {
        alert('WebGL2 not supported');
        return;
    }

    fluid = new Fluid(gl);
    weatherGUI = new WeatherGUI(fluid);
    weatherGUI.start();

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', updateMouse);
    window.addEventListener('touchmove', updateTouch);
    window.addEventListener('keydown', updateKey);
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);
    fluid.resize();
}

function updateMouse(e) {
    let posX = e.clientX;
    let posY = e.clientY;
    let cRect = canvas.getBoundingClientRect();
    let canvasX = posX - cRect.left;
    let canvasY = posY - cRect.top;
    let relativeX = canvasX / canvas.width;
    let relativeY = 1.0 - (canvasY / canvas.height);
    fluid.splat(relativeX, relativeY, 0.5, 0.5, 0.5, 1.0);
}

function updateTouch(e) {
    e.preventDefault();
    let touches = e.targetTouches;
    for (let i = 0; i < touches.length; i++) {
        let posX = touches[i].pageX;
        let posY = touches[i].pageY;
        let cRect = canvas.getBoundingClientRect();
        let canvasX = posX - cRect.left;
        let canvasY = posY - cRect.top;
        let relativeX = canvasX / canvas.width;
        let relativeY = 1.0 - (canvasY / canvas.height);
        fluid.splat(relativeX, relativeY, 0.5, 0.5, 0.5, 1.0);
    }
}

function updateKey(e) {
    if (e.key === ' ') {
        fluid.multipleSplats(parseInt(Math.random() * 20) + 5);
    }
}

// Example of how to update weather data from external source
function updateWeatherData(weatherData) {
    fluid.weatherData = weatherData;
    weatherGUI.updateWeatherData(weatherData);
}

// Start the application
start(); 
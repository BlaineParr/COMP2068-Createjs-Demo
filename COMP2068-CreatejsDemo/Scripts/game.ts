var canvas;
var stage: createjs.Stage;

function init() {
    canvas = document.getElementById("game");
    stage = new createjs.Stage(canvas);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    main();
} //function init ends

function gameLoop() {
    stage.update();
} //function gameLoop ends

function main() {
    var helloText = new createjs.Text("Hello World!", "40px Arial", "#000000");
    stage.addChild(helloText);
} //funtion main ends
var leerposicionx = ""
var leerposiciony = ""

function setup(){
canvas = createCanvas(400,400)
canvas.center()
video = createCapture(VIDEO)
video.size(400,400)
video.hide()
modelo = ml5.poseNet(video,modeloCargado)
modelo.on("pose",gotPoses)
}
function draw(){
image(video, 0,0,400,400)
image(filtro, leerposicionx, leerposiciony, 130, 50)
fill("green")
stroke("yellow")
rect(18, 235, 20, 150)
rect(18, 55, 20, 150)
rect(362, 235, 20, 150)
rect(362, 55, 20, 150)
rect(65, 360, 100, 20)
rect(235, 360, 100, 20)
rect(65, 15, 100, 20)
rect(235, 15, 100, 20)
}
function preload(){
    filtro = loadImage("Bigote.png")
}
function modeloCargado(){
    console.log("Tu modelo ha sido cargado")
}
function gotPoses(results){
if(results.length > 0){
    console.log(results)
    leerposicionx = results[0].pose.nose.x-60
    leerposiciony = results[0].pose.nose.y-0
}
}
function Tomarfoto(){
    save("foto_filtro.png")
}
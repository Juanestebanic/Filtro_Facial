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
image(filtro, leerposicionx, leerposiciony, 120, 100)
fill("black")
stroke("blue")
circle(28, 370, 40)
circle(200, 370, 40)
circle(372, 370, 40)
circle(28, 28, 40)
circle(200, 28, 40)
circle(372, 28, 40)
circle(28, 200, 40)
circle(372, 200, 40)
fill("white")
stroke("yellow")
rect(18, 235, 20, 100)
rect(18, 65, 20, 100)
rect(362, 235, 20, 100)
rect(362, 65, 20, 100)
rect(65, 360, 100, 20)
rect(235, 360, 100, 20)
rect(65, 15, 100, 20)
rect(235, 15, 100, 20)
}
function preload(){
    filtro = loadImage("Lentes.png")
}
function modeloCargado(){
    console.log("Tu modelo ha sido cargado")
}
function gotPoses(results){
if(results.length > 0){
    console.log(results)
    leerposicionx = results[0].pose.nose.x-60
    leerposiciony = results[0].pose.nose.y-75
}
}
function Tomarfoto(){
    save("foto_filtro.png")
}
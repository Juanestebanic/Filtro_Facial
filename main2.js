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
image(filtro, leerposicionx, leerposiciony, 200, 180)
fill("brown")
stroke("black")

rect(150, 390, 100, 20)

rect(150, 0, 100, 15)

rect(0, 150, 15, 100)

rect(385, 150, 15, 100)

fill("red")
stroke("white")

circle(0, 0, 50)

circle(400, 400, 50)

circle(400, 0, 50)

circle(0, 400, 50)
}
function preload(){
    filtro = loadImage("Sombrero.png")
}
function modeloCargado(){
    console.log("Tu modelo ha sido cargado")
}
function gotPoses(results){
if(results.length > 0){
    console.log(results)
    leerposicionx = results[0].pose.nose.x-100
    leerposiciony = results[0].pose.nose.y-200
}
}
function Tomarfoto(){
    save("foto_filtro.png")
}
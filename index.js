const canvas = document.getElementById("canvas")
const screen = canvas.getContext("2d")

window.addEventListener("resize", setScreenSize)

window.requestAnimationFrame(gameLoop)

let x = 40
let y = 15
let absX
let absY
let width = 10
let height = 10
setScreenSize()

function draw() {
	screen.fillStyle = "#FFFF00"
	screen.fillRect(absX-(width/2), absY-(height/2), width, height)
}

function gameLoop() {
	draw()
	window.requestAnimationFrame(gameLoop)
}

function setScreenSize(){
	canvas.width = window.innerWidth * 0.9
	canvas.height = canvas.width / 2.031
	screen.fillStyle = "palevioletred"
	screen.fillRect(0, 0, canvas.width, canvas.height)
	console.log("W:", canvas.width, "H:", canvas.height)
	// x = canvas.width / 2
	// y = canvas.height / 2
	// console.log( "0,0", map(0,0), x,y )
	absX = map(x,y).x
	absY = map(x,y).y
}

function map(x, y){ 
	let newX = ((x+50)/100) * canvas.width
	let newY = ((y+50)/100) * canvas.height
	return {x:newX, y:newY}
}


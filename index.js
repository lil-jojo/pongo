const canvas = document.getElementById("canvas")
const screen = canvas.getContext("2d")

window.addEventListener("resize", setScreenSize)

window.requestAnimationFrame(gameLoop)

let x
let y
let width = 10
let height = 10
setScreenSize()

function draw() {
	screen.fillStyle = "#FFFF00"
	screen.fillRect(x, y, width, height)
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
	x = canvas.width / 2
	y = canvas.height / 2
}

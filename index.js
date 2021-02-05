const canvas = document.getElementById("canvas")
const display = document.querySelector("h1")
// console.log(typeof display.innerHTML) 

// display.innerHTML
console.log("DISP", display)
const screen = canvas.getContext("2d")

window.addEventListener("resize", setScreenSize)
window.addEventListener("keydown", keydownHandler)
window.addEventListener("keyup", setStateOfMovingToFalse)
window.requestAnimationFrame(gameLoop)

let x = 0
let y = 0
let absX
let absY
let width = 10
let height = 10
let direction = "r"
let moving = false
let speed = 50/2/1000 // how many units to move per millisecond
let lastFrameTime = performance.now()
setScreenSize()



function draw() {
	screen.fillStyle = "yellow"
	screen.fillRect(0, 0, canvas.width, canvas.height)
	screen.fillStyle = "DeepPink"
	screen.fillRect(absX-(width/2), absY-(height/2), width, height)
}

function move(el) {

    if (moving) {
		if (direction === "r") { x = x + (speed * el) }
		if (direction === "l") { x = x - (speed * el) }
		if (direction === "d") { y = y + (speed * el) }
		if (direction === "u") { y = y - (speed * el) }
	}

	absX = map(x,y).x
	absY = map(x,y).y
}

function keydownHandler (event){
	console.log(event.key)
	if (event.key === "ArrowUp") {direction = "u"}
	if (event.key === "ArrowRight") {direction = "r"}
	if (event.key === "ArrowLeft") {direction = "l"}
	if (event.key === "ArrowDown") {direction = "d"}
	moving = true
}

function setStateOfMovingToFalse (){
	moving = false
}

function gameLoop() {
	const elapsed = performance.now()-lastFrameTime
	display.innerHTML = elapsed
	// display.innerHTML("underpants")
	move(elapsed)
	draw()
	lastFrameTime = performance.now()
	window.requestAnimationFrame(gameLoop)
}

function setScreenSize(){
	canvas.width = window.innerWidth * 0.9
	canvas.height = canvas.width / 2.031
	screen.fillStyle = "yellow"
	screen.fillRect(0, 0, canvas.width, canvas.height)
	console.log("W:", canvas.width, "H:", canvas.height)
	absX = map(x,y).x
	absY = map(x,y).y
}

function map(x, y){ 
	let newX = ((x+50)/100) * canvas.width
	let newY = ((y+50)/100) * canvas.height
	return {x:newX, y:newY}
}


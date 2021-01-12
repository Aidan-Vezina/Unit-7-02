// if it bounces off of the top at 80px
// while going right
// makes it in the bottom right

// if it bounces off of the bottom at 80px
// while going right
// makes it in the top right

// if it bounces off of the bottom at 370px
// while going left
// makes it in the top left

// if it bounces off of the top at 370px
// while going left
// makes it in the bottom left

var dvd;
var colora = 0;
var x = (Math.floor((Math.random() * 340) / 10) * 10)+40
var y = (Math.floor((Math.random() * 340) / 10) * 10)+40
var xs = x
var ys = y
var xvel = 0
var yvel = 0
var wallBounces = 0
var cornerBounces = 0
var hit = false
var lastCorner = "NaN";
var dirChoices = [-1,1]
var lists
var lastWallX = x
var lastWallY = y
var trailx = []
var traily = []
var tracing = false
function setup(){
  createCanvas(500,400)
  var dvdRed = loadImage("images/dvdRed.png")
  var dvdLightBlue = loadImage("images/dvdLightBlue.png")
  var dvdGreen = loadImage("images/dvdGreen.png")
  var dvdYellow = loadImage("images/dvdYellow.png")
  var dvdDarkBlue = loadImage("images/dvdDarkBlue.png")
  var dvdPurple = loadImage("images/dvdPurple.png")
  lists = [dvdLightBlue,dvdRed,dvdYellow,dvdDarkBlue,dvdGreen,dvdPurple]
  dvd = lists[0]
  xvel = dirChoices[Math.floor(Math.random() * 2)]
  yvel = dirChoices[Math.floor(Math.random() * 2)]
}

function draw(){
  dvd = lists[colora]
  background(0)
  stroke(255)
  if(tracing == true)
  for(var i = 0 ; i < trailx.length;i+=1){
    line(trailx[i],traily[i],trailx[i+1],traily[i+1])
  }
  noStroke()
  
  fill(255)
  text("Wall bounces: " + wallBounces,10,20)
  text("Corner bounces: " + cornerBounces,10,40)
  text("Last corner bounce : "+lastCorner+" bounces ago",10,60)
  text("dist from left: "+lastWallX+" dist from top: "+lastWallY,10,80)
  image(dvd,x,y,50,30)
  if(x<=0){
    xvel=-xvel
    wallBounces++
    lastCorner++
    colora++
    lastWallX = x
    lastWallY = y
    updateTrail()
  }if(x>=500-50){
    xvel=-xvel
    wallBounces++
    lastCorner++
    colora++
    lastWallX = x
    lastWallY = y
    updateTrail()
  }if(y<=0){
    yvel=-yvel
    wallBounces++
    lastCorner++
    colora++
    lastWallX = x
    lastWallY = y
    updateTrail()
  }if(y>=400-30){
    yvel=-yvel
    wallBounces++
    lastCorner++
    colora++
    lastWallX = x
    lastWallY = y
    updateTrail()
  }
  if(hit == false){
    checkCornerBounce()
  }
  x += xvel
  y += yvel
  if(colora > 5){
    colora = 0
  }
}
function checkCornerBounce(){
  if(x>=canvas.width-52&&y>=canvas.height-32){
    cornerBounces++
    restart()
  }else if(x<=2&&y<=2){
    cornerBounces++
    restart()
  }else if(x<=2&&y>=canvas.height-32){
    cornerBounces++
    restart()
  }else if(x>=canvas.width-52&&y<=2){
    cornerBounces++
    restart()
  }
}
function restart(){
  x = Math.floor((Math.random() * canvas.width - 50) / 10) * 10
  y = Math.floor((Math.random() * canvas.height - 30) / 10) * 10
  xvel = dirChoices[Math.floor(Math.random() * 2)]
  yvel = dirChoices[Math.floor(Math.random() * 2)]
  lastCorner = 0
  trailx = [x]
  traily = [y]
}
function updateTrail(){
  trailx.push(x+25)
  traily.push(y+15)
}
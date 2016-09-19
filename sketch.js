
var dropzone;
var backgroundColor;
var isOverImage;
var theTeam = [];
var notTheTeam = [];
var numImages = 38;
var notNumImages = 1;
var currentImage = 0;
var randNum = 0;

function preload(){
  for (var i = 0; i < numImages; i++) {
    var imageName = "pro" + (i) + ".jpg";
    theTeam[i] = loadImage("assets/" + imageName);
    println(theTeam);
  }

}
function preload2(){
  for (var j = 0; j < notNumImages; j++) {
    var imageName2 = "notpro" + (j) + ".jpg";
    notTheTeam[j] = loadImage("notTheTeam/" + imageName2);
    
  }
}


function setup() {
  createCanvas(900,700);
  
  
  dropzone = select('#dropzone');
  dropzone.dragOver(highlight);
  dropzone.dragLeave(unhighlight);
  dropzone.drop(gotFile, unhighlight);
  
  //append ( theTeam, img = loadImage("assets/pro1.jpg");
  
  //get image dimensions
  
  img = theTeam[currentImage];
  
}


function draw() {
  background(255);
  
  push();
  
  translate(width/2,height/2)
  imageMode(CENTER);
  image(theTeam[currentImage], 0, 0);
  //image(notTheTeam[0], 0, 0);
  
  textAlign(CENTER);
  textSize(18);
  
  text("MEET THE TEAM!!!", 0, -200);
  
  
  //if(randNum = 1){
  //   textSize(35);
   // text("THAT'S NOT THE TEAM!!!!!", 0, -190);
  //   text("GET BACK TO THE TEAM!!"0, -150)
  //   imageMode(CENTER);
  //   image(notTheTeam[0], 0, 0);
    
  // } else {
    
  //   text("" 0, -190);
  //   //image();
  //}
  //image(img, 0, height/2, img.width/2, img.height/2);
  pop();
  println(mouseX);
  
  if (mouseX >= width/2 - img.width/2 && mouseX <= width/2 + img.width/2 && mouseY >= height/2 - img.height/2 && mouseY <= height/2 + img.height/2){
    isOverImage = true;
  } else {
    isOverImage = false;
  }
  
  
  
}

function gotFile(file) {
  createP(file.name + " " + file.size);
  var img2 = createImg(file.data);
  img2.size(100, 100);
  
}

function highlight() {
  dropzone.style('background-color','#ccc');
}

function unhighlight() {
  dropzone.style('background-color','#fff');
}

function mousePressed() {
  
  // var d = dist(mouseX, mouseY, 0, 0);
  // println("d" + d);
  if (isOverImage == true) {
    println("CLICK");
    currentImage = int(random(38));
    
    
    randNum = int(random(10));
    
    //currentImage++;
    //img = theTeam[1];
  }
  
  pop();
  //if mouse within image parameters, and pressed
}

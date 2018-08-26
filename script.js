var BusImages = function (fileName) {
  this.nameFile = fileName;
  this.totalVotes = 0;

}

var imgs = [];
//how come we dont need he imgs/ folder name bore the name of the .jpg?
imgs.push(new BusImages('bag.jpg'));
imgs.push(new BusImages('banana.jpg'));
imgs.push(new BusImages('boots.jpg'));
imgs.push(new BusImages('chair.jpg'));
imgs.push(new BusImages('cthulhu.jpg'));
imgs.push(new BusImages('dragon.jpg'));
imgs.push(new BusImages('pen.jpg'));
imgs.push(new BusImages('scissors.jpg'));
imgs.push(new BusImages('shark.jpg'));
imgs.push(new BusImages('sweep.jpg'));
imgs.push(new BusImages('unicorn.jpg'));
imgs.push(new BusImages('usb.jpg'));
imgs.push(new BusImages('water_can.jpg'));
imgs.push(new BusImages('wine_glass.jpg'));
// console.log(imgs[1].nameFile);

function addImages() {
  var container = document.getElementById('container');
  //this code clears the images instead of adding more images to it. 
  container.innerText = '';
  var image = document.createElement('img');
  //here we are  delclaring function to only display pics between 1-5 from the array
  var incriment = Math.round(imgs.length / 3); //taking the length and deviding it by 3 need to properly round
  var index = displayRandom(0, incriment);
  image.setAttribute('src', 'imgs/' + imgs[index].nameFile);
  //everytime user clicks on an img tallyImgclick function runs
  image.addEventListener('click', tallyImgClick);
  container.appendChild(image);
  //new image instance
  image = document.createElement('img');
  index = displayRandom(incriment, incriment * 2);
  image.setAttribute('src', 'imgs/' + imgs[index].nameFile);
  image.addEventListener('click', tallyImgClick);
  container.appendChild(image);
  //new image instance
  image = document.createElement('img');
  index = displayRandom(incriment * 2, imgs.length);
  image.setAttribute('src', 'imgs/' + imgs[index].nameFile);
  image.addEventListener('click', tallyImgClick);
  container.appendChild(image);
}

//had to put these two lines in global otherwise a new table would be created for each click and it would mess up gutters
var table = document.createElement('table');
var tr = document.createElement('tr');

function statusBar(){
  var container = document.getElementById('imgClicked');
  var td = document.createElement('td');
  container.appendChild(table);
  table.appendChild(tr);
  tr.appendChild(td);
  
  td.innerText= status + '%';

}

function displayRandom(min, max) {
  return Math.floor((Math.random() * (max - min)) + min);
}

var clicks = 0;
status = 0 ;

//iside this code we collect the file name of the img chose/
function tallyImgClick(event) {
  // var i = 1
  var source = event.target.src.split('/');
  //this grabs the last instance of '/' by using -1
  var sourceName = source[source.length - 1];
  //this stops addImages function once use clicks 14xs
  if(clicks < 14){ 
    // i<8  means that each time an image is clicked i++ is going to run up until i = 7 instead of looping we could run status++; 7 times wich would return the number 7/ if we started statBar=0 because 0 would technically be 1 it would count by incrremnts of 7 so we can do for(statBar=0; statBar<7; statBar++; which would be the same.)  

    // for (statBar=1; statBar<8; statBar++){
    //   status++;
    // }
    status++;
    statusBar();
    clicks++;
    addImages();
    lastPicked();
  }

  function lastPicked (){
    var container= document.getElementById('lastClicked');
    var img = document.createElement('img');
    img.setAttribute('src', 'imgs/' + sourceName);
    container.appendChild(img);
    // image.setAttribute('src', 'imgs/' + imgs[index].nameFile);

  

  }

  for (i = 0; i < imgs.length; i++) {
    if (sourceName === imgs[i].nameFile) {
      console.log(imgs[i].totalVotes++);
      
    }
  }
  console.log(sourceName);
}
//need to come up with function to display top pics that were chosen
function topPics(){
  for(i = 0; i < imgs[i].totalVotes; i++){
    console.log(totalVotes);
  }

  
}
window.addEventListener('load', addImages);
// window.addEventListener('load', statusBar);



  
    
  //  if(sourceName = jpg.totalVotes(jpg.busImages)){
  //    this.totalVotes++;
  //  }
  

    // console.log(this.src.substr(event.target.src.lastIndexOf('/')));
    // 


  //og code for getting the last part of the img
  // window.alert(this.href.substr(this.href.lastIndexOf('/') + 1));

  




// ===================================  MARKS CODE ============================

// var BusMallImage = function(fileName) {
//     this.fileName = fileName;    
//     this.totalVotes = 0;
//   }
  
//   var images = [];
//   images.push(new BusMallImage('bag.jpg'));
//   images.push(new BusMallImage('banana.jpg'));
//   images.push(new BusMallImage('boots.jpg'));
//   images.push(new BusMallImage('chair.jpg'));
//   images.push(new BusMallImage('cthulhu.jpg'));
//   images.push(new BusMallImage('dragon.jpg'));
//   images.push(new BusMallImage('pen.jpg'));
//   images.push(new BusMallImage('scissors.jpg'));
//   images.push(new BusMallImage('shark.jpg'));
//   images.push(new BusMallImage('sweep.jpg'));
//   images.push(new BusMallImage('unicorn.jpg'));
//   images.push(new BusMallImage('usb.jpg'));
//   images.push(new BusMallImage('water_can.jpg'));
//   images.push(new BusMallImage('wine_glass.jpg'));
  
//   function addImages() {
//     var container = document.getElementById('container');    
//     container.innerText = '';
//     var image = document.createElement('img');
//     var index = generateRandom(0, images.length);
//     image.setAttribute('src', 'imgs/'+images[index].fileName);
//     image.addEventListener('click', recordImageClick);
//     container.appendChild(image);
//     image = document.createElement('img');
//     index = generateRandom(0, images.length);
//     image.setAttribute('src', 'imgs/'+images[index].fileName);
//     image.addEventListener('click', recordImageClick);
//     container.appendChild(image);
//     image = document.createElement('img');
//     index = generateRandom(0, images.length);
//     image.setAttribute('src', 'imgs/'+images[index].fileName);
//     image.addEventListener('click', recordImageClick);
//     container.appendChild(image);
//   }
  
//   function generateRandom(min, max) {
//     return Math.floor((Math.random() * (max - min)) + min);    
//   }
  
//   function recordImageClick(event) {
//     console.log(event.target.src);    
//     addImages();
//   }
  
//   window.addEventListener('load', addImages);




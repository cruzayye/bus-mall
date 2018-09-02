

function introduction(){
  var container = document.getElementById('intro');
  var rules  = document.createElement('p');
  container.appendChild(rules);
  rules.innerText= "RuleThe following is a data analysis survey to see which products we should continue to sell and which we should probably get rid of. you will be presented with 3 pics choose your favorit one. Do this 15 times please";
  var ready = document.createElement('button');
  ready.setAttribute('onclick', 'hello()');
  ready.innerText='ready'
  container.appendChild(ready);

  
}

function hello(){
  // var container = document.getElementById('intro');
  // container.style.display="none";
  document.getElementById("intro").style.display = "none";
}

//problem might be that we can only pass 1 pair when setting attribute

var BusImages = function (fileName, y, label) {
  this.nameFile = fileName;
  this.y = y;
  this.label = label;
}

var imgs = [];
//how come we dont need the imgs/ folder name before the name of the .jpg?//ans:line35 sets the attr.
imgs.push(new BusImages('bag.jpg', 0, 'Bag'));
imgs.push(new BusImages('banana.jpg', 0, 'Banana'));
imgs.push(new BusImages('boots.jpg', 0, 'Boots'));
imgs.push(new BusImages('chair.jpg', 0, 'Chair'));
imgs.push(new BusImages('cthulhu.jpg', 0, 'Cthulhu'));
imgs.push(new BusImages('dragon.jpg', 0, 'Dragon'));
imgs.push(new BusImages('pen.jpg', 0, 'Pen'));
imgs.push(new BusImages('scissors.jpg', 0, 'Scissors'));
imgs.push(new BusImages('shark.jpg', 0, 'Shark'));
imgs.push(new BusImages('sweep.jpg', 0, 'Sweep'));
imgs.push(new BusImages('unicorn.jpg', 0, 'Uncorn'));
imgs.push(new BusImages('usb.jpg', 0, 'Usb'));
imgs.push(new BusImages('water_can.jpg', 0, 'Water Can'));
imgs.push(new BusImages('wine_glass.jpg', 0, 'Wine Glass'));
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
  // new image instance
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
  // localStorage.setItem('images', JSON.stringify(imgs));
}

var table = document.createElement('table');
var tr = document.createElement('tr');


function displayRandom(min, max) {
  return Math.floor((Math.random() * (max - min)) + min);
}

var clicks = 0;
var progress = 0;
function tallyImgClick(event) {
  // document.getElementById('progress-bar').style.width = Math.round(clicks / 13 * 100) + '%';
  document.getElementById('progress-bar').style.width = Math.round(clicks / 14 * 100) + '%';


  var source = event.target.src.split('/');
  var sourceName = source[source.length - 1];
  if(clicks < 15){
    clicks++;
    addImages();
    lastPicked(sourceName);
  }
  
  if(clicks === 15){
    newChart();
    container.innerText = '';
  }
  
  for (i = 0; i < imgs.length; i++) {
    if (sourceName === imgs[i].nameFile) {
      console.log(imgs[i].y++);
      
    }
  }
  console.log(sourceName);
  localStorage.setItem('imgs', JSON.stringify(imgs));
}

function lastPicked (sourceName){
  var container= document.getElementById('lastClicked');
  var img = document.createElement('img');
  img.setAttribute('src', 'imgs/' + sourceName);
  container.appendChild(img);
}
function reload(){
  window.location.reload();
}

function imagesLocal() {

  var localImg = JSON.parse(localStorage.getItem('imgs'));   /////Parses 'imgs' in localStorage and puts it into localImg./////
  if (localImg != null) {
    imgs = [];
    for (var index = 0; index < localImg.length; index++) {
      var img = localImg[index];
      imgs.push(new BusImages(img.nameFile, img.y, img.label));
    }
  }                              
}

window.addEventListener('load', introduction);
window.addEventListener('load', imagesLocal);
window.addEventListener('load', addImages);

// For more infor on localStorage:
// http://diveintohtml5.info/storage.html
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

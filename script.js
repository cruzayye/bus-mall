var BusImages = function (fileName) {
  this.nameFile = fileName;
  this.y = 0;
  this.label = fileName.substring(0, fileName.length - 4);
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
  //new image instanc
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

var table = document.createElement('table');
var tr = document.createElement('tr');


function displayRandom(min, max) {
  return Math.floor((Math.random() * (max - min)) + min);
}

var clicks = 0;
var progress = 0;
function tallyImgClick(event) {
  document.getElementById('progress-bar').style.width = Math.round(clicks / 13 * 100) + '%';
  var source = event.target.src.split('/');
  var sourceName = source[source.length - 1];
  if(clicks < 14){
    progress += 7;
    clicks++;
    addImages();
    lastPicked(sourceName);
  }

  if(clicks === 14){
    newChart();
    container.innerText = '';
  }

  for (i = 0; i < imgs.length; i++) {
    if (sourceName === imgs[i].nameFile) {
      console.log(imgs[i].y++);

    }
  }
  console.log(sourceName);
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

window.addEventListener('load', addImages);

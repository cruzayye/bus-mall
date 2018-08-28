var BusImages = function (fileName) {
  this.nameFile = fileName;
  this.y = 0;
  this.label = fileName.substring(0, fileName.length - 4);
}
//how to display top chosen pics?
// //we need an array of numbers that just focuses on this.y

// array.sort((a,b) => a-b) //function that would sort votes in ascending order.
// votes=[]; //gotta create a new array that
// for(var i =0; i <unages,kebgtglubdex++){
//   votes.push(images)[index]['y']
// }
// votes.sort((a,b => b-a);
// var imgscopy = imgs.slice(0);
// for var index = 0; index < votes.lengthy; index++)



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

//had to put these two lines in global otherwise a new table would be created for each click and it would mess up gutters
var table = document.createElement('table');
var tr = document.createElement('tr');

// function statusBar(){
//   var container = document.getElementById('imgClicked');
//   var td = document.createElement('td');
//   container.appendChild(table);
//   table.appendChild(tr);
//   tr.appendChild(td);


//   td.innerText= progress + '%';

// }

function displayRandom(min, max) {
  return Math.floor((Math.random() * (max - min)) + min);
}



var clicks = 0;
var progress = 0;

//iside this code we collect the file name of the img chose/
function tallyImgClick(event) {
  document.getElementById('progress-bar').style.width = Math.round(clicks / 13 * 100) + '%';


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
    progress += 7;
    // statusBar();
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
  // image.setAttribute('src', 'imgs/' + imgs[index].nameFile);



}
//can we add event listener instead?
function reload(){
  window.location.reload();
  
}


// var button = document.getElementById('reset');
// button.addEventListener('click', reset);



// function reset(event){
//   Location.reload();

  
// }
// function reset(event){
//   var button = document.getElementById('reset');
//   button.addEventListener(event.this.Location.reload());

  
// }
// function showStudentDetails(event) {
//   var studentNameContainer = document.getElementById('student-name');
//   studentNameContainer.innerText = event.target.innerText;
// }


// //need to come up with function to display top pics that were chosen
// function topPics(){
//   for(i = 0; i < imgs[i].y; i++){
//     console.log(y);
//   }



window.addEventListener('load', addImages);
// window.addEventListener('load', statusBar);

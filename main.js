let myImageOne = document.images[0];
let myImageTwo = document.images[1];

function mouseIn() {
     myImageOne.height = 300;
     myImageOne.width = 300;
     myImageOne.style.border = "2px solid red"

}

function mouseOut() {
     myImageOne.width = 180;
     myImageOne.height = 180;
     myImageOne.style.border = 0
}


function mouseEnter() {
     myImageTwo.height = 300;
     myImageTwo.width = 300;
     myImageTwo.style.border = "2px solid red"
}


function mouseLeave() {
     myImageTwo.width = 180;
     myImageTwo.height = 180;
     myImageTwo.style.border = 0
}

const images =  document.querySelector('.slider-content__inner__img');
const leftBtn = document.querySelector('.slider-content__left');
const rightBtn = document.querySelector('.slider-content__right');


const imagesBox = ['../images/img-1.jpg', '../images/img-3.jpg', '../images/img-2.jpg', '../images/img-4.jpg'];

let index = 0;
let slideCounter = imagesBox.length;


leftBtn.addEventListener('click', displayLeft);
rightBtn.addEventListener('click', displayRight);


function showSlide (){
    images.setAttribute('src', imagesBox[index]);
}

showSlide()

function displayRight () {
    index++
    showSlideRight(index);
}

function displayLeft () {
    index--
    showSlideLeft(index);
}

function showSlideRight (i){
    index = i;
    if(i>= slideCounter){
        index = slideCounter -1;
    } 
    images.setAttribute('src', imagesBox[index]);
}

function showSlideLeft (i){
    index = i;
    if(i <=0){
        index = 0
    }
    images.setAttribute('src', imagesBox[index]);
}

const images =  document.querySelector('.slider-content__inner__img');
const leftBtn = document.querySelector('.slider-content__left');
const rightBtn = document.querySelector('.slider-content__right');
const leftRadioBtn = document.querySelector('.slider-content__radio__left-btn');
const theSecondRadioBtn = document.querySelector('.slider-content__radio__second-btn');
const theThirdRadioBtn = document.querySelector('.slider-content__radio__third-btn');
const rightRadioBtn = document.querySelector('.slider-content__radio__right-btn');
const leftBtnBackground = document.querySelector('.slider-content__radio__left-background');
const theSecondBtnBackground  = document.querySelector('.slider-content__radio__second-background');
const theThirdBtnBackground  = document.querySelector('.slider-content__radio__third-background');
const rightBtnBackground  = document.querySelector('.slider-content__radio__right-background');

const imagesBox = ['../images/img-1.jpg', '../images/img-3.jpg', '../images/img-2.jpg', '../images/img-4.jpg'];
const radioBtn = [leftRadioBtn, theSecondRadioBtn, theThirdRadioBtn, rightRadioBtn];
const radioBtnBackground = [leftBtnBackground, theSecondBtnBackground, theThirdBtnBackground, rightBtnBackground];


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

function displaySlider(){;
  for (let btn in radioBtn){
    radioBtn[btn].addEventListener('click', () =>{
        for(let background in radioBtnBackground){
            if(btn == background){
                radioBtnBackground[background].style.display = 'block'
            } else {
                radioBtnBackground[background].style.display = 'none'
            }
        }
        images.setAttribute('src', imagesBox[btn]);
    })

  }

}
 displaySlider()

function showSlideRight (i){
    index = i;
    if(i>= slideCounter){
        index = slideCounter -1;
    } 
    images.setAttribute('src', imagesBox[index]);
    for (let btn in radioBtnBackground){
        if (i == btn){
                radioBtnBackground[btn].style.display = 'block';
        } 
        else{
                radioBtnBackground[btn].style.display = 'none' 
        }
       
    }

}

function showSlideLeft (i){
    index = i;
    if(i <=0){
        index = 0
    }
    images.setAttribute('src', imagesBox[index]);
    
    for (let btn in radioBtnBackground){
        if (i == btn){
            radioBtnBackground[btn].style.display = 'block';
        } else{
                radioBtnBackground[btn].style.display = 'none'
        }
       
    }
}

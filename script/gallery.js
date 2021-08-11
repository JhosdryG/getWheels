const galleryImgs = document.querySelectorAll('.gallery__img');
const imageViewer = document.getElementById('imageViewer');
const buttonClose = document.getElementById('buttonClose');
const imageViewerBox = document.getElementById('imageViewerBox');


let currentModel = 'explorer';


galleryImgs.forEach(img => {
    img.addEventListener('click', () => {
        imageViewer.src = img.src;
        imageViewerBox.classList.replace(currentModel,img.getAttribute('data-model'));
        currentModel = img.getAttribute('data-model');
        currentTarget = img.getAttribute('data-target');
        imageViewerBox.classList.toggle('showViewer'); 

    });
    
});

buttonClose.addEventListener('click', () => {
    imageViewerBox.classList.toggle('showViewer');
});


const rightButton = document.getElementById('rightButton');
const leftButton = document.getElementById('leftButton');
let currentTarget = '0'; 

rightButton.addEventListener('click', () => {

    let galleryLenght = document.querySelectorAll(`.${currentModel} .gallery__img`).length;
    
    let nextTargetNumber = parseInt(currentTarget) + 1;

    if(nextTargetNumber > galleryLenght) return null;

    let modelImg = document.querySelector(`.${currentModel}  [data-target="${nextTargetNumber}"]`);
    
    imageViewer.src = modelImg.src;

    currentTarget = modelImg.getAttribute('data-target');
});

leftButton.addEventListener('click', () => {
    
    let preTargetNumber = parseInt(currentTarget) -1;

    if(preTargetNumber < 1) return null;

    let modelImg = document.querySelector(`.${currentModel}  [data-target="${preTargetNumber}"]`);
    
    imageViewer.src = modelImg.src;

    currentTarget = modelImg.getAttribute('data-target');

});
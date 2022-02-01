const learnMoreBtn = document.querySelectorAll('.btn');
const closeBodyOverlayBtn = document.querySelectorAll('.close_btn');
const bodyOverlay = document.querySelector('.body_overlay')
const imgOnDisplay = document.getElementById('overlay_img');
const imgOnDisplayDetailsHeader = document.getElementById('image_details__header')

for ( var element of learnMoreBtn ) {
    element.addEventListener('click', ()=> {
    bodyOverlay.classList.add('active')
    })
        
}

for ( var element of closeBodyOverlayBtn ) {
    element.addEventListener('click', ()=> {
    bodyOverlay.classList.remove('active')
       })
}

imgMapping = {
    container_1__img_path : './img1.jpg',
    container_2__img_path : './img4.jpg',
}

function repClick(clickId) {
    if (clickId === 'btn__container_1') {
        imgOnDisplay.src = imgMapping.container_1__img_path
        imgOnDisplayDetailsHeader.innerHTML = 'Image One'
    } else if (clickId === 'btn__container_2') {
        imgOnDisplay.src = imgMapping.container_2__img_path
        imgOnDisplayDetailsHeader.innerHTML = 'Image Two'
    }
}

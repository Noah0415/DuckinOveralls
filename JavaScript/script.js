function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}


window.onload = function() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
};

let slideIndex = 0;
const slides = document.querySelectorAll('.mySlides1');
const totalSlides = slides.length;
let slideTimeout;

function showSlides(n) {
    if (n >= totalSlides) { slideIndex = 0; }
    if (n < 0) { slideIndex = totalSlides - 1; }

    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
      
        if (index === slideIndex) {
            slide.classList.add('fade');
        } else {
            slide.classList.remove('fade');
        }
    });
}

function plusSlides(n) {
    clearTimeout(slideTimeout); 
    showSlides(slideIndex += n);
    startSlideShow(); // Restart automatic transition
}

function startSlideShow() {
    slideTimeout = setTimeout(() => {
        showSlides(slideIndex += 1);
        startSlideShow(); // Continue the automatic slideshow
    }, 10000); // Change slide every 15 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex); // Show the first slide
    startSlideShow(); // Start the automatic slideshow
});

let slideIndex2 = 0;
const slides2 = document.querySelectorAll('.mySlides2');
const totalSlides2 = slides2.length;
let slideTimeout2;

function showSlides2(n) {
    if (n >= totalSlides2) { slideIndex2 = 0; }
    if (n < 0) { slideIndex2 = totalSlides2 - 1; }

    slides2.forEach((slide, index) => {
        slide.style.display = (index === slideIndex2) ? 'block' : 'none';
        // Add fade effect to the current slide
        if (index === slideIndex2) {
            slide.classList.add('fade2');
        } else {
            slide.classList.remove('fade2');
        }
    });
}

function plusSlides2(n) {
    clearTimeout(slideTimeout2); // Clear the automatic transition timeout
    showSlides2(slideIndex2 += n);
    startSlideShow2(); // Restart automatic transition
}

function startSlideShow2() {
    slideTimeout2 = setTimeout(() => {
        showSlides2(slideIndex2 += 1);
        startSlideShow2(); // Continue the automatic slideshow
    }, 10000); // Change slide every 10 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides2(slideIndex2); // Show the first mobile slide
    startSlideShow2(); // Start the automatic mobile slideshow
});

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


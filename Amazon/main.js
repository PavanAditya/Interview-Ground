let slideIndex = 1;

displaySlides(slideIndex);

function changeSlide(inc) {
    console.log(slideIndex + inc)
    if (!((slideIndex + inc < 1) || (slideIndex + inc > 3)))
        displaySlides(slideIndex += inc);
}

function jumpToSlide(index) {
    slideIndex = index;
    displaySlides(slideIndex);
}

function displaySlides(val) {
    let slidesList = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");
    if (val > slidesList.length) {
        slideIndex = 1;
    }
    if (val < 1) {
        slideIndex = slidesList.length;
    }
    for (let i = 0; i < slidesList.length; i++) {
        slidesList[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slidesList[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    disableArrows();
}

function disableArrows() {
    console.log(slideIndex)
    let prevArrow = document.getElementById("prev-arrow");
    let nextArrow = document.getElementById("next-arrow");
    if (slideIndex === 1) {
        prevArrow.className += " disable";
    } else {
        prevArrow.className = prevArrow.className.replace(" disable", "");
    }
    if (slideIndex === 3) {
        nextArrow.className += " disable";
    } else {
        nextArrow.className = nextArrow.className.replace(" disable", "");
    }
}

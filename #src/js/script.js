// JS-функция определения поддержки WebP
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});

$(document).ready(function() {
    $('.slider__items').slick({
        dots: true,
        infinite: true,
        speed: 500,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/Left.png" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right.png" alt="next"></button>'
    });
});


/*Menu slider*/
        
var menuSwiper = new Swiper ('.menu-slider', {
    loop: true,
    autoHeight: true,
    pagination: {
    el: '.swiper-pagination',
    clickable: true
    }
})

/* Images slider*/
var imgSlider = new Swiper ('.img-slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 60,
    breakpoints: {
        640: {
        slidesPerView: 1,
        spaceBetween: 0
        }
    },
    centeredSlides: true,
    pagination: {
    el: '.swiper-pagination',
    clickable: true
    }
})

    /* Instagram slider*/
    
var instagramSlider = new Swiper ('.instagram-slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
        640: {
        slidesPerView: 1,
        spaceBetween: 0
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
})


$('.mobile-menu li a').click(function(){
    $(".menu-btn").prop('checked',false);
});

$('.main-menu').onePageNav();


$('.menus-head h3').click(function(){
    var index = $(this).index();
    $('.menus-head h3').removeClass('text-underline').eq(index).addClass('text-underline');
    menuSwiper.slideTo(index+1);
});


menuSwiper.on("slideChange", function(){
    if(menuSwiper.realIndex==1){
        $('.menus-head h3').removeClass('text-underline').eq(1).addClass('text-underline');
        $('#delivery').addClass('hide');
        console.log('hide');
    }else{
        $('.menus-head h3').removeClass('text-underline').eq(0).addClass('text-underline');
        $('#delivery').removeClass('hide');
    }
});


/* Contact Page Form*/

const scriptURL = 'https://script.google.com/macros/s/AKfycbz9rJ6jUgWaAUDOLmHrRXphYKrFKKygWirdOBov4PXpwAG6LL70/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
e.preventDefault()
form.submit.disabled=true
document.getElementById("submit").innerHTML = "Capturando tus datos...";
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
    swal({
        title: "¡Gracias!",
        text: "Hemos recibido tus datos correctamente!",
        icon: "success",
        button: "OK",
    })
    document.getElementById("submit").innerHTML = "¡Gracias por tus datos!";
    })
    .catch(error => {
    swal({
        title: "¡Ooops!",
        text: "Hubo un error con tu formulario.",
        icon: "error"
    })
    document.getElementById("submit").innerHTML = "Por favor intenta de nuevo.";
    })
})
$('.owl-carousel').owlCarousel({
    loop:false, //o carrossel tem um inicio e um fim, ele não dá a volta
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
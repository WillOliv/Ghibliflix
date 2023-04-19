$('.owl-carousel').owlCarousel({
    
    loop:false,
    nav:false,
    
    touchDrag :true,
    
    responsive:{
        0:{
            items: 1.5
        },
        600:{
            items: 3.5
        },
        1000:{
            items: 4
        }
    }
})
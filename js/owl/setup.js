$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{ /* quando a tela tiver 600 px irá aparecer 3 filmes ... oçoes para views */
            items:3
        },
        1000:{ 
            items:5
        }
    }
})
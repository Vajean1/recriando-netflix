$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


function botaoAssistir(elemento){
    window.open("https://www.youtube.com/watch?v=xUntodg-vXY")
}

var popup = document.getElementById('popup')

function botaoInfo(id){   
    popup.style.display = "block"
}

function back(id){
    popup.style.display = "none"
}
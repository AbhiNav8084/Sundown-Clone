const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page3Animation(){
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter",function(){
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave",function(){
        fixed.style.display = "none"
    })
    
    var elems = document.querySelectorAll(".elem")
    elems.forEach(function(e){
        e.addEventListener("mouseenter",function(){
            var image = e.getAttribute("data-img")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        loop:true,
    });
}


function menuAnimation(){
        var drop_down = document.querySelector("nav #menu")
        var full = document.querySelector("#full-scr")
        var nav_img = document.querySelector("nav img")
        var flag =0
        drop_down.addEventListener("click",function(){
        if(flag == 0){
            full.style.top = 0
            nav_img.style.opacity = 0
            flag = 1
        }else{
            full.style.top = "-100%"
            nav_img.style.opacity = 1
            flag = 0
        }
    })
}
function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

swiperAnimation()
page3Animation()
menuAnimation()
loaderAnimation()



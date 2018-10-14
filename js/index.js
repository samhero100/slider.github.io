var mainImg = document.getElementById("mainimg"),
    images = document.getElementsByClassName("images"),
    imagesRun,
    i,
    t = 0;

 for ( i = 0; i < images.length; i++) {
    
    images[i].onclick = function () {
        
        mainImg.src = this.src;
        t = parseInt(this.getAttribute("data-order"));
        imagesRun = document.querySelector(".imagesr");
        imagesRun.classList.remove("imagesr");
        this.classList.add("imagesr");
    }
}

function play () {
    
    t = t + 1;
    if ( t > images.length - 1 ) {
        t = 0;
    }
    
    mainImg.src = images[t].src;
    imagesRun = document.querySelector(".imagesr");
    imagesRun.classList.remove("imagesr");
    images[t].classList.add("imagesr");
    
}
setInterval(play,4000);
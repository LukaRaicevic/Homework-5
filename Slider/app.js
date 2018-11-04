var imageNumber = 1;
var imageDiv = document.getElementsByClassName("image-div");
var images = document.getElementsByClassName("image");
var container = document.getElementById("images");
var left = document.getElementById("left-arrow");
var right = document.getElementById("right-arrow");
var btn = document.getElementById("btn");

showImage(imageNumber);
left.addEventListener("click", indexMinus);
right.addEventListener("click", indexPlus);
document.addEventListener("keydown", arrowUse);
clckImg();

function indexMinus() {
    if(imageNumber == 1) { imageNumber = imageDiv.length+1; }
    showImage(imageNumber--);
}

function indexPlus() {
    if(imageNumber == imageDiv.length) { imageNumber = 0; }
    showImage(imageNumber++);
}

function showImage(num) {
    for(let i = 0; i < imageDiv.length; i++) {
        imageDiv[i].style.display = "none";
    }
    imageDiv[imageNumber-1].style.display = "block";
}

function clckImg() {
    for(let i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function() {
            /*
            container.style.width = "90vw";
            container.style.height = "90vh";
            container.style.padding = "0";
            for(let j = 0; j < images.length; j++) {
                images[j].style.width = "90vw";
                images[j].style.height = "90vh";
            }
            */
            widHeig("90vw", "90vh", "0");
            btnX();
        })
    }
}

function btnX() {
    btn.style.display = "block";
    btn.addEventListener("click", function() {
        /*
        container.style.width = "50vw";
        container.style.height = "60vh";
        container.style.paddingTop = "3%";
        for(let j = 0; j < images.length; j++) {
            images[j].style.width = "50vw";
            images[j].style.height = "60vh";
        }
        */
        widHeig("50vw", "60vh", "3%");
        btn.style.display = "none";
    });
}

function widHeig(w, h, p) {
    container.style.width = w;
    container.style.height = h;
    container.style.paddingTop = p;
    for(let j = 0; j < images.length; j++) {
        images[j].style.width = w;
        images[j].style.height = h;
    }
}

function arrowUse(e) {
    e = e || window.event;
    if(e.keyCode == "37") {
        indexMinus();
    }
    if(e.keyCode == "39") {
        indexPlus();
    }
}
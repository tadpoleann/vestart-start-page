// change frame and painting
let img = document.getElementById("framedImg");
let btn1 = document.getElementById("btn1"),
  frame1 = document.getElementById("frame1");
let btn2 = document.getElementById("btn2"),
  frame2 = document.getElementById("frame2");
let btn3 = document.getElementById("btn3"),
  frame3 = document.getElementById("frame3");

btn1.addEventListener("click", () => {
  img.src = "./pics/paintingasmaller-min.jpg";
});

btn2.addEventListener("click", () => {
  console.log("changed to image b");
  img.src = "./pics/paintingbsmaller-min.jpg";
});

btn3.addEventListener("click", () => {
  img.src = "./pics/paintingcsmaller-min.jpg";
});

frame1.addEventListener("click", () => {
  img.style.borderImage = "url(./pics/frame1-min.png) 100 round";
});

frame2.addEventListener("click", () => {
  img.style.borderImage = "url(./pics/frame2-min.png) 100 round";
});

frame3.addEventListener("click", () => {
  img.style.borderImage = "url(./pics/frame3-min.png) 100 round";
});

// Change pics in carousel
const carouselImg = document.querySelector(".current-img-container img");

const changePicFw = () => {
  carouselImg.classList.add("opacity");
  carouselImg.onanimationend = () => {
    carouselImg.classList.remove("opacity");
  };
  if (carouselImg.src.match("./carousel/Slide1smallersize-min.jpg")) {
    carouselImg.src = "./carousel/Slide2-min.jpg";
  } else if (carouselImg.src.match("./carousel/Slide2-min.jpg")) {
    carouselImg.src = "./carousel/Slide3smallersize-min.jpg";
  } else {
    carouselImg.src = "./carousel/Slide1smallersize-min.jpg";
  }
};

const changePicBw = () => {
  carouselImg.classList.add("opacity");
  carouselImg.onanimationend = () => {
    carouselImg.classList.remove("opacity");
  };
  if (carouselImg.src.match("./carousel/Slide3smallersize-min.jpg")) {
    carouselImg.src = "./carousel/Slide2-min.jpg";
  } else if (carouselImg.src.match("./carousel/Slide2-min.jpg")) {
    carouselImg.src = "./carousel/Slide1smallersize-min.jpg";
  } else {
    carouselImg.src = "./carousel/Slide3smallersize-min.jpg";
  }
};

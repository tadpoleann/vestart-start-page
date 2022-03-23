// change frame and painting
let img = document.getElementById("framedImg");
let btn1 = document.getElementById("btn1"),
  frame1 = document.getElementById("frame1");
let btn2 = document.getElementById("btn2"),
  frame2 = document.getElementById("frame2");
let btn3 = document.getElementById("btn3"),
  frame3 = document.getElementById("frame3");

btn1.addEventListener("click", () => {
  img.src = "./pics/paintinga.png";
});

btn2.addEventListener("click", () => {
  console.log("changed to image b");
  img.src = "./pics/paintingb.png";
});

btn3.addEventListener("click", () => {
  img.src = "./pics/paintingc.png";
});

frame1.addEventListener("click", () => {
  img.style.borderImage = "url(./pics/frame1.png) 100 round";
});

frame2.addEventListener("click", () => {
  img.style.borderImage = "url(./pics/frame2.png) 100 round";
});

frame3.addEventListener("click", () => {
  img.style.borderImage = "url(./pics/frame3.png) 100 round";
});

// change pics in carousel
const carouselImg = document.querySelector(".current-img-container img");

const changePicFw = () => {
  carouselImg.classList.add("opacity");
  carouselImg.onanimationend = () => {
    carouselImg.classList.remove("opacity");
  };
  if (carouselImg.src.match("./carousel/Slide1.jpg")) {
    carouselImg.src = "./carousel/Slide2.jpg";
  } else if (carouselImg.src.match("./carousel/Slide2.jpg")) {
    carouselImg.src = "./carousel/Slide3.jpg";
  } else {
    carouselImg.src = "./carousel/Slide1.jpg";
  }
};

const changePicBw = () => {
  carouselImg.classList.add("opacity");
  carouselImg.onanimationend = () => {
    carouselImg.classList.remove("opacity");
  };
  if (carouselImg.src.match("./carousel/Slide3.jpg")) {
    carouselImg.src = "./carousel/Slide2.jpg";
  } else if (carouselImg.src.match("./carousel/Slide2.jpg")) {
    carouselImg.src = "./carousel/Slide1.jpg";
  } else {
    carouselImg.src = "./carousel/Slide3.jpg";
  }
};

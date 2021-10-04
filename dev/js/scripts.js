import { gsap } from "gsap";

const mainTL = gsap.timeline();

// const heroHeight = document.querySelector("#hero");

const aniTime = 0.75;

// console.log(heroHeight.clientHeight + "px is height of hero section");
// console.log(heroHeight.clientWidth + "px is width of hero section");

mainTL.from("#hero",{duration:2, alpha:0})
    .from("#hero h1", {duration:aniTime, y:"+=200", alpha:0})
    .from("#hero i", {duration:aniTime, y:"-=200", alpha:0, rotation:180}), "50%"

mainTL.from("#content1 ul li i",{duration:aniTime, y:"+=10", alpha:0})

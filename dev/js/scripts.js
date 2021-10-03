import { gsap } from "gsap";

const mainTL = gsap.timeline();

mainTL.from("#hero",{duration:2,alpha:0})
    .from("#hero h1", {duration:1, y:"+=200", alpha:0})
    .from("#hero i", {duration:1, y:"-=200", alpha:0, rotation:180}), "50%";

import { gsap } from "gsap";

const mainTL = gsap.timeline();


mainTL.to("ball-1", {duration:1, scale:3, y:"-=600"});
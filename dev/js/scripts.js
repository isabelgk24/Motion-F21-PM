import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin, DrawSVGPlugin, MotionPathHelper, MotionPathPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");



const mainTL = gsap.timeline();

function bounceIn(){
    const tl = gsap.timeline();
    tl.to("#ball-1", {duration: 1.5, alpha:1, motionPath: {path: "#bounce-1", align: "#bounce-1", alignOrigin: [0.5, 0.5]}, ease: "power3.inOut"})
    tl.to("#ball-2", {duration: 1.5, alpha:1, motionPath: {path: "#bounce-2", align: "#bounce-2", alignOrigin: [0.5, 0.5]}, ease: "power3.inOut"})
    tl.to("#ball-3", {duration: 1.5, alpha:1, motionPath: {path: "#bounce-3", align: "#bounce-3", alignOrigin: [0.5, 0.5]}, ease: "power3.inOut"})
    tl.to("#ball-4", {duration: 1.5, alpha:1, motionPath: {path: "#bounce-4", align: "#bounce-4",  ease: "power3.inOut"}})
    tl.to("#ball-5", {duration: 1.5, alpha:1, motionPath: {path: "#bounce-5", align: "#bounce-5", alignOrigin: [0.5, 0.5]}, ease: "power3.inOut"})
    tl.to("#ball-6", {duration: 1.5, alpha:1, motionPath: {path: "#bounce-6", align: "#bounce-6", alignOrigin: [0.5, 0.5]}, ease: "power3.inOut"})
    tl.to("#ball-7", {duration: 1.5, alpha:1, motionPath: {path: "#bounce-7", align: "#bounce-7", alignOrigin: [0.5, 0.5]}, ease: "power3.inOut"});

    return tl;

}

function barMorph(){
    const tl = gsap.timeline();
    tl.to("#ball-1",{duration: .55, morphSVG:"#bar-1"}, "same1")
    tl.to("#ball-2",{duration: .45, morphSVG:"#bar-2"}, "same1")
    tl.to("#ball-3",{duration: .35, morphSVG:"#bar-3"}, "same1")
    tl.to("#ball-4",{duration: .45, morphSVG:"#bar-4"}, "same1")
    tl.to("#ball-5",{duration: .55, morphSVG:"#bar-5"}, "same1")
    tl.to("#ball-6",{duration: .35, morphSVG:"#bar-6"}, "same1")
    tl.to("#ball-7",{duration: .55, morphSVG:"#bar-7"}, "same1");

    return tl;

}

function barSlide(){
    const tl = gsap.timeline();
    tl.to("#ball-2",{duration: .75, y:"+=30"}, "same2")
    tl.to("#ball-3",{duration: .75, y:"+=15"}, "same2")
    tl.to("#ball-4",{duration: .75, y:"-=25"}, "same2")
    tl.to("#ball-6",{duration: .75, y:"+=15"}, "same2");

    return tl;

}

function secondaryMoments(){
    const tl = gsap.timeline();
    tl.to("#c-morph",{duration: .4, morphSVG:"#c"}, "same3")
    tl.to("#g-morph",{duration: .4, morphSVG:"#g"}, "same3")
    tl.from("#bar-underline-draw",{duration: 1.5, drawSVG:0});

    return tl;

}

function slideOut(){
    const tl = gsap.timeline();
    tl.to("#bar-1", {duration: 4, motionPath:{path:"#bar-1-draw", align:"#bar-1-draw", alignOrigin:[0.5,0.5]}})
    tl.from("#bar-2-draw",{duration: 1.5, drawSVG:0}, "same4");

    return tl;


}

mainTL.add(bounceIn())
        .add(barMorph())
        .add(barSlide())
        .add(secondaryMoments(),"-=50%")
        .add(slideOut());

GSDevTools.create();

// function appear(){
//     const tl = gsap.timeline();
//     tl.from("#road",{duration: 0.5, y:"-=25", alpha:0})
//     tl.from("#grassright",{duration: 0.5, alpha:0, morphSVG: "#grass-morph-right"}, "same1")
//     tl.from("#grassleft",{duration: 0.5, alpha:0, morphSVG: "#grass-morph-left"}, "same1")
//     tl.from(".mountains",{duration: 0.5, y:"+=50", alpha:0, stagger: -0.25})
//     tl.from("#sky",{duration: 0.5, alpha:0, morphSVG: "#sky-pre-morph"})
//     tl.from(".lamp",{duration: 1, alpha:0, stagger: 0.25}, "same")
//     tl.from("#moon",{duration: 4.0, y:"+=150", alpha:0, rotation:90, transformOrigin: "50% 50%"}, "same")
//     tl.from(".lightbulb",{duration: 2, alpha:0, stagger: .5},"same")
//     tl.from(".glow",{duration: 2, alpha:0, stagger: .5}, "same")
//     tl.from("#stars",{duration: 3, y:"+=5", alpha:0, stagger: .1}, "same")
//     tl.to("#preloader",{duration: .25, scale:0, alpha:0});

//     return tl;
// }

// function glowFlicker(){
//     const tl = gsap.timeline();

//     const glowFlicker = gsap.timeline({repeat: 1},"same2");
//     glowFlicker.from("#glow1",{duration:0,alpha:0})
//     .to("#glow1",{duration:0.4,alpha:0.7})
//     .to("#glow1",{duration:1.0,alpha:0.4})
//     .to("#glow1",{duration:0.7,alpha:0.6})
//     .to("#glow1",{duration:0.5,alpha:0.9})
//     .to("#glow1",{duration:0.9,alpha:0.4})
//     .to("#glow1",{duration:1.5,alpha:0.7});

//     const glowFlicker2 = gsap.timeline({repeat: 1},"same2");
//     glowFlicker2.from("#glow2",{duration:0,alpha:0})
//     .to("#glow2",{duration:0.8,alpha:0.7})
//     .to("#glow2",{duration:1.0,alpha:0.9})
//     .to("#glow2",{duration:0.7,alpha:0.4})
//     .to("#glow2",{duration:0.9,alpha:0.6})
//     .to("#glow2",{duration:1.1,alpha:0.2});

//     const glowFlicker3 = gsap.timeline({repeat: 1},"same2");
//     glowFlicker3.from("#glow3",{duration:0,alpha:0})
//     .to("#glow3",{duration:0.6,alpha:0.7})
//     .to("#glow3",{duration:0.7,alpha:1.0})
//     .to("#glow3",{duration:1.0,alpha:0.8})
//     .to("#glow3",{duration:0.5,alpha:0.7})
//     .to("#glow3",{duration:1.5,alpha:0.5})
//     .to("#glow3",{duration:0.7,alpha:0.8});

//     const glowFlicker4 = gsap.timeline({repeat: 1}, "same2");
//     glowFlicker4.from("#glow4",{duration:0,alpha:0})
//     .to("#glow4",{duration:1.5,alpha:0.7})
//     .to("#glow4",{duration:0.6,alpha:0.4})
//     .to("#glow4",{duration:1.0,alpha:0.6})
//     .to("#glow4",{duration:0.4,alpha:0.9})
//     .to("#glow4",{duration:0.9,alpha:0.6})
//     .to("#glow4",{duration:0.6,alpha:0.7, onComplete: backToTop});

//     tl.add(glowFlicker,"same2")
//       .add(glowFlicker2,"same2")
//       .add(glowFlicker3,"same2")
//       .add(glowFlicker4,"same2")
      
//     return tl;
// }

// function backToTop (){
//     window.scrollTo(0,0)
//     gsap.set("#preloader", {display:"none"});
// }

// function heroAnimation (){
//     const tl = gsap.timeline();

//     const aniTime = 0.75;

//     tl.from("#hero",{duration:1, alpha:0})
//       .from("#hero h1", {duration:aniTime, y:"+=200", alpha:0})
//       .from("#hero i", {duration:aniTime, y:"-=200", alpha:0, rotation:180})
//       .from("#content1 ul li i",{duration:aniTime, y:"+=10", alpha:0})

//     return tl;
// }

// mainTL.add(appear())
//         .add(glowFlicker(),"-=47%")
//         .add(heroAnimation(), "-=150%");
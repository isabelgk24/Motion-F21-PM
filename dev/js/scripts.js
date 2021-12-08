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
    tl.to("#ball-1", {duration: 2.5, motionPath: {path: "#bounce-1", align: "#bounce-1", alignOrigin: [0.5, 0.5]}, ease: "power1.inOut"}, "same")
    tl.to("#ball-2", {duration: 3, motionPath: {path: "#bounce-2", align: "#bounce-2", alignOrigin: [0.5, 0.5]}, ease: "power1.inOut"} , "same")
    tl.to("#ball-3", {duration: 2.7, motionPath: {path: "#bounce-3", align: "#bounce-3", alignOrigin: [0.5, 0.5]}, ease: "power1.inOut"} , "same")
    tl.to("#ball-4", {duration: 2.7, motionPath: {path: "#bounce-4", align: "#bounce-4", alignOrigin: [0.5, 0.5]}, ease: "power1.inOut"} , "same")
    tl.to("#ball-5", {duration: 3, motionPath: {path: "#bounce-5", align: "#bounce-5", alignOrigin: [0.5, 0.5]}, ease: "power1.inOut"} , "same")
    tl.to("#ball-6", {duration: 2.7, motionPath: {path: "#bounce-6", align: "#bounce-6", alignOrigin: [0.5, 0.5]}, ease: "power1.inOut"} , "same")
    tl.to("#ball-7", {duration: 3, motionPath: {path: "#bounce-7", align: "#bounce-7", alignOrigin: [0.5, 0.5]}, ease: "power1.inOut"} , "same");

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
    tl.to("#c-morph", {duration: .4, morphSVG:"#c"}, "same3")
    tl.to("#g-morph",{duration: .4, morphSVG:"#g"}, "same3")
    tl.from("#bar-underline-draw",{duration: 1.5, drawSVG:0});

    return tl;

}

function ballFill(){
    const tl = gsap.timeline();
    tl.from(".ballfill",{duration: 1.5, y:"-=500", alpha:1, stagger:-.025, ease: "bounce.out"})
    tl.from("#finance-2",{duration: 1, alpha:0})

    return tl;

}


function slideOut(){
    const tl = gsap.timeline();
    tl.to("#ball-1",{duration: 1.2, y:"-=1100", alpha:0}, "same4")
    tl.to("#ball-2",{duration: 1.5, y:"+=1000", alpha:0}, "same4")
    tl.to("#ball-3",{duration: 1.3, y:"-=1400", alpha:0}, "same4")
    tl.to("#ball-4",{duration: 1, y:"+=1200", alpha:0}, "same4")
    tl.to("#ball-5",{duration: 1.5, y:"-=1000", alpha:0}, "same4")
    tl.to("#ball-6",{duration: 1.2, y:"-=1100", alpha:0}, "same4")
    tl.to("#ball-7",{duration: 1, y:"+=1200", alpha:0}, "same4")
    tl.to(".ballfill", {duration: 1.2, x:"+=1000", alpha:0}, "same4")
    tl.to("#finance-2", {duration: 1.2, x:"+=1000", alpha:0}, "same4")
    tl.to("#bar-underline-draw",{duration: 1.7, x:"+=1000", alpha:0}, "same4");

    return tl;

}

mainTL
        .add(bounceIn())
        .add(barMorph())
        .add(barSlide())
        .add(secondaryMoments(),"-=50%")
        .add(ballFill())
        .add(slideOut());

// GSDevTools.create();
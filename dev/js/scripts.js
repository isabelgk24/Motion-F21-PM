import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");


const mainTL = gsap.timeline();

function appear(){
    const tl = gsap.timeline();
    tl.from("#Road",{duration: 0.5, y:"-=25", alpha:0})
    tl.from("#Grassright",{duration: 0.5, alpha:0, morphSVG: "#grass-morph-right"}, "same1")
    tl.from("#Grassleft",{duration: 0.5, alpha:0, morphSVG: "#grass-morph-left"}, "same1")
    tl.from(".mountains",{duration: 0.5, y:"+=50", alpha:0, stagger: -0.25})
    tl.from("#Sky",{duration: 0.5, alpha:0, morphSVG: "#sky-pre-morph"})
    tl.from(".lamp",{duration: 1, alpha:0, stagger: 0.25}, "same")
    tl.from("#moon",{duration: 4.0, y:"+=150", alpha:0, rotation:90, transformOrigin: "50% 50%"}, "same")
    tl.from(".lightbulb",{duration: 2, alpha:0, stagger: .5},"same")
    tl.from(".glow",{duration: 2, alpha:0, stagger: .5}, "same")
    tl.from("#Stars",{duration: 3, y:"+=5", alpha:0, stagger: .1}, "same");

    return tl;
}

function glowFlicker(){
    const tl = gsap.timeline();

    const glowFlicker = gsap.timeline({repeat: 2}, "same2");
    glowFlicker.from("#glow1",{duration:0.2,alpha:0})
    .to("#glow1",{duration:0.3,alpha:0.7})
    .to("#glow1",{duration:0.4,alpha:0.6})
    .to("#glow1",{duration:0.2,alpha:0.5})
    .to("#glow1",{duration:0.3,alpha:0.6})
    .to("#glow1",{duration:0.3,alpha:0.7});

    const glowFlicker2 = gsap.timeline({repeat: 2}, "same2");
    glowFlicker2.from("#glow2",{duration:0.2,alpha:0})
    .to("#glow2",{duration:0.4,alpha:0.6})
    .to("#glow2",{duration:0.5,alpha:0.5})
    .to("#glow2",{duration:0.3,alpha:0.6})
    .to("#glow2",{duration:0.3,alpha:0.7});

    const glowFlicker3 = gsap.timeline({repeat: 2}, "same2");
    glowFlicker3.to("#glow2",{duration:0.2,alpha:0.5})
    .to("#glow3",{duration:0.3,alpha:0.8})
    .to("#glow3",{duration:0.4,alpha:0.6})
    .to("#glow3",{duration:0.2,alpha:0.7})
    .to("#glow3",{duration:0.2,alpha:0.9})
    .to("#glow3",{duration:0.4,alpha:0.8});

    const glowFlicker4 = gsap.timeline({repeat: 2}, "same2");
    glowFlicker4.to("#glow4",{duration:0.2,alpha:0.5})
    .to("#glow4",{duration:0.5,alpha:0.7})
    .to("#glow4",{duration:0.3,alpha:0.8})
    .to("#glow4",{duration:0.2,alpha:0.9})
    .to("#glow4",{duration:0.3,alpha:0.8})
    .to("#glow4",{duration:0.2,alpha:0.7});

    tl.add(glowFlicker,"same2")
      .add(glowFlicker2,"same2")
      .add(glowFlicker3,"same2")
      .add(glowFlicker4,"same2")


    return tl;
}

mainTL.add(appear())
        .add(glowFlicker(),"-=85%");

GSDevTools.create();

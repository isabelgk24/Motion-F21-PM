import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");


const mainTL = gsap.timeline();

function appear(){
    const tl = gsap.timeline();
    tl.from("#Road",{duration: 0.5, y:"-=25", alpha:0})
    tl.from("#Grassright",{duration: 0.5, alpha:0, morphSVG: "#grass-morph-right"})
    tl.from(".mountains",{duration: 0.5, y:"+=50", alpha:0, stagger: -0.25})
    tl.from(".lamp",{duration: 1, alpha:0, stagger: 0.25})
    tl.from("#moon",{duration: 4.0, y:"+=150", alpha:0, rotation:90, transformOrigin: "50% 50%"}, "same")
    tl.from(".lightbulb",{duration: 2, alpha:0, stagger: .5},"same")
    tl.from(".glow",{duration: 2, alpha:0, stagger: .5}, "same")
    tl.from("#Stars",{duration: 3, y:"+=5", alpha:0, stagger: .1}, "same");

    return tl;
}

// function mountainSlide(){
//     const tl = gsap.timeline();
//     tl.from(".mountains",{duration: 0.5, y:"+=50", alpha:0, stagger: -0.25});

//     return tl;
// }

// function lampAppear(){
//     const tl = gsap.timeline();
//     tl.from(".lamp",{duration: 1.5, alpha:0, stagger: 0.5});

//     return tl;
// }

// function moonRise(){
//     const tl = gsap.timeline();
//     tl.from("#moon",{duration: 4.0, y:"+=150", alpha:0, rotation:90, transformOrigin: "50% 50%"}, "same");

//     return tl;
// }

// function lightAppear(){
//     const tl = gsap.timeline();
//     tl.from(".lightbulb",{duration: 2, alpha:0, stagger: .5},"same");

//     return tl;
// }

// function glowAppear(){
//     const tl = gsap.timeline();
//     tl.from(".glow",{duration: 2, alpha:0, stagger: .5}, "same");

//     return tl;
// }

function glowFlicker(){
    const tl = gsap.timeline();

    const glowFlicker = gsap.timeline({repeat:10}, "same");
    glowFlicker.from("#glow1",{duration:0.2,alpha:0})
    .to("#glow1",{duration:0.1,alpha:0.7})
    .to("#glow1",{duration:0.3,alpha:0.4})
    .to("#glow1",{duration:0.1,alpha:0.6})
    .to("#glow1",{duration:0.1,alpha:0.5})
    .to("#glow1",{duration:0.2,alpha:0.6});

    const glowFlicker2 = gsap.timeline({repeat:10}, "same");
    glowFlicker2.from("#glow2",{duration:0.2,alpha:0})
    .to("#glow2",{duration:0.1,alpha:0.6})
    .to("#glow2",{duration:0.1,alpha:0.5})
    .to("#glow2",{duration:0.2,alpha:0.6})
    .to("#glow2",{duration:0.1,alpha:0.7})
    .to("#glow2",{duration:0.3,alpha:0.4});

// const glowFlicker3 = gsap.timeline({repeat:10}, "same");
// glowFlicker3.to("#glow2",{duration:0.2,alpha:0.5})
// .to("#glow3",{duration:0.2,alpha:0.8})
// .to("#glow3",{duration:0.1,alpha:0.4})
// .to("#glow3",{duration:0.1,alpha:0.6})
// .to("#glow3",{duration:0.2,alpha:0.9})
// .to("#glow3",{duration:0.2,alpha:0.4});

// const glowFlicker4 = gsap.timeline({repeat:10}, "same");
// glowFlicker4.to("#glow4",{duration:0.2,alpha:0.5})
// .to("#glow4",{duration:0.1,alpha:0.7})
// .to("#glow4",{duration:0.3,alpha:0.4})
// .to("#glow4",{duration:0.1,alpha:0.6})
// .to("#glow4",{duration:0.1,alpha:0.5})
// .to("#glow4",{duration:0.2,alpha:0.6});

    tl.add(glowFlicker,"same")
      .add(glowFlicker2,"same")

    return tl;
}




// function starsAppear(){
//     const tl = gsap.timeline();
//     tl.from("#Stars",{duration: 3, y:"+=5", alpha:0, stagger: .1}, "same");

//     return tl;
// }

mainTL.add(appear())
        // .add(mountainSlide())
        // .add(lampAppear())
        // .add(moonRise(),"sameTime")
        // .add(lightAppear(),"sameTime")
        // .add(glowAppear(),"sameTime")
        // .add(starsAppear(),"sameTime")
        .add(glowFlicker(),"-=25%");

GSDevTools.create();

import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline();

function appear(){
    const tl = gsap.timeline();
    tl.from("#Road",{duration: 0.5, y:"-=25", alpha:0});

    return tl;
}

function mountainSlide(){
    const tl = gsap.timeline();
    tl.from(".mountains",{duration: 0.5, y:"+=50", alpha:0, stagger: 0.25});

    return tl;
}

function lampAppear(){
    const tl = gsap.timeline();
    tl.from(".lamp",{duration: 1.5, alpha:0, stagger: 0.5});

    return tl;
}

function moonRise(){
    const tl = gsap.timeline();
    tl.from("#moon",{duration: 4.0, y:"+=150", alpha:0, rotation:90});

    return tl;
}

function lightAppear(){
    const tl = gsap.timeline();
    tl.from(".lightbulb",{duration: 2, alpha:0, stagger: .5});

    return tl;
}

function glowAppear(){
    const tl = gsap.timeline();
    tl.from(".glow",{duration: 2, alpha:0, stagger: .5});

    return tl;
}

function starsAppear(){
    const tl = gsap.timeline();
    tl.from("#Stars",{duration: 3, y:"+=20", alpha:0, stagger: .1});

    return tl;
}

mainTL.add(appear())
        .add(mountainSlide())
        .add(lampAppear())
        .add(moonRise())
        .add(lightAppear())
        .add(glowAppear())
        .add(starsAppear());






// function grassMorph(){
//     const tl =gsap.timeline();
//     tl.to("#Grass",{duration:1, scale:2})
//     return tl;
// }

// function mountainSlide1(){
//     const tl =gsap.timeline();
//     tl.to("#mountain1",{duration:1, scale:2})
//     return tl;
// }

// function mountainSlide2(){
//     const tl =gsap.timeline();
//     tl.to("#mountain2",{duration:1, scale:2})
//     return tl;
// }

// function mountainSlide3(){
//     const tl =gsap.timeline();
//     tl.to("#mountain3",{duration:1, scale:2})
//     return tl;
// }

// mainTL.add(grassMorph())
//         .add(mountainSlide1())
//         .add(mountainSlide2())
//         .add(mountainSlide3());


GSDevTools.create();










































// // const heroHeight = document.querySelector("#hero");

// const aniTime = 0.75;

// // console.log(heroHeight.clientHeight + "px is height of hero section");
// // console.log(heroHeight.clientWidth + "px is width of hero section");

// mainTL.from("#hero",{duration:2, alpha:0})
//     .from("#hero h1", {duration:aniTime, y:"+=200", alpha:0})
//     .from("#hero i", {duration:aniTime, y:"-=200", alpha:0, rotation:180}), "50%"

// mainTL.from("#content1 ul li i",{duration:aniTime, y:"+=10", alpha:0})

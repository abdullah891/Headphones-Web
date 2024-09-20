function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});



tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
  .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
  .to(".purple", {backgroundColor: "#28a92b"}, 0);



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}
let tl = gsap.timeline()
tl.from("nav ",{
    scale:0,
    duration:1,
    stagger:1,
})

tl.from(".home-content h3", {
    x: -100,
    duration: 0.5,
    delay: 1,
    opacity: 0
})
tl.from(".home-content h2", {
    x: -100,
    duration: 0.5,
    opacity: 0
})
tl.from(".home-content h1", {
    x: -100,
    duration: 0.5,
    opacity: 0
})
tl.from(".home-content button", {
    x: -100,
    duration: 0.5,
    opacity: 0
})

tl.from(" .home img", {
    // top:"30%",
    x: 200,
    opacity: 0,
    // scale:0,
    duration: 1,
})

tl.from(".devices .t-devices", {
    x: 200,
    duration: 1,
    opacity: 0,
    // scale:0,
    stagger: 1,
    scrollTrigger: {
        trigger: ".devices .t-devices",
        scroller: ".body",
        markers: true,
        start:"top60%"
    }
})

tl.from(".devices .b-devices", {
    x: -200,
    duration: 1,
    opacity: 0,
    // scale:0,
    stagger: 1,
    scrollTrigger: {
        trigger: ".devices .t-devices",
        scroller: ".body",
        markers: true,
        start:"top60%"
    }
})

tl.from(".badges",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:1              
})

tl.from(".banner", {
    x: 400,
    duration: 1,
    opacity: 0,
    // scale:0,
    stagger: 1,
    scrollTrigger: {
        trigger: ".banner",
        scroller: ".body",
        markers: true,
        start:"top60%"
    }
})

tl.from(".best-seller", {
    x: 400,
    duration: 1,
    opacity: 0,
    // scale:0,
    stagger: 1,
    scrollTrigger: {
        trigger: ".best-seller",
        scroller: ".body",
        markers: true,
        start:"top60%"
    }
})






init()
let crsr = document.querySelector("#cursor");
let blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x +"px";
    crsr.style.top = dets.y +"px";
    blur.style.left = dets.x - 150 +"px";
    blur.style.top = dets.y-150 +"px";
})

let h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
     elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3;
        crsr.style.border = "1px solid white";
        crsr.style.backgroundColor  = "transparent";
     })
     elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor  = "#95C11E";
     })
})

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // marker:true,
        start:"top -25%",
        end: "top -70%",
        scrub:2
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start: "top 60%",
        end:"top 58%",
        scrub:2
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start: "top 70%",
        end:"top 65%",
        scrub:2
    }
})
gsap.from(".blog",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:1,
    scrollTrigger:{
        trigger:".blog",
        scroller:"body",
        // markers:true,
        start: "top 70%",
        end:"top 65%",
        scrub:4
    }
})
gsap.from("#page4 h2",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h2",
        scroller:"body",
        // markers:true,
        start: "top 70%",
        end:"top 65%",
        scrub:3
    }
})

var loco = () => {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
loco();

const lerp = (x, y, a) => x * (1 - a) + y * a;
var main = document.querySelector("main")



var fName = [
  "Instagram",
  "Threads",
  "Linkedin",
  "GitHub",
  "Twitter"
]

var SocialLink = [
  "https://www.instagram.com/its__nandlal/",
  "https://www.threads.net/@its__nandlal",
  "https://www.linkedin.com/in/nandlal-jangir-8b9b512b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  "https://github.com/its-nandlal",
  "/"

]

// Menu Div Create 
var menuDiv = document.createElement("div")
menuDiv.classList.add("menuDiv")
document.body.appendChild(menuDiv)

const menuPage = () => {

  // Menu Div Inner Div MenuContant Create 

  var menuContant = document.createElement("div")
  menuContant.classList.add("menuContant")
  menuDiv.appendChild(menuContant)

  // MenuContact Inner Box1

  var MContactBox1 = document.createElement("div")
  MContactBox1.classList.add("MContactBox1", "MContactBox")
  menuContant.appendChild(MContactBox1)


  // Box1 inner elem spans

  var Box1elem = document.createElement("div")
  Box1elem.classList.add("Box1elem")
  MContactBox1.appendChild(Box1elem)

  for (let i = 0; i <= 4; i++) {
    Box1elem.innerHTML += `<a target="_blank" class='frSpan'></a>`
  };

  var b1eSpan = document.querySelectorAll(".Box1elem>a")
  b1eSpan.forEach((elem, nth) => {
    elem.innerText = `${fName[nth]}`
  });

  MContactBox1.childNodes[0].childNodes
    .forEach((elem, nth) => {
      elem.href = `${SocialLink[nth]}`
    })

  // MenuContact Inner Box2
  var MContactBox2 = document.createElement("div")
  MContactBox2.classList.add("MContactBox2", "MContactBox", "showallPages")
  menuContant.appendChild(MContactBox2)

  // Box2 inner elem

  var elemText = [
    "Hom",
    "About",
    "Project",
    "Contact",
  ]

  for (let i = 0; i <= 3; i++) {
    // `<div class='elem'><span>${elemText}</span><span>${elemText}</span></div>`
    var elem = document.createElement("div")
    elem.classList.add("elem")
    MContactBox2.appendChild(elem)
  }

  // elem inner span

  var elems = document.querySelectorAll(".elem")
  elems.forEach((elem, nth) => {
    for (let i = 0; i <= 1; i++) {
      // var espan = document.createElement("span")
      // espan.classList.add("espan")
      // elem.appendChild(espan)
      elem.innerHTML = `<div class='ebox'><a class='boxAlink'>${elemText[nth]}</a><a>${elemText[nth]}</a></div>`
    }

    elem.addEventListener("mouseenter", () => {
      gsap.to(elem.children[0].children, {
        y: "-100%",
        ease: Power4,
        duration: .4,
      });
    });

    elem.addEventListener("mouseleave", () => {
      gsap.to(elem.children[0].children, {
        y: "0%",
        ease: Power4,
        duration: .4,
      });
    });

  });

};
menuPage();

const removeMenuPage = (elem) => {
  elem
}

var heroEffect = () => {

  var rightSec = () => {
    var rightBtns = document.createElement("div")
    rightBtns.classList.add("rightBtns", "showMenu")
    document.body.append(rightBtns)

    var rbtnTop = document.createElement("div")
    rbtnTop.classList.add("rbtnTop", "showMenu")
    document.body.appendChild(rbtnTop)

    var burgurBtn = document.createElement("div")
    burgurBtn.classList.add("burgurBtn")
    rbtnTop.appendChild(burgurBtn)

    for (let i = 0; i <= 1; i++) {
      var btnLines = document.createElement("span")
      btnLines.classList.add("btnLines")
      burgurBtn.appendChild(btnLines)
    }




    // MOUSEFOLLOWER
    var mousefollower = () => {

      // create Cursure and add body
      var cursure = document.createElement("div");
      cursure.classList.add("cursure");
      document.body.appendChild(cursure);

      // cursure follow mouse
      main
        .addEventListener("mousemove", (e) => {
          gsap.to(cursure, {
            x: e.clientX,
            y: e.clientY,
            ease: Power4
          });

          rightBtns.addEventListener("mouseenter", () => {
            gsap.to(cursure, {
              x: "",
              y: "",
              scale: 3,
              left: "unset",
              top: "6%",
              right: "5.5%",
              ease: Power4
            })
          });


          rightBtns.addEventListener("mouseleave", () => {

            gsap.to(rightBtns, {
              width: "9rem",
              height: "5rem",
              ease: Power4,
            })

            gsap.to(cursure, {
              x: e.clientX,
              y: e.clientY,
              scale: 1,
              left: "0%",
              top: "0%",
              right: "unset",
              ease: Power4
            })
          });
        });


      var rVal = rbtnTop.getBoundingClientRect()

      rightBtns.addEventListener("mousemove", (e) => {

        var rxstart = rVal.left
        var rxend = rVal.left + rVal.width
        var rystart = rVal.top
        var ryend = rVal.top + rVal.height

        var rxdiff = gsap.utils.mapRange(rxstart, rxend, 0, 1, e.clientX)
        var rydiff = gsap.utils.mapRange(rystart, ryend, 0, 1, e.clientY)

        gsap.to(rightBtns, {
          width: "12rem",
          height: "7rem",
          ease: Power4,
        });

        gsap.to(rbtnTop, {
          x: lerp(-7, 7, rxdiff),
          ease: Power4
        });

        gsap.to(rbtnTop, {
          y: lerp(-7, 7, rydiff),
          ease: Power4
        });

        gsap.to(cursure, {
          x: lerp(-7, 7, rxdiff),
          ease: Power4
        });

        gsap.to(cursure, {
          y: lerp(-7, 7, rydiff),
          ease: Power4
        });

      });

      rightBtns.addEventListener("mouseout", () => {
        gsap.to(rbtnTop, {
          x: 0,
          y: 0,
          ease: Power4
        });
      })
    }
    mousefollower();




    // Show Menu

    var clter = false
    var anm = false
    var menuDivElem = document.querySelector(".menuDiv")
    var showMenu = document.querySelectorAll(".showMenu")
    showMenu
      .forEach((elem) => {
        elem
          .addEventListener("click", () => {

            if (!anm) {
              anm = true
              if (clter == false) {
                document.body.appendChild(menuDiv)
                gsap.to(menuDivElem, {
                  rotate: "0deg",
                  height: "100vh",
                  duration: .5,
                  ease: Power4
                });


                menuDiv.addEventListener("mousemove", (e) => {
                  gsap.to(".cursure", {
                    x: e.clientX,
                    y: e.clientY,
                    top: "0%",
                    left: "0%",
                    ease: Power4
                  });
                });

                gsap.to(rbtnTop, {
                  top: "3.4%",
                  ease: Power4
                })

                gsap.to(burgurBtn, {
                  gap: 0,
                  ease: Power4,
                  duration: .2,
                  onComplete: function () {
                    setTimeout(() => {
                      gsap.to(burgurBtn.childNodes[0], {
                        rotate: "135deg",
                        ease: Power4,
                        duration: .5,
                      });

                      gsap.to(burgurBtn.childNodes[1], {
                        rotate: "-135deg",
                        ease: Power4,
                        duration: .5,
                      });
                    }, 100)
                  }
                });

                gsap.to(".menuContant", {
                  scale: "1.1",
                  ease: Power3,
                  onComplete: function () {
                    anm = false
                    clter = true;
                  }
                });

                document.querySelector(".MContactBox2").childNodes[0].childNodes[0].childNodes[1]
                  .addEventListener("click", () => [
                    document.querySelector(".MContactBox2").childNodes[0].childNodes[0].childNodes[1].href = '/'
                  ])


                document.querySelector(".MContactBox2").childNodes
                  .forEach((elem) => {
                    elem
                      .addEventListener("click", () => {
                        gsap.to(burgurBtn.childNodes[0], {
                          rotate: "0deg",
                          ease: Power4,
                          duration: .5,
                        });

                        gsap.to(burgurBtn.childNodes[1], {
                          rotate: "0deg",
                          ease: Power4,
                          duration: .5,
                          onComplete: function () {
                            setTimeout(() => {
                              gsap.to(burgurBtn, {
                                gap: "0.5rem",
                                ease: Power4,
                                duration: .2,
                              });
                            }, 100);
                          }
                        });

                        gsap.to(".menuContant", {
                          scale: ".9",
                          ease: Power3
                        });


                        gsap.to(menuDivElem, {
                          rotate: "4.5deg",
                          height: "0vh",
                          duration: .5,
                          ease: Power4,
                          onComplete: function () {
                            menuDiv.remove()
                            anm = false
                            clter = false;
                          }
                        });

                        removeMenuPage(

                          function () {
                            gsap.to(burgurBtn.childNodes[0], {
                              rotate: "0deg",
                              ease: Power4,
                              duration: .5,
                            });

                            gsap.to(burgurBtn.childNodes[1], {
                              rotate: "0deg",
                              ease: Power4,
                              duration: .5,
                              onComplete: function () {
                                setTimeout(() => {
                                  gsap.to(burgurBtn, {
                                    gap: "0.5rem",
                                    ease: Power4,
                                    duration: .2,
                                  });
                                }, 100);
                              }
                            });

                            gsap.to(".menuContant", {
                              scale: ".9",
                              ease: Power3
                            });


                            gsap.to(menuDivElem, {
                              rotate: "4.5deg",
                              height: "0vh",
                              duration: .5,
                              ease: Power4,
                              onComplete: function () {
                                menuDiv.remove()
                                anm = false
                                clter = false;
                              }
                            });
                          }

                        )
                      });

                  });

              }
              else {

                gsap.to(rbtnTop, {
                  top: "3%",
                  ease: Power4
                })

                gsap.to(burgurBtn.childNodes[0], {
                  rotate: "0deg",
                  ease: Power4,
                  duration: .5,
                });

                gsap.to(burgurBtn.childNodes[1], {
                  rotate: "0deg",
                  ease: Power4,
                  duration: .5,
                  onComplete: function () {
                    setTimeout(() => {
                      gsap.to(burgurBtn, {
                        gap: "0.5rem",
                        ease: Power4,
                        duration: .2,
                      });
                    }, 100);
                  }
                });

                gsap.to(".menuContant", {
                  scale: ".9",
                  ease: Power3
                });


                gsap.to(menuDivElem, {
                  rotate: "4.5deg",
                  height: "0vh",
                  duration: .5,
                  ease: Power4,
                  onComplete: function () {
                    menuDiv.remove()
                    anm = false
                    clter = false;
                  }
                });

                removeMenuPage(

                  function () {
                    gsap.to(burgurBtn.childNodes[0], {
                      rotate: "0deg",
                      ease: Power4,
                      duration: .5,
                    });

                    gsap.to(burgurBtn.childNodes[1], {
                      rotate: "0deg",
                      ease: Power4,
                      duration: .5,
                      onComplete: function () {
                        setTimeout(() => {
                          gsap.to(burgurBtn, {
                            gap: "0.5rem",
                            ease: Power4,
                            duration: .2,
                          });
                        }, 100);
                      }
                    });

                    gsap.to(".menuContant", {
                      scale: ".9",
                      ease: Power3
                    });


                    gsap.to(menuDivElem, {
                      rotate: "4.5deg",
                      height: "0vh",
                      duration: .5,
                      ease: Power4,
                      onComplete: function () {
                        menuDiv.remove()
                        anm = false
                        clter = false;
                      }
                    });
                  }

                )

              };
            }
          })
      })


  }
  rightSec();

  var hero = () => {
    var hero_top = document.querySelector(".h-top")
    var nav = document.createElement("nav")
    var navBox = document.createElement("div")
    hero_top.appendChild(nav)
    navBox.classList.add("nav_box", "showallPages")
    nav.appendChild(navBox)
    for (let i = 0; i < 4; i++) {
      var aTag = document.createElement("a")
      aTag.classList.add("boxA", "frSpan")
      navBox.appendChild(aTag)
    }

    var boxATital = [
      "Home",
      "About",
      "Project",
      "contact",
    ]

    navBox.childNodes[0].href = '/';

    var boxA = document.querySelectorAll(".boxA")
    boxA.forEach((elem, nth) => {
      elem.innerText = boxATital[nth]
    })

  }
  hero();

  gsap.from(".boxA", {
    y: "200%",
    ease: Power4,
    duration: 1,
    onComplete: function () {
      gsap.to(".ht-contant>img", {
        width: "110vh",
        ease: Power4,
        onCompilite: function () {
          gsap.to(".htc-Text", {
            fontSize: "13vh",
            ease: Power4,
            duration: .8,
            delay: .3
          })
        }
      })
    }
  });


  gsap.to(".h-top", {
    width: "0%",
    height: "0%",
    borderRadius: "100%",
    ease: Power4,
    scrollTrigger: {
      trigger: ".h-top",
      scroller: "main",
      start: "1% top",
      end: "200% bottom",
      pin: true,
      scrub: 0.05,
      // markers: true
    }
  });


};
heroEffect();


var canvas1 = () => {

  gsap.from(".show>canvas", {
    opacity: 0,
    ease: Power4,
    duration: 0.1,
    scrollTrigger: {
      trigger: ".show>canvas",
      scroller: "main",
      start: "8% top",
      end: "9% top",
      scrub: 1,
    }
  })

  const canvas = document.querySelector(".show>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
    images/canvas-1/v2_000.jpg
    images/canvas-1/v2_001.jpg
    images/canvas-1/v2_002.jpg
    images/canvas-1/v2_003.jpg
    images/canvas-1/v2_004.jpg
    images/canvas-1/v2_005.jpg
    images/canvas-1/v2_006.jpg
    images/canvas-1/v2_007.jpg
    images/canvas-1/v2_008.jpg
    images/canvas-1/v2_009.jpg
    images/canvas-1/v2_010.jpg
    images/canvas-1/v2_011.jpg
    images/canvas-1/v2_012.jpg
    images/canvas-1/v2_013.jpg
    images/canvas-1/v2_014.jpg
    images/canvas-1/v2_015.jpg
    images/canvas-1/v2_016.jpg
    images/canvas-1/v2_017.jpg
    images/canvas-1/v2_018.jpg
    images/canvas-1/v2_019.jpg
    images/canvas-1/v2_020.jpg
    images/canvas-1/v2_021.jpg
    images/canvas-1/v2_022.jpg
    images/canvas-1/v2_023.jpg
    images/canvas-1/v2_024.jpg
    images/canvas-1/v2_025.jpg
    `;
    return data.split("\n")[index];
  }

  const frameCount = 24;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 1,
      trigger: `.show>canvas`,
      //   set start end according to preference
      start: `top top`,
      end: `bottom top`,
      scroller: `main`,
      // markers:true
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.min(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: ".show",
    pin: true,
    // markers:true,
    scroller: `main`,
    //   set start end according to preference
    start: `top top`,
    end: `bottom top`,
    scrub: 0.15
  });


}
canvas1();



const projectPage1 = () => {
  
  var headding = document.querySelectorAll(".headding")
  headding.forEach((elem) => {
    for (let i = 0; i <= 1; i++) {
      var h1s = `<h1>PROJECTS*</h1>`
      elem.innerHTML += h1s
    }
  })

  gsap.to(".headding", {
    duration: 10,
    ease: "none",
    x: "-=100%",
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % 100)
    },
    repeat: -1
  })
  var tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".inner_project",
      scroller: "main",
      start: "top top",
      end: "440% top",
      // endTrigger: ".last_seet",
      // markers: true,
      pin: ".inner_project",
      scrub: .15,
    }
  })

  tl1.to(".seet", {
    y: "-400%",
    ease: "sine.inOut",
    duration: 15,
  }, "tl1")
  tl1.to(".images>.pBoxImg", {
    y: "-400%",
    ease: "sine.inOut",
    duration: 15,
  }, "tl1")

  const pVideoShow = () => {

    var pBoxImg = document.querySelectorAll(".pBoxImg")

    pBoxImg
      .forEach((elem, nth) => {

        elem
          .addEventListener("mouseenter", () => {
            var pvideo = document.createElement("video")
            elem.appendChild(pvideo);

            gsap.to(elem.children[0], {
              scale: 1.2,
              opacity: 0,
              ease: Power4,
              duration: .6,
              onCompilite: function () {
                gsap.from(pvideo, {
                  scale: 1.2,
                  opacity: 0,
                  ease: Power4,
                  onCompilite: function () {
                    pvideo.setAttribute("src", `video/vid${nth}.mp4`)
                    pvideo.play()
                    pvideo.loop = true
                  },
                });

              }
            });

          });


        elem
          .addEventListener("mouseleave", () => {
            gsap.to(elem.children[0], {
              scale: 1,
              opacity: 1,
              ease: Power4,
              duration: .6,
              onCompilite: function () {
                elem.children[1].remove()
              }
            });

          });

      });

  }
  pVideoShow();

  const demoButton = () => {

    var demoButton = document.querySelectorAll(".demoButton")
    demoButton
      .forEach((elem) => {
        elem
          .addEventListener("mouseenter", () => {

            gsap.from(elem, {
              padding: "0.8rem 1.6rem"
            })

            gsap.to(elem.children[0].children, {
              y: "-100%",
              ease: Power4,
              duration: .3
            });

            gsap.to(elem.children[1].children[0], {
              y: "0%",
              ease: Power4,
              duration: .3,
              onUpdate: function () {
                setTimeout(() => {
                  gsap.set(elem.children[1].children[0], {
                    borderRadius: "0 0 0 0",
                    ease: Power4,
                  })
                }, 200)
              },
            });

          });

        elem
          .addEventListener("mouseleave", () => {

            gsap.to(elem.children[0].children, {
              y: "0%",
              ease: Power4,
              duration: .3
            });

            gsap.to(elem.children[1].children[0], {
              y: "101%",
              ease: Power4,
              duration: .3,
              borderRadius: "18rem 18rem 0 0"
            });

          });

      });


  };
  demoButton();

}
projectPage1()



const followUS = () => {

  var f_elemBacksvg = `<svg width="3rem" height="3rem" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`

  var f_elemBack = document.querySelectorAll(".f_elemBack")
  f_elemBack.forEach((elem, nth) => {
    var fMarkey = elem.querySelectorAll(".fMarkey")

    elem
      .addEventListener("mouseenter", () => {
        gsap.to(elem.children, {
          height: "100%",
          ease: Power4,
        })
        fMarkey.forEach((elem) => {
          for (let i = 0; i < 8; i++) {
            var mrk = `<div class='mrk'><h2 class='fetH2'>${fName[nth]}</h2><span class='sp'>${f_elemBacksvg}</span></div>`
            elem.innerHTML += mrk
          }
        })
        mrkEffect();
      });

    elem
      .addEventListener("mouseleave", () => {
        gsap.to(elem.children, {
          height: "0%",
        })
        fMarkeyN(() => {
          fMarkey.forEach((elem) => {
            elem.innerHTML = "";
          })
        })
      });

    elem
      .addEventListener("click", () => {
        var followALink = document.createElement("a")
        document.body.appendChild(followALink)
        followALink.target = "_blank"
        followALink.href = `${SocialLink[nth]}`
        followALink.click()
        followALink.remove()
      })


  });

  var fMarkeyN = (p) => {
    setTimeout(() => {
      p();
    }, 260)
  };

  var mrkEffect = () => {
    gsap.to(".mrk", {
      duration: 2.5,
      ease: "none",
      x: "-=100%",
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 100)
      },
      repeat: -1
    })
  };

  var followUS = document.querySelector(".followUS")


}
followUS();


const Showimg = () => {
  var Showimg = document.querySelector(".Showimg")
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".Showimg",
      scroller: "main",
      pin: true,
      start: "top 25%",
      end: "500% bottom",
      startTrigger: ".sic_imagesFrist",
      // markers: true,
      scrub: 0.3
    }
  });

  tl2.to(".sic_images", {
    x: "-350%",
    ease: "none",
    duration: 15,
  });

  var sic_images = document.querySelectorAll(".sic_images>img")
  sic_images.forEach((elem) => {
    elem
      .addEventListener("mouseenter", () => {
        gsap.to(elem, {
          scale: "1.1",
          ease: Power4
        })
      });
    elem
      .addEventListener("mouseleave", () => {
        gsap.to(elem, {
          scale: "1",
          ease: Power4
        })
      });
  })
}
Showimg();


var footer_elem = document.querySelector(".footer_elem");
var footer = document.querySelector(".footer")
var divImg = [
  "images/showme2.jpg",
  "images/showme3.jpg",
  "images/showme4.jpg",
]

const footerEffect = () => {

  var throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
      let now = new Date().getTime();

      if (now - prev > delay) {
        prev = now;
        return func(...args);
      }
    }
  }

  footer_elem.addEventListener("mousemove", throttleFunction((dets) => {
    var div = document.createElement("div");
    div.classList.add("fe_imgDiv");
    footer.appendChild(div);
    div.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`

    var footer_elemVal = footer_elem.getBoundingClientRect()
    var x = dets.clientX - footer_elemVal.left
    var xdiff = gsap.utils.mapRange(0, footer_elemVal.width, 3, -3, x)


    gsap.to(div, {
      rotate: xdiff,
      ease: Power3
    })

    var dImg = document.createElement("img");
    dImg.classList.add("dImg");
    var rsrc = Math.floor(Math.random() * divImg.length)
    dImg.setAttribute("src", `${divImg[rsrc]}`)
    div.appendChild(dImg);

    gsap.to(dImg, {
      y: 0,
      scale: 1.1,
      ease: Power4,
      duration: .5,
      // scrub: 1,
    })

    setTimeout(() => {
      gsap.to(dImg, {
        y: "100%",
      })
      setTimeout(() => {
        div.remove();
      }, 500)
    }, 500);
  }, 350));

  var btn_top = document.querySelector(".btn_top")
  btn_top.addEventListener("mouseenter", () => {

    gsap.from(".btn_top", {
      padding: "0.31rem 1.5rem",
      duration: .8,
      ease: Power4
    })

    gsap.to(".btn_top_text>span", {
      y: "-101%",
      duration: .55,
      ease: Power4
    });

    gsap.to(".btn_bottom_set", {
      y: 0,
      duration: .3,
      borderRadius: "0 0 0 0",
      ease: Power4
    });

  });

  btn_top.addEventListener("mouseleave", () => {
    gsap.to(".btn_top_text>span", {
      y: "0%",
    });

    gsap.to(".btn_bottom_set", {
      y: "101%",
      borderRadius: "15rem 15rem 0 0",
    })
  });

  var frSpan = document.querySelectorAll(".frSpan")
  frSpan.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      elem.style.setProperty("--trfO", "bottom left")
      elem.style.setProperty("--trSX", "1")
    })
    elem.addEventListener("mouseleave", () => {
      elem.style.setProperty("--trfO", "bottom right")
      elem.style.setProperty("--trSX", "0")
    })
  })
}
footerEffect();

// ABOUT PAGE CREATE

const aboutpage = () => {
  var aboutpage = document.createElement("div")
  aboutpage.classList.add("aboutpage", "cmove")
  // document.body.append(aboutpage)

  // REMOVE AboutPage

  var apageRemove = () => {
    var apageRemove = document.createElement("div")
    apageRemove.classList.add("apageRemove")
    aboutpage.appendChild(apageRemove)

    for (let i = 0; i <= 1; i++) {
      apageRemove.innerHTML += `<span class='btnLines'></span>`
    }

    apageRemove.addEventListener("click", () => {
      apageRemove.remove();
      gsap.to(".rsection>p>span",{
        fontSize: "0rem"
      });
      gsap.to(".rsection>p", {
        fontSize: "0rem",
        onComplete: function () {
          gsap.to(".aHeadding>span", {
            y: "101%",
            fontSize: "0rem",
            fontWeight: "600",
            ease: Power4,
            onComplete: function () {
              gsap.to(aInnerPage, {
                height: "0vh",
                ease: Power4,
                duration: .6,

                onComplete: function () {
                  aboutpage.remove();
                }
              })
            }
          })
        }
      });


    })
  }


  // SHOW AboutPage
  var showallPages = document.querySelectorAll(".showallPages")
  showallPages.forEach((elem) => {
    elem.childNodes[3].classList.add("contact")
    elem.childNodes[1]
      .addEventListener("click", () => {

        document.body.append(aboutpage)
        removeMenuPage()
        gsap.to(aInnerPage, {
          height: "90vh",
          ease: Power4,
          duration: .7,
          onComplete: function () {
            apageRemove();
            gsap.to(".rsection>p", {
              fontSize: "0.9rem",
              ease: Power4,
              onCompilite:function(){
                gsap.to(".rsection>p>span",{
                  fontSize: "1rem"
                });
                gsap.set(".aHeadding>span", {
                  y: "0%",
                  fontSize: "30.5vh",
                  fontWeight: "200",
                  ease: Power4,
                });
              }
            });

          }
        })

        aboutpage.addEventListener("mousemove", (e) => {
          gsap.to(".cursure", {
            x: e.clientX,
            y: e.clientY,
            ease: Power4,
          })
        })

      });

  });





  //  ABOUT PAGE INNERPAGE

  var aInnerPage = document.createElement("div")
  aInnerPage.classList.add("aInnerPage")
  aboutpage.appendChild(aInnerPage)

  //  INNER PAGE BACK
  aInnerPage.innerHTML += `<div class='aipageBack'></div>`

  //  INNER PAGE HEADDING

  aInnerPage.innerHTML += `<h1 class='aHeadding'><span>About</span></h1>`

  // INNER PAGE RIGHT SECTION

  var rsection = document.createElement("div")
  rsection.classList.add("rsection")
  aInnerPage.appendChild(rsection)

  // RIGHT SECTION INFO 
  rsection.innerHTML += `<p>My name is Nandlal Jangid, currently I am <span>HTML</span> <span>CSS</span>  and <span>Java Scrpit</span>  Frontend Developer. And I am a medium up level JavaScript (GSAP) animation creator and my hobby is taking any work to the next level. and i am from rajasthan</p>`


  // RIGHT SECTION SEGNATUR
  aInnerPage.innerHTML += `<span>Nandlaljangir</span>`

}
aboutpage();


// PROJECT PAGE CREATE

const projectpage2 = () => {

  // IMG LINKS 

  var pImage = [
    "images/img1.jpg",
    "images/img2.png",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg",
    "images/img6.jpg",
    "images/img7.png",
    "images/img8.jpg",
  ]

  var pName = [
    "CYBERFICTION",
    "CUBERTO",
    "THISISMAGMA",
    "APPLE VISION PRO",
    "INSTAGRAM",
    "REJOUICE",
    "THE BUBBLE GAME",
    "NAVERLAND-AGENCY"
  ]

  var pLink = [
    "https://its-nandlal.github.io/CYBERFICTION/",
    "https://its-nandlal.github.io/cuberto.com/",
    "https://its-nandlal.github.io/MAGMA/",
    "https://its-nandlal.github.io/APPLE-VISON-PROO/",
    "https://its-nandlal.github.io/INSTAGRAM-CLONE/",
    "https://its-nandlal.github.io/REJOUICE/",
    "https://its-nandlal.github.io/bubble-game/",
    "https://its-nandlal.github.io/NAVERLAND-AGENCY/"
  ]


  // CREATE PROJECT PAGE

  var projectpage = document.createElement("div")
  projectpage.classList.add("projectpage")
  // document.body.appendChild(projectpage)

  // REMOVE PAGE 

  var premove = () => {
    var apageRemove = document.createElement("div")
    apageRemove.classList.add("apageRemove", "premove")
    projectpage.appendChild(apageRemove)

    for (let i = 0; i <= 1; i++) {
      apageRemove.innerHTML += `<span class='btnLines'></span>`
    }

    document.querySelector(".premove")
      .addEventListener("click", () => {
        apageRemove.remove()
        gsap.to(pInnerpage, {
          height: "0vh",
          ease: Power4,
          duration: .6,
          onComplete: function () {
            projectpage.remove()
          }
        });
      })

  }



  // SHOW PAGE

  var showallPages = document.querySelectorAll(".showallPages")
  showallPages
    .forEach((elem) => {
      elem.childNodes[2]
        .addEventListener("click", () => {
          document.body.appendChild(projectpage)

          gsap.to(pInnerpage, {
            height: "90vh",
            ease: Power4,
            duration: .7,
            onComplete: function () {
              premove();
            }
          });

          projectpage
            .addEventListener("mousemove", (e) => {
              gsap.to(".cursure", {
                x: e.clientX,
                y: e.clientY,
                ease: Power4
              })
            });


          var showVideo = document.querySelectorAll(".pBox>.pBoxImg")
          showVideo.forEach((elem, nth) => {
            elem
              .addEventListener("mouseenter", () => {
                var pvVideo = document.createElement("video")
                elem.appendChild(pvVideo)
                gsap.to(elem.childNodes[0], {
                  scale: 1.2,
                  opacity: 0,
                  ease: Power4,
                  duration: .6,
                  onCompilite: function () {
                    gsap.from(pvVideo, {
                      scale: 1.2,
                      opacity: 0,
                      ease: Power4,
                      onCompilite: function () {
                        pvVideo.setAttribute("src", `video/pv/vid${nth}.mp4`);
                        pvVideo.play();
                        pvVideo.loop = true
                      }
                    })
                  }
                });

              });

            elem
              .addEventListener("mouseleave", () => {
                gsap.to(elem.childNodes[0], {
                  scale: 1,
                  opacity: 1,
                  ease: Power4,
                  duration: .6,
                  onCompilite: function () {
                    elem.childNodes[1].remove()
                  }
                });

              });

          });

          const demoButton = () => {

            var demoButton = document.querySelectorAll(".pEM>.demoButton")
            demoButton
              .forEach((elem) => {
                elem
                  .addEventListener("mouseenter", () => {

                    gsap.from(elem, {
                      padding: "0.8rem 1.6rem"
                    })

                    gsap.to(elem.children[0].children, {
                      y: "-100%",
                      ease: Power4,
                      duration: .3
                    });

                    gsap.to(elem.children[1].children[0], {
                      y: "0%",
                      ease: Power4,
                      duration: .3,
                      onUpdate: function () {
                        setTimeout(() => {
                          gsap.set(elem.children[1].children[0], {
                            borderRadius: "0 0 0 0",
                            ease: Power4,
                          })
                        }, 200)
                      },
                    });

                  });

                elem
                  .addEventListener("mouseleave", () => {

                    gsap.to(elem.children[0].children, {
                      y: "0%",
                      ease: Power4,
                      duration: .3
                    });

                    gsap.to(elem.children[1].children[0], {
                      y: "101%",
                      ease: Power4,
                      duration: .3,
                      borderRadius: "18rem 18rem 0 0"
                    });

                  });

              });


          };
          demoButton();
        });
    }); // SHOW PAGE END



  // PROJECT PAGE INNER

  var pInnerpage = document.createElement("div")
  pInnerpage.classList.add("pInnerpage")
  projectpage.appendChild(pInnerpage)

  // PROJECT BOX

  var showProject = document.createElement("div")
  showProject.classList.add("showProject")

  pInnerpage.appendChild(showProject)




  for (let i = 0; i < pImage.length; i++) {
    var pBox = `<div class='pBox'><div class='pBoxImg'></div><span>
  <span></span>
    <em class="pEM" > <button class="demoButton">
    <a target="_blank">
        <span>Live Demo <i class="ri-arrow-right-up-line"></i></span>
        <span>Live Demo <i class="ri-arrow-right-up-line"></i></span>
    </a>
    <span>
        <span></span>
    </span>
</button> </em>
    </span></div>`
    showProject.innerHTML += pBox
  }


  pInnerpage.childNodes[0].childNodes.forEach((elem, nth) => {
    var imgBox = pInnerpage.childNodes[0].childNodes[nth].childNodes[0]
    var elemImg = document.createElement("img", "himg")
    imgBox.appendChild(elemImg)
    elemImg.src = `${pImage[nth]}`

    elem.childNodes[1].childNodes[1].textContent = `${pName[nth]}`
    elem.childNodes[1].childNodes[3].childNodes[1].childNodes[1].href = `${pLink[nth]}`
  })



}
projectpage2();

var contact = document.querySelectorAll(".contact")
contact.forEach((elem)=>{
  elem
  .addEventListener("click",()=>{
    var contactA = document.createElement("a")
    document.body.appendChild(contactA)
    contactA.href = "mailto:nandlaljangir41@gmail.com"
    contactA.click()
    contactA.remove()
  })
})
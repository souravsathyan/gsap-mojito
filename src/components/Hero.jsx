import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef();

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paraSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((chars) => chars.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 80,
      stagger: 0.04,
      duration: 1.2,
      ease: "expo.out",
      opacity: 0,
    });

    gsap.from(paraSplit.lines, {
      yPercent: 100,
      stagger: 0.06,
      duration: 1.8,
      ease: "expo.out",
      delay: 0.5,
      opacity: 0,
    });

    gsap.from(".demo", {
      xPercent: -60,
      //   stagger: 0.06,
      duration: 0.8,
      ease: "power1.inOut",
      delay: 0.5,
      opacity: 0,
    });

    gsap.from(".cock-link", {
      x: 200,
      duration: 0.8,
      ease: "power1.inOut",
      delay: 2,
      opacity: 0,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 300 }, 0)
      .to(".left-leaf", { y: -200 }, 0);

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });
    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
  }, []);
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>

        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />

        <div className="body ">
          <div className="content ">
            <div className="space-y-5 hidden md:block">
              <p className="demo">Crisp. Cool. Classic</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes - designed to delight your
                senses.
              </p>
              <a className="cock-link" href="#cocktails">
                View Cocktails
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="video absolute inset-0 ">
        <video
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
          ref={videoRef}
        />
      </div>
    </>
  );
};

export default Hero;

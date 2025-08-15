import React from "react";
import { cocktailLists, mockTailLists } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Cocktails = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from("#c-left-leaf", { x: -100, opacity: 0, duration: 0.8 })
      .from(
        "#c-right-leaf",
        { x: 100, y: 100, opacity: 0, duration: 0.8 },
        "-=0.5"
      ) // overlap by 0.5s
      .from(".popular", { x: 200, opacity: 0, duration: 0.6 })
      .from(".loved", { x: -200, opacity: 0, duration: 0.6 }, "-=0.4"); // overlap loved with popular
  }, []);

  return (
    <section id="cocktails" className="noisy">
      <img
        src="/images/cocktail-left-leaf.png"
        alt="left-c-leaf"
        id="c-left-leaf"
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="right-c-leaf"
        id="c-right-leaf"
      />

      <div className="list">
        <div className="popular">
          <h2> Most Popular Coctails :</h2>

          <ul>
            {mockTailLists.map((drink) => {
              return (
                <li key={drink?.id}>
                  <div className="md:me-28">
                    <h3>{drink?.name}</h3>
                    <p>
                      {drink?.country} | {drink?.detail}
                    </p>
                  </div>
                  <span>- {drink?.price}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="loved">
          <h2> Most Popular Coctails :</h2>

          <ul>
            {cocktailLists.map((drink) => {
              return (
                <li key={drink?.id}>
                  <div className="md:me-28">
                    <h3>{drink?.name}</h3>
                    <p>
                      {drink?.country} | {drink?.detail}
                    </p>
                  </div>
                  <span>- {drink?.price}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;

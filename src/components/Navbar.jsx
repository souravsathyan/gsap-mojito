import gsap from "gsap";
import { navLinks } from "../constants";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        duration: 1,
        ease: "power1.inOut",
        backdropFilter: "blur(10px)",
      }
    );
  }, []);
  return (
    <nav>
      <div>
        <a href="#home" className="flex item-center gap-2">
          <img src="/images/logo.png" alt="_logo_" />
          <p>Velvet Pour</p>
        </a>
        <ul>
          {navLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.id}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

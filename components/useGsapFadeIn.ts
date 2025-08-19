import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapFadeIn(
  name: string
) {
  useLayoutEffect(() => {
   gsap.from(name, {       // ← id elementu
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: name,      // stejné id jako trigger
        start: "top 20%",
        toggleActions: "play none none none",
      },
    });
  }, []);
}
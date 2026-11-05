
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function ScrollAnimations({ isIntroOpen }) {

  // 1. HOME TITLE ANIMATION
  useGSAP(() => {
    
    gsap.fromTo(
      ".cover-title",
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: "power3.out",
      }
    );
  }, []);

  // 2. SCROLL ANIMATIONS FOR ALL SECTIONS
  useGSAP(() => {

    // Section headings
    gsap.utils.toArray(".section-heading").forEach((heading) => {
      gsap.fromTo(
        heading,
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            once: true,
          },
        }
      );
    });

    // ABOUT SECTION
    gsap.fromTo(
      ".about-image",
      { opacity: 0, x: -70 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-grid",
          start: "top 80%",
          once: true,
        },
      }
    );

    gsap.fromTo(
      ".about-text > *",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 80%",
          once: true,
        },
      }
    );

    // EDUCATION TIMELINE
    gsap.fromTo(
      ".education-card",
      { opacity: 0, x: -55 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".education-timeline",
          start: "top 80%",
          once: true,
        },
      }
    );

    // SKILLS
    gsap.fromTo(
      ".skill-card",
      { opacity: 0, y: 35, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 85%",
          once: true,
        },
      }
    );

    // PROJECTS
    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 55 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 85%",
          once: true,
        },
      }
    );

    // CONTACT
    gsap.fromTo(
      ".contact-section > *",
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
          once: true,
        },
      }
    );

    // FOOTER
    gsap.fromTo(
      ".footer > *",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer",
          start: "top 95%",
          once: true,
        },
      }
    );

  }, []);

  // 3. AVATAR INTRODUCTION ANIMATION
  useGSAP(() => {
    if (!isIntroOpen) return;

    const line = document.querySelector(".intro-accent-line");
    const intro = document.querySelector(".intro-text");

    if (!line || !intro) return;

    const elements = intro.querySelectorAll(
      ".intro-tag, h2, h3, .cover-description, .hire-button"
    );

    const tl = gsap.timeline();

    tl.fromTo(
      line,
      { scaleY: 0, transformOrigin: "top" },
      { scaleY: 1, duration: 0.8, ease: "power2.out" }
    );

    tl.fromTo(
      elements,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      },
      "-=0.2"
    );

  }, { dependencies: [isIntroOpen], revertOnUpdate: true });

  // 4. FADE OUT HOME TITLE WHEN INTRO OPENS
  useGSAP(() => {
    gsap.to(".cover-title", {
      autoAlpha: isIntroOpen ? 0 : 1,
      y: isIntroOpen ? -35 : 0,
      duration: 0.5,
      ease: "power2.inOut",
      overwrite: true,
    });
  }, { dependencies: [isIntroOpen] });

  return null;
}

export default ScrollAnimations;


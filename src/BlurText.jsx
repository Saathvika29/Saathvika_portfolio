import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";

export default function BlurText({
  text = "",
  delay = 200,
  stepDuration = 0.35,
  className = "",
  onAnimationComplete,
}) {
  const containerRef = useRef(null);
  const hasAnimated = useRef(false);
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;

    hasAnimated.current = true;

    const container = containerRef.current;
    const words = container.querySelectorAll(".blur-word");

    const controls = animate(
      words,
      {
        opacity: [0, 1],
        filter: ["blur(10px)", "blur(0px)"],
        y: [20, 0],
      },
      {
        duration: stepDuration,
        delay: (index) => index * (delay / 1000),
        ease: "easeOut",
        onComplete: onAnimationComplete,
      }
    );

    return () => controls.stop();
  }, [isInView, delay, stepDuration, onAnimationComplete]);

  return (
    <span
      ref={containerRef}
      className={className}
      aria-label={text}
      style={{ display: "inline-block" }}
    >
      {text.split(" ").map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="blur-word"
          aria-hidden="true"
          style={{
            display: "inline-block",
            marginRight: "0.25em",
            opacity: 0,
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
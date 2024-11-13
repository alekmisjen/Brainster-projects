import { useState, useRef, useEffect } from "react";
import "./style.css";

const logos = [
  "./images/logo1.png",
  "./images/logo2.png",
  "./images/logo3.png",
  "./images/logo4.png",
  "./images/logo6.png",
  "./images/logo8.png",
];

export const Slider = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentOffset, setCurrentOffset] = useState(0); // Track the scroll position
  const slideTrackRef = useRef<HTMLDivElement | null>(null); // Reference for the logo slide track
  const animationFrameId = useRef<number | null>(null); // For cancelling requestAnimationFrame

  useEffect(() => {
    if (isHovered) {
      const animateScroll = () => {
        if (slideTrackRef.current) {
          const trackWidth = slideTrackRef.current.offsetWidth;
          const maxOffset = trackWidth / 2; // Track width for infinite scrolling effect

          // Update offset and reset it when reaching the max offset
          setCurrentOffset((prevOffset) => {
            if (prevOffset + 1 >= maxOffset) {
              return 0; // Reset to the start to avoid the white space
            }
            return prevOffset + 1; // Scroll by 1 pixel at a time
          });
        }

        animationFrameId.current = requestAnimationFrame(animateScroll);
      };

      animationFrameId.current = requestAnimationFrame(animateScroll);

      // Cleanup on hover out
      return () => {
        if (animationFrameId.current !== null) {
          cancelAnimationFrame(animationFrameId.current);
        }
      };
    }
  }, [isHovered]);

  return (
    <div
      className="logo-slider"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="logo-slide-track"
        ref={slideTrackRef}
        style={{
          transform: `translateX(-${currentOffset}px)`,
          transition: isHovered ? "none" : "transform 1s ease-in-out",
        }}
      >
        {/* Render logos twice for the infinite loop effect */}
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="logo"
          />
        ))}
      </div>
    </div>
  );
};

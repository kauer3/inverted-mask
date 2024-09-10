import { useState, useEffect, useRef, useCallback } from "react";
import throttle from "lodash.throttle";

const STATUS = {
  MOVING: "moving",
  STOPPED: "stopped",
  HOVERED: "hovered",
  // HOVERING_OUT: "hovering_out",
};

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null, r: 0 });
  const [status, setStatus] = useState(STATUS.STOPPED);
  const isHovered = useRef(false);
  const isAnimating = useRef(false);
  const timerRef = useRef(null);

  const updateMousePosition = useCallback(throttle((e) => {
    clearTimeout(timerRef.current);

    if (!isHovered.current) {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
        r: 300,
      });
    
      // setStopped(false);
      if (status !== STATUS.MOVING && !isAnimating.current) {
        setStatus(STATUS.MOVING);
      }

      timerRef.current = setTimeout(onMouseStop, 600);
    }
  }, 100), []);

  const onMouseStop = () => {
    // if (!hovered) {
    // setStopped(true);
    setStatus(STATUS.STOPPED);

    setMousePosition((prev) => ({
      ...prev,
      r: 0,
    }));
    // }
  };

  const handleMouseEnter = useCallback((e) => {
    isHovered.current = true;
    const rect = e.target.getBoundingClientRect();
    const newCx = rect.left + rect.width / 2;
    const newCy = rect.top + rect.height / 2;
    const newR = (Math.max(rect.width, rect.height) / 2) + 30;

    setMousePosition({
      x: newCx,
      y: newCy,
      r: newR,
    });

    clearTimeout(timerRef.current);
    setStatus(STATUS.HOVERED);
  });

  const handleMouseLeave = useCallback(() => {
    isHovered.current = false;
    // isAnimating.current = true;
    // setTimeout(() => {
    //   isAnimating.current = false;
    // }, 500);
  });

  useEffect(() => {
    console.log("rendering useMousePosition hook...")
    window.addEventListener("mousemove", updateMousePosition);

    const highlightElements = document.querySelectorAll(".highlight");

    highlightElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      clearTimeout(timerRef.current);

      highlightElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isHovered]); // Include hovered in dependency to re-bind listeners on state change

  // useEffect(() => {
  //   console.log("mousePosition", mousePosition);
  // }, [mousePosition]);
  //
  // useEffect(() => {
  //   console.log("hovered", isHovered.current);
  // }, [isHovered]);
  //
  return { ...mousePosition, status };
};

export default useMousePosition;

import { useRef } from "react";
import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [stopped, setStopped] = useState(true);
  const timerRef = useRef(null);

  const updateMousePosition = e => {
    clearTimeout(timerRef.current);
    setMousePosition({ x: e.clientX, y: e.clientY});
    setStopped(false);
    timerRef.current = setTimeout(onMouseStop, 600);
  };

  const onMouseStop = () => {
    setStopped(true);
  }

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      clearTimeout(timerRef.current);
    };
  }, []);

  return {...mousePosition, stopped: stopped};
};

export default useMousePosition;

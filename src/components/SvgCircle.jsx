import { motion, useSpring } from "framer-motion";
import useMousePosition from "../utils/useMousePosition";
import { useEffect } from "react";

const SvgCircle = () => {
  const { x, y, r, status } = useMousePosition();

  const springConfig = {
    stiffness: 100,
    damping: status == 'hovered' ? 7 : 20,
    mass: 1,
    restSpeed: 0.5,
    restDelta: 0.5
  };

  const cx = useSpring(0, springConfig);
  const cy = useSpring(0, springConfig);

  useEffect(() => {
    cx.set(x);
  }, [x]);

  useEffect(() => {
    cy.set(y);
  }, [y]);

  return (
    <motion.circle
      id="maskCircle"
      animate={{ r: r }}
      initial={{ r: 0 }}
      cx={cx}
      cy={cy}
      // fill="#000000"
      className={`mask-circle`}
      transition={{
        type: "tween",
        duration: status == 'stopped' ? 2 : 0.5,
        ease: "easeInOut",
        delay: status == 'stopped' ? 1.5 : 0
      }}
    >
    </motion.circle>
  )
};

export default SvgCircle;

import { motion } from "framer-motion";
import useMousePosition from "../utils/useMousePosition";
import { useEffect } from "react";

const SvgCircle = () => {
  // const { x, y } = useMousePosition();
  const { x, y, r, status } = useMousePosition();

  // useEffect(() => {
  // console.log(x, y);
  // }, [x, y]);

  useEffect(() => {
  console.log(status);
  }, [status]);

  return (
    <motion.circle
      animate={{ cx: x, cy: y, r: r }}
      initial={{ cx: 0, cy: 0, r: 0 }}
      fill="#000000"
      className={`mask-circle`}
      transition={{
        type: status == 'hovered' ? "spring" : "tween",
        stiffness: 150,
        // stiffness: status == 'hovered' ? 150 : 500,
        // duration: status == 'moving' ? 0 : 0.5,
        duration: status == 'moving' ? 0 : status == 'stopped' ? 1.5 : 0.5,
        ease: "easeInOut",
        delay: status == 'stopped' ? 1.5 : 0
      }}
      // <motion.circle cx={x} cy={y} r="300" fill="#000000" className={`mask-circle ${!x && !y ? 'stopped' : ''}`}
    >
    </motion.circle>
  )
};

export default SvgCircle;

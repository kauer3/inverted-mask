import { motion } from "framer-motion";
import useMousePosition from "../utils/useMousePosition";
import { useEffect } from "react";

const SvgCircle = () => {
  // const { x, y } = useMousePosition();
  const { x, y, stopped } = useMousePosition();

  useEffect(() => {
  console.log(x, y);
  }, [x, y]);

  useEffect(() => {
  console.log(stopped);
  }, [stopped]);
  
  return (
    <motion.circle cx={x} cy={y} r={stopped ? "0" : "300"} fill="#000000" className={`mask-circle ${stopped ? 'stopped' : ''}`}
    // <motion.circle cx={x} cy={y} r="300" fill="#000000" className={`mask-circle ${!x && !y ? 'stopped' : ''}`}
    >
    </motion.circle>
  )
};

export default SvgCircle;

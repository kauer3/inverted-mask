import { motion } from "framer-motion";
import useMousePosition from "../utils/useMousePosition";

const Mask = () => {
  const { x, y } = useMousePosition();
  const size = 200;

  console.log("rendering Mask component");

  return (
    <motion.div
      className="overlay fixed top-0 left-0 w-screen h-screen backdrop-grayscale"
      animate={{
        WebkitMaskPosition: `center, ${x - size/2}px ${y - size/2}px`,
      }}
      transition={{
        type: "tween",
        ease: "backOut"
      }}
    />
  )
};

export default Mask;

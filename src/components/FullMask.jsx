import MaskSvg from "./MaskSvg";

const FullMask = () => {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
    >
      <MaskSvg/>
      <div className="grayscale-mask"/>
    </div>
  )
};

export default FullMask;

import SvgCircle from "./SvgCircle";

const MaskSvg = () => {

  return (
    <svg width="100%" height="100%" className="fullMask">
      <defs>
        <filter id="turbulenceFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.003" numOctaves="1" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="220" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.055" numOctaves="1" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="100" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="noiseOverlay">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" />
          <feDisplacementMap in2="noise" scale="100" xChannelSelector="R" yChannelSelector="G" />
        </filter>

      </defs>
        <mask id="mask" x="0" y="0" width="100%" height="100%">
          <rect x="0" y="0" width="100%" height="100%" fill="#fff" />
          <SvgCircle/>
        </mask>
    </svg>
  )
};

export default MaskSvg;

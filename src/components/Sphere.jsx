const Sphere = () => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
      <defs>
        <radialGradient id="sssurface-grad-dark" r="75%" cx="20%" cy="20%">
          <stop offset="0%" stopColor="#002e4d" stopOpacity="0"></stop>
          <stop offset="100%" stopColor="#000325" stopOpacity="1"></stop>
        </radialGradient><radialGradient id="sssurface-grad-light" r="61%" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#6583a8" stopOpacity="0.63"></stop>
          <stop offset="100%" stopColor="#002e4d" stopOpacity="0"></stop>
        </radialGradient>
      </defs>
      <g>
        <circle r="72.5" cx="400" cy="400" fill="#002e4d"></circle>
        <circle r="72.5" cx="400" cy="400" fill="url(#sssurface-grad-dark)"></circle>
        <circle r="72.5" cx="400" cy="400" fill="url(#sssurface-grad-light)"></circle>
      </g>
    </svg>
  )
};

export default Sphere;

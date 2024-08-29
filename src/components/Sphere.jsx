const Sphere = () => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800">
      <defs>
        <radialGradient id="sssurface-grad-dark" r="75%" cx="20%" cy="20%">
          <stop offset="0%" stop-color="#002e4d" stop-opacity="0"></stop>
          <stop offset="100%" stop-color="#000325" stop-opacity="1"></stop>
        </radialGradient><radialGradient id="sssurface-grad-light" r="61%" cx="30%" cy="30%">
          <stop offset="0%" stop-color="#6583a8" stop-opacity="0.63"></stop>
          <stop offset="100%" stop-color="#002e4d" stop-opacity="0"></stop>
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

import Rainbow from "./Rainbow";
import Sphere from "./Sphere";

    // <div className="relative flex flex-col gap-6 items-center justify-center text-foreground group transition-all duration:1000 ease-in after:w-full after:h-full after:absolute after:z-1000 after:bg-accent">

const Hero = () => (
  <header className="header flex flex items-center justify-between min-h-[50vh] gap-10">

    <Rainbow/>

    <div className="hero highlight flex flex-col gap-6 items-center justify-center text-foreground group transition-all duration:1000 ease-in">
      <h1 className="title w-max font-black text-8xl text-center">Hello, World!</h1>
      <p className="w-max text-center font-semibold text-2xl">Welcome to my <span className="text-secondary italic hover:text-accent">grainy</span> website</p>
      <p className="w-max text-center font-semibold text-2xl">
        This website was built with <span className="text-secondary hover:text-accent">React</span>, <span className="text-secondary hover:text-accent">Tailwind</span> and <span className="text-secondary hover:text-accent">Framer Motion</span>, <br/>but what really does the magic here is <span className="text-secondary hover:text-accent">CSS</span> and <span className="text-secondary hover:text-accent">SVGs</span>!<br/><span className="relative hide text-accent">(And a pinch of JavaScript)</span></p>
    </div>

    <Rainbow/>

</header>
)

export default Hero;

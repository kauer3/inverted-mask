import './App.css'
import FullMask from './components/FullMask'
import Grid from './components/Grid'
import Hero from './components/Hero'
// import Mask from './components/Mask'

function App() {
  return (
    <>
      {/*<div className="gooey-overlay"/>*/}
      <div className="cover bg-background"/>
      <FullMask/>
      <Hero />
      <Grid />
    </>
  )
}

export default App

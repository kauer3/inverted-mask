import './App.css'
import FullMask from './components/FullMask'
import Grid from './components/Grid'
import Hero from './components/Hero'
// import Mask from './components/Mask'

function App() {
  return (
    <>
      {/*<div className="gooey-overlay"/>*/}
      <FullMask/>
      <Hero />
      <Grid />
    </>
  )
}

export default App

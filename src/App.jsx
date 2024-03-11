import { Router } from 'react-router-dom'
import './App.css'
import './index.css'
import NavBar from './components/NavBar'
import StarShips from './pages/starShips'

function App() {

  return (
    <>
     <NavBar />
     <StarShips />
    {/* <Router>
      <NavBar />
    </Router> */}
     
    </>
  )
}

export default App

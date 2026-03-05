import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {MoviePage} from './components/MoviePage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style = {{fontFamily: "Arial, sans-serid"}}>
      <MoviePage/>
    </div>
  )
}

export default App

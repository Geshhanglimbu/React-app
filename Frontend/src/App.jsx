import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/movieCard'

function App() {
  const movieNumber=1;
  const [count, setCount] = useState(0)

  return (
    <>
    {movieNumber === 1 ? (
    <MovieCard movie={{title: "Inception", release_Date: "2010", url: ""}}/>):(
    <MovieCard movie={{title: "The Matrix", release_Date: "1999", url: ""}}/>)}
   


    </>
  )
}

export default App

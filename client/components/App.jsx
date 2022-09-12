import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Character from './Character'
import Home from './Home'
import AddCharacter from './AddCharacter'

function App() {
  return (
    <>
      <div className="app">
        <h1>Character Pandemonium</h1>
        <div className="linkButtonDiv">
          <Link to="/">
            <button className="linkButton">Go back to Home</button>
          </Link>
        </div>
        <Link to={'/addCharacter'}>
          <button>Create new character!</button>
        </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addCharacter" element={<AddCharacter />} />
          <Route path="/:id" element={<Character />} />
        </Routes>
      </div>
    </>
  )
}

export default App

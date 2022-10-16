import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Character from './Character'
import Home from './Home'
import AddCharacter from './AddCharacter'

function App() {
  return (
    <>
      <div className="app">
        <h1 className="bg-purple-500 text-red-900 text-2xl container">
          Character Pandemonium
        </h1>
        <div className="linkButtonDiv">
          <Link to="/">
            <button className="linkButton">Go back to Home</button>
          </Link>
          <Link to={'/addCharacter'}>
            <button className="addCharButton">Create new character!</button>
          </Link>
        </div>

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

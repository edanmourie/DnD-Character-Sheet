import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Character from './CharacterSheet/Character'
import Home from './Home'
import AddCharacter from './AddCharacter'

function App() {
  return (
    // TODO (later): Make web page refresh every time you go into a character, because the stats linger from the last character you were on. They only change to the correct character's stats when you refresh.
    <>
      <div className="app">
        <h1 className="text-center">Character Pandemonium</h1>
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

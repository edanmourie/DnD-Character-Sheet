import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Character from './Character'
import Home from './Home'

function App() {
  return (
    <>
      <div className="app">
        <h1>Character Pandemonium</h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Character />} />
        </Routes>
      </div>
    </>
  )
}

export default App

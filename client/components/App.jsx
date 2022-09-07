import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCharacters } from '../actions'

function App() {
  const characters = useSelector((state) => state.characters)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCharacters())
  }, [])

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <div className="container">
          <ul>
            {characters.map((character) => (
              <li key={character.characterName}>{character.characterName}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App

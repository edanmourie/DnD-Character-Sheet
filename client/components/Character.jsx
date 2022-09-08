import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCharacter } from '../actions'

function character() {
  const character = useSelector((state) => state.character)
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCharacter(id))
  }, [])

  return character ? (
    <>
      <div className="linkButtonDiv">
        <Link to="/">
          <button className="linkButton">Go back to Home</button>
        </Link>
      </div>
      <div className="charContainer">
        <div className="charBase">
          <h1>
            Character name: <p>{character.characterName}</p>
          </h1>
        </div>
        <div className="charBase">
          <h2>
            Race: <p>{character.race}</p>
          </h2>
        </div>
        <div className="charBase">
          <h2>
            Level: <p>{character.level}</p>
          </h2>
        </div>
        <div className="charBase">
          <h2>
            Background: <p>{character.background}</p>
          </h2>
        </div>
        <div className="charBase">
          <h2>
            PlayerName: <p>{character.playerName}</p>
          </h2>
        </div>
        <div className="charBase">
          <h2>
            Alignment: <p>{character.alignment}</p>
          </h2>
        </div>
        <div className="charBase">
          <h2>
            Experience: <p>{character.xp}</p>
          </h2>
        </div>
      </div>
    </>
  ) : (
    <div className="linkButtonDiv">
      <h1>Error: Character not found.</h1>
      <Link to="/">
        <button className="linkButton">Go back to Home</button>
      </Link>
    </div>
  )
}

export default character

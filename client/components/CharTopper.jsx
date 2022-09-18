import React from 'react'
import { useSelector } from 'react-redux'

function charTopper() {
  const character = useSelector((state) => state.character)

  return (
    <>
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
            Alignment: <p>{character.alignment}</p>
          </h2>
        </div>
        <div className="charBase">
          <h2>
            Experience: <p>{character.xp}</p>
          </h2>
        </div>
        <div className="charBase">
          <h2>
            PlayerName: <p>{character.playerName}</p>
          </h2>
        </div>
      </div>
    </>
  )
}

export default charTopper

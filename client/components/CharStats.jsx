import React from 'react'
import { useSelector } from 'react-redux'
import { modCalcs } from './modCalcs'

function charStats() {
  const character = useSelector((state) => state.character)

  modCalcs((res) => console.log(res))

  let strMod = 0
  let dexMod = 0
  let conMod = 0
  let intMod = 0
  let wisMod = 0
  let chaMod = 0

  return (
    <>
      <div className="stat">
        <h1>
          Strength <p>{character.str}</p>
        </h1>
        <div className="statMod">{strMod}</div>
      </div>
      <div className="stat">
        <h1>
          Dexterity <p>{character.dex}</p>
        </h1>
        <div className="statMod">{dexMod}</div>
      </div>
      <div className="stat">
        <h1>
          Constitution <p>{character.con}</p>
        </h1>
        <div className="statMod">{conMod}</div>
      </div>
      <div className="stat">
        <h1>
          Intelligence <p>{character.int}</p>
        </h1>
        <div className="statMod">{intMod}</div>
      </div>
      <div className="stat">
        <h1>
          Wisdom <p>{character.wis}</p>
        </h1>
        <div className="statMod">{wisMod}</div>
      </div>
      <div className="stat">
        <h1>
          Charisma <p>{character.cha}</p>
        </h1>
        <div className="statMod">{chaMod}</div>
      </div>
    </>
  )
}

export default charStats

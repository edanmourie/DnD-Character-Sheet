import React from 'react'
import { useSelector } from 'react-redux'
import {
  strCalc,
  dexCalc,
  conCalc,
  intCalc,
  wisCalc,
  chaCalc,
} from './modCalcs'

function charStats() {
  const character = useSelector((state) => state.character)

  let strMod = strCalc(character.str)
  let dexMod = dexCalc(character.dex)
  let conMod = conCalc(character.con)
  let intMod = intCalc(character.int)
  let wisMod = wisCalc(character.wis)
  let chaMod = chaCalc(character.cha)

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

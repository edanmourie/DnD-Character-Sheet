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

function StatBlock() {
  const character = useSelector((state) => state.character)

  let strMod = strCalc(character.str)
  if (strMod >= 0) {
    strMod = '+' + strMod
  }
  let dexMod = dexCalc(character.dex)
  if (dexMod >= 0) {
    dexMod = '+' + dexMod
  }
  let conMod = conCalc(character.con)
  if (conMod >= 0) {
    conMod = '+' + conMod
  }
  let intMod = intCalc(character.int)
  if (intMod >= 0) {
    intMod = '+' + intMod
  }
  let wisMod = wisCalc(character.wis)
  if (wisMod >= 0) {
    wisMod = '+' + wisMod
  }
  let chaMod = chaCalc(character.cha)
  if (chaMod >= 0) {
    chaMod = '+' + chaMod
  }
  return (
    <div className="statBlock">
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
    </div>
  )
}

export default StatBlock

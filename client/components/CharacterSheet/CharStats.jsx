import React from 'react'
import { useSelector } from 'react-redux'

import SavingThrows from './SavingThrows'
import SkillChecks from './SkillChecks'
import {
  strCalc,
  dexCalc,
  conCalc,
  intCalc,
  wisCalc,
  chaCalc,
  profBonusCalc,
} from './modCalcs'

function charStats() {
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
  let profBonus = profBonusCalc(character.level)

  return (
    <>
      <div className="statContainer">
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
        <div className="skills">
          <div>
            <label htmlFor="inspiration">
              <h1>Inspiration</h1>
              <input
                type="radio"
                id="inspiration"
                name="inspiration"
                value="inspiration"
              />
            </label>
          </div>
          <div className="profBonus">
            <h1>
              <div>Proficiency bonus</div>
              <div className="pbt">+{profBonus}</div>
            </h1>
          </div>
          <SavingThrows />
          <SkillChecks />
          {/* TODO (later): Save saving throws to react state w/ redux, so the checked boxes don't go away on refresh */}
          {/* <SkillChecks /> */}
        </div>
      </div>
    </>
  )
}

export default charStats

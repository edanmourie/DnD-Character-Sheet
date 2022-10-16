import React from 'react'
import { useSelector } from 'react-redux'

import SavingThrows from './SavingThrows'
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
  let dexMod = dexCalc(character.dex)
  let conMod = conCalc(character.con)
  let intMod = intCalc(character.int)
  let wisMod = wisCalc(character.wis)
  let chaMod = chaCalc(character.cha)

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
          {/* TODO (later): Save saving throws to react state w/ redux, so the checked boxes don't go away on refresh */}
        </div>
      </div>
    </>
  )
}

export default charStats

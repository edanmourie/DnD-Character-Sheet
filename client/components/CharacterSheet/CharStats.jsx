import React from 'react'
import { useSelector } from 'react-redux'

import SavingThrows from './SavingThrows'
import SkillChecks from './SkillChecks'
import StatBlock from './StatBlock'
import HpAndEquipment from './HpAndEquipment'
import FeaturesAndTraits from './FeaturesAndTraits'
import { profBonusCalc } from './modCalcs'

function charStats() {
  const character = useSelector((state) => state.character)
  let profBonus = profBonusCalc(character.level)

  return (
    <>
      <div className="statContainer">
        <StatBlock />
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
          <SkillChecks />
        </div>
        <div className="HpAndEquipment">
          <HpAndEquipment />
        </div>
        <div className="FeaturesAndTraits">
          <FeaturesAndTraits />
        </div>
      </div>
    </>
  )
}

export default charStats

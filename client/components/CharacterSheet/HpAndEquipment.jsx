import React from 'react'
import { useSelector } from 'react-redux'

import {
  // strCalc,
  dexCalc,
  // intCalc,
  // wisCalc,
  // chaCalc,
  // profBonusCalc,
} from './modCalcs'

function HpAndEquipment() {
  const character = useSelector((state) => state.character)
  // let strMod = strCalc(character.str)
  let InitDexMod = dexCalc(character.dex)
  let dexMod = 0
  if (InitDexMod < 0) {
    dexMod = InitDexMod
  } else {
    dexMod = '+' + InitDexMod
  }
  // let intMod = intCalc(character.int)
  // let wisMod = wisCalc(character.wis)
  // let chaMod = chaCalc(character.cha)
  //let profBonus = profBonusCalc(character.level)

  return (
    <>
      <div className="border-2 border-green-500 flex flex-row space-x-4 m-4 p-4 justify-center">
        <div>
          Armor Class
          <div>{character.ac}</div>
        </div>
        <div>
          Initiative
          <div>{dexMod}</div>
        </div>
        <div>
          Speed
          <div>{character.speed + ' ft'}</div>
        </div>
      </div>
      <div className="border-2 border-blue-500 mt-4 ml-4 mr-4 p-4">
        <div>Maximum hit points: {character.hp}</div>
        <div className="text-red-500 font-bold">
          TODO: Let people add/take away HP
        </div>
        Current Hit Points
      </div>
      <div className="border-2 border-blue-500 mb-4 ml-4 mr-4 p-4">
        Temporary Hit Points
      </div>
      <div className="flex flex-row justify-center">
        <div className="border-2 border-blue-500 mb-4 ml-4 mr-4 p-4 flex flex-col justify-center">
          <div>Total: {character.hitDice}</div>
          <div>Hit Dice</div>
        </div>
        <div className="border-2 border-blue-500 mb-4 ml-4 mr-4 p-4">
          Successes:
          <label htmlFor="deathSuccess1">
            <input type="checkbox" />
          </label>
          <label htmlFor="deathSuccess2">
            <input type="checkbox" />
          </label>
          <label htmlFor="deathSuccess3">
            <input type="checkbox" />
          </label>
          <div>
            Failures:
            <label htmlFor="deathFail1">
              <input type="checkbox" />
            </label>
            <label htmlFor="deathFail2">
              <input type="checkbox" />
            </label>
            <label htmlFor="deathFail3">
              <input type="checkbox" />
            </label>
          </div>
          <div>Death Saves</div>
        </div>
      </div>
      <div className="border-2 border-black p-4 m-4">
        <div className="border-2 border-gray-500">
          Weapon // To Hit // Damage
        </div>
        Attacks and Spellcasting
      </div>
      <div className="border-2 border-pink-700 flex flex-col m-4 p-4">
        <div className="border-2 border-pink-700 flex flex-row">
          <div className="border-2 border-cyan-700 flex flex-col justify-items-start w-1/4 items-start h-max">
            <div>PP</div>
            <div>GP</div>
            <div>SP</div>
            <div>CP</div>
          </div>
          <div className="border-2 border-green-500 flex flex-col justify-center items-center w-full">
            <div>Fill in here</div>
          </div>
        </div>
        <div>Equipment</div>
      </div>
    </>
  )
}

export default HpAndEquipment

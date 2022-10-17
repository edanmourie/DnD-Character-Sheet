import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  strCalc,
  dexCalc,
  conCalc,
  intCalc,
  wisCalc,
  chaCalc,
  profBonusCalc,
} from './modCalcs'

function SavingThrows() {
  const character = useSelector((state) => state.character)

  let strMod = strCalc(character.str)
  let dexMod = dexCalc(character.dex)
  let conMod = conCalc(character.con)
  let intMod = intCalc(character.int)
  let wisMod = wisCalc(character.wis)
  let chaMod = chaCalc(character.cha)
  let profBonus = profBonusCalc(character.level)

  //Setting the state to the base value of the saving throw, as calculated in the functions above.
  const [strBonus, setStrBonus] = useState(strMod)
  const [dexBonus, setDexBonus] = useState(dexMod)
  const [conBonus, setConBonus] = useState(conMod)
  const [intBonus, setIntBonus] = useState(intMod)
  const [wisBonus, setWisBonus] = useState(wisMod)
  const [chaBonus, setChaBonus] = useState(chaMod)

  const [strChecked, setStrChecked] = useState(false)
  const [dexChecked, setDexChecked] = useState(false)
  const [conChecked, setConChecked] = useState(false)
  const [intChecked, setIntChecked] = useState(false)
  const [wisChecked, setWisChecked] = useState(false)
  const [chaChecked, setChaChecked] = useState(false)

  //Setting the value of the saving throw depending on whether the checkbox is checked or not.
  //STRENGTH
  function strProf() {
    setStrChecked(!strChecked)
  }
  useEffect(() => {
    if (strChecked == true) {
      let bonus = strMod + profBonus
      if (bonus >= 0) {
        setStrBonus('+' + (strMod + profBonus))
      } else {
        setStrBonus(strMod + profBonus)
      }
    } else if (strChecked == false) {
      if (strMod >= 0) {
        setStrBonus('+' + strMod)
      } else {
        setStrBonus(strMod)
      }
    }
  }, [strChecked])

  //DEXTERITY
  function dexProf() {
    setDexChecked(!dexChecked)
  }
  useEffect(() => {
    if (dexChecked == true) {
      let bonus = dexMod + profBonus
      if (bonus >= 0) {
        setDexBonus('+' + (dexMod + profBonus))
      } else {
        setDexBonus(dexMod + profBonus)
      }
    } else if (dexChecked == false) {
      if (dexMod >= 0) {
        setDexBonus('+' + dexMod)
      } else {
        setDexBonus(dexMod)
      }
    }
  }, [dexChecked])

  //CONSTITUTION
  function conProf() {
    setConChecked(!conChecked)
  }
  useEffect(() => {
    if (conChecked == true) {
      let bonus = conMod + profBonus
      if (bonus >= 0) {
        setConBonus('+' + (conMod + profBonus))
      } else {
        setConBonus(conMod + profBonus)
      }
    } else if (conChecked == false) {
      if (conMod >= 0) {
        setConBonus('+' + conMod)
      } else {
        setConBonus(conMod)
      }
    }
  }, [conChecked])

  //INTELLIGENCE
  function intProf() {
    setIntChecked(!intChecked)
  }
  useEffect(() => {
    if (intChecked == true) {
      let bonus = intMod + profBonus
      if (bonus >= 0) {
        setIntBonus('+' + (intMod + profBonus))
      } else {
        setIntBonus(intMod + profBonus)
      }
    } else if (intChecked == false) {
      if (intMod >= 0) {
        setIntBonus('+' + intMod)
      } else {
        setIntBonus(intMod)
      }
    }
  }, [intChecked])

  //WISDOM
  function wisProf() {
    setWisChecked(!wisChecked)
  }
  useEffect(() => {
    if (wisChecked == true) {
      let bonus = wisMod + profBonus
      if (bonus >= 0) {
        setWisBonus('+' + (wisMod + profBonus))
      } else {
        setWisBonus(wisMod + profBonus)
      }
    } else if (wisChecked == false) {
      if (wisMod >= 0) {
        setWisBonus('+' + wisMod)
      } else {
        setWisBonus(wisMod)
      }
    }
  }, [wisChecked])

  //CHARISMA
  function chaProf() {
    setChaChecked(!chaChecked)
  }
  useEffect(() => {
    if (chaChecked == true) {
      let bonus = chaMod + profBonus
      if (bonus >= 0) {
        setChaBonus('+' + (chaMod + profBonus))
      } else {
        setChaBonus(chaMod + profBonus)
      }
    } else if (chaChecked == false) {
      if (chaMod >= 0) {
        setChaBonus('+' + chaMod)
      } else {
        setChaBonus(chaMod)
      }
    }
  }, [chaChecked])

  // ----------------------------------------------------
  // Actual box that is displayed on the character sheet.
  //-----------------------------------------------------
  return (
    <div>
      <div className="savingThrowsAndChecks">
        <div>
          <input type="checkbox" onChange={strProf} /> <u>{strBonus}</u>{' '}
          Strength
        </div>
        <div>
          <input type="checkbox" onChange={dexProf} /> <u>{dexBonus}</u>{' '}
          Dexterity
        </div>
        <div>
          <input type="checkbox" onChange={conProf} /> <u>{conBonus}</u>{' '}
          Consitution
        </div>
        <div>
          <input type="checkbox" onChange={intProf} /> <u>{intBonus}</u>{' '}
          Intelligence
        </div>
        <div>
          <input type="checkbox" onChange={wisProf} /> <u>{wisBonus}</u> Wisdom
        </div>
        <div>
          <input type="checkbox" onChange={chaProf} /> <u>{chaBonus}</u>{' '}
          Charisma
        </div>
        <div className="text-center ">Saving Throws</div>
      </div>
    </div>
  )
}

export default SavingThrows

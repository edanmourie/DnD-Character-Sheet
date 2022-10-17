import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  strSaveCalc,
  dexSaveCalc,
  conSaveCalc,
  intSaveCalc,
  wisSaveCalc,
  chaSaveCalc,
} from './saveThrowCalcs'
import { profBonusCalc } from './modCalcs'

function SavingThrows() {
  const character = useSelector((state) => state.character)
  let profBonus = profBonusCalc(character.level)

  // Setting the starting values of each saving throw.
  let defStrSave = strSaveCalc(character.str)
  function baseStrSave() {
    if (defStrSave >= 0) {
      return '+' + defStrSave
    } else {
      return defStrSave
    }
  }
  let defDexSave = dexSaveCalc(character.dex)
  function baseDexSave() {
    if (defDexSave >= 0) {
      return '+' + defDexSave
    } else {
      return defDexSave
    }
  }
  let defConSave = conSaveCalc(character.con)
  function baseConSave() {
    if (defConSave >= 0) {
      return '+' + defConSave
    } else {
      return defConSave
    }
  }
  let defIntSave = intSaveCalc(character.int)
  function baseIntSave() {
    if (defIntSave >= 0) {
      return '+' + defIntSave
    } else {
      return defIntSave
    }
  }
  let defWisSave = wisSaveCalc(character.wis)
  function baseWisSave() {
    if (defWisSave >= 0) {
      return '+' + defWisSave
    } else {
      return defWisSave
    }
  }
  let defChaSave = chaSaveCalc(character.cha)
  function baseChaSave() {
    if (defChaSave >= 0) {
      return '+' + defChaSave
    } else {
      return defChaSave
    }
  }

  //Setting the state to the base value of the saving throw, as calculated above.
  const [strSave, setStrSave] = useState(baseStrSave())
  const [dexSave, setDexSave] = useState(baseDexSave())
  const [conSave, setConSave] = useState(baseConSave())
  const [intSave, setIntSave] = useState(baseIntSave())
  const [wisSave, setWisSave] = useState(baseWisSave())
  const [chaSave, setChaSave] = useState(baseChaSave())

  const [strChecked, setStrChecked] = useState(false)
  const [dexChecked, setDexChecked] = useState(false)
  const [conChecked, setConChecked] = useState(false)
  const [intChecked, setIntChecked] = useState(false)
  const [wisChecked, setWisChecked] = useState(false)
  const [chaChecked, setChaChecked] = useState(false)

  //Setting the value of the saving throw depending on whether the checkbox is checked or not.

  //STRENGTH
  function strSaveProf() {
    setStrChecked(!strChecked)
  }
  useEffect(() => {
    if (strChecked == true) {
      let save = defStrSave + profBonus
      if (save >= 0) {
        setStrSave('+' + (defStrSave + profBonus))
      } else {
        setStrSave(defStrSave + profBonus)
      }
    } else if (strChecked == false) {
      if (defStrSave >= 0) {
        setStrSave('+' + defStrSave)
      } else {
        setStrSave(defStrSave)
      }
    }
  }, [strChecked])
  //DEXTERITY
  function dexSaveProf() {
    setDexChecked(!dexChecked)
  }
  useEffect(() => {
    if (dexChecked == true) {
      let save = defDexSave + profBonus
      if (save >= 0) {
        setDexSave('+' + (defDexSave + profBonus))
      } else {
        setDexSave(defDexSave + profBonus)
      }
    } else if (dexChecked == false) {
      if (defDexSave >= 0) {
        setDexSave('+' + defDexSave)
      } else {
        setDexSave(defDexSave)
      }
    }
  }, [dexChecked])
  //CONSTITUTION
  function conSaveProf() {
    setConChecked(!conChecked)
  }
  useEffect(() => {
    if (conChecked == true) {
      let save = defConSave + profBonus
      if (save >= 0) {
        setConSave('+' + (defConSave + profBonus))
      } else {
        setConSave(defConSave + profBonus)
      }
    } else if (conChecked == false) {
      if (defConSave >= 0) {
        setConSave('+' + defConSave)
      } else {
        setConSave(defConSave)
      }
    }
  }, [conChecked])
  //INTELLIGENCE
  function intSaveProf() {
    setIntChecked(!intChecked)
  }
  useEffect(() => {
    if (intChecked == true) {
      let save = defIntSave + profBonus
      if (save >= 0) {
        setIntSave('+' + (defIntSave + profBonus))
      } else {
        setIntSave(defIntSave + profBonus)
      }
    } else if (intChecked == false) {
      if (defIntSave >= 0) {
        setIntSave('+' + defIntSave)
      } else {
        setIntSave(defIntSave)
      }
    }
  }, [intChecked])
  //WISDOM
  function wisSaveProf() {
    setWisChecked(!wisChecked)
  }
  useEffect(() => {
    if (wisChecked == true) {
      let save = defWisSave + profBonus
      if (save >= 0) {
        setWisSave('+' + (defWisSave + profBonus))
      } else {
        setWisSave(defWisSave + profBonus)
      }
    } else if (wisChecked == false) {
      if (defWisSave >= 0) {
        setWisSave('+' + defWisSave)
      } else {
        setWisSave(defWisSave)
      }
    }
  }, [wisChecked])
  //CHARISMA
  function chaSaveProf() {
    setChaChecked(!chaChecked)
  }
  useEffect(() => {
    if (chaChecked == true) {
      let save = defChaSave + profBonus
      if (save >= 0) {
        setChaSave('+' + (defChaSave + profBonus))
      } else {
        setChaSave(defChaSave + profBonus)
      }
    } else if (chaChecked == false) {
      if (defChaSave >= 0) {
        setChaSave('+' + defChaSave)
      } else {
        setChaSave(defChaSave)
      }
    }
  }, [chaChecked])

  return (
    <div className="savingThrows">
      <div>
        <input type="checkbox" onChange={strSaveProf} /> {strSave} Strength
      </div>
      <div>
        <input type="checkbox" onChange={dexSaveProf} /> {dexSave} Dexterity
      </div>
      <div>
        <input type="checkbox" onChange={conSaveProf} /> {conSave} Consitution
      </div>
      <div>
        <input type="checkbox" onChange={intSaveProf} /> {intSave} Intelligence
      </div>
      <div>
        <input type="checkbox" onChange={wisSaveProf} /> {wisSave} Wisdom
      </div>
      <div>
        <input type="checkbox" onChange={chaSaveProf} /> {chaSave} Charisma
      </div>
      <div className="text-center ">Saving Throws</div>
    </div>
  )
}

export default SavingThrows

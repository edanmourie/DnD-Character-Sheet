import React, { useState } from 'react'
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
  let defStrSave = strSaveCalc(character.str)
  let defDexSave = dexSaveCalc(character.dex)
  let defConSave = conSaveCalc(character.con)
  let defIntSave = intSaveCalc(character.int)
  let defWisSave = wisSaveCalc(character.wis)
  let defChaSave = chaSaveCalc(character.cha)

  const [strSave, setStrSave] = useState(defStrSave)
  const [dexSave, setDexSave] = useState(defDexSave)
  const [conSave, setConSave] = useState(defConSave)
  const [intSave, setIntSave] = useState(defIntSave)
  const [wisSave, setWisSave] = useState(defWisSave)
  const [chaSave, setChaSave] = useState(defChaSave)

  const [strChecked, setStrChecked] = useState(true)
  const [dexChecked, setDexChecked] = useState(true)
  const [conChecked, setConChecked] = useState(true)
  const [intChecked, setIntChecked] = useState(true)
  const [wisChecked, setWisChecked] = useState(true)
  const [chaChecked, setChaChecked] = useState(true)

  function strSaveProf() {
    setStrChecked(!strChecked)
    if (strChecked == true) {
      setStrSave(defStrSave + profBonus)
    } else if (strChecked == false) {
      setStrSave(defStrSave)
    }
  }

  function dexSaveProf() {
    setDexChecked(!dexChecked)
    if (dexChecked == true) {
      setDexSave(defDexSave + profBonus)
    } else if (dexChecked == false) {
      setDexSave(defDexSave)
    }
  }

  function conSaveProf() {
    setConChecked(!conChecked)
    if (conChecked == true) {
      setConSave(defConSave + profBonus)
    } else if (conChecked == false) {
      setConSave(defConSave)
    }
  }

  function intSaveProf() {
    setIntChecked(!intChecked)
    if (intChecked == true) {
      setIntSave(defIntSave + profBonus)
    } else if (intChecked == false) {
      setIntSave(defIntSave)
    }
  }

  function wisSaveProf() {
    setWisChecked(!wisChecked)
    if (wisChecked == true) {
      setWisSave(defWisSave + profBonus)
    } else if (wisChecked == false) {
      setWisSave(defWisSave)
    }
  }

  function chaSaveProf() {
    setChaChecked(!chaChecked)
    if (chaChecked == true) {
      setChaSave(defChaSave + profBonus)
    } else if (chaChecked == false) {
      setChaSave(defChaSave)
    }
  }

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

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addNewCharacter } from '../actions/index'

const initialForm = {
  id: '',
  characterName: '',
  dndClass: '',
  level: '',
  background: '',
  playerName: '',
  race: '',
  alignment: '',
  xp: '',
  str: '',
  dex: '',
  con: '',
  int: '',
  wis: '',
  cha: '',
  passPerc: '',
  profBonus: '',
  ac: '',
  initiative: '',
  speed: '',
  hp: '',
  hitDice: '',
  personality: '',
  ideals: '',
  bonds: '',
  flaws: '',
  featsAndTraits: '',
  otherProfAndLang: '',
}

export default function addCharacter() {
  const dispatch = useDispatch()
  const [form, setForm] = useState(initialForm)

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(
      addNewCharacter(
        form.characterName,
        form.dndClass,
        form.level,
        form.background,
        form.playerName,
        form.race,
        form.alignment,
        form.xp,
        form.str,
        form.dex,
        form.con,
        form.int,
        form.wis,
        form.cha,
        form.ac,
        form.speed,
        form.hp,
        form.hitDice,
        form.personality,
        form.ideals,
        form.bonds,
        form.flaws,
        form.featsAndTraits,
        form.otherProfAndLang
      )
    )
  }

  function handleChange(e) {
    const { name, value } = e.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="characterName">
              Character Name:
              <input
                id={'characterName'}
                onChange={handleChange}
                value={form.characterName}
                name="characterName"
              />
            </label>
          </div>
          <div>
            <label htmlFor="dndClass">
              Class:
              <input
                id={'dndClass'}
                onChange={handleChange}
                value={form.dndClass}
                name="dndClass"
              />
            </label>
          </div>
          <div>
            <label htmlFor="level">
              Level:
              <input
                id={'level'}
                onChange={handleChange}
                value={form.level}
                name="level"
              />
            </label>
          </div>
          <div>
            <label htmlFor="background">
              Background:
              <input
                id={'background'}
                onChange={handleChange}
                value={form.background}
                name="background"
              />
            </label>
          </div>
          <div>
            <label htmlFor="playerName">
              Player Name:
              <input
                id={'playerName'}
                onChange={handleChange}
                value={form.playerName}
                name="playerName"
              />
            </label>
          </div>
          <div>
            <label htmlFor="race">
              Race:
              <input
                id={'race'}
                onChange={handleChange}
                value={form.race}
                name="race"
              />
            </label>
          </div>
          <div>
            <label htmlFor="alignment">
              Alignment:
              <input
                id={'alignment'}
                onChange={handleChange}
                value={form.alignment}
                name="alignment"
              />
            </label>
          </div>
          <div>
            <label htmlFor="xp">
              Experience:
              <input
                id={'xp'}
                onChange={handleChange}
                value={form.xp}
                name="xp"
              />
            </label>
          </div>
          <div>
            <label htmlFor="str">
              Strength:
              <input
                id={'str'}
                onChange={handleChange}
                value={form.str}
                name="str"
              />
            </label>
          </div>
          <div>
            <label htmlFor="dex">
              Dexterity:
              <input
                id={'dex'}
                onChange={handleChange}
                value={form.dex}
                name="dex"
              />
            </label>
          </div>
          <div>
            <label htmlFor="con">
              Constitution:
              <input
                id={'con'}
                onChange={handleChange}
                value={form.con}
                name="con"
              />
            </label>
          </div>
          <div>
            <label htmlFor="int">
              Intelligence:
              <input
                id={'int'}
                onChange={handleChange}
                value={form.int}
                name="int"
              />
            </label>
          </div>
          <div>
            <label htmlFor="wis">
              Wisdom:
              <input
                id={'wis'}
                onChange={handleChange}
                value={form.wis}
                name="wis"
              />
            </label>
          </div>
          <div>
            <label htmlFor="cha">
              Charisma:
              <input
                id={'cha'}
                onChange={handleChange}
                value={form.cha}
                name="cha"
              />
            </label>
          </div>
          <div>
            <label htmlFor="ac">
              Armor Class:
              <input
                id={'ac'}
                onChange={handleChange}
                value={form.ac}
                name="ac"
              />
            </label>
          </div>
          <div>
            <label htmlFor="speed">
              Speed:
              <input
                id={'speed'}
                onChange={handleChange}
                value={form.speed}
                name="speed"
              />
            </label>
          </div>
          <div>
            <label htmlFor="hp">
              Hitpoints:
              <input
                id={'hp'}
                onChange={handleChange}
                value={form.hp}
                name="hp"
              />
            </label>
          </div>
          <div>
            <label htmlFor="hitDice">
              Hit Dice:
              <input
                id={'hitDice'}
                onChange={handleChange}
                value={form.hitDice}
                name="hitDice"
              />
            </label>
          </div>
          <div>
            <label htmlFor="personality">
              Personality:
              <input
                id={'personality'}
                onChange={handleChange}
                value={form.personality}
                name="personality"
              />
            </label>
          </div>
          <div>
            <label htmlFor="ideals">
              Ideals:
              <input
                id={'ideals'}
                onChange={handleChange}
                value={form.ideals}
                name="ideals"
              />
            </label>
          </div>
          <div>
            <label htmlFor="bonds">
              Bonds:
              <input
                id={'bonds'}
                onChange={handleChange}
                value={form.bonds}
                name="bonds"
              />
            </label>
          </div>
          <div>
            <label htmlFor="flaws">
              Flaws:
              <input
                id={'flaws'}
                onChange={handleChange}
                value={form.flaws}
                name="flaws"
              />
            </label>
          </div>
          <div>
            <label htmlFor="featsAndTraits">
              Features and Traits:
              <input
                id={'featsAndTraits'}
                onChange={handleChange}
                value={form.featsAndTraits}
                name="featsAndTraits"
              />
            </label>
          </div>
          <div>
            <label htmlFor="otherProfAndLang">
              Other Proficiencies and Languages:
              <input
                id={'otherProfAndLang'}
                onChange={handleChange}
                value={form.otherProfAndLang}
                name="otherProfAndLang"
              />
            </label>
          </div>
          <input type="submit"></input>
        </form>
      </div>
    </>
  )
}

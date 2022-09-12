import { getCharacter, getCharacters, addCharacter } from './apis/characters'

export const SET_CHARACTERS = 'SET_CHARACTERS'
export const SET_CHARACTER = 'SET_CHARACTER'
export const ADD_CHARACTER = 'ADD_CHARACTER'

export function setCharacters(characters) {
  return {
    type: SET_CHARACTERS,
    payload: characters,
  }
}

export function setCharacter(character) {
  return {
    type: SET_CHARACTER,
    payload: character,
  }
}

export function createCharacter(
  characterName,
  dndClass,
  level,
  background,
  playerName,
  race,
  alignment,
  xp,
  str,
  dex,
  con,
  int,
  wis,
  cha,
  ac,
  speed,
  hp,
  hitDice,
  personality,
  ideals,
  bonds,
  flaws,
  featsAndTraits,
  otherProfAndLang
) {
  return {
    type: ADD_CHARACTER,
    payload: {
      characterName,
      dndClass,
      level,
      background,
      playerName,
      race,
      alignment,
      xp,
      str,
      dex,
      con,
      int,
      wis,
      cha,
      ac,
      speed,
      hp,
      hitDice,
      personality,
      ideals,
      bonds,
      flaws,
      featsAndTraits,
      otherProfAndLang,
    },
  }
}

export function addNewCharacter(
  characterName,
  dndClass,
  level,
  background,
  playerName,
  race,
  alignment,
  xp,
  str,
  dex,
  con,
  int,
  wis,
  cha,
  ac,
  speed,
  hp,
  hitDice,
  personality,
  ideals,
  bonds,
  flaws,
  featsAndTraits,
  otherProfAndLang
) {
  return (dispatch) => {
    return addCharacter(
      characterName,
      dndClass,
      level,
      background,
      playerName,
      race,
      alignment,
      xp,
      str,
      dex,
      con,
      int,
      wis,
      cha,
      ac,
      speed,
      hp,
      hitDice,
      personality,
      ideals,
      bonds,
      flaws,
      featsAndTraits,
      otherProfAndLang
    ).then((res) => {
      dispatch(createCharacter(res))
    })
  }
}

export function fetchCharacters() {
  return (dispatch) => {
    return getCharacters().then((characters) => {
      dispatch(setCharacters(characters))
    })
  }
}

export function fetchCharacter(character) {
  return (dispatch) => {
    return getCharacter(character).then((character) => {
      dispatch(setCharacter(character))
    })
  }
}

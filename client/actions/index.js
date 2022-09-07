import { getCharacter, getCharacters } from './apis/characters'

export const SET_CHARACTERS = 'SET_CHARACTERS'
export const SET_CHARACTER = 'SET_CHARACTER'

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

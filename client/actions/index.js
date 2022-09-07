import { getCharacters } from '../../server/db/characters'

export const SET_CHARACTERS = 'SET_CHARACTERS'

export function setCharacters(fruits) {
  return {
    type: SET_CHARACTERS,
    payload: fruits,
  }
}

export function fetchCharacters() {
  return (dispatch) => {
    return getCharacters().then((characters) => {
      dispatch(setCharacters(characters))
    })
  }
}

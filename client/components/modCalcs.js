import { useSelector } from 'react-redux'

export function modCalcs() {
  const character = useSelector((state) => state.character)

  let strMod = 0
  let dexMod = 0
  let conMod = 0
  let intMod = 0
  let wisMod = 0
  let chaMod = 0

  if (character.str === 1) {
    strMod = -5
  } else if (character.str == 2 || character.str == 3) {
    strMod = -4
  } else if (character.str == 4 || character.str == 5) {
    strMod = -3
  } else if (character.str == 6 || character.str == 7) {
    strMod = -2
  } else if (character.str == 8 || character.str == 9) {
    strMod = -1
  } else if (character.str == 10 || character.str == 11) {
    strMod = 0
  } else if (character.str == 12 || character.str == 13) {
    strMod = 1
  } else if (character.str == 14 || character.str == 15) {
    strMod = 2
  } else if (character.str == 16 || character.str == 17) {
    strMod = 3
  } else if (character.str == 18 || character.str == 19) {
    strMod = 4
  } else if (character.str == 20 || character.str == 21) {
    strMod = 5
  } else if (character.str == 22 || character.str == 23) {
    strMod = 6
  } else if (character.str == 24 || character.str == 25) {
    strMod = 7
  } else if (character.str == 26 || character.str == 27) {
    strMod = 8
  } else if (character.str == 28 || character.str == 29) {
    strMod = 9
  } else {
    strMod = 10
  }

  if (character.dex == 1) {
    dexMod = -5
  } else if (character.dex == 2 || character.dex == 3) {
    dexMod = -4
  } else if (character.dex == 4 || character.dex == 5) {
    dexMod = -3
  } else if (character.dex == 6 || character.dex == 7) {
    dexMod = -2
  } else if (character.dex == 8 || character.dex == 9) {
    dexMod = -1
  } else if (character.dex == 10 || character.dex == 11) {
    dexMod = 0
  } else if (character.dex == 12 || character.dex == 13) {
    dexMod = 1
  } else if (character.dex == 14 || character.dex == 15) {
    dexMod = 2
  } else if (character.dex == 16 || character.dex == 17) {
    dexMod = 3
  } else if (character.dex == 18 || character.dex == 19) {
    dexMod = 4
  } else if (character.dex == 20 || character.dex == 21) {
    dexMod = 5
  } else if (character.dex == 22 || character.dex == 23) {
    dexMod = 6
  } else if (character.dex == 24 || character.dex == 25) {
    dexMod = 7
  } else if (character.dex == 26 || character.dex == 27) {
    dexMod = 8
  } else if (character.dex == 28 || character.dex == 29) {
    dexMod = 9
  } else {
    dexMod = 10
  }
  console.log(strMod)
}

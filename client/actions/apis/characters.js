import request from 'superagent'

const rootUrl = '/api/v1'

export function getCharacters() {
  return request.get(rootUrl + '/characters').then((res) => {
    return res.body.characters
  })
}

export function getCharacter(id) {
  return request.get(rootUrl + `/characters/${id}`).then((res) => res.body)
}

export function addCharacter(
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
  return request
    .post(rootUrl + '/characters/addCharacter')
    .send({
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
    })
    .then((res) => {
      return res.body.characters
    })
}

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

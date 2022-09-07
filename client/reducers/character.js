import { SET_CHARACTER } from '../actions/index.js'

const initialState = null

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_CHARACTER:
      return payload
    default:
      return state
  }
}

export default reducer

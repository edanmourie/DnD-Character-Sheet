import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCharacter } from '../actions'

function character() {
  const character = useSelector((state) => state.character)
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCharacter(id))
  }, [])
  console.log(character)
  return (
    <div>
      <h1>{character && character.characterName}</h1>
    </div>
  )
}

export default character

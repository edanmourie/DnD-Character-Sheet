import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCharacter } from '../actions'
import CharTopper from './CharTopper'
import CharStats from './CharStats'

function character() {
  const character = useSelector((state) => state.character)
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCharacter(id))
  }, [])

  return character ? (
    <>
      <div>{<CharTopper />}</div>
      <div>{<CharStats />}</div>
    </>
  ) : (
    <div className="linkButtonDiv">
      <h1>Error: Character not found.</h1>
      <Link to="/">
        <button className="linkButton">Go back to Home</button>
      </Link>
    </div>
  )
}

export default character

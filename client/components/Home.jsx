import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacters } from '../actions'
import { Link } from 'react-router-dom'

function home() {
  const characters = useSelector((state) => state.characters)
  console.log(characters)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCharacters())
  }, [])
  return (
    <div className="container">
      <ul>
        {characters.map(
          ({ characterName, race, dndClass, level, playerName, id }) => (
            <div key={characterName} className="charHome">
              <li>
                {characterName} | {race + ' '}
                {dndClass + ' '}
                {'' + level} | By: {playerName}
                <Link to={`/${id}`}>View/Edit</Link>
              </li>
            </div>
          )
        )}
      </ul>
    </div>
  )
}

export default home

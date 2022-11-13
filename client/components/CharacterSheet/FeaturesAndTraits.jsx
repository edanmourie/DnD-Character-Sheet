import React from 'react'
import { useSelector } from 'react-redux'

function FeaturesAndTraits() {
  const character = useSelector((state) => state.character)
  return (
    <>
      <div className="border-2 border-red-700">
        <div>
          <div className="col4TextBoxes">{character.personality}</div>
          Personality Traits
        </div>
        <div>
          <div className="col4TextBoxes">{character.ideals}</div>Ideals
        </div>
        <div>
          <div className="col4TextBoxes">{character.bonds}</div>Bonds
        </div>
        <div>
          <div className="col4TextBoxes">{character.flaws}</div>Flaws
        </div>
      </div>
      <div className="border-2 border-yellow-700">Features & Traits</div>
    </>
  )
}

export default FeaturesAndTraits

import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  strCalc,
  dexCalc,
  intCalc,
  wisCalc,
  chaCalc,
  profBonusCalc,
} from './modCalcs'

function SkillChecks() {
  const character = useSelector((state) => state.character)
  let strMod = strCalc(character.str)
  let dexMod = dexCalc(character.dex)
  let intMod = intCalc(character.int)
  let wisMod = wisCalc(character.wis)
  let chaMod = chaCalc(character.cha)
  let profBonus = profBonusCalc(character.level)

  //Setting the state to the base value of the skill check, as calculated in the functions above.
  const [acroBonus, setAcroBonus] = useState(dexMod)
  const [animBonus, setAnimBonus] = useState(wisMod)
  const [arcanaBonus, setArcanaBonus] = useState(intMod)
  const [atlhBonus, setAthlBonus] = useState(strMod)
  const [decepBonus, setDecepBonus] = useState(chaMod)
  const [historyBonus, setHistoryBonus] = useState(intMod)
  const [insightBonus, setInsightBonus] = useState(wisMod)
  const [intimBonus, setIntimBonus] = useState(chaMod)
  const [investBonus, setInvestBonus] = useState(intMod)
  const [medicineBonus, setMedicineBonus] = useState(wisMod)
  const [natBonus, setNatBonus] = useState(intMod)
  const [percBonus, setPercBonus] = useState(wisMod)
  const [perfBonus, setPerfBonus] = useState(chaMod)
  const [persBonus, setPersBonus] = useState(chaMod)
  const [religionBonus, setReligionBonus] = useState(intMod)
  const [sleightBonus, setSleightBonus] = useState(dexMod)
  const [stealthBonus, setStealthBonus] = useState(dexMod)
  const [survBonus, setSurvBonus] = useState(wisMod)

  const [acroChecked, setAcroChecked] = useState(false)
  const [animChecked, setAnimChecked] = useState(false)
  const [arcanaChecked, setArcanaChecked] = useState(false)
  const [athlChecked, setAthlChecked] = useState(false)
  const [decepChecked, setDecepChecked] = useState(false)
  const [historyChecked, setHistoryChecked] = useState(false)
  const [insightChecked, setInsightChecked] = useState(false)
  const [intimChecked, setIntimChecked] = useState(false)
  const [investChecked, setInvestChecked] = useState(false)
  const [medicineChecked, setMedicineChecked] = useState(false)
  const [natChecked, setNatChecked] = useState(false)
  const [percChecked, setPercChecked] = useState(false)
  const [perfChecked, setPerfChecked] = useState(false)
  const [persChecked, setPersChecked] = useState(false)
  const [religionChecked, setReligionChecked] = useState(false)
  const [sleightChecked, setSleightChecked] = useState(false)
  const [stealthChecked, setStealthChecked] = useState(false)
  const [survChecked, setSurvChecked] = useState(false)

  //ACROBATICS
  function acroProf() {
    setAcroChecked(!acroChecked)
  }
  useEffect(() => {
    if (acroChecked == true) {
      let bonus = dexMod + profBonus
      if (bonus >= 0) {
        setAcroBonus('+' + (dexMod + profBonus))
      } else {
        setAcroBonus(dexMod + profBonus)
      }
    } else if (acroChecked == false) {
      if (dexMod >= 0) {
        setAcroBonus('+' + dexMod)
      } else {
        setAcroBonus(dexMod)
      }
    }
  }, [acroChecked])

  //ANIMAL HANDLING
  function animProf() {
    setAnimChecked(!animChecked)
  }
  useEffect(() => {
    if (animChecked == true) {
      let bonus = wisMod + profBonus
      if (bonus >= 0) {
        setAnimBonus('+' + (wisMod + profBonus))
      } else {
        setAnimBonus(wisMod + profBonus)
      }
    } else if (animChecked == false) {
      if (wisMod >= 0) {
        setAnimBonus('+' + wisMod)
      } else {
        setAnimBonus(wisMod)
      }
    }
  }, [animChecked])

  //Arcana
  function arcanaProf() {
    setArcanaChecked(!arcanaChecked)
  }
  useEffect(() => {
    if (arcanaChecked == true) {
      let bonus = intMod + profBonus
      if (bonus >= 0) {
        setArcanaBonus('+' + (intMod + profBonus))
      } else {
        setArcanaBonus(intMod + profBonus)
      }
    } else if (arcanaChecked == false) {
      if (intMod >= 0) {
        setArcanaBonus('+' + intMod)
      } else {
        setArcanaBonus(intMod)
      }
    }
  }, [arcanaChecked])

  //ATHLETICS
  function athlProf() {
    setAthlChecked(!athlChecked)
  }
  useEffect(() => {
    if (athlChecked == true) {
      let bonus = strMod + profBonus
      if (bonus >= 0) {
        setAthlBonus('+' + (strMod + profBonus))
      } else {
        setAthlBonus(strMod + profBonus)
      }
    } else if (athlChecked == false) {
      if (strMod >= 0) {
        setAthlBonus('+' + strMod)
      } else {
        setAthlBonus(strMod)
      }
    }
  }, [athlChecked])

  //DECEPTION
  function decepProf() {
    setDecepChecked(!decepChecked)
  }
  useEffect(() => {
    if (decepChecked == true) {
      let bonus = chaMod + profBonus
      if (bonus >= 0) {
        setDecepBonus('+' + (chaMod + profBonus))
      } else {
        setDecepBonus(chaMod + profBonus)
      }
    } else if (decepChecked == false) {
      if (chaMod >= 0) {
        setDecepBonus('+' + chaMod)
      } else {
        setDecepBonus(chaMod)
      }
    }
  }, [decepChecked])

  //HISTORY
  function historyProf() {
    setHistoryChecked(!historyChecked)
  }
  useEffect(() => {
    if (historyChecked == true) {
      let bonus = intMod + profBonus
      if (bonus >= 0) {
        setHistoryBonus('+' + (intMod + profBonus))
      } else {
        setHistoryBonus(intMod + profBonus)
      }
    } else if (historyChecked == false) {
      if (intMod >= 0) {
        setHistoryBonus('+' + intMod)
      } else {
        setHistoryBonus(intMod)
      }
    }
  }, [historyChecked])

  //INSIGHT
  function insightProf() {
    setInsightChecked(!insightChecked)
  }
  useEffect(() => {
    if (insightChecked == true) {
      let bonus = wisMod + profBonus
      if (bonus >= 0) {
        setInsightBonus('+' + (wisMod + profBonus))
      } else {
        setInsightBonus(wisMod + profBonus)
      }
    } else if (insightChecked == false) {
      if (wisMod >= 0) {
        setInsightBonus('+' + wisMod)
      } else {
        setInsightBonus(wisMod)
      }
    }
  }, [insightChecked])

  //INTIMIDATION
  function intimProf() {
    setIntimChecked(!intimChecked)
  }
  useEffect(() => {
    if (intimChecked == true) {
      let bonus = chaMod + profBonus
      if (bonus >= 0) {
        setIntimBonus('+' + (chaMod + profBonus))
      } else {
        setIntimBonus(chaMod + profBonus)
      }
    } else if (intimChecked == false) {
      if (chaMod >= 0) {
        setIntimBonus('+' + chaMod)
      } else {
        setIntimBonus(chaMod)
      }
    }
  }, [intimChecked])

  //INVESTIGATION
  function investProf() {
    setInvestChecked(!investChecked)
  }
  useEffect(() => {
    if (investChecked == true) {
      let bonus = intMod + profBonus
      if (bonus >= 0) {
        setInvestBonus('+' + (intMod + profBonus))
      } else {
        setInvestBonus(intMod + profBonus)
      }
    } else if (investChecked == false) {
      if (intMod >= 0) {
        setInvestBonus('+' + intMod)
      } else {
        setInvestBonus(intMod)
      }
    }
  }, [investChecked])

  //MEDICINE
  function medicineProf() {
    setMedicineChecked(!medicineChecked)
  }
  useEffect(() => {
    if (medicineChecked == true) {
      let bonus = wisMod + profBonus
      if (bonus >= 0) {
        setMedicineBonus('+' + (wisMod + profBonus))
      } else {
        setMedicineBonus(wisMod + profBonus)
      }
    } else if (medicineChecked == false) {
      if (wisMod >= 0) {
        setMedicineBonus('+' + wisMod)
      } else {
        setMedicineBonus(wisMod)
      }
    }
  }, [medicineChecked])

  //NATURE
  function natProf() {
    setNatChecked(!natChecked)
  }
  useEffect(() => {
    if (natChecked == true) {
      let bonus = intMod + profBonus
      if (bonus >= 0) {
        setNatBonus('+' + (intMod + profBonus))
      } else {
        setNatBonus(intMod + profBonus)
      }
    } else if (natChecked == false) {
      if (intMod >= 0) {
        setNatBonus('+' + intMod)
      } else {
        setNatBonus(intMod)
      }
    }
  }, [natChecked])

  //PERCEPTION
  function percProf() {
    setPercChecked(!percChecked)
  }
  useEffect(() => {
    if (percChecked == true) {
      let bonus = wisMod + profBonus
      if (bonus >= 0) {
        setPercBonus('+' + (wisMod + profBonus))
      } else {
        setPercBonus(wisMod + profBonus)
      }
    } else if (percChecked == false) {
      if (wisMod >= 0) {
        setPercBonus('+' + wisMod)
      } else {
        setPercBonus(wisMod)
      }
    }
  }, [percChecked])

  //PERFORMANCE
  function perfProf() {
    setPerfChecked(!perfChecked)
  }
  useEffect(() => {
    if (perfChecked == true) {
      let bonus = chaMod + profBonus
      if (bonus >= 0) {
        setPerfBonus('+' + (chaMod + profBonus))
      } else {
        setPerfBonus(chaMod + profBonus)
      }
    } else if (perfChecked == false) {
      if (chaMod >= 0) {
        setPerfBonus('+' + chaMod)
      } else {
        setPerfBonus(chaMod)
      }
    }
  }, [perfChecked])

  //PERSUASION
  function persProf() {
    setPersChecked(!persChecked)
  }
  useEffect(() => {
    if (persChecked == true) {
      let bonus = chaMod + profBonus
      if (bonus >= 0) {
        setPersBonus('+' + (chaMod + profBonus))
      } else {
        setPersBonus(chaMod + profBonus)
      }
    } else if (persChecked == false) {
      if (chaMod >= 0) {
        setPersBonus('+' + chaMod)
      } else {
        setPersBonus(chaMod)
      }
    }
  }, [persChecked])

  //RELIGION
  function religionProf() {
    setReligionChecked(!religionChecked)
  }
  useEffect(() => {
    if (religionChecked == true) {
      let bonus = intMod + profBonus
      if (bonus >= 0) {
        setReligionBonus('+' + (intMod + profBonus))
      } else {
        setReligionBonus(intMod + profBonus)
      }
    } else if (religionChecked == false) {
      if (intMod >= 0) {
        setReligionBonus('+' + intMod)
      } else {
        setReligionBonus(intMod)
      }
    }
  }, [religionChecked])

  //SLEIGHT OF HAND
  function sleightProf() {
    setSleightChecked(!sleightChecked)
  }
  useEffect(() => {
    if (sleightChecked == true) {
      let bonus = dexMod + profBonus
      if (bonus >= 0) {
        setSleightBonus('+' + (dexMod + profBonus))
      } else {
        setSleightBonus(dexMod + profBonus)
      }
    } else if (sleightChecked == false) {
      if (dexMod >= 0) {
        setSleightBonus('+' + dexMod)
      } else {
        setSleightBonus(dexMod)
      }
    }
  }, [sleightChecked])

  //ACROBATICS
  function stealthProf() {
    setStealthChecked(!stealthChecked)
  }
  useEffect(() => {
    if (stealthChecked == true) {
      let bonus = dexMod + profBonus
      if (bonus >= 0) {
        setStealthBonus('+' + (dexMod + profBonus))
      } else {
        setStealthBonus(dexMod + profBonus)
      }
    } else if (stealthChecked == false) {
      if (dexMod >= 0) {
        setStealthBonus('+' + dexMod)
      } else {
        setStealthBonus(dexMod)
      }
    }
  }, [stealthChecked])

  //SURVIVAL
  function survProf() {
    setSurvChecked(!survChecked)
  }
  useEffect(() => {
    if (survChecked == true) {
      let bonus = wisMod + profBonus
      if (bonus >= 0) {
        setSurvBonus('+' + (wisMod + profBonus))
      } else {
        setSurvBonus(wisMod + profBonus)
      }
    } else if (survChecked == false) {
      if (wisMod >= 0) {
        setSurvBonus('+' + wisMod)
      } else {
        setSurvBonus(wisMod)
      }
    }
  }, [survChecked])
  return (
    <div className="savingThrowsAndChecks">
      <div>
        <input type="checkbox" onChange={acroProf} /> <u>{acroBonus}</u>{' '}
        Acrobatics
      </div>
      <div>
        <input type="checkbox" onChange={animProf} /> <u>{animBonus}</u> Animal
        Handling
      </div>
      <div>
        <input type="checkbox" onChange={arcanaProf} /> <u>{arcanaBonus}</u>{' '}
        Arcana
      </div>
      <div>
        <input type="checkbox" onChange={athlProf} /> <u>{atlhBonus}</u>{' '}
        Athletics
      </div>
      <div>
        <input type="checkbox" onChange={decepProf} /> <u>{decepBonus}</u>{' '}
        Deception
      </div>
      <div>
        <input type="checkbox" onChange={historyProf} /> <u>{historyBonus}</u>{' '}
        History
      </div>
      <div>
        <input type="checkbox" onChange={insightProf} /> <u>{insightBonus}</u>{' '}
        Insight
      </div>
      <div>
        <input type="checkbox" onChange={intimProf} /> <u>{intimBonus}</u>{' '}
        Intimidation
      </div>
      <div>
        <input type="checkbox" onChange={investProf} /> <u>{investBonus}</u>{' '}
        Investigation
      </div>
      <div>
        <input type="checkbox" onChange={medicineProf} /> <u>{medicineBonus}</u>{' '}
        Medicine
      </div>
      <div>
        <input type="checkbox" onChange={natProf} /> <u>{natBonus}</u> Nature
      </div>
      <div>
        <input type="checkbox" onChange={percProf} /> <u>{percBonus}</u>{' '}
        Perception
      </div>
      <div>
        <input type="checkbox" onChange={perfProf} /> <u>{perfBonus}</u>{' '}
        Performance
      </div>
      <div>
        <input type="checkbox" onChange={persProf} /> <u>{persBonus}</u>{' '}
        Persuasion
      </div>
      <div>
        <input type="checkbox" onChange={religionProf} /> <u>{religionBonus}</u>{' '}
        Religion
      </div>
      <div>
        <input type="checkbox" onChange={sleightProf} /> <u>{sleightBonus}</u>{' '}
        Sleight of Hand
      </div>
      <div>
        <input type="checkbox" onChange={stealthProf} /> <u>{stealthBonus}</u>{' '}
        Stealth
      </div>
      <div>
        <input type="checkbox" onChange={survProf} /> <u>{survBonus}</u>{' '}
        Survival
      </div>
      <div className="text-center ">Skills</div>
    </div>
  )
}

export default SkillChecks

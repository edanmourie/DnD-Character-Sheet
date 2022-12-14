exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('characters')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('characters').insert([
        {
          id: 1,
          characterName: 'banana',
          dndClass: 'bard',
          level: 2,
          background: 'acolyte',
          playerName: 'edan',
          race: 'orc',
          alignment: 'LG',
          xp: 5000,
          str: 10,
          dex: 10,
          con: 10,
          int: 10,
          wis: 10,
          cha: 10,
          passPerc: 10,
          profBonus: 2,
          ac: 11,
          initiative: 0,
          speed: 30,
          hp: 15,
          hitDice: '3d6',
          personality: 'like cats',
          ideals: 'like more cats',
          bonds: 'my cat',
          flaws: 'cant go without cat',
          featsAndTraits: 'darkvision',
          otherProfAndLang: 'orc, common',
        },
        {
          id: 2,
          characterName: 'orange',
          dndClass: 'wizard',
          level: 2,
          background: 'acolyte',
          playerName: 'billy',
          race: 'human',
          alignment: 'LG',
          xp: 5000,
          str: 8,
          dex: 8,
          con: 8,
          int: 8,
          wis: 8,
          cha: 8,
          passPerc: 8,
          profBonus: 2,
          ac: 8,
          initiative: 0,
          speed: 30,
          hp: 8,
          hitDice: '3d6',
          personality: 'lik spells',
          ideals: 'like more spells',
          bonds: 'my spells',
          flaws: 'cant go without spells',
          featsAndTraits: '',
          otherProfAndLang: 'common',
        },
      ])
    })
}

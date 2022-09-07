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
          class: 'bard',
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
      ])
    })
}

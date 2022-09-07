exports.up = function (knex) {
  return knex.schema.createTable('characters', (table) => {
    table.increments('id')
    table.string('characterName')
    table.string('class')
    table.int('level')
    table.string('background')
    table.string('playerName')
    table.string('race')
    table.string('alignment')
    table.int('xp')
    table.int('str')
    table.int('dex')
    table.int('con')
    table.int('int')
    table.int('wis')
    table.int('cha')
    table.int('passPerc')
    table.int('profBonus')
    table.int('ac')
    table.int('initiative')
    table.int('speed')
    table.int('hp')
    table.string('hitDice')
    table.string('personality')
    table.string('ideals')
    table.string('bonds')
    table.string('flaws')
    table.string('featsAndTraits')
    table.string('otherProfAndLang')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('characters')
}

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chance = require('chance');

var _chance2 = _interopRequireDefault(_chance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CONSTANTS = {
  ABILITY_SCORES: ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'],
  CLASSES: {
    BARBARIAN: 'BARBARIAN',
    BARD: 'BARD',
    CLERIC: 'CLERIC',
    DRUID: 'DRUID',
    FIGHTER: 'FIGHTER',
    MONK: 'MONK',
    PALADIN: 'PALADIN',
    RANGER: 'RANGER',
    ROGUE: 'ROGUE',
    SORCERER: 'SORCERER',
    WARLOCK: 'WARLOCK',
    WIZARD: 'WIZARD'
  },
  CLASS_LIST: ['BARBARIAN', 'BARD', 'CLERIC', 'DRUID', 'FIGHTER', 'MONK', 'PALADIN', 'RANGER', 'ROGUE', 'SORCERER', 'WARLOCK', 'WIZARD'],
  RACES: {
    DRAGONBORN: 'DRAGONBORN',
    HILL_DWARF: 'HILL DWARF',
    MOUNTAIN_DWARF: 'MOUNTAIN DWARF',
    HIGH_ELF: 'HIGH ELF',
    WOOD_ELF: 'WOOD ELF',
    DROW: 'DROW',
    FOREST_GNOME: 'FOREST GNOME',
    ROCK_GNOME: 'ROCK GNOME',
    DEEP_GNOME: 'DEEP GNOME',
    HALF_ELF: 'HALF-ELF',
    HALF_ORC: 'HALF-ORC',
    HALFLING: 'HALFLING',
    HUMAN: 'HUMAN',
    TIEFLING: 'TIEFLING',
    GENASI: 'GENASI',
    GOLIATH: 'GOLIATH'
  },
  RACE_LIST: ['DRAGONBORN', 'HILL_DWARF', 'MOUNTAIN_DWARF', 'HIGH_ELF', 'WOOD_ELF', 'DROW', 'FOREST_GNOME', 'ROCK_GNOME', 'DEEP_GNOME', 'HALF_ELF', 'HALF_ORC', 'HALFLING', 'HUMAN', 'TIEFLING', 'GENASI', 'GOLIATH'],
  ALIGNMENTS: {
    LAWFUL_GOOD: 'LAWFUL GOOD',
    NEUTRAL_GOOD: 'NEUTRAL GOOD',
    CHAOTIC_GOOD: 'CHAOTIC GOOD',
    LAWFUL_NEUTRAL: 'LAWFUL NEUTRAL',
    TRUE_NEUTRAL: 'TRUE NEUTRAL',
    CHAOTIC_NEUTRAL: 'CHAOTIC NEUTRAL',
    LAWFUL_EVIL: 'LAWFUL EVIL',
    NEUTRAL_EVIL: 'NEUTRAL EVIL',
    CHAOTIC_EVIL: 'CHAOTIC EVIL'
  },
  ALIGNMENT_LIST: ['LAWFUL_GOOD', 'NEUTRAL_GOOD', 'CHAOTIC_GOOD', 'LAWFUL_NEUTRAL', 'TRUE_NEUTRAL', 'CHAOTIC_NEUTRAL', 'LAWFUL_EVIL', 'NEUTRAL_EVIL', 'CHAOTIC_EVIL'],
  BACKGROUNDS: {
    ACOLYTE: 'ACOLYTE',
    CHARLATAN: 'CHARLATAN',
    CRIMINAL: 'CRIMINAL',
    ENTERTAINER: 'ENTERTAINER',
    FOLK_HERO: 'FOLK_HERO',
    GUILD_ARTISAN: 'GUILD_ARTISAN',
    HERMIT: 'HERMIT',
    NOBLE: 'NOBLE',
    OUTLANDER: 'OUTLANDER',
    SAGE: 'SAGE',
    SAILOR: 'SAILOR',
    SOLDIER: 'SOLDIER',
    URCHIN: 'URCHIN'
  },
  BACKGROUND_LIST: ['ACOLYTE', 'CHARLATAN', 'CRIMINAL', 'ENTERTAINER', 'FOLK_HERO', 'GUILD_ARTISAN', 'HERMIT', 'NOBLE', 'OUTLANDER', 'SAGE', 'SAILOR', 'SOLDIER', 'URCHIN'],
  SKILLS: {
    ACROBATICS: 'acrobatics',
    ANIMAL_HANDLING: 'animalHandling',
    ARCANA: 'arcana',
    ATHLETICS: 'athletics',
    DECEPTION: 'deception',
    HISTORY: 'history',
    INSIGHT: 'insight',
    INTIMIDATION: 'intimidation',
    INVESTIGATION: 'investigation',
    MEDICINE: 'medicine',
    NATURE: 'nature',
    PERCEPTION: 'perception',
    PERFORMANCE: 'performance',
    PERSUASION: 'persuasion',
    RELIGION: 'religion',
    SLEIGHT_OF_HAND: 'sleightOfHand',
    STEALTH: 'stealth',
    SURVIVAL: 'survival'
  },
  SKILL_LIST: ['ACROBATICS', 'ANIMAL_HANDLING', 'ARCANA', 'ATHLETICS', 'DECEPTION', 'HISTORY', 'INSIGHT', 'INTIMIDATION', 'INVESTIGATION', 'MEDICINE', 'NATURE', 'PERCEPTION', 'PERFORMANCE', 'PERSUASION', 'RELIGION', 'SLEIGHT_OF_HAND', 'STEALTH', 'SURVIVAL'],
  WEAPONS: {
    RAPIER: 'RAPIER',
    GREATAXE: 'GREATAXE',
    HANDAXE: 'HANDAXE',
    DAGGER: 'DAGGER',
    MACE: 'MACE',
    LIGHT_CROSSBOW: 'LIGHT CROSSBOW',
    SCIMITAR: 'SCIMITAR',
    GREATSWORD: 'GREATSWORD',
    SHORTSWORD: 'SHORTSWORD',
    LANCE: 'LANCE',
    JAVELIN: 'JAVELIN',
    LONGBOW: 'LONGBOW',
    SHORTBOW: 'SHORTBOW',
    QUARTERSTAFF: 'QUARTERSTAFF'
  },
  EQUIPMENT: {
    SHIELD: 'SHIELD',
    LEATHER_ARMOR: 'LEATHER_ARMOR',
    SCALE_MAIL: 'SCALE_MAIL',
    CHAIN_MAIL: 'CHAIN_MAIL'
  },
  CHALLENGE_RATING_TYPES: {
    ONE_EIGHTH: 'ONE EIGHTH',
    ONE_FOURTH: 'ONE FOURTH',
    ONE_HALF: 'ONE HALF',
    ONE: 'ONE',
    TWO: 'TWO',
    THREE: 'THREE',
    FOUR: 'FOUR',
    FIVE: 'FIVE',
    SIX: 'SIX',
    SEVEN: 'SEVEN',
    EIGHT: 'EIGHT',
    NINE: 'NINE',
    TEN: 'TEN',
    ELEVEN: 'ELEVEN',
    TWELVE: 'TWELVE',
    THIREEN: 'THIRTEEN',
    FOURTEEN: 'FOURTEEN',
    FIFTEEN: 'FIFTEEN',
    SIXTEEN: 'SIXTEEN',
    SEVENTEEN: 'SEVENTEEN',
    EIGHTEEN: 'EIGHTEEN',
    NINETEEN: 'NINETEEN',
    TWENTY: 'TWENTY',
    TWENTY_ONE: 'TWENTY_ONE',
    TWENTY_TWO: 'TWENTY_TWO',
    TWENTY_THREEE: 'TWENTY_THREE',
    TWENTY_FOUR: 'TWENTY_FOUR',
    THIRTY: 'THIRTY'
  },
  ENTITY_TYPES: {
    ADVENTURER: 'ADVENTURER',
    MONSTER: 'MONSTER'
  },
  WEAPON_TYPES: {
    SIMPLE: 'SIMPLE',
    MARTIAL: 'MARTIAL'
  },
  ATTACK_TYPES: {
    MELEE: 'MELEE',
    RANGED: 'RANGED'
  },
  DAMAGE_TYPES: {
    ACID: 'ACID',
    BLUDGEONING: 'BLUDGEONING',
    COLD: 'COLD',
    FIRE: 'FIRE',
    FORCE: 'FORCE',
    LIGHTNING: 'LIGHTNING',
    NECROTIC: 'NECROTIC',
    PIERCING: 'PIERCING',
    POISON: 'POISON',
    PSYCHIC: 'PSYCHIC',
    RADIANT: 'RADIANT',
    SLASHING: 'SLASHING',
    THUNDER: 'THUNDER'
  },
  ARMOR_TYPES: {
    SHIELD: 'SHIELD',
    LIGHT: 'LIGHT',
    MEDIUM: 'MEDIUM',
    HEAVY: 'HEAVY'
  },
  TERRAIN_TYPES: {
    GRASSLAND: 'GRASSLAND',
    ARCTIC: 'ARCTIC',
    COAST: 'COAST',
    DESERT: 'DESERT',
    FOREST: 'FOREST',
    MOUNTAIN: 'MOUNTAIN',
    SWAMP: 'SWAMP',
    UNDERDARK: 'UNDERDARK'
  },
  STAGE_TYPES: {
    EASY: 'EASY',
    MEDIUM: 'MEDIUM',
    HARD: 'HARD'
  },
  ERRORS: {
    INVALID_MONSTER_NAME: 'A monster does not exist with the provided name'
  }
};
var TERRAIN_TYPES = CONSTANTS.TERRAIN_TYPES;

var CHANCE = new _chance2.default();

var Tile = function () {
  _createClass(Tile, null, [{
    key: 'generateTerrain',
    value: function generateTerrain() {
      var terrains = Object.keys(TERRAIN_TYPES);
      return terrains[CHANCE.integer({ min: 0, max: terrains.length - 1 })];
    }
  }]);

  function Tile(coordinates, terrain) {
    _classCallCheck(this, Tile);

    this.coordinates = coordinates;
    this.terrain = terrain;
  }

  return Tile;
}();

exports.default = Tile;
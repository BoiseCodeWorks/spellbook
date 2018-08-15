import Spell from "../models/Spell.js";

function formatUrl(url) {
  return '//bcw-getter.herokuapp.com/?url=' + encodeURIComponent(url)
}

let spells = {}
let mySpellbook = {}

export default class SpellbookService {
  constructor() {

  }

  getSpells(draw, drawError) {
    fetch(formatUrl("http://dnd5eapi.co/api/spells/"))
      .then(res => res.json())
      .then(res => draw(res.results))
  }

  getSpell(url, draw) {
    if (spells[url]) {
      return draw(spells[url])
    }
    fetch(formatUrl(url))
      .then(res => res.json())
      .then(res => {
        let spell = new Spell(res)
        spells[url] = spell
        return draw(spell)
      })
  }

}
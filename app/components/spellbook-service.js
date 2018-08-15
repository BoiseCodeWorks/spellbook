import Spell from "../models/Spell.js";

function formatUrl(url) {
  return '//bcw-getter.herokuapp.com/?url=' + encodeURIComponent(url)
}

export default class SpellbookService {
  constructor() {

  }

  getSpells(draw, drawError) {
    fetch(formatUrl("http://dnd5eapi.co/api/spells/"))
      .then(res => res.json())
      .then(res => draw(res.results))
  }

  getSpell(url, draw) {
    fetch(formatUrl(url))
      .then(res => res.json())
      .then(res => draw(res))
  }

}
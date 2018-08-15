import Spell from "../models/Spell.js";

function formatUrl(url) {
  return '//bcw-getter.herokuapp.com/?url=' + encodeURIComponent(url)
}

//saving the spells we get from the api
let spells = {}

//the stuff I truly care about
//spells learned
let mySpellbook = {}

export default class SpellbookService {
  //remove spell from mySpellbook
  forgetSpell(url) {
    delete mySpellbook[url]
  }

  //add spell to spellbook
  learnSpell(url) {
    mySpellbook[url] = spells[url]
  }
  //return data in mySpellbook
  get mySpellbook() {
    return mySpellbook
  }

  //get all basic spell info from database
  getSpells(draw, drawError) {
    fetch(formatUrl("http://dnd5eapi.co/api/spells/"))
      .then(res => res.json())
      .then(res => draw(res.results))
  }

  getSpell(url, draw) {
    debugger
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
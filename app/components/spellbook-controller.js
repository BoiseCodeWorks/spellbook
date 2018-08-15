import SpellbookService from "./spellbook-service.js"

let ss = new SpellbookService
const app = document.getElementById("app")

function draw(spells) {
  let template = ""
  spells.forEach(spell => {
    template += `
    <div class="spell">
      <h4>${spell.name}</h4>
      <button onclick="app.controllers.spellbook.viewSpell('${spell.url}')">View spell</button>
      <div id="${spell.name.split(' ').join('-')}"></div>
    </div>
   `
  });
  app.innerHTML = template

}

function drawSpell(spell) {
  console.log(spell)
}


export default class SpellbookController {
  constructor() {
    ss.getSpells(draw)

  }
  viewSpell(url) {
    ss.getSpell(url, drawSpell)
  }
}
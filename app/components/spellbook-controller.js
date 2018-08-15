import SpellbookService from "./spellbook-service.js"

let ss = new SpellbookService
const app = document.getElementById("app")

function draw(spells) {
  let template = ""
  spells.forEach(spell => {
    template += `
   <div>${spell.name}</div>
   <button>View spell</button>
   `
  });
  app.innerHTML = template



}




export default class SpellbookController {
  constructor() {
    ss.getSpells(draw)

  }
}
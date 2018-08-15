import SpellbookController from "./app/components/spellbook-controller.js"

class App {
  constructor() {
    this.controllers = {
      spellbook: new SpellbookController
    }
  }
}
window.app = new App()
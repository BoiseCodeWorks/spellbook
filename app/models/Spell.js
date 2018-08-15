export default class Spell {
  constructor(data) {
    this.name = data.name
    this.desc = data.desc
    this.range = data.range
    this.duration = data.duration
    this.level = data.level
    this.page = data.page
    this.id = data._id
  }
}
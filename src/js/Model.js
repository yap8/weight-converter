class Model {
  constructor() {
    this.titles = [
      'Pound',
      'Kilogram', 
      'Stone', 
      'Ounce',
      'Tonne'
    ]
    this.shortTitles = [
      'lb', 
      'kg', 
      'st', 
      'oz', 
      'T'
    ]
    this.formulaParts = [
      2.20462,
      1,
      .157473,
      35.274,
      .001
    ]
  }
  getShortTitles() {
    return this.shortTitles
  }
  getAllData() {
    return [this.shortTitles, this.titles, this.formulaParts]
  }
  getUnitIndex(unit) {
    return this.shortTitles.indexOf(unit)
  }
  getMessage(unitIndex) {
    return `Enter ${this.titles[unitIndex]}s...`
  }
  getFormulaPart(unitIndex) {
    return this.formulaParts[unitIndex]
  }
}

export default Model

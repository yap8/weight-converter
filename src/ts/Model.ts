class Model {
  titles: object
  formulaParts: object
  resultMask: object[]

  constructor() {
    this.titles = {
      kg: 'kilogram',
      lb: 'pound',
      st: 'stone',
      oz: 'ounce',
      T: 'tonne'
    }
    this.formulaParts = {
      kg: 1,
      lb: 2.20462,
      st: .157473,
      oz: 35.274,
      T: 0.001
    }
    this.resultMask = [
      { title: this.titles['lb'], alias: 'lb', multiplier: this.formulaParts['lb'] }, 
      { title: this.titles['kg'], alias: 'kg', multiplier: this.formulaParts['kg'] },
      { title: this.titles['st'], alias: 'st', multiplier: this.formulaParts['st'] },
      { title: this.titles['oz'], alias: 'oz', multiplier: this.formulaParts['oz'] },
      { title: this.titles['T'],  alias: 'T',  multiplier: this.formulaParts['T'] }
    ]
  }
  getResultMask(): object[] {
    return this.resultMask
  }
  getMessage(unit: string): string {
    return `Enter ${this.titles[unit]}s...`
  }
  getFormulaPart(unit: string): number {
    return this.formulaParts[unit]
  }
}

export default Model

class Model {
  titles: object
  formulaParts: object
  resultMasks: object

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
    this.resultMasks = {
      kg: [
        { title: this.titles['lb'], multiplier: this.formulaParts['lb'] }, 
        { title: this.titles['st'], multiplier: this.formulaParts['st'] },
        { title: this.titles['oz'], multiplier: this.formulaParts['oz'] },
        { title: this.titles['T'],  multiplier: this.formulaParts['T'] },
      ],
      lb: [
        { title: this.titles['kg'], multiplier: this.formulaParts['kg'] },
        { title: this.titles['st'], multiplier: this.formulaParts['st'] },
        { title: this.titles['oz'], multiplier: this.formulaParts['oz'] },
        { title: this.titles['T'],  multiplier: this.formulaParts['T'] },
      ],
      st: [
        { title: this.titles['kg'], multiplier: this.formulaParts['kg'] },
        { title: this.titles['lb'], multiplier: this.formulaParts['lb'] },
        { title: this.titles['oz'], multiplier: this.formulaParts['oz'] },
        { title: this.titles['T'],  multiplier: this.formulaParts['T'] },
      ],
      oz: [
        { title: this.titles['kg'], multiplier: this.formulaParts['kg'] },
        { title: this.titles['lb'], multiplier: this.formulaParts['lb'] },
        { title: this.titles['st'], multiplier: this.formulaParts['st'] },
        { title: this.titles['T'],  multiplier: this.formulaParts['T'] },
      ],
      T: [
        { title: this.titles['kg'], multiplier: this.formulaParts['kg'] },
        { title: this.titles['lb'], multiplier: this.formulaParts['lb'] },
        { title: this.titles['st'], multiplier: this.formulaParts['st'] },
        { title: this.titles['oz'], multiplier: this.formulaParts['oz'] },
      ]
    }
  }
  getResultMask(unit: string): object[] {
    return this.resultMasks[unit]
  }
  getMessage(unit: string): string {
    return `Enter ${this.titles[unit]}s...`
  }
  getFormulaPart(unit: string): number {
    return this.formulaParts[unit]
  }
}

export default Model

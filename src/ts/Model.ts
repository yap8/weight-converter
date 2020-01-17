class Model {
  titles: object
  toKiloMultipliers: object
  fromKiloMultipliers: object
  resultMasks: object

  constructor() {
    this.titles = {
      kg: 'kilogram',
      lb: 'pound',
      st: 'stone',
      oz: 'ounce',
      T: 'tonne'
    }
    this.toKiloMultipliers = {
      kg: 1,
      lb: .453592,
      st: 6.35029,
      oz: .0283495,
      T: 1000
    }
    this.fromKiloMultipliers = {
      kg: 1,
      lb: 2.20462,
      st: .157473,
      oz: 35.274,
      T: 0.001
    }
    this.resultMasks = {
      kg: [
        { title: this.titles['lb'], multiplier: this.fromKiloMultipliers['lb'] }, 
        { title: this.titles['st'], multiplier: this.fromKiloMultipliers['st'] },
        { title: this.titles['oz'], multiplier: this.fromKiloMultipliers['oz'] },
        { title: this.titles['T'],  multiplier: this.fromKiloMultipliers['T'] },
      ],
      lb: [
        { title: this.titles['kg'], multiplier: this.fromKiloMultipliers['kg'] },
        { title: this.titles['st'], multiplier: this.fromKiloMultipliers['st'] },
        { title: this.titles['oz'], multiplier: this.fromKiloMultipliers['oz'] },
        { title: this.titles['T'],  multiplier: this.fromKiloMultipliers['T'] },
      ],
      st: [
        { title: this.titles['kg'], multiplier: this.fromKiloMultipliers['kg'] },
        { title: this.titles['lb'], multiplier: this.fromKiloMultipliers['lb'] },
        { title: this.titles['oz'], multiplier: this.fromKiloMultipliers['oz'] },
        { title: this.titles['T'],  multiplier: this.fromKiloMultipliers['T'] },
      ],
      oz: [
        { title: this.titles['kg'], multiplier: this.fromKiloMultipliers['kg'] },
        { title: this.titles['lb'], multiplier: this.fromKiloMultipliers['lb'] },
        { title: this.titles['st'], multiplier: this.fromKiloMultipliers['st'] },
        { title: this.titles['T'],  multiplier: this.fromKiloMultipliers['T'] },
      ],
      T: [
        { title: this.titles['kg'], multiplier: this.fromKiloMultipliers['kg'] },
        { title: this.titles['lb'], multiplier: this.fromKiloMultipliers['lb'] },
        { title: this.titles['st'], multiplier: this.fromKiloMultipliers['st'] },
        { title: this.titles['oz'], multiplier: this.fromKiloMultipliers['oz'] },
      ]
    }
  }
  getResultMask(unit: string): object[] {
    return this.resultMasks[unit]
  }
  getMessage(unit: string): string {
    return `Enter ${this.titles[unit]}s...`
  }
  getToKiloMultiplier(unit: string): number {
    return this.toKiloMultipliers[unit]
  }
}

export default Model

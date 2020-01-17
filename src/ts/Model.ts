class Model {
  toKiloMultipliers: object
  fromKiloMultipliers: object
  resultMasks: object
  messages: object

  constructor() {
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
        { title: 'Pounds',    multiplier: this.fromKiloMultipliers['lb'] }, 
        { title: 'Stones',    multiplier: this.fromKiloMultipliers['st'] },
        { title: 'Ounces',    multiplier: this.fromKiloMultipliers['oz'] },
        { title: 'Tonnes',    multiplier: this.fromKiloMultipliers['T'] },
      ],
      lb: [
        { title: 'Kilograms', multiplier: this.fromKiloMultipliers['kg'] },
        { title: 'Stones',    multiplier: this.fromKiloMultipliers['st'] },
        { title: 'Ounces',    multiplier: this.fromKiloMultipliers['oz'] },
        { title: 'Tonnes',    multiplier: this.fromKiloMultipliers['T'] },
      ],
      st: [
        { title: 'Kilograms', multiplier: this.fromKiloMultipliers['kg'] },
        { title: 'Pounds',    multiplier: this.fromKiloMultipliers['lb'] },
        { title: 'Ounces',    multiplier: this.fromKiloMultipliers['oz'] },
        { title: 'Tonnes',    multiplier: this.fromKiloMultipliers['T'] },
      ],
      oz: [
        { title: 'Kilograms', multiplier: this.fromKiloMultipliers['kg'] },
        { title: 'Pounds',    multiplier: this.fromKiloMultipliers['lb'] },
        { title: 'Stones',    multiplier: this.fromKiloMultipliers['st'] },
        { title: 'Tonnes',    multiplier: this.fromKiloMultipliers['T'] },
      ],
      T: [
        { title: 'Kilograms', multiplier: this.fromKiloMultipliers['kg'] },
        { title: 'Pounds',    multiplier: this.fromKiloMultipliers['lb'] },
        { title: 'Stones',    multiplier: this.fromKiloMultipliers['st'] },
        { title: 'Ounces',    multiplier: this.fromKiloMultipliers['oz'] },
      ]
    }
    this.messages = {
      kg: 'Enter kilograms...',
      lb: 'Enter pounds...',
      st: 'Enter stones...',
      oz: 'Enter ounces...',
      T: 'Enter tonnes...'
    }
  }
  getResultMask(unit: string): object[] {
    return this.resultMasks[unit]
  }
  getMessage(unit: string): string {
    return this.messages[unit]
  }
  getToKiloMultiplier(unit: string): number {
    return this.toKiloMultipliers[unit]
  }
}

export default Model

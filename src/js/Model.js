class Model {
  constructor() {
    this.toKiloMultipliers = {
      kg: 1,
      lb: .453592,
      st: 6.35029,
      oz: .0283495
    }
    this.fromKiloMultipliers = {
      kg: 1,
      lb: 2.20462,
      st: .157473,
      oz: 35.274
    }
    this.resultMasks = {
      kg: [
        { title: 'Pounds',    multiplier: this.fromKiloMultipliers['lb'] }, 
        { title: 'Stones',    multiplier: this.fromKiloMultipliers['st'] },
        { title: 'Ounces',    multiplier: this.fromKiloMultipliers['oz'] },
      ],
      lb: [
        { title: 'Kilograms', multiplier: this.fromKiloMultipliers['kg'] },
        { title: 'Stones',    multiplier: this.fromKiloMultipliers['st'] },
        { title: 'Ounces',    multiplier: this.fromKiloMultipliers['oz'] },
      ],
      st: [
        { title: 'Kilograms', multiplier: this.fromKiloMultipliers['kg'] },
        { title: 'Pounds',    multiplier: this.fromKiloMultipliers['lb'] },
        { title: 'Ounces',    multiplier: this.fromKiloMultipliers['oz'] },
      ],
      oz: [
        { title: 'Kilograms', multiplier: this.fromKiloMultipliers['kg'] },
        { title: 'Pounds',    multiplier: this.fromKiloMultipliers['lb'] },
        { title: 'Stones',    multiplier: this.fromKiloMultipliers['st'] },
      ]
    }
    this.messages = {
      kg: 'Enter kilograms...',
      lb: 'Enter pounds...',
      st: 'Enter stones...',
      oz: 'Enter ounces...'
    }
  }
  getResultMask(unit) {
    return this.resultMasks[unit]
  }
  getMessage(unit) {
    return this.messages[unit]
  }
  getToKiloMultiplier(unit) {
    return this.toKiloMultipliers[unit]
  }
}

export default Model

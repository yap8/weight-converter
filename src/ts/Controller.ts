export default class Controller {
  model: any
  view: any

  constructor(model: object, view: object) {
    this.model = model
    this.view = view

    this.view.on('handleInput', this.handleInput.bind(this))
    this.view.on('handleChange', this.handleChange.bind(this))
  }
  handleInput({ unit, weight }): void {
    weight = +weight !== 0 ? this.getKilos(unit, weight) : 0

    let result: any[] = []

    if (this.validateInput(weight)) {
      result = this.getResult(unit, weight)
      this.shortenValues(result)
    }

    this.view.renderResult(result)
  }
  handleChange({ unit, weight }): void {
    const message = this.model.getMessage(unit)

    this.view.changeFormInputPlaceholder(message)
    this.handleInput({ unit, weight })
  }
  shortenValues(result: any[]): void {
    result.forEach(item => {
      item.weight = item.weight.toFixed(2)
    })
  }
  getKilos(unit: string, weight: number): number {
    return this.model.getToKiloMultiplier(unit) * weight
  }
  validateInput(input: number): boolean {
    if (input === 0) {
      this.view.displayFormInputSuccess()
      return false
    } else if (isNaN(input)) {
      this.view.displayFormInputError()
      return false
    }
    this.view.displayFormInputSuccess()
    return true
  }
  getResult(unit: string, weight: number): object[] {
    const resultMask: any[] = this.model.getResultMask(unit)

    return resultMask.map(item => (
      { title: item.title, weight: weight * item.multiplier }
    ))
  }
}

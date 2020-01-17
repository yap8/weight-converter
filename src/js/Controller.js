class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view

    this.view.on('handleInput', this.handleInput.bind(this))
    this.view.on('handleChange', this.handleChange.bind(this))
  }
  handleInput({ unit, weight }) {
    weight = +weight !== 0 ? this.getKilos(unit, weight) : 0

    let result = []

    if (this.validateInput(weight)) {
      result = this.getResult(unit, weight)
      this.shortenValues(result)
    }

    this.view.renderResult(result)
  }
  handleChange({ unit, weight }) {
    const message = this.model.getMessage(unit)

    this.view.changeFormInputPlaceholder(message)
    this.handleInput({ unit, weight })
  }
  shortenValues(result) {
    result.forEach(item => {
      item.weight = item.weight.toFixed(2)
    })
  }
  getKilos(unit, weight) {
    return this.model.getToKiloMultiplier(unit) * weight
  }
  validateInput(input) {
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
  getResult(unit, weight) {
    const resultMask = this.model.getResultMask(unit)

    return resultMask.map(item => (
      { title: item.title, weight: weight * item.multiplier }
    ))
  }
}

export default Controller

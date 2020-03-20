class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view

    this.view.on('handleInput', this.handleInput.bind(this))
    this.view.on('handleChange', this.handleChange.bind(this))
    this.view.on('handleLoaded', this.handleLoaded.bind(this))
  }
  handleLoaded() {
    const options = this.model.getShortTitles()
    this.view.renderOptions(options)
  }
  handleInput({ unit, weight }) {
    const unitIndex = this.model.getUnitIndex(unit)
    const kilos = +weight !== 0 ? this.getKilos(unitIndex, weight) : 0
    
    let result = []

    if (this.validateInput(kilos)) {
      result = this.getResult(unitIndex, kilos)
      this.shortenValues(result)
    }

    this.view.renderResult(result)
  }
  handleChange({ unit, weight }) {
    const unitIndex = this.model.getUnitIndex(unit)
    const message = this.model.getMessage(unitIndex)

    this.view.changeFormInputPlaceholder(message)
    this.handleInput({ unit, weight })
  }
  shortenValues(result) {
    result.forEach(item => {
      item.weight = item.weight.toFixed(2)
    })
  }
  getKilos(unitIndex, weight) {
    return weight / this.model.getFormulaPart(unitIndex)
  }
  validateInput(input) {
    let message = 'success'
    let result = true

    if (input === 0) {
      result = false
    } else if (isNaN(input)) {
      message = 'error'
      result = false
    }

    this.view.formInputDisplay(message)
    return result
  }
  getResult(unitIndex, kilos) {
    const allData = this.model.getAllData()

    const filteredData = allData.map(item => item.filter(innerItem => item.indexOf(innerItem) !== unitIndex))

    const result = filteredData[0].map((item, i) => (
      { title: filteredData[1][i], weight: kilos * filteredData[2][i] }
    ))

    return result
  }
}

export default Controller

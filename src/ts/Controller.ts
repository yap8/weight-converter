class Controller {
  model: any
  view: any

  constructor(model: object, view: object) {
    this.model = model
    this.view = view

    this.view.on('handleInput', this.handleInput.bind(this))
    this.view.on('handleChange', this.handleChange.bind(this))
    this.view.on('handleLoaded', this.handleLoaded.bind(this))
  }
  handleLoaded(): void {
    const options = this.model.getShortTitles()
    this.view.renderOptions(options)
  }
  handleInput({ unit, weight }): void {
    const unitIndex: number = this.model.getUnitIndex(unit)
    const kilos: number = +weight !== 0 ? this.getKilos(unitIndex, weight) : 0
    
    let result: any[] = []

    if (this.validateInput(kilos)) {
      result = this.getResult(unitIndex, kilos)
      this.shortenValues(result)
    }

    this.view.renderResult(result)
  }
  handleChange({ unit, weight }): void {
    const unitIndex = this.model.getUnitIndex(unit)
    const message = this.model.getMessage(unitIndex)

    this.view.changeFormInputPlaceholder(message)
    this.handleInput({ unit, weight })
  }
  shortenValues(result: any[]): void {
    result.forEach(item => {
      item.weight = item.weight.toFixed(2)
    })
  }
  getKilos(unitIndex: number, weight: number): number {
    return weight / this.model.getFormulaPart(unitIndex)
  }
  validateInput(input: number): boolean {
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
  getResult(unitIndex: number, kilos: number): object[] {
    const allData: any[] = this.model.getAllData()

    const filteredData: any[] = allData.map(item => item.filter(innerItem => item.indexOf(innerItem) !== unitIndex))

    const result: any[] = filteredData[0].map((item, i) => (
      { title: filteredData[1][i], weight: kilos * filteredData[2][i] }
    ))

    return result
  }
}

export default Controller

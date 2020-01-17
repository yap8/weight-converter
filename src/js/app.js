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

class View {
  constructor() {
    this.form = document.querySelector('#form')
    this.formOption = document.querySelector('#option')
    this.formInput = document.querySelector('#input')
    this.items = document.querySelector('#items')

    this.form.addEventListener('submit', (e) => e.preventDefault()) 
    this.formInput.addEventListener('input', (e) => {
      controller.handleInput(this.formOption.value, this.formInput.value)
    })
    this.formOption.addEventListener('change', (e) => {
      controller.handleChange(this.formOption.value, this.formInput.value)
    })
  }
  renderResult(result) {
    this.items.innerHTML = ''

    result.forEach(item => {
      this.items.insertAdjacentHTML('beforeend', `
        <li class="items__item">
          <h4 class="items__item-title">${item.title}:</h4>
          <input type="text" class="items__item-result" value="${item.weight}" readonly>
        </li>
      `)
    })
  }
  changeFormInputPlaceholder(message) {
    this.formInput.placeholder = message
  }
  displayFormInputSuccess() {
    this.formInput.classList.remove('form__input--message--danger')
  }
  displayFormInputError() {
    this.formInput.classList.add('form__input--message--danger')
  }
}

class Controller {
  handleInput(unit, weight) {
    weight = +weight !== 0 ? this.getKilos(unit, weight) : 0

    let result = []

    if (this.validateInput(weight)) {
      result = this.getResult(unit, weight)
      this.shortenValues(result)
    }

    view.renderResult(result)
  }
  handleChange(unit, weight) {
    const message = model.getMessage(unit)

    view.changeFormInputPlaceholder(message)
    this.handleInput(unit, weight)
  }
  shortenValues(result) {
    result.forEach(item => {
      item.weight = item.weight.toFixed(2)
    })
  }
  getKilos(unit, weight) {

    return model.getToKiloMultiplier(unit) * weight
  }
  validateInput(input) {
    if (input === 0) {
      view.displayFormInputSuccess()
      return false
    } else if (isNaN(input)) {
      view.displayFormInputError()
      return false
    }
    view.displayFormInputSuccess()
    return true
  }
  getResult(unit, weight) {
    const resultMask = model.getResultMask(unit)

    return resultMask.map(item => (
      { title: item.title, weight: weight * item.multiplier }
    ))
  }
}

const model = new Model()
const view = new View()
const controller = new Controller()

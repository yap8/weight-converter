import EventEmitter from './EventEmitter'

class View extends EventEmitter {
  constructor() {
    super()

    this.form = document.querySelector('#form')
    this.formOption = document.querySelector('#option')
    this.formInput = document.querySelector('#input')
    this.items = document.querySelector('#items')

    this.form.addEventListener('submit', (e) => e.preventDefault()) 
    this.formInput.addEventListener('input', (e) => {
      const unit = this.formOption.value
      const weight = this.formInput.value
      this.emit('handleInput', { unit, weight })
    })
    this.formOption.addEventListener('change', (e) => {
      const unit = this.formOption.value
      const weight = this.formInput.value
      this.emit('handleChange', { unit, weight })
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

export default View

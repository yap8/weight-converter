import EventEmitter from './EventEmitter'

export default class View extends EventEmitter {
  form: HTMLElement
  formOption: HTMLInputElement
  formInput: HTMLInputElement
  items: HTMLElement

  constructor() {
    super()

    this.form = document.querySelector('#form')
    this.formOption = document.querySelector('#option')
    this.formInput = document.querySelector('#input')
    this.items = document.querySelector('#items')

    this.form.addEventListener('submit', (e) => e.preventDefault())
    this.formInput.addEventListener('input', (e) => {
      const unit: string = this.formOption.value
      const weight: string = this.formInput.value
      this.emit('handleInput', { unit, weight })
    })
    this.formOption.addEventListener('change', (e) => {
      const unit: string = this.formOption.value
      const weight: string = this.formInput.value
      this.emit('handleChange', { unit, weight })
    })
  }
  renderResult(result: any[]): void {
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
  changeFormInputPlaceholder(message: string): void {
    this.formInput.placeholder = message
  }
  displayFormInputSuccess(): void {
    this.formInput.classList.remove('form__input--message--danger')
  }
  displayFormInputError(): void {
    this.formInput.classList.add('form__input--message--danger')
  }
}

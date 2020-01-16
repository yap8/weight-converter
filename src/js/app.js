const form = document.querySelector('#form')
const formOption = document.querySelector('#option')
const formInput = document.querySelector('#input')
const items = document.querySelector('#items')

const getKilos = (option, input) => {
  if (option === 'kg') {
    return input
  } else if (option === 'lbs') {
    return input * 0.45
  } else if (option === 'st') {
    return input * 6.35
  }
}

const shortenValues = (result) => {
  result.forEach(item => {
    if (item.value % 1 !== 0) {
      item.value = item.value.toFixed(2)
    }
  })
}

const validateInput = (input) => {
  if (input === 0) {
    formInput.classList.remove('form__input--message--danger')
    items.classList.add('items--hidden')
  } else if (isNaN(input)) {
    formInput.classList.add('form__input--message--danger')
    items.classList.add('items--hidden')
  } else {
    formInput.classList.remove('form__input--message--danger')
    items.classList.remove('items--hidden')
  }
}

const getResult = (option, input) => {
  if (option === 'kg') {
    return [
      { title: 'Pounds', value: input * 2.2 }, 
      { title: 'Stones', value: input * 0.16 }
    ]
  } else if (option === 'lbs') {
    formInput.placeholder = 'Enter pounds...'
    
    return [
      { title: 'Kilograms', value: input },
      { title: 'Stones', value: input * 0.16 }
    ]
  } else if (option === 'st') {
    formInput.placeholder = 'Enter stones...'
    
    return [
      { title: 'Kilograms', value: input },
      { title: 'Pounds', value: input * 2.2 }
    ]
  }
}

const renderResult = (result) => {
  Array.from(items.children).forEach((item, i) => {
    const itemTitle = item.querySelector('.items__item-title')
    const itemResult = item.querySelector('.items__item-result')

    itemTitle.textContent = result[i].title + ':'
    itemResult.value = result[i].value
  })
}

const handleInput = () => {
  const option = formOption.value
  const input = +formInput.value !== 0 ? getKilos(option, +formInput.value) : 0
  const result = getResult(option, input)

  validateInput(input)
  shortenValues(result)
  renderResult(result)
}

form.addEventListener('submit', (e) => e.preventDefault()) 
formInput.addEventListener('input', handleInput)
formOption.addEventListener('change', handleInput)

const form = document.querySelector('#form')
const formOption = document.querySelector('#option')
const formInput = document.querySelector('#input')
const items = document.querySelector('#items')

const getKilos = (option, input) => {
  if (option === 'kg') {
    return input
  } else if (option === 'lbs') {
    return input * .45
  } else if (option === 'st') {
    return input * 6.35
  } else if (option === 'oz') {
    return input * .0283495
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
    return false
  } else if (isNaN(input)) {
    formInput.classList.add('form__input--message--danger')
    return false
  }
  formInput.classList.remove('form__input--message--danger')
  return true
}

const getResult = (option, input) => {
  if (option === 'kg') {
    return [
      { title: 'Pounds', value: input * 2.20462 }, 
      { title: 'Stones', value: input * .157473 },
      { title: 'Ounces', value: input * 35.274 },
    ]
  } else if (option === 'lbs') {
    return [
      { title: 'Kilograms', value: input },
      { title: 'Stones', value: input * .157473 },
      { title: 'Ounces', value: input * 35.274 },
    ]
  } else if (option === 'st') {
    return [
      { title: 'Kilograms', value: input },
      { title: 'Pounds', value: input * 2.20462 },
      { title: 'Ounces', value: input * 35.274 },
    ]
  } else if (option === 'oz') {
    return [
      { title: 'Kilograms', value: input },
      { title: 'Pounds', value: input * 2.20462 },
      { title: 'Stones', value: input * .157473 },
    ]
  }
}

const renderResult = (result) => {
  items.innerHTML = ''

  result.forEach(item => {
    items.insertAdjacentHTML('beforeend', `
      <li class="items__item">
        <h4 class="items__item-title">${item.title}:</h4>
        <input type="text" class="items__item-result" value="${item.value}" readonly>
      </li>
    `)
  })
}

const handleInput = () => {
  const option = formOption.value
  const input = +formInput.value !== 0 ? getKilos(option, +formInput.value) : 0
  
  if (validateInput(input)) {
    const result = getResult(option, input)
    shortenValues(result)
    renderResult(result)
  } else {
    renderResult([])
  }
}

const handleChange = (e) => {
  if (e.target.value === 'kg') {
    formInput.placeholder = 'Enter kilograms...'
  } else if (e.target.value === 'lbs') {
    formInput.placeholder = 'Enter pounds...'
  } else if (e.target.value === 'st') {
    formInput.placeholder = 'Enter stones...'
  } else if (e.target.value === 'oz') {
    formInput.placeholder = 'Enter ounces...'
  }

  handleInput()
}

form.addEventListener('submit', (e) => e.preventDefault()) 
formInput.addEventListener('input', handleInput)
formOption.addEventListener('change', handleChange)

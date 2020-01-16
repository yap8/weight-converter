const form = document.querySelector('#form')
const formOption = document.querySelector('#option')
const formInput = document.querySelector('#input')

const items = document.querySelector('#items')

const handleInput = () => {
  const option = formOption.value
  let input = +formInput.value || 0
  const result = []

  if (input !== 0) {
    items.classList.remove('items--hidden')
  } else {
    items.classList.add('items--hidden')
  }

  if (option === 'kg') {
    result.push(
      {
        title: 'Pounds',
        value: input * 2.2
      },
      {
        title: 'Stones',
        value: input * 0.16
      },
    )
  } else if (option === 'lbs') {
    formInput.placeholder = 'Enter pounds...'
    input *= 0.45
    
    result.push(
      {
        title: 'Kilograms',
        value: input
      },
      {
        title: 'Stones',
        value: input * 0.16
      },
    )
  } else if (option === 'st') {
    formInput.placeholder = 'Enter stones...'
    input *= 6.35
    
    result.push(
      {
        title: 'Kilograms',
        value: input
      },
      {
        title: 'Pounds',
        value: input * 2.2
      },
    )
  }

  result.forEach(item => {
    if (item.value % 1 !== 0) {
      item.value = item.value.toFixed(2)
    }
  })

  outputResult(result)
}

const outputResult = (result) => {
  Array.from(items.children).forEach((item, i) => {
    const itemTitle = item.querySelector('.items__item-title')
    const itemResult = item.querySelector('.items__item-result')

    itemTitle.textContent = result[i].title + ':'
    itemResult.value = result[i].value
  })
}

form.addEventListener('submit', (e) => e.preventDefault()) 
formInput.addEventListener('input', handleInput)
formOption.addEventListener('change', handleInput)

handleInput()

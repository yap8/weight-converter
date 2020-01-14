const form = document.querySelector('#form')
const formOption = document.querySelector('#option')
const formInput = document.querySelector('#input')

const cards = document.querySelectorAll('#cards .card')

const handleInput = () => {
  const option = formOption.value
  const input = formInput.value || 0

  let result = []

  if (option === 'lbs') {
    formInput.placeholder = 'Enter pounds...'
    result = [
      {
        title: 'Kilograms',
        value: input * 0.453592551437
      },
      {
        title: 'Stone',
        value: input * 0.0714286
      }
    ]
  } else if (option === 'kg') {
    formInput.placeholder = 'Enter kilograms...'
    result = [
      {
        title: 'Pounds',
        value: input * 2.20462
      },
      {
        title: 'Stone',
        value: input * 0.157473
      }
    ]
  } else if (option === 'st') {
    formInput.placeholder = 'Enter stone...'
    result = [
      {
        title: 'Pounds',
        value: input * 14
      },
      {
        title: 'Kilograms',
        value: input * 6.35029
      }
    ]
  }
  
  outputResult(result)
}

const outputResult = (result) => {
  Array.from(cards).forEach((card, i) => {
    const cardTitle = card.querySelector('.card-title')
    const cardText = card.querySelector('.card-text')
    
    cardTitle.textContent = result[i].title + ':'
    cardText.textContent = result[i].value
  })
}

form.addEventListener('submit', (e) => e.preventDefault()) 
formInput.addEventListener('input', handleInput)
formOption.addEventListener('change', handleInput)

handleInput()

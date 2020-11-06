
const form = document.querySelector("form")
const container = document.querySelector(".container")
const resultpositive = document.getElementById("result-positive")
const resultnegative = document.getElementById("result-negative")
resultpositive.style.display = "none"
resultnegative.style.display = "none"

const errorMsg = document.querySelector('.msg')
errorMsg.style.display = 'none'

const spinner = document.querySelector('.loader-container')
spinner.style.display = 'none'


form.addEventListener('submit', async (e) => {
    
    spinner.style.display = ''
    e.preventDefault()
    const formdata = new FormData(form).entries()
    let res = await fetch('https://heartmlapi.herokuapp.com/weight/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formdata))
    })
    if (res.status == 500) {
        spinner.style.display = 'none'
        errorMsg.style.display = ''
        setTimeout(() => {
            errorMsg.style.display = 'none'
        }, 5000);
    }
    else if(res.status == 400) {
        spinner.style.display = 'none'
        errorMsg.style.display = ''
        setTimeout(() => {
            errorMsg.style.display = 'none'
        }, 5000);
    }

    spinner.style.display - ''

    let json = await res.json()
    console.log(json)
    container.style.display = 'none'

    if (json == 1) {
        spinner.style.display = 'none'
        resultpositive.style.display = ''
    }
    else if (json == 0) {
        spinner.style.display = 'none'
        resultnegative.style.display = ''
    }

})
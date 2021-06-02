import { doesEndswithOperator, validateInput } from "./improvements.js"

validateInput()
//DOM
const buttons = document.querySelectorAll('.calc-btn')
const deleteBtn = document.querySelector('.calc-del')
const reset = document.querySelector('.calc-reset')
const result = document.querySelector('.calc-result')
const screenDisplay = document.querySelector('#screen')
const themeToggle = document.querySelectorAll('.toggle-btn > div')
const circle = document.querySelector('.circle')

//calculation
screenDisplay.value = ''
for (const button of buttons) {
    button.addEventListener('click', (e) => {
        let currVal = screenDisplay.value
        const inputVal = e.target.textContent
        switch (inputVal) {
            case "DEL":
                currVal = currVal.slice(0, -1); break;
            case "RESET": currVal = ''; break;
            case "=":
                if (currVal && !doesEndswithOperator(currVal)) {
                    currVal = currVal.replace('x', '*')
                    console.log(currVal)
                    currVal = eval(currVal);
                }
                break;
            default:
                currVal += inputVal; break;
        }
        screenDisplay.value = currVal
        screenDisplay.scrollLeft = screenDisplay.scrollWidth;
    })
}


for (const themeBtn of themeToggle) {
    let theme = localStorage.getItem('theme') || 'default'
    if (theme != 'default') {
        document.documentElement.setAttribute('data-theme', theme);
        (theme == 'light') ? circle.style.left = '35%' : circle.style.left = '70%';
    } else {
        document.documentElement.removeAttribute('data-theme')
        circle.style.left = '4.5px';
    }
    console.log(theme)
    themeBtn.addEventListener("click", (e) => {
        if (e.target.classList.value == 'theme-2') {
            theme = 'light'
            circle.style.left = '35%';
        } else if (e.target.classList.value == 'theme-3') {
            theme = 'dark'
            circle.style.left = '70%';
        } else {
            theme = 'default'
            circle.style.left = '4.5px';
        }

        if (theme != 'default') {
            document.documentElement.setAttribute('data-theme', theme)
        } else (
            document.documentElement.removeAttribute('data-theme')
        )
        localStorage.setItem('theme', theme)
        console.log(theme)
    })

    console.log(theme)
}
import { doesEndswithOperator, doesStartswithOperator, validateInput } from "./helper.js"

//DOM
const buttons = document.querySelectorAll('.calc-btn')
const screenDisplay = document.querySelector('#screen')
const themeToggle = document.querySelectorAll('.toggle-btn > div')
const circle = document.querySelector('.circle')

//calculation
screenDisplay.value = ''
const handleClick = (e) => {
    let currVal = screenDisplay.value
    let scrollDirection = 1

    let inputVal = ""
    if (e.type === "keyup") {
        switch (e.key) {
            case "Delete":
                inputVal = `RESET`; break;
            case "Backspace":
                inputVal = `DEL`; break;
            case "Enter":
                inputVal = `=`; break;
            case "*":
                inputVal = `x`; break;
            case "+":
            case "-":
            case "/":
            case "=":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
            case ".":
                inputVal = `${e.key}`; break;
            default:
                inputVal = ""
        }
    } else {
        inputVal = e.target.textContent
    }
    switch (inputVal) {
        case "DEL":
            currVal = currVal.slice(0, -1); break;
        case "RESET": currVal = ''; break;
        case "=":
            if (currVal && !doesStartswithOperator(currVal) && !doesEndswithOperator(currVal)) {
                currVal = currVal.replace('x', '*')
                console.log(currVal)
                currVal = eval(currVal);
                scrollDirection = -1
            }
            break;
        default:
            currVal = validateInput(currVal, inputVal); break;
    }
    screenDisplay.value = currVal
    screenDisplay.scrollLeft = scrollDirection * screenDisplay.scrollWidth;
}

for (const button of buttons) {
    button.addEventListener('click', handleClick)
}

// keyboard eventListner
window.addEventListener("keyup", handleClick)


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
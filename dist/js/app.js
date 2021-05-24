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
for(const button of buttons){
    button.addEventListener('click', (e) =>{
        switch(e.target.textContent){
            case "0": screenDisplay.value += '0'; break ;
            case "1": screenDisplay.value += '1'; break ;
            case "2": screenDisplay.value += '2'; break ;
            case "3": screenDisplay.value += '3'; break ;
            case "4": screenDisplay.value += '4'; break ;
            case "5": screenDisplay.value += '5'; break ;
            case "6": screenDisplay.value += '6'; break ;
            case "7": screenDisplay.value += '7'; break ;
            case "8": screenDisplay.value += '8'; break ;
            case "9": screenDisplay.value += '9'; break ;
            case ".": screenDisplay.value += '.'; break ;
            case "+": screenDisplay.value += '+'; break ;
            case "-": screenDisplay.value += '-'; break ;
            case "x": screenDisplay.value += 'x'; break ;
            case "/": screenDisplay.value += '/'; break ;
            case "DEL": 
                screenDisplay.value = screenDisplay.value.slice(0, -1) ; break ;
            case "RESET": screenDisplay.value = ''; break ;
            case "=": 
            if(screenDisplay.value){
                screenDisplay.value = screenDisplay.value.replace('x','*')
                console.log(screenDisplay.value)
                screenDisplay.value = eval(screenDisplay.value);
                break ;
            }

        }
    })
}


for (const themeBtn of themeToggle){
    let theme = localStorage.getItem('theme') || 'default'
    if(theme != 'default'){
        document.documentElement.setAttribute('data-theme',theme);
        (theme == 'light')? circle.style.left = '35%': circle.style.left = '70%';
    }else{
        document.documentElement.removeAttribute('data-theme')
        circle.style.left = '4.5px';
    }
    console.log(theme)
    themeBtn.addEventListener("click",(e) =>{
        if(e.target.classList.value == 'theme-2'){
            theme = 'light'
            circle.style.left = '35%';
        } else if(e.target.classList.value == 'theme-3'){
            theme = 'dark'
            circle.style.left = '70%';
        } else {
            theme = 'default'
            circle.style.left = '4.5px';
        }

        if(theme != 'default'){
            document.documentElement.setAttribute('data-theme',theme)
        }else(
            document.documentElement.removeAttribute('data-theme')
        )
        localStorage.setItem('theme', theme)
        console.log(theme)
    })
    
    console.log(theme)
}
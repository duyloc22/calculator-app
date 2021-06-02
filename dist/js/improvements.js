const operators = ['+', '-', 'x', '/']
const doesEndswithOperator = (val) => {
    return operators.includes(val[val.length - 1])
}

const validateInput = (current = "", input = "") => {
    const lastChar = current[current.length - 1]
    if (operators.includes(lastChar) && operators.includes(input)) {
        if (lastChar === input) {
            console.log("same operator")
            return current
        }
        if (lastChar === '[x/]')
            console.log("lastchar is [x/]")
        if (input === '[x/]')
            console.log("input is [x/]")
    }

    return `${current}${input}`
    console.log("hey there");
}

export { doesEndswithOperator, validateInput }
const operators = [['+', '-'], ['x', '/']]

const doesStartswithOperator = (val) => {
    return operators[1].includes(val[0])
}

const doesEndswithOperator = (val) => {
    return operators[0].includes(val[val.length - 1]) || operators[1].includes(val[val.length - 1])
}

const splitNumbers = (text) => {
    if (text instanceof String) {
        return (text.split(/[\x\/\+\-]/).filter(x => x !== ""))
    }
    return text
}

const validateInput = (current = "", input = "") => {
    const lastChar = current[current.length - 1]
    for (let arr of operators) {
        if (arr.includes(lastChar) && arr.includes(input)) {
            if (lastChar === input) {
                // console.log("same operator")
                return current
            }
            if (arr.includes(lastChar) && arr.includes(input)) {
                // console.log(`lastchar : ${lastChar}, input: ${input}`)
                return `${current.slice(0, -1)}${input}`
            }
        }
    }
    if (operators[0].includes(lastChar) && operators[1].includes(input)) {
        return current
    }

    // console.log(`${lastChar}, ${input}`);
    return `${current}${input}`
}

export { doesStartswithOperator, doesEndswithOperator, validateInput }
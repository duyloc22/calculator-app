const operators = ['+', '-', 'x', '/']
const doesEndswithOperator = (val) => {
    return operators.includes(val[val.length - 1])
}

const validateInput = (current = "", input = "") => {
    if (!operators.includes(current[current.length - 1]) || !operators.includes(input))
        return `${current}${input}`

    console.log("hey there");
}

export { doesEndswithOperator, validateInput }
const operators = ['+', '-', 'x', '/']
const doesEndswithOperator = (val) => {
    return operators.includes(val[val.length - 1])
}

const validateInput = (current = "", input = "") => {
    if (doesEndswithOperator(current) && operators.includes(input)){
        // todo
    }
    
    return `${current}${input}`
    console.log("hey there");
}

export { doesEndswithOperator, validateInput }
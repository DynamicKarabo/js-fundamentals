function validParentheses(str) {
    let stack = [];
    for (let char of str) {
        if (char === "(") stack.push(char);
        else if (char === ")") {
            if (stack.length === 0) return console.log(false);
            stack.pop();
        }
    }
    console.log(stack.length === 0);
}

// Example
validParentheses("(())");

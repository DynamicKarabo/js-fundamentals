function uppercaseExceptFirst(str) {
    let firstChar = str[0];
    let rest = str.slice(1).toUpperCase();
    console.log(firstChar + rest);
}

// Example
uppercaseExceptFirst("javaScript");

function concatStrings(separator, ...strings) {
  let result = "";
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i < strings.length - 1) {
      result += separator;
    }
  }
  console.log(result);
}

// Example
concatStrings("-", "apple", "banana", "cherry"); // "apple-banana-cherry"
concatStrings(" ", "Hello", "World");          // "Hello World"

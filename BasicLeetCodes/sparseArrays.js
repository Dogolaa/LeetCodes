function matchingStrings(strings, queries) {
  let result = new Array(queries.length).fill(0);
  for (let i = 0; i < queries.length; i++) {
    for (let j = 0; j < strings.length; j++) {
      if (queries[i] === strings[j]) {
        result[i] = Number(result[i]) + 1;
      }
    }
  }
  return result;
}

matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']);

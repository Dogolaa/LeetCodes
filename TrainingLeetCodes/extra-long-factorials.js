function extraLongFactorials(n) {
  if (n === 1 || n === 0) {
    return BigInt(1);
  } else {
    return BigInt(n) * extraLongFactorials(n - 1);
  }
}

console.log(extraLongFactorials(30).toString());

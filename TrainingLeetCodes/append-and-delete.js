function appendAndDelete(s, t, k) {
  let commonLength = 0;

  for (let i = 0; i < Math.min(s.length, t.length); i++) {
    if (s[i] === t[i]) {
      commonLength++;
    } else {
      break;
    }
  }

  let operationsNeeded = s.length - commonLength + (t.length - commonLength);

  if (
    operationsNeeded === k ||
    (operationsNeeded < k && (k - operationsNeeded) % 2 === 0) ||
    k >= s.length + t.length
  ) {
    return "Yes";
  }

  return "No";
}

appendAndDelete("hackerhappy", "hackerrank", 9);

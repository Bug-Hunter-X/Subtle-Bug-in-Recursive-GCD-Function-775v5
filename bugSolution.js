function foo(a, b) {
  if (b === 0) {
    return a;
  } else {
    return foo(b, a % b);
  }
}

function areMultiples(a, b) {
  return foo(a, b) === 1; 
}

console.log(areMultiples(12, 18)); // Output: false
console.log(areMultiples(13,18)); //Output: true
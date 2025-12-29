const fib = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const result = [0, 1];

  for (let i = 3; i <= n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
};

const fibsRec = (n) => {
  const result = [];
  
  function helper(i) {
    console.log("This was printed recursively");
    if (i === n) return;

    if (i === 0) result.push(0);
    else if (i === 1) result.push(1);
    else result.push(result[i - 1] + result[i - 2]);

    helper(i + 1);
  }

  helper(0);

  return result;
};

console.log(fibsRec(8))
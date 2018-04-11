const getSumOfSelfNumbers1 = (maxNum) => {
  const getTodal = (num) => {
    let total = num;
    let strNum = num.toString();

    for(let n of strNum) {
      total += parseInt(n, 10);
    }
    return total;
  };
  const range = Array.from(new Array(maxNum), (v, i) => i + 1);
  const notSelfNumberSet = new Set();
  for (const i of range) {
    notSelfNumberSet.add(getTodal(i));
  }
  const sum = (tally, curr) => notSelfNumberSet.has(curr) ? tally : tally + curr;
  const sumOfSelfNumbers = range.reduce(sum, 0);
  return sumOfSelfNumbers
}

// getSumOfSelfNumbers1 => getSumOfSelfNumbers2로 refactoring
const getSumOfSelfNumbers2 = (limitNum) => {
  const getTodal = (num) => {
    const strNum = num.toString().split('');
    const getSum = (tally, curr) => tally + parseInt(curr, 10);
    const total = strNum.reduce(getSum, num);
    return total;
  };
  const range = Array.from(new Array(limitNum), (v, i) => i + 1);
  const notSelfNumberSet = new Set(range.map(i => getTodal(i)));
  const getSum = (tally, curr) => notSelfNumberSet.has(curr) ? tally : tally + curr;
  const sumOfSelfNumbers = range.reduce(getSum, 0);
  return sumOfSelfNumbers;
}
getSumOfSelfNumbers2(5000)
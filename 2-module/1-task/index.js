function sumSalary(salaries) {
  let sum = 0;
  const numArr = Object.values(salaries).filter((el) => typeof el == "number" && isNaN(el) == false);

  if (numArr.length) {
    for (let n of numArr) {
      if (n !== Infinity && n !== -Infinity) {
        sum += n;
      }
    }
    return sum;
  } else {
    return 0;
  }
}

function getMinMax(str) {
  let nums = [];

  nums = str.split(" ").filter((el) => isNaN(el) === false);

  let min = Math.min(...nums);
  let max = Math.max(...nums);

  return { min, max };
}

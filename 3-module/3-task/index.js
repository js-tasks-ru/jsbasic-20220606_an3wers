function camelize(str) {
  const arr = str.split("-").map((el, index) => {
    if (index !== 0) {
      if (el.length) {
        el = el.slice(0, 1).toUpperCase() + el.slice(1, el.length);
      }
    }
    return el;
  });
  return arr.join("");
}

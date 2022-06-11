function checkSpam(str) {
  const x1 = "1xBet";
  const x2 = "XXX";
  if (
    str.toLowerCase().includes(x1.toLowerCase()) ||
    str.toLowerCase().includes(x2.toLowerCase())
  ) {
    return true;
  }
  return false;
}

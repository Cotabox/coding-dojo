module.exports = (bin) => {
  let lengthActual = bin.length;
  let decimal = 0;
  for (const char of bin) {
    lengthActual--;
    if (char === '1') decimal += 2 ** lengthActual;
  }
  return decimal;
};

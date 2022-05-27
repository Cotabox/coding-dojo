const binToDec = require('../binToDec');

describe('binToDec', () => {
  it('Deve retornar o valor decimal correto', () => {
    let binary = "01100110";
    let dec = 102;

    expect(binToDec(binary)).toBe(102);

    binary = "00000001";
    dec = 1;

    expect(binToDec(binary)).toBe(1);
  });
});

const validateInputSize = require('../validateInputSize');

describe('validateInputSize', () => {
  it('Deve retornar false se input contém mais de 8 dígitos', () => {
    const binary = "0011001001";

    expect(validateInputSize(binary)).toBe(false);
  });

  it('Deve retornar true se input contém 8 dígitos ou menos', () => {
    const binary = "00110010";

    expect(validateInputSize(binary)).toBe(true);
  });
});

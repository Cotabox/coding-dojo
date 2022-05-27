const validateInputType = require('../validateInputType');

describe('validateInputType', () => {
  it('Deve retornar false se input contém algum dígito que não seja 0 ou 1', () => {
    const binary = "00110501";

    expect(validateInputType(binary)).toBe(false);
  });

  it('Deve retornar true se todos os caracteres do input são 0 ou 1', () => {
    const binary = "00110010";

    expect(validateInputType(binary)).toBe(true);
  });
});

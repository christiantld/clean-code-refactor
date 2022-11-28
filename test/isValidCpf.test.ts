import { isValidCpf } from '../src/isValidCpf';

const validCpfs = [
  "452.420.060-64",
  "652.491.010-97",
  "891.950.130-08",
  "930.179.420-90",
  "629.470.770-67",
  "079.348.670-00",
  "965.126.870-00",
  "987.654.321-00",
]

const invalidSameDigitCpfs = [
  "111.111.111-11",
  "222.222.222-22",
  "333.333.333-33",
  "444.444.444-44",
  "555.555.555-55",
  "666.666.666-66",
  "777.777.777-77",
  "888.888.888-88",
  "999.999.999-99",
  "000.000.000-00"
]

const invalidCpfs = [
  "123.456.789-00",
  "111.222.333-44",
  "555.666.777-88",
  "000.111.222-33",
  "17734532493",
  "177.345.324-93",
  "9027839012748901",
  "78923",
  "38290030033",
  "382.900.300-33",
]

describe('isValidCpf', () => {
  it.each(validCpfs)('should return true for valid CPF %s', (cpf) => {
    expect(isValidCpf(cpf)).toBe(true);
  })

  it.each(invalidSameDigitCpfs)('should return false for invalid CPF %s', (cpf) => {
    expect(isValidCpf(cpf)).toBe(false);
  })

  it.each(invalidCpfs)('should return false for invalid CPF %s', (cpf) => {
    expect(isValidCpf(cpf)).toBe(false);
  })
})
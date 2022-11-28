// @ts-nocheck
export function isValidCpf(rawCpf: string): boolean {
  if (!rawCpf) return false;
  const cleanCpf = parseCpfStringToOnlyDigits(rawCpf);
  if (isInvalidLength(cleanCpf)) return false;
  if (hasAllSameDigits(cleanCpf)) return false
  const firstDigit = calculateCpfVerifyDigit(cleanCpf, 10);
  const secondDigit = calculateCpfVerifyDigit(cleanCpf, 11);
  const verifyDigits = getVerifyDigits(cleanCpf);
  const verifyDigitsResult = `${firstDigit}${secondDigit}`;
  return verifyDigits === verifyDigitsResult;
}

function calculateCpfVerifyDigit(cpf: string, factor: 10 | 11) {
  let sum = 0;
  for (const digit of cpf) {
    if (factor > 1) {
      sum += digit * factor;
      factor--;
    };
  }
  const rest = sum % 11;
  const digit = rest < 2 ? 0 : 11 - rest;
  return digit
}

function getVerifyDigits(cpf: string): string {
  return cpf.slice(9);
}

function isInvalidLength(cpf: number): boolean {
  return cpf.length !== 11;
}

function hasAllSameDigits(cpf: number): boolean {
  const [firstDigit] = cpf;
  return [...cpf].every(digit => digit === firstDigit);
}

function parseCpfStringToOnlyDigits(cpf: string): string {
  return cpf.replace(/\D/g, '');
}
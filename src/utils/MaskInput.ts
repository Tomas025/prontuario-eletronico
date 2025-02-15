export const noMask = (value: string) => value.replace(/\D/g, '');

export function normalizeCPF(value: string) {
  return noMask(value)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1-$2');
}

export function normalizeCEP(value: string) {
  return noMask(value).replace(/(\d{5})(\d)/, '$1-$2');
}

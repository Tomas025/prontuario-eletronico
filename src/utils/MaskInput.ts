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

export function normalizeTelephone(value: string) {
  return noMask(value)
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(
      noMask(value).length >= 11 ? /(\d{5})(\d)/ : /(\d{4})(\d)/,
      '$1-$2'
    );
}

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

export const formatPressure = (value: string) => {
  return value.replace(/\s/g, "").replace(/(\d{2,3})[^\d]+(\d{2,3})/, "$1/$2");
};

export const formatGlicose = (value: string) => {
  return value.replace(/\s/g, "").replace(/(\d+)$/, "$1mg/dl");
};

export const formatTemperature = (value: string) => {
  return value.replace(/\s/g, "").replace(/(\d{1,2}(\.\d)?)/, "$1°");
};

export const formatWeight = (value: string) => {
  return value.replace(/\s/g, "").replace(/(\d{1,3})$/, "$1kg");
};

export const formatHeartRate = (value: string) => {
  return value.replace(/\s/g, "").replace(/(\d{1,3})$/, "$1 bpm");
};

export const formatRespiratoryRate = (value: string) => {
  return value.replace(/\s/g, "").replace(/(\d{1,3})$/, "$1 ipm");
};

export const formatSaturation = (value: string) => {
  return value.replace(/\s/g, "").replace(/(\d{1,3})$/, "$1 SpO2");
};

export const formatHeight = (value: string) => {
  return value.replace(/\s/g, "").replace(/(\d{1}),?(\d{2})/, "$1,$2m");
};

export function normalizeTelephone(value: string) {
  return noMask(value)
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(
      noMask(value).length >= 11 ? /(\d{5})(\d)/ : /(\d{4})(\d)/,
      '$1-$2'
    );
}

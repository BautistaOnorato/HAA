export const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export const formatDate = (date: Date) => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export const getCountryTime = (utc: number): Date => {
  const date = new Date();
  const utcTime = date.getTime() + date.getTimezoneOffset() * 60000;

  return new Date(utcTime + 3600000 * utc);
};

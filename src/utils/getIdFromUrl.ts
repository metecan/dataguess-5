export const getIdFromUrl = (): string => {
  const url = window.location.href;
  const urlParts = url.split('/');
  return urlParts[urlParts.length - 1];
};

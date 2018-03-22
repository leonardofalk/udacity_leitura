const truncate = (str, length) => (str.length > length ? `${str.substring(0, length)}...` : str);
const capitalize = str => str.replace(/(^|\s)\S/g, l => l.toUpperCase());

export {
  truncate,
  capitalize,
};

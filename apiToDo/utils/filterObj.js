const filterObj = (obj, ...allowedfields) => {
  const newObj = {
    todo: '',
    user: ''
  };

  Object.keys(obj).forEach((elem) => {
    if (allowedfields.includes(elem)) {
      newObj[elem] = obj[elem];
    }
  });

  return newObj;
};

module.exports = { filterObj };

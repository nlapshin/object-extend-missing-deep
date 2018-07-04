const _ = require("lodash");

module.exports = function oemd(oldObj, newObj) {
  let oldKeys = Object.keys(oldObj);
  let newKeys = Object.keys(newObj);

  let notFoundKeys = _.difference(newKeys, oldKeys);
  let commonKeys = _.intersection(newKeys, oldKeys);

  notFoundKeys.forEach(key => {
    oldObj[key] = _.cloneDeep(newObj[key]);
  });

  commonKeys.forEach(key => {
    if (_.isObject(oldObj[key])) {
      oldObj[key] = oemd(oldObj[key], newObj[key]);
    };
  })

  return oldObj;
};

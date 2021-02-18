export default function orderByProps(obj, sortArr = []) {
  const curObj = obj;
  const sortObjArr = [];
  const sortObj = {};
  const restObj = curObj;

  for (const el of sortArr) {
    if (curObj.hasOwnProperty.call(curObj, el)) {
      sortObjArr.push({
        key: el,
        value: curObj[el],
      });
      sortObj[el] = curObj[el];
    }
  }

  for (const prop in sortObj) {
    if (curObj.hasOwnProperty.call(curObj, prop)) {
      delete restObj[prop];
    }
  }

  const sortRestArr = Object.keys(restObj).sort((a, b) => (a > b ? 1 : -1));

  for (const key of sortRestArr) {
    sortObjArr.push({
      key,
      value: restObj[key],
    });
  }

  return sortObjArr;
}

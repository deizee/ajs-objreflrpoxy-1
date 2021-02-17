export default function orderByProps(obj, sortArr = []) {
  const curObj = obj;
  const sortObjArr = [];
  const sortObj = {};
  const restObj = curObj;

  sortArr.forEach((el) => {
    if (curObj.hasOwnProperty.call(curObj, el)) {
      sortObjArr.push({ [el]: curObj[el] });
      sortObj[el] = curObj[el];
    }
  });

  for (const prop in sortObj) {
    if (curObj.hasOwnProperty.call(curObj, prop)) {
      delete restObj[prop];
    }
  }

  const sortRestArr = Object.keys(restObj).sort((a, b) => restObj[b] - restObj[a]);

  sortRestArr.forEach((key) => {
    sortObjArr.push({ [key]: restObj[key] });
  });

  return sortObjArr;
}

console.log(orderByProps(
  {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  },
  ['name', 'level'],
));

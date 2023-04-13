#!/usr/bin/node
exports.esrever = function (list) {
  const n = list.length;
  const reversedList = new Array(n);

  list.forEach((item, i) => {
    reversedList[n - i - 1] = item;
  });
  return reversedList;
};

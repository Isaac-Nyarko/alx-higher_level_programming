#!/usr/bin/node
const findSecondBiggest = (...args) => {
  const nums = args.map(arg => parseInt(arg, 10)).filter(num => !isNaN(num));
  
  if (nums.length <= 1) {
    console.log(0);
    return;
  }

  let biggest = nums[0];
  let secondBiggest = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    if (num > biggest) {
      secondBiggest = biggest;
      biggest = num;
    } else if (num > secondBiggest) {
      secondBiggest = num;
    }
  }

  console.log(secondBiggest);
};

findSecondBiggest(); // 0
findSecondBiggest('1'); // 0
findSecondBiggest('2', '5', '1', '7', '3'); // 5
findSecondBiggest('10', '20', '30', '40', '50'); // 40

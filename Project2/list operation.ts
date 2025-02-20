let list: number[] = [30, 1, 2, 1, 0];
list.push(40);
console.log(list); // [30, 1, 2, 1, 0, 40]
list = [30, 1, 2, 1, 0];
list.splice(list.indexOf(1), 1);
console.log(list); // [30, 2, 1, 0]
list = [30, 1, 2, 1, 0];
list.splice(1, 1);
console.log(list); // [30, 2, 1, 0]
list = [30, 1, 2, 1, 0];
list.pop();
console.log(list); // [30, 1, 2, 1]
list = [30, 1, 2, 1, 0];
list.sort((a, b) => a - b);
console.log(list); // [0, 1, 1, 2, 30]
list = [30, 1, 2, 1, 0];
list.reverse();
console.log(list); // [0, 1, 2, 1, 30]

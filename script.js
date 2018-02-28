let list = [4, 5, 6];

// for (i = 0; i < list.length; i++) {
//   list[i] = list[i] + 10;
// }

function modify(x, y) {
  list[y] += 10;
}

list.forEach(modify);

console.log(list);

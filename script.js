var toDo = [];
var task = prompt(`What do you want to do?`);

while (task !== `quit`) {
  if (task === `list`) {
    console.log(toDo);
  } else if (task === `new`) {
    task = prompt(`What is the new task?`);
    toDo.push(task);
  }

  task = prompt(`What else do you want to do?`);
}

console.log(toDo);

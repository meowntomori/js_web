let numbers = [5, 3, 1, 4, 2];
let element = 4;

for (let i = 0; i < numbers.length - 1; i++) {
  let minIndex = i;
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[j] < numbers[minIndex]) {
      minIndex = j;
    }
  }
  if (minIndex !== i) {
    let temp = numbers[i];
    numbers[i] = numbers[minIndex];
    numbers[minIndex] = temp;
  }
}

let index = numbers.indexOf(element);
if (index === -1) {
  console.log("элемент не найден");
} else {
  console.log("Индекс элемента " + element + " равен " + index);
}

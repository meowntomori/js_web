let numbers = [1, 2, 1, 4, 1];
let number = 1;
let lastIndex = -1;

for (let i = numbers.length - 1; i >= 0; i--) {
  if (numbers[i] === number) {
    lastIndex = i;
    break;
  }
}

if (lastIndex !== -1) {
  alert(`Последний индекс числа ${number} в массиве: ${lastIndex}`);
} else {
  alert(`Число ${number} отсутствует в массиве`);
}

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введите число');
  if (input === null) {
    break;
  }
  if (isNaN(input)) {
    alert('Вы вввели не число, введите пожалуйста число');
    continue;
  }
  numbers.push(Number(input));
}

if (numbers.length > 0) {
  for (let number of numbers) {
    total += number;
  }
  console.log(`Общая сумма чисел равна ${total}`);
}

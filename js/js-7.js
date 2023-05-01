const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  const MIN_LENGTH = 4;
  const MAX_LENGTH = 16;
  const loginLength = login.length;
  if (loginLength >= MIN_LENGTH && loginLength <= MAX_LENGTH) {
    return true;
  } else {
    return false;
  }
};

const isLoginUnique = function (allLogins, login) {
  if (allLogins.includes(login)) {
    return false;
  } else {
    return true;
  }
};

const addLogin = function (allLogins, login) {
  if (isLoginValid(login) === false) {
    return 'Помилка! Логін повинен бути від 4 до 16 символів';
  } else if (isLoginUnique(allLogins, login) === false) {
    return 'Такий логін уже використовується!';
  } else {
    allLogins.push(login);
  }
  return 'Логін успішно доданий!';
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логін успішно доданий!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
console.log(addLogin(logins, 'Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(logins); // ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123", "Ajax"]

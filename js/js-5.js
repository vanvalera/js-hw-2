const checkForSpam = function (message) {
  const text = message.toLowerCase();
  if (text.includes('spam') || text.includes('sale')) {
    return true;
  } else {
    return false;
  }
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

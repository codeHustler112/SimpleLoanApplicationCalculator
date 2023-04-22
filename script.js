const form = document.getElementById("calculator");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const num1 = parseFloat(form.num1.value);
  const num2 = parseFloat(form.num2.value);
  const operator = form.operator.value;
  let result;
  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter valid numbers.";
  } else {
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          result = "Cannot divide by zero.";
        } else {
          result = num1 / num2;
        }
        break;
      default:
        result = "Invalid operator.";
    }
  }
  form.result.value = result;
});

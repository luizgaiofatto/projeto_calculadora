const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    let value = button.textContent;

    if (value === "AC") {
      currentInput = "";
      display.value = "";
      return;
    }

    if (value === "=") {
      try {
        const expressao = currentInput.replace(/x/g, "*");

        currentInput = Function("return " + expressao)().toString();

        display.value = currentInput;
      } catch (error) {
        display.value = "Erro";
        currentInput = "";
      }
      return;
    }

    if (value === "x") {
      value = "*";
    }

    if (value === "%") {
      if (currentInput !== "") {
        currentInput = (parseFloat(currentInput) / 100).toString();
        display.value = currentInput;
      }
      return;
    }

    const operadores = ["+", "-", "*", "/"];
    const ultimoChar = currentInput.slice(-1);

    if (operadores.includes(value) && operadores.includes(ultimoChar)) {
      return;
    }

    currentInput += value;
    display.value = currentInput;
  });
});
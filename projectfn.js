let input = document.getElementById("input");

function num(value) {
    input.value += value;
}

function inputclear() {
    input.value = "";
}

function calculate() {
    try {
        input.value = eval(input.value);
    } catch (error) {
        alert("Invalid expression");
        clearDisplay();
    }
}
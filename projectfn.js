let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clear() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert("Invalid expression");
        clearDisplay();
    }
}
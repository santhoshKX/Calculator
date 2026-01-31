let display = document.getElementById("display");

function press(val) {
  display.value += val;
}

function clearAll() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// RGB Colors

// Variables

let redInEl = document.getElementById("red-in");
let greenInEl = document.getElementById("green-in");
let blueInEl = document.getElementById("blue-in");
let rgbStringOutEl = document.getElementById("rgbStrOut");
let displayEl = document.getElementById("display");
// Event Listeners
redInEl.addEventListener("input", rgbPreview);
greenInEl.addEventListener("input", rgbPreview);
blueInEl.addEventListener("input", rgbPreview);

// Event Function
function rgbPreview() {
  // Input: get red green blue values
  let rValue = +redInEl.value;
  let gValue = +greenInEl.value;
  let bValue = +blueInEl.value;

  //   Validate Colors (Constrain values from 0 to 255)
  //   Check rvalue
  if (rValue < 0) {
    rValue = 0;
    redInEl.value = 0;
  } else if (rValue > 255) {
    redInEl.value = 255;
  }

  //   Check gvalue
  if (gValue < 0) {
    gValue = 0;
    greenInEl.value = 0;
  } else if (gValue > 255) {
    greenInEl.value = 255;
  }

  //   Check bvalue
  if (bValue < 0) {
    bValue = 0;
    blueInEl.value = 0;
  } else if (bValue > 255) {
    blueInEl.value = 255;
  }

  // Process: build rgb string rbg(___, ___, ___)
  let rgbString = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";

  // Output: display rgb string and update the color preview
  rgbStringOutEl.innerHTML = rgbString;
  displayEl.style.background = rgbString;
}

// Width and Height Function
let width = document.getElementById("preview-width-in");
let height = document.getElementById("preview-height-in");

width.addEventListener("change", changeSize);
height.addEventListener("change", changeSize);

function changeSize() {
  let wValue = +width.value;
  let hValue = +height.value;

  if (wValue < 50) {
    width.value = 50;
  } else if (wValue > 400) {
    width.value = 400;
  }
  if (hValue < 50) {
    height.value = 50;
  } else if (hValue > 200) {
    height.value = 200;
  }

  // let calculate = "(" + wValue + "," + hValue + ")";
  // displayEl.style.background = calculate;
  displayEl.style.width = wValue + "px";
  displayEl.style.height = hValue + "px";
}

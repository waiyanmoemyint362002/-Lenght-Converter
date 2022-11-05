var input = document.querySelector("#input");
var result = document.querySelector("#result");
var inputType = document.querySelector("#inputType");
var resultType = document.querySelector("#resultType");
var from, to;

// now add listener
input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

// taking initial value
function from_to() {
  from = inputType.value;
  to = resultType.value;
}

from_to();

function myResult() {
  // when we change the input and output type vale we need to updata the
  // from and to

  from_to();

  // now compare the input and resultType value and add formula

  if (from === "meter" && to === "kilometer") {
    //this is meter to kilometer formula
    result.value = Number(input.value) * 0.001;
  } else if (from === "meter" && to === "Centimeter") {
    //this is meter to Centimeter formula
    result.value = Number(input.value) * 100;
  } else if (from === "meter" && to === "meter") {
    //this is meter to meter formula
    result.value = input.value;
  }

  if (from === "kilometer" && to === "meter") {
    //this is kilometer to meter formula
    result.value = Number(input.value) * 1000;
  } else if (from === "kilometer" && to === "Centimeter") {
    //this is kilometer to Centimeter formula
    result.value = Number(input.value) * 100000;
  } else if (from === "kilometer" && to === "kilometer") {
    //this is kilometer to kilometer formula
    result.value = input.value;
  }

  if (from === "Centimeter" && to === "kilometer") {
    //this is Centimeter to kilometer formula
    result.value = Number(input.value) * 0.00001;
  } else if (from === "Centimeter" && to === "meter") {
    //this is Centimeter to meter formula
    result.value = Number(input.value) * 0.01;
  } else if (from === "Centimeter" && to === "Centimeter") {
    //this is Centimeter to Centimeter formula
    result.value = input.value;
  }
}

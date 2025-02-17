const calculateTemp = () => {
  const numTemp = parseFloat(document.getElementById("temp").value);
  const temSelected = document.getElementById("tem-diff");
  const valueOfTemp = temSelected.options[temSelected.selectedIndex].value;

  const celToFah = (cel) => {
    let fahrenheit = Math.round((cel * 9) / 5 + 32);
    return fahrenheit;
  };

  const fahToCel = (fahr) => {
    let celsius = Math.round(((fahr - 32) * 5) / 9);
    return celsius;
  };

  let result;

  if (valueOfTemp === "cel") {
    result = celToFah(numTemp);
    document.getElementById(
      "resultContainer"
    ).innerHTML = `= ${result} °Fahrenheit`;
  } else {
    result = fahToCel(numTemp);
    document.getElementById(
      "resultContainer"
    ).innerHTML = `= ${result} °Celsius`;
  }
};

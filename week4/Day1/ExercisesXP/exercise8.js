document.getElementById("make-juice").addEventListener("click", function () {
  const size = document.getElementById("size").value;
  const inputs = document.querySelectorAll("#ingredients input");
  const allIngredients = [];

  inputs.forEach(input => {
    const value = input.value.trim();
    if (value !== "") {
      allIngredients.push(value);
    }
  });

  if (allIngredients.length !== 4) {
    alert("Please enter exactly 4 ingredients ");
    return;
  }

  function makeJuice(size) {
    const ingredients = [];

    function addIngredients(...ing) {
      ingredients.push(...ing);
    }

    function displayJuice() {
      const output = ` The client wants a ${size} juice, containing: ${ingredients.join(", ")}.`;
      document.getElementById("juice-output").textContent = output;
    }

    addIngredients(...allIngredients.slice(0, 3));
    addIngredients(...allIngredients.slice(3, 4));
    displayJuice();
  }
  makeJuice(size);
});

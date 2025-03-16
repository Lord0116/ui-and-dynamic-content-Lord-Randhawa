document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  const addButton = document.getElementById("btn");
  const itemList = document.getElementById("items");
  const feedback = document.querySelector(".feedback");

  addButton.addEventListener("click", () => {
    const itemText = inputField.value.trim();

    if (itemText !== "") {
      const listItem = document.createElement("li");
      listItem.textContent = itemText;
      itemList.appendChild(listItem);

      feedback.textContent = "";
      inputField.value = "";
      inputField.focus();
    } else {
      feedback.textContent = "Nothing entered!";
    }
  });
});

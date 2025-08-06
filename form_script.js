document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("foodForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById("foodName").value;
    const price = document.getElementById("foodPrice").value;
    const category = document.getElementById("foodCategory").value;
    const description = document.getElementById("foodDescription").value;

    // Create food object
    const foodItem = {
      name,
      price,
      category,
      description,
      timestamp: new Date().toISOString()
    };

    // Get existing items or create empty array
    const existingData = JSON.parse(localStorage.getItem("foodEntries")) || [];

    // Add new entry
    existingData.push(foodItem);

    // Save back to localStorage
    localStorage.setItem("foodEntries", JSON.stringify(existingData));

    // Optional: clear form
    form.reset();

    alert("Food item saved successfully!");
  });
});

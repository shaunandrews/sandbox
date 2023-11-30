import "./components/icon.js";
import "./components/reader-item.js";

// Fetch reader iterms from json file
fetch("./data/items.json")
  .then((response) => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    // Render the data to the console for testing
    console.table(data);
    // `data` is the array of items
    populateItems(data);
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });

// Populate the reader items
function populateItems(itemsData) {
    // Check if itemsData is an array
    if (!Array.isArray(itemsData)) {
        console.error('Invalid itemsData: expected an array');
        return;
    }

    const contentContainer = document.getElementById("stream"); // Get the #content div
    itemsData.forEach((itemData) => {
        // Create a new item component
        const itemElement = document.createElement("reader-item");
        // Set the item data
        itemElement.data = itemData;
        // Append the new component to the #content div
        contentContainer.appendChild(itemElement); // Append to #content div
    });
}
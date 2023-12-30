document.addEventListener("DOMContentLoaded", function () {
	fetch("products.json")
		.then((response) => response.json())
		.then((data) => {
			const productList = document.getElementById("product-list");
			data.forEach((product, index) => {
				productList.innerHTML += `
                    <li class="product" data-index="${index}">
                        <img class="product-thumbnail" src="${product.thumbnail}" alt="${product.title}">
                        <div class="product-details">
                            <h2 class="product-title">${product.title}</h2>
                            <p class="product-tagline">${product.tagline}</p>
                        </div>
                        <p class="product-price">${product.price}</p>
                    </li>
                `;
			});
		})
		.catch((error) => console.error("Error:", error));
});

document.addEventListener("DOMContentLoaded", function () {
	fetch("products.json")
		.then((response) => response.json())
		.then((data) => {
			const productList = document.getElementById("product-grid");
			data.forEach((product, index) => {
				productList.innerHTML += `
                    <li class="product" data-index="${index}">
                        <span class="product-type">${product.productType}</span>
                        <img class="product-thumbnail" src="${product.thumbnail}" alt="${product.title}">
                        <h2 class="product-title">${product.title}</h2>
                    </li>
                `;
			});
		})
		.catch((error) => console.error("Error:", error));
});

document.addEventListener("DOMContentLoaded", function () {
	fetch("products.json")
		.then((response) => response.json())
		.then((data) => {
			const productList = document.getElementById("product-grid-mixed");
			data.forEach((product, index) => {
				productList.innerHTML += `
                    <li class="product" data-index="${index}">
                        <img class="product-thumbnail" src="${product.thumbnail}" alt="${product.title}">
                        <img class="product-banner" src="${product.banner}" alt="${product.title}">
                        <h2 class="product-title">
                            ${product.title}
                            <span class="product-type">${product.productType}</span>
                        </h2>
                    </li>
                `;
			});
		})
		.catch((error) => console.error("Error:", error));
});

document.addEventListener("DOMContentLoaded", function () {
	// Selecting only the radio inputs within .purchase-type
	const purchaseTypeInputs = document.querySelectorAll(".purchase-type input[type='radio']");

	// Function to handle the toggling of classes
	function togglePurchaseTypeClass(input) {
		const purchaseTypeContainer = input.closest(".purchase-type");
		purchaseTypeContainer.classList.remove("buy", "gift");
		purchaseTypeContainer.classList.add(input.value);
	}

	// Initialize with the currently checked input
	const checkedInput = document.querySelector(".purchase-type input[type='radio']:checked");
	if (checkedInput) {
		togglePurchaseTypeClass(checkedInput);
	}

	// Event listener for changes
	purchaseTypeInputs.forEach((input) => {
		input.addEventListener("change", function () {
			togglePurchaseTypeClass(this);
		});
	});
});



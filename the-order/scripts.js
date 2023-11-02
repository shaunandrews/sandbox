document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector("button[type='submit']");
    const emailInput = document.querySelector("input[type='email']");
    const errorElement = document.querySelector(".error");
    const subscribeDiv = document.querySelector(".subscribe");
    const submittedDiv = document.querySelector(".submitted");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();  // Prevent form submission

        // Check for a valid email
        if (!isValidEmail(emailInput.value)) {
            errorElement.style.display = "block";
        } else {
            errorElement.style.display = "none";
            subscribeDiv.classList.add("loading");

            // Wait 2 seconds
            setTimeout(function() {
                subscribeDiv.style.display = "none";
                submittedDiv.style.display = "block";
            }, 2000);
        }
    });
});

function isValidEmail(email) {
    // Regular expression to check for a valid email
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

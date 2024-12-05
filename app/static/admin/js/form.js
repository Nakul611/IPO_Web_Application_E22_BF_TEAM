document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const errorMessage = document.createElement("div");
    const successMessage = document.createElement("div");

    errorMessage.className = "error-message";
    successMessage.className = "success-message";

    form.insertBefore(errorMessage, form.firstChild);
    form.insertBefore(successMessage, form.firstChild);

    // Add CSRF token header
    const csrfToken = document.querySelector('[name="csrfmiddlewaretoken"]').value;

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent default form submission

        // Clear previous messages
        errorMessage.textContent = "";
        successMessage.textContent = "";

        // Collect form data
        const formData = new FormData(form);

        // Perform validation
        if (!formData.get("company_name") || !formData.get("price_band")) {
            errorMessage.textContent = "Please fill all the required fields.";
            return;
        }

        try {
            // Send data to the backend with CSRF token in headers
            const response = await fetch("/add-ipo/", {
                method: "POST",
                body: formData,
                headers: {
                    "X-CSRFToken": csrfToken // Add CSRF token here
                }
            });

            if (!response.ok) {
                throw new Error("Failed to submit the form. Please try again.");
            }

            const data = await response.json();
            if (data.success) {
                successMessage.textContent = "IPO added successfully!";
                form.reset(); // Clear the form
            } else {
                errorMessage.textContent = data.error || "Failed to submit the form.";
            }
        } catch (error) {
            errorMessage.textContent = error.message;
        }
    });
});

closeDate.addEventListener("change", () => {
    if (new Date(closeDate.value) <= new Date(openDate.value)) {
        alert("Close date must be after the open date.");
        closeDate.value = "";
    }
});

document.querySelector("form").addEventListener("submit", (e) => {
    e.target.querySelector("button[type='submit']").disabled = true;
});
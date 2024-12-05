document.addEventListener("DOMContentLoaded", () => {
    const userAvatar = document.getElementById("userAvatar");
    const userImage = document.getElementById("userImage");
    const userProfile = document.getElementById("userProfile");

    // Function to update the avatar
    const updateAvatar = () => {
        const selectedOption = userProfile.options[userProfile.selectedIndex].text;
        const firstLetter = selectedOption.trim().charAt(4).toUpperCase(); // Get the first letter after "Hi, "

        // Check if the image source is valid
        if (userImage.src && userImage.src.trim() !== "") {
            userImage.style.display = "block"; // Show image if present
            userAvatar.textContent = ""; // Clear text content
        } else {
            userImage.style.display = "none"; // Hide image if not present
            userAvatar.textContent = firstLetter; // Show first letter
        }
    };

    // Initialize avatar on page load
    updateAvatar();

    // Update avatar when selection changes
    userProfile.addEventListener("change", updateAvatar);
});

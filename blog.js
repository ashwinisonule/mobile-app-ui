const newsletterForm = document.getElementById("newsletterForm");
const subscribeMessage = document.getElementById("subscribeMessage");

newsletterForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    if (email === "") {
        subscribeMessage.textContent = "Please enter your email address.";
        return;
    }

    subscribeMessage.textContent =
        "✓ Thank you! You have successfully subscribed.";

    newsletterForm.reset();

});
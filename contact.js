const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    successMessage.style.display = "flex";

    contactForm.reset();

    successMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(otherItem => {

            if (otherItem !== item) {
                otherItem.classList.remove("open");
            }

        });

        item.classList.toggle("open");

    });

});
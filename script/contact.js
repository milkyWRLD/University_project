const contactForm = document.getElementById("contact-form");
const firstname = document.getElementById("fname");
const lastname = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^[0-9]{10}$/;

contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    if (firstname.value.trim() === "") {
        setError(firstname, "Имя обязательно для заполнения!");
        isValid = false;
    } else if (/[^a-zA-Z]/.test(firstname.value.trim())) {
        setError(firstname, "В имени допускаются только буквы!");
        isValid = false;
    }

    if (lastname.value.trim() === "") {
        setError(lastname, "Фамилия обязательна для заполнения!");
        isValid = false;
    } else if (/[^a-zA-Z]/.test(lastname.value.trim())) {
        setError(lastname, "В фамилии допускаются только буквы!");
        isValid = false;
    }

    if (email.value.trim() === "") {
        setError(email, "Электронная почта обязательна для заполнения!");
        isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
        setError(email, "Неверный формат электронной почты!");
        isValid = false;
    }

    if (phone.value.trim() === "") {
        setError(phone, "Номер телефона обязателен для заполнения!");
        isValid = false;
    } else if (!phoneRegex.test(phone.value.trim())) {
        setError(phone, "Номер телефона должен состоять из 10 цифр");
        isValid = false;
    }

    if (message.value.trim() === "") {
        setError(message, "Сообщение обязательно для заполнения!");
        isValid = false;
    }

    if (isValid) {
        const formData = new FormData(contactForm);
        contactForm.reset();
        // alert("Ваши данные были успешно отправлены");
    }
});

// Скрипты для секции подписки на рассылку
const newsletterForm = document.getElementById("news-letter");
const newsletterEmail = document.getElementById("newsletter-email");

newsletterForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    if (newsletterEmail.value.trim() === "") {
        setError(newsletterEmail, "Электронная почта обязательна для заполнения!");
    } else if (!emailRegex.test(newsletterEmail.value.trim())) {
        setError(newsletterEmail, "Неверный формат электронной почты!");
    }
});

function setError(field, errorMessage) {
    const error = field.parentElement.querySelector("small");
    error.textContent = errorMessage;
}

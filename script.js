// ALTERNAR MODO CLARO E ESCURO
const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }
});

// MENU PARA CELULARES
const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", function () {
    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }
});

// FECHAR MENU AO CLICAR EM UM LINK
const menuLinks = document.querySelectorAll("#menu a");

menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("active");
        menuButton.textContent = "☰";
    });
});

// FORMULÁRIO DE CONTATO
const contactForm = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("name").value.trim();

    feedback.textContent =
        "Obrigado, " + nome +
        "! Sua mensagem foi preenchida com sucesso. Entre em contato pelo e-mail da agência para concluir seu atendimento.";

    contactForm.reset();
});

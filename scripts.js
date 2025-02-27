// scripts.js
document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Désactiver tous les onglets
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(content => content.style.display = "none");

            // Activer l'onglet cliqué
            button.classList.add("active");
            const tabId = button.getAttribute("data-tab");
            document.getElementById(tabId).style.display = "block";
        });
    });

    // Activer le premier onglet par défaut
    document.querySelector(".tab-button.active").click();
});
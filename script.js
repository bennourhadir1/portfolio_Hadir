// Récupère le bouton de bascule du mode sombre
const toggleButton = document.getElementById("dark-mode-toggle");

// Vérifie s'il y a une préférence enregistrée dans localStorage
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

// Gère le clic sur le bouton
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Mémorise l'état dans localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});

document
.getElementById("formulaire")
.addEventListener("submit", function(event){

    event.preventDefault();

    // RECUPERER LES VALEURS

    let nom =
    document.getElementById("nom").value;

    let email =
    document.getElementById("email").value;

    // MESSAGE

    alert(
        "Bienvenue " + nom +
        " ! Votre inscription est réussie."
    );

    // REDIRECTION WHATSAPP

    window.location.href =
    "https://chat.whatsapp.com/TON-LIEN";
});
// Fonction pour ajouter une note
function addNote() {
    const studentName = document.getElementById("studentName").value;
    const subject = document.getElementById("subject").value;
    const grade = document.getElementById("grade").value;

    // Validation des entrées
    if (studentName && subject && grade) {
        // Création d'un élément de note
        const noteItem = document.createElement("div");
        noteItem.className = "note-item";
        noteItem.innerHTML = `<strong>${studentName}</strong> - ${subject}: ${grade}`;

        // Ajout de la note à la liste
        document.getElementById("notesList").appendChild(noteItem);

        // Réinitialisation du formulaire
        document.getElementById("noteForm").reset();
    } else {
        alert("Veuillez remplir tous les champs.");
    }
}

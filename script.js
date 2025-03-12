// Function to calculate the discount
function calculerRistourne(chiffreAffaires) {
    if (chiffreAffaires < 1000) {
        return 0;
    } else if (chiffreAffaires <= 5000) {
        return chiffreAffaires * 0.05;
    } else {
        return chiffreAffaires * 0.10;
    }
}

// Function triggered when the button is clicked
function calculer() {
    // Get values from input fields
    let prenom = document.getElementById("prenom").value;
    let ville = document.getElementById("ville").value;
    let chiffreAffaires = parseFloat(document.getElementById("chiffreAffaires").value);

    // Validate input
    if (!prenom || !ville || isNaN(chiffreAffaires) || chiffreAffaires < 0) {
        document.getElementById("recapitulatif").innerHTML = "Veuillez entrer des valeurs valides.";
        return;
    }

    // Calculate discount
    let ristourne = calculerRistourne(chiffreAffaires);

    // Display recap
    document.getElementById("recapitulatif").innerHTML = `
        <strong>Client:</strong> ${prenom}, <strong>Ville:</strong> ${ville} <br>
        <strong>Chiffre d'Affaires:</strong> ${chiffreAffaires} DA <br>
        <strong>Montant de la Ristourne:</strong> ${ristourne.toFixed(2)} DA
    `;

    // Insert results into the table
    let tableBody = document.getElementById("resultatTable");
    tableBody.innerHTML = `
        <tr>
            <td>${chiffreAffaires}</td>
            <td>${ristourne.toFixed(2)}</td>
        </tr>
    `;
}

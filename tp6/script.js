document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById('quizForm');
    const clearButton = document.getElementById('clearButton');
    const showCorrectButton = document.getElementById('showCorrectButton');
    const checkAnswersButton = document.getElementById('checkAnswersButton');

    // Fonction pour effacer les sélections
    clearButton.addEventListener('click', function () {
        const radioButtons = quizForm.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(function (radioButton) {
            radioButton.checked = false;
        });
    });

    // Fonction pour afficher le corrigé
    showCorrectButton.addEventListener('click', function () {
        window.open('corrige.html', '_blank');
    });

    // Fonction pour apporter une correction dynamique
    checkAnswersButton.addEventListener('click', function () {
        const radioButtons = quizForm.querySelectorAll('input[type="radio"]');
        let score = 10;

        radioButtons.forEach(function (radioButton) {
            const questionNumber = radioButton.getAttribute('q1').replace('a', '');
            if (radioButton.checked) {
                // Implémentez ici la logique pour attribuer des points en fonction des réponses correctes
                // Par exemple, comparez les valeurs des cases cochées avec les réponses correctes
                // et incrémentez le score en conséquence.
            }
        });

        // Affichez le score à l'utilisateur ou effectuez toute autre action nécessaire.
        alert(`Votre score est de : ${score}`);
    });
});
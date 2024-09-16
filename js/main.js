import showModal, {showModalBlock} from './src/modal.js'


function Exercice1() {
    console.log(" 😊 Exercice 1 : Compter de 1 à 10 avec une boucle for")

    console.log("Objectif: Écris un programme qui utilise une boucle `for` pour afficher les nombres de 1 à 10 dans la console.")

    console.log("Résultat attendu: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10")

    const array = [];

    for (let index = 1; index <= 10; index++) {
        array.push(index+" ");
    }

    console.log(`Le résultat résultant: ${array}`)
}
function Exercice2() {
    console.log(" 😊 Exercice 2 : Afficher les nombres pairs de 0 à 20")

    console.log("Sujets: console, variables, boucles, conditions")

    console.log("Objectif: Utilise une boucle 'while' pour afficher tous les nombres pairs entre 0 et 20 dans la console.")

    console.log("Résultat attendu : 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20")

    
}
function Exercice3() {
    console.log(" 😊 Exercice 3 : Compter à rebours");

    console.log("Sujets: console, variables, boucles");

    console.log("Objectif: Écris un programme qui utilise une boucle 'do...while' pour afficher un compte à rebours de 10 à 1.");

    console.log("Résultat attendu : 10, 9, 8, 7, 6, 5, 4, 3, 2, 1");


    const array = [];
    let index = 11; 

    do {
        index-=1;
        array.push(index);
    } while (array.length<10);

    console.log(`Le résultat résultant: ${array.join(', ')}`)
  
}
function Exercice4(){
    console.log(" 😅 Exercice 4 : Somme des nombres de 1 à 100");

    console.log("Sujets: console, variables, boucles");

    console.log("Objectif: Crée une boucle qui calcule la somme des nombres de 1 à 100 et affiche le résultat.");

    console.log("Résultat attendu : 5050 (la somme des nombres de 1 à 100)");

    const array = [];
    let sum = 0; 
    
    for (let index = 0; index <= 100; index++) {
        sum += index;
        
    }

    console.log(`Le résultat résultant: ${sum} (la somme des nombres de 1 à 100)`)

}
function Exercice5() {
    console.log(" 😅 Exercice 5 : Afficher les éléments d'un tableau");

    console.log("Sujets: console, variables, boucles, array");

    console.log("Objectif: Écris un programme qui utilise une boucle 'for...of' pour parcourir un tableau d'animaux et afficher chaque animal dans la console.");

    console.log('Résultat attendu : "chien, chat, lapin, oiseau"');

    const animaux  = ["chien", "chat", "lapin", "oiseau"];

    let myAnimaux = []

    for (const animal of animaux) {
        myAnimaux.push(animal)
    }

    console.log(`Le résultat résultant: "${myAnimaux.join(', ')}"`)


}
function Exercice6() {
    console.log(" 😰 Exercice 6 : Boucle imbriquée (tables de multiplication)");

    console.log("Sujets: console, variables, boucles");

    console.log("Objectif: Écris un programme qui utilise deux boucles imbriquées pour afficher les tables de multiplication de 1 à 5.");

    console.log(`Résultat attendu : 
    1 x 1 = 1
    1 x 2 = 2
    ...
    5 x 5 = 25`);

    console.log("Le résultat résultant:");

    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 5; j++) {
            console.log(`    ${i} x ${j} = ${i * j}`);
        }
    }

}
function Exercice7(){
    console.log(" 😰 Exercice 7 : Trouver un élément dans un tableau");

    console.log("Sujets: console, variables, boucles, array");

    console.log("Objectif: Écris un programme qui utilise une boucle pour rechercher si un certain nombre est présent dans un tableau.");

    console.log("Résultat attendu : 30 est présent dans le tableau.");

    console.log("Le résultat résultant:");

    const nombres = [];
    for (let i = 20; i <= 40; i += 2) {
        nombres.push(i);
    }

    const nombreCherche = 30;
    let trouve = false;

    for (let nombre of nombres) {
        if (nombre === nombreCherche) {
            console.log(`${nombreCherche} est présent dans le tableau.`);
            trouve = true;
            break;  
        }
    }

    if (!trouve) {
        console.log(`${nombreCherche} n'est pas présent dans le tableau.`);
    }

}

function Exercice8(){
    console.log(" 😰 Exercice 8 : FizzBuzz");

    console.log("Sujets: console, variables, boucles");

    console.log("Objectif: Écris un programme qui affiche les nombres de 1 à 30, avec Fizz, Buzz, et FizzBuzz pour les multiples respectifs de 3, 5, et les deux.");

    console.log(`Résultat attendu : 
    1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, etc.`);

    console.log("Le résultat résultant:");

    for (let i = 1; i <= 30; i++) {
        let output = "";
        switch (true) {
            case (i % 3 === 0 && i % 5 === 0):
                output = "FizzBuzz";
                break;
            case (i % 3 === 0):
                output = "Fizz";
                break;
            case (i % 5 === 0):
                output = "Buzz";
                break;
            default:
                output = i;
        }
    
        console.log(output); 
    }
    
}

async function Exercice9(){
    console.log(" 😰 Exercice 9 : Jeu de devinette (avec plusieurs réponses)");

    console.log("Sujets: console, variables, boucles, prompt, literal");

    console.log("Objectif: Reprend l'exercice de jeu de devinette qu'on a fait précédemment et fais en sorte que l'utilisateur puisse essayer à nouveau.");

    console.log("Résultat attendu : Le joueur devine le bon chiffre après plusieurs essais.");

    console.log("Le résultat résultant:");

    const nombreMystere = Math.floor(Math.random() * 10) + 1; // Génère un nombre mystère entre 1 et 10
    let trouve = false;
    let nombreDevine;
    let resultat = "";

    while (!trouve) {
        // Utilisation de template literals pour afficher le résultat
        // nombreDevine = parseInt(prompt(`${resultat} Essayez encore, chiffre de 1 à 10 (ou appuyez sur Annuler pour quitter) :`), 10);
        nombreDevine = parseInt(await showModalBlock(`${resultat} Essayez encore, chiffre de 1 à 10 (ou appuyez sur Annuler pour quitter) :`, 0));

        if (isNaN(nombreDevine)) {
            // alert("Veuillez entrer un nombre valide.");
            resultat = "Entrée invalide.";
        } else if (nombreDevine < 1 || nombreDevine > 10) {
            // alert("Le nombre doit être entre 1 et 10.");
            resultat = "Nombre hors de portée.";
        } else if (nombreDevine < nombreMystere) {
            resultat = "Trop petit";
        } else if (nombreDevine > nombreMystere) {
            resultat = "Trop grand";
        } else {
            // alert(`Bravo ! Vous avez trouvé le nombre mystère : ${nombreMystere}.`);
            trouve = true; // Met fin à la boucle
        }
    }

    // Demander si l'utilisateur veut jouer à nouveau
    const rejouer = confirm("Voulez-vous jouer à nouveau ?");
    if (rejouer) {
        jeuDeDevinette(); // Relancer le jeu
    } else {
        alert("Merci d'avoir joué !");
    }
    

}

async function executeExercises() {
    //  Exercice1();
    //  Exercice2();
    //  Exercice3();
    //  Exercice4();
    //  Exercice5();
    //  Exercice6();
    //  Exercice7();
    //  Exercice8();
    await Exercice9();
}


executeExercises();


//------------------- Les tableaux (Recuperation d'elements)

let array = ["bordeaux", "Toulouse", "Nantes"];
//console.log(array [0][4]) //mettre le e de bordeaux a la console...

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: " Abdel" }]
//console.log(array2[3][1]);//recuperer le 1er index du tableau dans un tableaux
//console.log(array2[4].nom); //recuperer les données d'un odjet dans un tableaux



//---------------- Les Objets  (Recuperation d'elements)

let objet = {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "Node.js"],
    admin: false
}
//console.log(objet.technos[1][2]); // recuperation de "React" de objet et ciblé le a..

//objet.adresse = "33 rue du code" // Rajouter un element a une variable (objet). Si l'element existe deja il sera ecrasé par la nouvelle 

//console.log(objet.adresse );//recuperation element rajouter

let data = [
    {
        pseudo: "Denis",
        age: 33,
        technos: ["Javascript", "React", "Node.js"],
        admin: false
    },
    {
        pseudo: "Michel",
        age: 24,
        technos: ["CSS", "React", "Node.js"],
        admin: false
    },
    {
        pseudo: "Bernard",
        age: 19,
        technos: ["Php", "React", "Node.js"],
        admin: true
    }

]
//console.log(data[2].pseudo);//recuperation element d'un objet (Pseudo du 3em objet et element pseudo)
//___________________________________________
//---------------- Structure de controle
//___________________________________________

//on declare la valeur de i / jusqu'ou on boucle / on incremente i si la condition 2 n'est pas remplie

// for (i = 0; i < data.length; i++) {
//     console.log(data[i].technos[0]);
//     document.body.innerHTML += "<h2>" + data[i].pseudo + data[i] .technos + "</h2>"

// }




//Switch

document.body.addEventListener("click", (e)=>{

    switch (e.target.id) {
    case "javascript":
       document.body.style.background = "yellow"
         break;
    case "php":
       document.body.style.background = "blue"
         break;
    case "phyton":
       document.body.style.background = "silver"
         break;

    default:
       null;
}
})

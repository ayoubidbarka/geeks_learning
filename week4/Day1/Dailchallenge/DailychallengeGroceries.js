let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
};

// 1. Fonction fléchée qui affiche les fruits
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
};

displayGroceries(); // Affiche : pear, apple, banana

// 2. Fonction cloneGroceries pour tester les copies
const cloneGroceries = () => {
    // Passage par valeur (valeur primitive)
    let user = client;

    // On modifie la variable client
    client = "Betty";
    console.log("user =", user); 

    // Pourquoi ? Car les strings sont des types primitifs,
    // donc copiés par valeur, la variable user ne change pas.

    // Passage par référence (objet)
    let shopping = groceries;

    // On modifie une propriété de l’objet
    shopping.totalPrice = "35$";
    console.log("groceries.totalPrice =", groceries.totalPrice); // Résultat : "35$"

    // On modifie une propriété imbriquée
    shopping.other.paid = false;
    console.log("groceries.other.paid =", groceries.other.paid); // Résultat : false

    // Pourquoi ? Les objets sont passés par **référence**
    // donc toute modification via shopping modifie aussi groceries.
};

cloneGroceries();

// ------ 1 ------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

// Ici on utilise l'opérateur spread (...) pour "déplier" les tableaux fruits et vegetables
const result = ['bread', ...vegetables, 'chicken', ...fruits];

// Le tableau résultant contient tous les éléments dans l'ordre
console.log(result);
// Résultat : ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

/*
  Explication :
  - 'bread' est le premier élément
  - ...vegetables => "carrot", "potato"
  - 'chicken' est ajouté ensuite
  - ...fruits => "apple", "orange"
*/

// ------ 2 ------
const country = "USA";

// En utilisant l'opérateur spread sur une string, chaque lettre devient un élément dans un tableau
console.log([...country]);
// Résultat : ['U', 'S', 'A']

/*
  Explication :
  - Une string est itérable, donc [..."USA"] devient ['U', 'S', 'A']
  - Cela fonctionne comme split('') mais avec une syntaxe plus moderne
*/

// ------ Bonus ------
let newArray = [...[,,]];

// Ici on étale un tableau contenant des "trous" (sparse array)
console.log(newArray);
// Résultat : [undefined, undefined]

/*
  Explication :
  - [,,] est un tableau de longueur 2 avec des emplacements vides
  - L’opérateur spread transforme chaque trou en undefined
  - Donc [...[,,]] devient [undefined, undefined]
*/

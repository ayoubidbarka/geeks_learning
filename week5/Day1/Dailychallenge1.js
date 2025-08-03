//1er fonction
function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    if (Array.isArray(words) && words.every(word => typeof word === 'string')) {
      const uppercased = words.map(word => word.toUpperCase());
      resolve(uppercased);
    } else {
      reject("Error: Not all items in the array are strings.");
    }
  });
}
//2eme fonction 
function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.every(word => typeof word === 'string')) {
      resolve(words.sort());
    } else {
      reject('Error: Cannot sort non-string values!');
    }
  });
}
//exemple de ces fonctions
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) 
      .catch(error => console.log(error))
//result:
//["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//1
let family = {
  father: "Abdellah",
  mother: "Saadia",
  daughter: "Malak",
  grand_father : "omar"
};
console.log(family);
// 2
for ( let x in family ) {
    console.log(x);
}
//3
for ( let k in family) {
    console.log(k ,"is",family[k]);
}

const people = ["Greg", "Mary", "Devon", "James"];
//part1
//1
people.splice(0,1)
console.log(people)
//2
people[3]="jason"
console.log(people)
//3
people.push("Ayoub")
console.log(people)
//4
let index = people.indexOf("Mary")
console.log(index)
//5
 people.splice(2,1)
let newpeople = people.slice()
console.log(newpeople)
//6
let indexx = people.indexOf("Foo")
console.log(indexx)
// par-ce-que debut d'un element dans js c'est 0 , danc -1 il affiche pour que ne touve aucun chose dans liste
//7
let last = people[3]
console.log(last)
//part2
//1
for (let  i = 0; i < people.length ; i++){
    console.log(people[i]);
}
console.log(people)
//2
for (let i = 0 ; i < people.length ; i++){
    if (people[i] === "Devon") {
        break;
    } 
    console.log(people[i]);
}

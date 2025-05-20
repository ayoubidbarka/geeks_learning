//execise2

//my favorite colors
//1
let colors = ["green" , "yellow" , "blue" , "Gray" , "red"]
console.log(colors)
//2
for (let i = 0 ; i < colors.length ; i++ ){
    console.log(i+1 ,"choice is ", colors[i]);
}
console.log(colors)
//3
let array_of_siffixes = ["st","nd","rd"]
for(let i = 0 ; i < colors.length ; i++){
    let num = i + 1 ;
    let sufix = num <= 3  ? array_of_siffixes[i] : "th";
    console.log(`My ${num}${sufix} choice is ${colors[i]}`)
}



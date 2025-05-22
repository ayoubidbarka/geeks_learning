let sentence = "The movie is not that bad, I like it.";
let wordNot = sentence.indexOf("not");
console.log(wordNot); 
let wordbad = sentence.indexOf("bad");
console.log(wordbad)

if (wordNot !== -1 && wordbad !== -1 && wordbad>wordNot ) {
    let result = sentence.slice(0 , wordNot) + "good" + sentence.slice(wordbad + 3);
    console.log(result)
} else {
    console.log(sentence)
}
function displayNumbersDivisible(){
    let sum=0
    for (let i=0 ; i< 500 ; i++){
        if (i % 23==0){
            console.log(" les diviseur =",i)
            sum+=i
        }
    }
    console.log(sum)
}
displayNumbersDivisible()

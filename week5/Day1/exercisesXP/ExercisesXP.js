//Exercise1
function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve( " is less than or equal to 10");
        } else {
            reject(" is greater than 10")
        }
    });
}
//Exercise2

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("This runs after 4 seconds");
    },4000);
});

//exercise3

const promise = Promise.resolve(3);
promise.then(value => {
    console.log(value)
});

const promisee = Promise.reject("Boo");
promisee.catch(error => {
    console.log(error);
})

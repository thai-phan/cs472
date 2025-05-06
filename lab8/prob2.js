// Change isPrime function below to run asynchronously using Promise.
// • if the input is prime number, the promise resolves with { prime: true }.
//     • if the input is not a prime number, it rejects with { prime: false }.

let isPrime = (n) => {
    return new Promise((resolve, reject) => {
        for (let i = 2, s = Math.sqrt(n); i <= s; i++)
            if (n % i === 0) return resolve(true);
        return resolve(n > 1);
    })
}

// console.log('promise start');
// const result = await isPrime(7);
// console.log(result);
// console.log('promise end');

console.log('start');
(async () => {
    try {
        let result = await isPrime(7)
        console.log(result);
    } catch (err) {
        console.error(err);
    }
})();
console.log('end');


// start
// end
// { prime: true }

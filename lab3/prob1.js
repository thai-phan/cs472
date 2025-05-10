// Question A
let arrayA = [1, 2, 3, 4, 5]

const computeSumOfSquares = (arr) => {
    return arr.reduce((acc, el) => acc + el * el);
}

let resultA = computeSumOfSquares(arrayA)
console.log(resultA)



// Question B
let arrayB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const printOddNumbersOnly = (arr) => {
    return arr.filter((el) => el % 2 === 1);
}

let resultB = printOddNumbersOnly(arrayB)
console.log(resultB)



// Question C
let n = 10

const printFibo = (n, a = 0, b = 1) => {
    let arr = []
    arr.push(a)
    arr.push(b)
    let index = 2;
    while (index < n) {
        arr.push(arr.at(-1) + arr.at(-2))
        index++;
    }

    arr.forEach(a => console.log(a))
}

printFibo(n)

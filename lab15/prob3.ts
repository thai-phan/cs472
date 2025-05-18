function sumAll(...numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0)
}

console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));
console.log(sumAll());
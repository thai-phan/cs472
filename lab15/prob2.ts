function secondLargest(numbers: number[]): number | undefined {
    if (numbers.length < 2) return undefined;

    let largest = numbers[0];
    let second = numbers[1];

    for (const num of numbers) {
        if (num > largest) {
            second = largest;
            largest = num;
        } else if (num > second && num < largest) {
            second = num;
        }
    }

    return second === -Infinity ? undefined : second;
}

console.log(secondLargest([20, 120, 111, 215, 54, 78]));
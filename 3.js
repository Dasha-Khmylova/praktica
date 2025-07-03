function solution(number) {
    if (number < 0) return 0;
    
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(solution(10));  // Returns 23 (3 + 5 + 6 + 9)
console.log(solution(7));  // Returns 78
console.log(solution(-5));  // Returns 0
console.log(solution(0));   // Returns 0
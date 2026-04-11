// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
const solution = num => num%2===0 ? "Even" : "Odd";

// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
const solution2 = arr => arr.reduce((sum, current) => sum += current, 0)/arr.length;
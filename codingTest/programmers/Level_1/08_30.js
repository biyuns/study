/*
0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ numbers의 길이 ≤ 9
0 ≤ numbers의 모든 원소 ≤ 9
numbers의 모든 원소는 서로 다릅니다.
*/

// 숫자 배열을 만들어 filter와 reduce를 이용해 계산하는 방식
const solution = numbers => {
    const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    return number.filter(num => !numbers.includes(num)).reduce((sum, num) => sum + num, 0);
}

// 다른 방안 중 하나, 0부터 9까지 수를 더한 값에서 넘어오는 numbers 배열을 더한 값을 빼는 방식
function solution(numbers) {
    return 45 - numbers.reduce((acc, cur) => acc + cur, 0);
}

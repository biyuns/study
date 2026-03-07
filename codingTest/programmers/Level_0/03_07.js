// 0307 프로그래머스 코딩테스트 문제풀이

/*
문제 설명
정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을 return하도록 soltuion 함수를 완성해주세요.
*/

function solution(num1, num2) {
    return num1 - num2;
}

// 화살표 함수 버전
const solution = (num1, num2) => num1 - num2;


// 풀이 : 문제에서 요구한 solution 함수에 num1, num2 매개변수를 추가하여 뺸 값을 리턴하도록 함


/*
문제 설명
정수 num1, num2가 매개변수 주어집니다. num1과 num2를 곱한 값을 return 하도록 solution 함수를 완성해주세요.
*/

function solution(num1, num2) {
    return num1 * num2;
}

// 화살표 함수 버전
const solution = (num1, num2) => num1 * num2;

// 풀이 : 문제에서 요구한 solution 함수에 num1, num2를 매개변수로 설정하여 곱한 값을 리턴하도록 함

/*
문제 설명
정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.

제한사항
0 < num1 ≤ 100
0 < num2 ≤ 100
*/

function solution(num1, num2) {
    var answer = Math.floor(num1/num2);
    return answer;
}

// 화살표 함수 버전
const solution = (num1, num2) => Math.floor(num1 / num2)

// 풀이 : 문제에서 요구한 solution 함수에 num1, num2 매개변수를 추가한 뒤 제한사항에 음수가 포함되지 않기 때문에 Math.floor 함수를 이용해 소수점을 없애고 몫이 나오도록 하였다.

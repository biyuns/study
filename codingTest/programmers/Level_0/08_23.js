/* 0 이상의 두 정수가 문자열 a, b로 주어질 때, a + b의 값을 문자열로 return 하는 solution 함수를 작성해 주세요.
제한사항
1 ≤ a의 길이 ≤ 100,000
1 ≤ b의 길이 ≤ 100,000
a와 b는 숫자로만 이루어져 있습니다.
a와 b는 정수 0이 아니라면 0으로 시작하지 않습니다.
*/


// 입력 최대 길이가 10이기 때문에 Number를 사용할시 16자리가 넘어가게 되면 값이 손실될 수 있음 -> BigInt 사용
const solution = (a,b) => {
    return String(BigInt(a) + BigInt(b));
}

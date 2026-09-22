/*
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

제한 조건
x는 1 이상, 10000 이하인 정수입니다.
*/

// 변수를 두개로 나누어 계산하는 방법
const solution = x => {
    let xsplit = String(x).split("");
    let sum = xsplit.reduce((sum, item) => sum + Number(item), 0);

    return x % sum === 0 ? true : false;
}

// map과 reduce를 하나의 변수에서 작성하는 방법
const solution = x => {
    let sum = String(x).split("").map(Number).reduce((acc, cur) => acc + cur, 0);

    return x % sum === 0;
}

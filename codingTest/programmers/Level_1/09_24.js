/*
자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.

제한사항
3 ≤ n ≤ 1,000,000
*/

// 배열 정렬으로 찾아내는 방법
const solution = n => {
    let answer = [];
    for(let i=0; i<=n; i++) {
        if(n%i===1) {
            answer.push(i);
        }
    }
    answer.sort((a, b) => a-b);
    return answer[0]
}

// for문으로 축약한 과정
const solution = n => {
    for(let i=0; i<=n; i++)
        if(n%i===1) return i
}

/*
두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ left ≤ right ≤ 1,000
*/

// 본 풀이
const solution = (left, right) => {
    let answer =0;
    for(let i=left; i<=right; i++) {
        let divisor = 0;
        
        for(let j=1; j<=i; j++) {
            if(i%j === 0) { 
                divisor+=1;
            }
        }   
        if(divisor % 2===0) {
            answer += i;
        } else {
            answer -= i;
        }   
    }
    return answer;
}

// Math.sqrt() 사용 방식
/*
해당 문제는 약수의 개수가 홀수인 수는 반드시 완전제곱수라는 특징을 가진다.
완전제곱수란 어떤 정수를 자기 자신과 곱해서 만들어지는 수이다.
일반적으로 약수는 2개씩 짝을 이루지만, 완전제곱수는 4 × 4 = 16처럼 같은 약수가 중복되기 때문에 해당 약수를 한 번만 센다. 따라서 약수의 개수가 홀수가 된다.
따라서 Math.sqrt(i)를 통해 i의 제곱근을 구하고 Number.isInteger() 함수로 제곱근이 정수인지 확인한다.
정수라면 완전제곱수이므로 약수의 개수는 홀수이기 때문에 answer -= i를 정수가 아니라면 완전제곱수가 아니므로 약수의 개수가 짝수로 판단하여 answer += i를 진행한다.
*/
const solution = (left, right) => {
    let answer = 0;

    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }

    return answer;
};

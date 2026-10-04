/*
어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

제한사항
absolutes의 길이는 1 이상 1,000 이하입니다.
absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
signs의 길이는 absolutes의 길이와 같습니다.
signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.
*/

// 본 풀이
const solution = (absolutes, signs) => {
    const answer = [];
    for(let i=0; i<absolutes.length; i++) {
        if(signs[i] === false) {
            answer.push(-absolutes[i])
        } else {
            answer.push(absolutes[i])
        }
    }
    
    return answer.reduce((acc, cur) => acc+cur)
}

// 배열 생성없이 바로 더해서 구하는 방법
const solution = (absolutes, signs) => {
    let answer = 0;

    for(let i = 0; i < absolutes.length; i++) {
        if(signs[i] === false) {
            answer -= absolutes[i];
        } else {
            answer += absolutes[i];
        }
    }

    return answer;
}

// 삼항 연산자 사용 방법
const solution = (absolutes, signs) => {
    let answer = 0;

    for(let i = 0; i < absolutes.length; i++) {
        answer += signs[i] ? absolutes[i] : -absolutes[i];
    }

    return answer;
}

// reduce를 이용한 방법
const solution = (absolutes, signs) => {
    return absolutes.reduce((acc, cur, i) => {
        return acc + (signs[i] ? cur : -cur);
    }, 0);
}

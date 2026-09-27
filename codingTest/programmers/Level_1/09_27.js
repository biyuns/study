/*
정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

제한사항
numbers의 길이는 2 이상 100 이하입니다.
numbers의 모든 수는 0 이상 100 이하입니다.
*/

// 본 풀이
const solution = numbers => {
    const answer = [];    
    for(let i=0; i<numbers.length; i++) {
        for(let j=0; j<numbers.length; j++) {
            if(i !== j) {
                answer.push(numbers[i] + numbers[j])
            }
        }
    }
    return [...new Set(answer)].sort((a, b) => a-b);
}

// 추가 풀이 (중복 제거)
// 기존 풀이에서는 i !== j를 통해서 똑같은 index일때는 계산하지 않도록 설정했지만, 이전에 계산한 값들을 다시 검사하는걸 막는 로직이 존재하지 않았음 이에 두번째 for문에 변수j 선언을 let j = i+1 으로 바꾸어 if문을 제거하고 기존에 계산한 값을 다시 계산하지 않도록 반복횟수를 감소시킴
const solution = numbers => {
    const answer = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            answer.push(numbers[i] + numbers[j]);
        }
    }

    return [...new Set(answer)].sort((a, b) => a - b);
}

// 추가 풀이 filter + indexOf 방법
const solution = numbers => {
    const answer = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            answer.push(numbers[i] + numbers[j]);
        }
    }

    return answer.filter((item, index) => answer.indexOf(item) === index).sort((a, b) => a - b);
}

// 추가 풀이 filter + findIndex 방법
const solution = numbers => {
    const answer = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            answer.push(numbers[i] + numbers[j]);
        }
    }

    return answer.filter((item, index) => {
            return answer.findIndex(value => value === item) === index;
        })
        .sort((a, b) => a - b);
}

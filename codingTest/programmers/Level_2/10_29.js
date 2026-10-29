/*
짝지어 제거하기는, 알파벳 소문자로 이루어진 문자열을 가지고 시작합니다. 먼저 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾습니다. 그다음, 그 둘을 제거한 뒤, 앞뒤로 문자열을 이어 붙입니다. 이 과정을 반복해서 문자열을 모두 제거한다면 짝지어 제거하기가 종료됩니다. 문자열 S가 주어졌을 때, 짝지어 제거하기를 성공적으로 수행할 수 있는지 반환하는 함수를 완성해 주세요. 성공적으로 수행할 수 있으면 1을, 아닐 경우 0을 리턴해주면 됩니다.

예를 들어, 문자열 S = baabaa 라면

b aa baa → bb aa → aa →

의 순서로 문자열을 모두 제거할 수 있으므로 1을 반환합니다.

제한사항
문자열의 길이 : 1,000,000이하의 자연수
문자열은 모두 소문자로 이루어져 있습니다.
*/

// 본풀이(정확성은 통과하지만 효율성 테스트는 통과하지 못하는 코드)
/*
효율성 테스트를 통과하지 못하는 이유
splice(j, 2)는 for문 안에 if문을 통해서 위치하고 있는 인덱스와 그 뒤에 인덱스가 일치하면 해당하는 인덱스위치를 기준으로 다음인덱스까지 제거하기 위해 사용하였다.
실제 문제에 의도대로 붙어있는 짝을 제거하는 역할을 수행되었지만 제한사항 문자열의 길이 1,000,000 이하의 자연수가 있기 떄문에 1,000,000개의 문자열을 가진 자연수가 나오게 된다면 aa제거시 약 100만개의 원소를 앞으로 이동하고 짝을 이루고 있는 원소를 찾을때마다 이 문자 제거 작업을 반복하기 때문에 효율성테스트를 통과하기 힘들다.
*/
const solution = s => {
    const answer = s.split("");
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < answer.length; j++) {
            if (answer[j] === answer[j + 1]) {
                answer.splice(j, 2);
                j--;
            }
        }
    }

    return answer.length === 0 ? 1 : 0;
};

// 개선안 스택(stack) 활용
/*
stack은 마지막에 넣은 데이터를 가장 먼저 꺼내는 자료구조로
*/
const solution = s => {
    const answer = [];

    for (let i = 0; i < s.length; i++) {
        if (answer[answer.length - 1] === s[i]) {
            answer.pop();
        } else {
            answer.push(s[i]);
        }
    }

    return answer.length === 0 ? 1 : 0;
};

// 투 포인터 활용
/*
문자를 실제로 삭제하지 않고, 인덱스 두 개를 이용하여 배열 앞부분에 남아 있는 문자들을 저장하는 방법
*/
const solution = s => {
    const answer = s.split("");
    let j = 0;

    for (let i = 0; i < answer.length; i++) {
        if (j > 0 && answer[j - 1] === answer[i]) {
            j--;
        } else {
            answer[j] = answer[i];
            j++;
        }
    }

    return j === 0 ? 1 : 0;
};

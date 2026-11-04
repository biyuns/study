/*
숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서, 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.

예를 들어, t="3141592"이고 p="271" 인 경우, t의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592입니다. 이 문자열이 나타내는 수 중 271보다 작거나 같은 수는 141, 159 2개 입니다.

제한사항
1 ≤ p의 길이 ≤ 18
p의 길이 ≤ t의 길이 ≤ 10,000
t와 p는 숫자로만 이루어진 문자열이며, 0으로 시작하지 않습니다.
*/

// 본풀이
/*
split을 통해 t의 문자열을 배열로 변환한다.
p의 길이에 따라 묶는 갯수가 달라지기 때문에 while문을 통해서 tsplit[i+p.length-1]!=null일 때 동안 수행되도록 진행한다. 
ex) p의 길이가 3일경우 1,2,3 / 2,3,4 이런식으로 숫자를 묶기 떄문에 i+p.length-1을 진행하여 마지막 인덱스를 넘어가면 수행되지 않도록 설정
answer배열을 만들고 이 배열의 i값에 tsplit 배열에 i부터 i+p의 길이만큼의 값을 가져온뒤 join으로 하나의 문자열로 만든다.
이후 i를 1씩 더한다. 
이를 반복하게 되면 모든 값이 answer의 배열 값에 들어오게 되고 이후 reduce를 통해서 p의 값과 비교하여 작거나 값을시 acc의 값을 증가시킨다.
최종적으로 acc값을 return하여 answer 배열 값에서 p의 값보다 작은 값의 갯수를 출력한다.
*/
const solution = (t, p) => {
    const tsplit = t.split("");
    const answer = [];
    let i=0;
    while(tsplit[i+p.length-1]!=null) {
        answer[i] = tsplit.slice(i, i+p.length).join("");
        i++;
    }
    return answer.reduce((acc, cur) => {
        if(cur <= p) acc++
        return acc;
    }, 0)
}

// 코드 간략화 버전
/*
split 없이 바로 t.slice를 통해서 값을 작성하는 방법
문자열이라 하더라도 인덱스 값으로 접근할 수 있기 때문에 배열로 만들어서 인덱스에 접근하지 않아도 된다.
*/
const solution = (t, p) => {
    const answer = [];
    let i = 0;

    while (i <= t.length - p.length) {
        answer.push(t.slice(i, i + p.length));
        i++;
    }

    return answer.reduce((acc, cur) => {
        if (cur <= p) acc++;
        return acc;
    }, 0);
};

// for, slice를 이용한 방법
/*
count 변수만 생성하고 t의 길이에서 p의 길이만큼 뺀 값에 범위동안 for문을 진행한다.
이후 i, i+p의 범위만큼 t.slice한 값과 p를 바로 계산하여 count값을 증가시킨다.
count 값을 리턴한다.
*/
const solution = (t, p) => {
    let count = 0;

    for (let i = 0; i <= t.length - p.length; i++) {
        if (t.slice(i, i + p.length) <= p) {
            count++;
        }
    }

    return count;
};


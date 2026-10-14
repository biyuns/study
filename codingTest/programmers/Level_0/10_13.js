/*
아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 양의 정수 배열 arr가 매개변수로 주어질 때, arr의 앞에서부터 차례대로 원소를 보면서 원소가 a라면 X의 맨 뒤에 a를 a번 추가하는 일을 반복한 뒤의 배열 X를 return 하는 solution 함수를 작성해 주세요.

제한사항
1 ≤ arr의 길이 ≤ 100
1 ≤ arr의 원소 ≤ 100
*/

// 본풀이 (이중 for문)
const solution = (arr) => {
    const answer = [];
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr[i]; j++) {
            answer.push(arr[i]);
        }
    }
    return answer;
}

// flatMap() Array().fill()방법
/*
**map()과 flatMap()의 차이**
map()은 Array().fill() 사용시 2차원 배열 반환
flatMap()은 Arrayy().fill() 사용시 한 단계 펼쳐서 1차원 배열을 반환

**Array().fill()**
Array()는 배열을 생성하고 fill()은 배열을 특정값으로 채운다.
*/

const solution = arr => arr.flatMap((num) => Array(num).fill(num));

// reduce() 방법
const solution = (arr) =>
    arr.reduce((acc, num) => {
        acc.push(...Array(num).fill(num));
        return acc;
    }, []);


/*
정수 리스트 num_list가 주어질 때, 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.

제한사항
2 ≤ num_list의 길이 ≤ 10
1 ≤ num_list의 원소 ≤ 9
*/

// 본풀이 (삼항 연산자, 배열 길이에서 -1 빼기)
const solution = (num_list) => {
    num_list[num_list.length-1] > num_list[num_list.length-2] ? num_list.push(num_list[num_list.length-1]-num_list[num_list.length-2]) : num_list.push(num_list[num_list.length-1]*2);
    return num_list;
}

// 가독성 개선, 변수 선언
const solution = (num_list) => {
    const last = num_list[num_list.length - 1];
    const prev = num_list[num_list.length - 2];

    num_list.push(last > prev ? last - prev : last * 2);

    return num_list;
};

// at() 메서드 활용
// at()은 배열의 특정 인덱스에 있는 원소를 가져오는 메서드로 음수 인덱스를 이용해 뒤에서부터 접근할 수 있다.
const solution = (num_list) => {
    const last = num_list.at(-1);
    const prev = num_list.at(-2);

    num_list.push(last > prev ? last - prev : last * 2);

    return num_list;
};

// slice() + 구조 분해 할당 방법
const solution = (num_list) => {
    const [prev, last] = num_list.slice(-2);

    num_list.push(last > prev ? last - prev : last * 2);

    return num_list;
};

// 테스트 commit

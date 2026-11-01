/*
정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

제한 조건
arr은 길이 1 이상인 배열입니다.
인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
*/

// 본풀이
// findIndex로 index번호를 찾은뒤 splice로 원본 배열에 해당하는 값을 지운다. 이후 arr의 길이를 측정하여 0일 경우에는 -1, 아닐 경우에는 배열을 반환한다. 
const solution = arr => {
    const answer = arr.findIndex(item => item===Math.min(...arr));
    arr.splice(answer, 1);
    return arr.length === 0 ?  [-1] : arr;
}

// 본 풀이 개선코드
/*
findIndex() 대신 조건식 없이 특정 값의 위치를 찾을 때 더 간결한 indexOf() 사용

Math.min(...arr)가 findIndex()의 콜백 안에 있기 때문에 최솟값을 찾기 위해 배열을 살펴보는 작업이 반복될 경우 최악으로 시간 복잡도가 O(n²)이 될 수 있다. 따라서 Math.min을 따로 계산하여 이를 해결한다.
*/

const solution = arr => {
    const min = Math.min(...arr);
    const minIndex = arr.indexOf(min);

    arr.splice(minIndex, 1);

    return arr.length === 0 ? [-1] : arr;
};

// 원본 배열을 변경시키지 않고 해결하는 방법
const solution = arr => {
    const min = Math.min(...arr);
    const result = arr.filter(item => item !== min);

    return result.length ? result : [-1];
};

// reduce를 이용하여 최솟값을 찾는 방법
const solution = arr => {
    const min = arr.reduce((a, b) => a < b ? a : b);
    const result = arr.filter(item => item !== min);

    return result.length ? result : [-1];
};


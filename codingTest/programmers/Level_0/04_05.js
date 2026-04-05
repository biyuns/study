// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.
const solution = s => Number(s)

// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수
const solution2 = n => String(n).split("").reduce((total, current) => total + Number(current), 0);

// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
const solution3 = n => {
    const ary =Array.from(String(n)).map((item) => {
        return Number(item);
    })
    return ary.reverse();
}
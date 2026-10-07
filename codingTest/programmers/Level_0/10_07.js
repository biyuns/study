/*
정수 리스트 num_list와 정수 n이 주어질 때, n 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

제한사항
2 ≤ num_list의 길이 ≤ 30
1 ≤ num_list의 원소 ≤ 9
1 ≤ n ≤ num_list의 길이
*/

// 풀이
const solution = (num_list, n) => num_list.slice(n-1, num_list.length);


// slice는 두번째 인자값을 사용하지 않을 경우 자동으로 배열끝까지 가져오기 때문에 생략해도 상관없음
const solution = (num_list, n) =>  num_list.slice(n-1);


/*
문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 앞의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

제한사항
my_string은 숫자와 알파벳으로 이루어져 있습니다.
1 ≤ my_string의 길이 ≤ 1,000
1 ≤ n ≤ my_string의 길이
*/

// 풀이
const solution = (my_string, n) => my_string.slice(0, n);

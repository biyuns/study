// 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

const solution = (my_string, letter) => my_string.split("").filter((item) => item !==letter).join("");

// 정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.
const solution = num_list => 
    num_list.length <= 10 
    ?
    num_list.reduce((a, b) => a*b)
    :
    num_list.reduce((a, b) => a+b)

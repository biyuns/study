// 정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.
function solution(num_list) {
    let multiply = 1;
    let square = 0;
    for(let i=0; i<num_list.length; i++) {
        square += num_list[i];
        multiply *= num_list[i];
    }

    return multiply < square**2 ? 1 : 0;
    
}

// 알파벳으로 이루어진 문자열 myString이 주어집니다. 모든 알파벳을 대문자로 변환하여 return 하는 solution 함수를 완성해 주세요.
const solution = myString => myString.toUpperCase();

// 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.
function solution(my_string) {
    let new_my_string = ""
    for(i of my_string) {
        new_my_string += i === i.toLowerCase() ? i.toUpperCase() : i.toLowerCase();
        
    }
    return new_my_string

}

// 문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 return하도록 solution 함수를 완성해주세요.
function solution(strlist) {
    return strlist.map(item => item.length);
    
}
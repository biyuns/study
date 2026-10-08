/*
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

제한 조건
phone_number는 길이 4 이상, 20이하인 문자열입니다.
*/

// 본풀이 
/*
주어진 배열을 split을 하여 배열로 만든 뒤 for문을 이용해 주어진 배열의 길이에 4를 뺀 숫자보다 작다면 *로 변환한다.
이후 마지막에 join을 통해 배열을 합쳐서 문자열로 만든다.
*/
const solution = phone_number => {
    const answer = phone_number.split("");
    for(let i=0; i<phone_number.length; i++) {
        if(i < phone_number.length-4) {
            answer[i] = "*";
        }
    }
    return answer.join("");
}

// repeat와 slice를 이용한 방법
/*
문제는 뒷 4자리를 제외한 나머지 숫자를 *로 가리기 떄무에 repeat를 이용해 주어진 배열의 길이에서 4를 뺀 지점까지 *로 변환한다.
이후 slice를 통해서 뒷 4자리는 그대로 출력될 수 있게 한다.
*/
const solution = phone_number => {
    return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

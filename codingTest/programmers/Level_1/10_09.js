/*
길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

제한 조건
n은 길이 10,000이하인 자연수입니다.
*/

// 본풀이 (if문)
const solution = n => {
    let answer = "";
    for(let i=0; i<n; i++) {
        if(i%2===0) {
            answer += "수"
        } else {
            answer += "박"
        }
    }
    return answer;
}

// 삼항연산자 버전
const solution = n => {
    let answer = "";
    for(let i=0; i<n; i++) i%2 === 0 ? answer += "수" : answer += "박"
    return answer;
}

// repeat + ceil + slice 버전
/*
수박을 반복시킨다. 
수박 두글자를 반복시키기 때문에 Math.ceil(n/2)를 통해서 반복시킨다. Math.ceil은 소수점이 있는 숫자를 올림하여 정수로 만드는 함수이다.
소수점을 올림하게 되면 결국 정수가 나타나게 되며 올림하기 때문에 "수박수박수"를 원해도 출력은 수박수박수박이 되게 된다. 
이를 방지하기 위해 slice(0, n)을 작성하여 0번 부터 n-1번까지의 문자열만 출력되게 한다.
*/
const solution = n => "수박".repeat(Math.ceil(n / 2)).slice(0, n);

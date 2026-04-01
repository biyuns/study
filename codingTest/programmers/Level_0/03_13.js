/*
문제설명
정수 num1과 num2가 주어질 때, num1과 num2의 합을 return하도록 soltuion 함수를 완성해주세요.
*/

function solution(num1, num2) {
    return num1 + num2;
}

// 풀이 : 합을 구해야하니 + 연산자를 이용하여 문제를 풀었다.

/*
문제설명
정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.
*/

solution = (num1, num2) => num1 % num2;

// 풀이 : 나머지를 구해야하니 %를 이용해서 문제를 풀었다. 새롭게 배운 함수 화살표 함수를 통해 문제를 풀었다.


/*
각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.

예각 : 0 < angle < 90
직각 : angle = 90
둔각 : 90 < angle < 180
평각 : angle = 180
*/
function solution(angle) {
    var answer = angle;
    if (answer > 0 && answer < 90) {
        return 1;
    } else if (answer === 90) {
        return 2;
    } else if (answer > 90 && answer < 180) {
        return 3;
    } else {
        return 4;
    }
}

// 풀이 : 특정 조건에서 만족하는 값을 return 해야 하기 때문에 조건문 if 를 이용하여 각 조건마다 주어진 return값을 출력하도록 하였다.

/*
문제설명
정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요
*/
function solution(n) {
    var sum = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            // sum = sum + i;
            sum += sum + i;
        }
    }
    return sum;
}

// 풀이 : n이하의 짝수를 모두 더해야 하니 조건문 for과 if문을 사용하였다. n의 값보다 작거나 같은 값까지 for문을 이용해 반복하여 순회하고 순회한 값들중 if문에 짝수 조건을 통과한 값들을 sum 값에 더한 뒤 이 값을 return 하여 n이하의 모든 짝수의 값을 출력할 수 있게 하였다.

/*
문제설명
머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.
*/
function solution(n, k) {
    var sum = Math.floor(n / 10);
    return n * 12000 + k * 2000 - sum * 2000;
}

// 풀이 : 문제에 수식에 맞게 설정한뒤 10인분마다 음료수 하나를 서비스로 줘야하니 Math.floor(n/10); 수식을 통해 소수점을 반올림하여 n의 입력값에 따라 서비스 음료수를 계산할 수 있게 하였다.


// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
    var answer = numbers;
    var sum = 0;   
    answer.forEach(item => {
        sum += item;
    });
    return sum / answer.length;
    }

//  정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.

// 함수를 사용하지 않고 푼 버전
function solution(num_list) {
    var answer = [];
    for (let i=num_list.length; i>0; i--) {
        answer.push(num_list[i-1]);
    }
    return answer;
}

// 함수 사용해서 푼 버전
function solution(num_list) {
    return num_list.reverse();
}
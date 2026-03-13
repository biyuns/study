// 정수 num1과 num2가 주어질 때, num1과 num2의 합을 return하도록 soltuion 함수를 완성해주세요.
function solution(num1, num2) {
    return num1 + num2;
}


// 정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.
solution = (num1, num2) => num1 % num2;


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


// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요
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


// 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.
function solution(n, k) {
    var sum = Math.floor(n / 10);
    return n * 12000 + k * 2000 - sum * 2000;
}

// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
function solution(numbers) {
    var answer = numbers;
    console.log(numbers);

}

solution(30);
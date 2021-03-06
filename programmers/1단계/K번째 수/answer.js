function solution(array, commands) {
    let answer = [];
    answer = commands.map((v) => {
        return array.slice(v[0] - 1, v[1]).sort((a, b) => a - b)[v[2] - 1];
    });
    return answer;
}

console.log(
    solution(
        [1, 5, 2, 6, 3, 7, 4],
        [
            [2, 5, 3],
            [4, 4, 1],
            [1, 7, 3],
        ]
    )
);

function solution(str) {
  let answer = "";
  for (const x of str) {
    if (x === x.toUpperCase()) answer += x.toLowerCase();
    else answer += x.toUpperCase();
  }

  return answer;
}

console.log(solution("StuDY"));

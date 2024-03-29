function solution(str) {
    let answer;
    let stack = [];
    let stack1 = [1, 2, 3];

    for (const x of str) {
        if (x === ")") {
            while (stack.pop() !== "(");
        } else {
            stack.push(x);
        }
    }
    answer = stack.join("");
    return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));

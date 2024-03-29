function solution(n, k) {
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  queue;

  while (queue.length !== 1) {
    for (let i = 1; i < k; i++) {
      queue.push(queue.shift());
    }
    queue.shift();
  }

  return queue[0];
}

/*
0 1 2 3 4 5 6 7 
1 2 3 4 5 6 7 8

0 0 1 1 2
*/

console.log(solution(8, 3));

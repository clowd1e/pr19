function fib(num) {
    let arr = []
    if(num < 1) {
        return 0
    }
    for(let i = 1; i <= num; i++) {
        if(i === 1) {
            arr.push(1, 1)
            continue
        }
        let sum = arr[i-1] + arr[i-2]
        arr.push(sum)
    }
    return arr[num-1]
}
console.log(fib(0))
console.log(fib(1))
console.log(fib(10))
console.log(fib(20))
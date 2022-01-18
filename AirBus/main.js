const isBalanced = (brackets) => {
    let arr = [];
    const res = brackets.split('').map(el => {
        if (el === '[' || el === '(' || el === '{') {
            arr.push(el);
            return true;
        } else {
            const topBracket = arr[arr.length - 1];
            arr = arr.slice(0, arr.length - 1);
            if (el === '}' && topBracket !== '{') {
                return false;
            } else if (el === ']' && topBracket !== '[') {
                return false;
            } else if (el === ')' && topBracket !== '(') {
                return false;
            } else {
                return true;
            }
        }
    });
    return (!((res.indexOf(false) > -1)));
}

console.log(isBalanced('[()]')) //true
console.log(isBalanced('[(]')) //false
console.log(isBalanced('({(())}{][})')) //false

// ? check an optimised way


all(
    promise1,
    promise2
)
.then(res => {
    const [pResp1, pResp2] = res;
    return promise([pResp1, pResp2]);
})
.then(res => {
    // third promise reult
})
.catch(err => console.log(err));

('', () => {
    //logic
})
// logic

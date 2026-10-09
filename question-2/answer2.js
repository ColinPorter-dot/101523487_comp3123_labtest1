/*
Given the script file callbacks.js, write a script that does the following:
- Create a method resolvedPromise that is similar to
delayedSuccess and resolves a message after a timeout of 500ms.
- Create a method rejectedPromise that is similar to
delayedException and rejects an error message after a timeout of
500ms.
- Call both promises separately and handle the resolved and reject
results and then output to the console
*/
const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved");
        }, 500)
    })
}
let resolvedResult = await resolvedPromise()
console.log(resolvedResult)

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Promise rejected")
        }, 500)
    });
}
let rejectedResult = await rejectedPromise()
console.log(rejectedResult)
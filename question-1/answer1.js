/*
Create a script with a function named lowerCaseWords that takes a
mixed array as input.
The function will do the following.
- return a promise that is resolved or rejected
- filter the non-strings and lower case the remaining words
*/
var mixedArray = ["PIZZA", 10, true, 25, false, "Wings"]

async function lowerCaseWords(jumbledArray) {
    const promise_words = new Promise((resolve, reject) => {        
        let fixedArray = []

        for (let i = 0; i < jumbledArray.length; i++) {
            if (typeof jumbledArray[i] === "string") {
                fixedArray.push(jumbledArray[i].toLowerCase())
            }
        }        

        if (fixedArray.length !== 0) {
            resolve(fixedArray)
        } else {
            reject("The promise is rejected")
        }
    })
    let result = await promise_words
    console.log(result)
}
lowerCaseWords(mixedArray)
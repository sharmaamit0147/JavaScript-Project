function sayMyName(){
    console.log("A");
    console.log("M");
    console.log("I");
    console.log("T");
}

// sayMyName();

// function addTwoNumbers(Number1, Number2){
//     console.log(Number1 + Number2);
// }

function addTwoNumbers(Number1, Number2){

    // let result  = Number1 + Number2
    // return result;
    return Number1 + Number2
}
const result = addTwoNumbers(3, 5);
// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("amit"));
// console.log(loginUserMessage("amit"));


//  ++++++++++++ function with object and array +++++++++++++++++

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));


const user = {
    username: "amit",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "ashu",
    price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000 ]));
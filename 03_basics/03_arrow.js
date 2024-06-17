const user = {
    username: "amit",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sandy"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "amit"
//     console.log(this.username);
// }

// chai()


// const chai = function () {
//     let username = "amit"
//     console.log(this.username);
// }


const chai = () => {
    let username = "amit"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "amit"})

console.log(addTwo(3, 4))


// const myArray = [2, 5, 4 ,6 ,8]

// myArray.forEach()
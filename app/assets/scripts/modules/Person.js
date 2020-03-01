//// v2 using classses...
class Person {
    constructor(name, favoriteColor) {
        this.name = name;
        this.favoriteColor = favoriteColor;
    }
    greet() {
        console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
    }
}

///// v1 of JavaScript module patterns

// function Person(fullName, favColor) {
//     this.name = fullName;
//     this.favoriteColor = favColor;
//     this.greet = function () {
//         console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
//     }
// }


export default Person
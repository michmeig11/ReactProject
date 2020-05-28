class User { 
    // We call the constructor function and create parameters.
    // These will be values that we want to be passed in and stored in the object.
    constructor(first, last, e){
    //    on the right side of these expressions, the word 'first','last' and 'e' below,
    // we have the value that is getting passed into the parens when the bject is created.

        this.f = first;
        this.l = last;
        this.email = e;
        // on the rightside we have an actual properties of the object
        // the left side stores the incoming value rom the right side as the property for 'this' specific object being created.
    }
}

var userOne = new User ("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first); // undefined
console.log(userOne.f); // Paul
console.log(userOne.l); // O'Connor
console.log(userOne); // User {f: "Paul", l: "O'Connor", email:"poconnor@elevenfifty.org"}

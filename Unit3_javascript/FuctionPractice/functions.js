// What is fuction?
'a fuction is a set instructions that preforms a specific task or job'

//Fuctions come in 2 variations:
// built in fuctions
// into the coding lauguage, All we need to do is pass in data

// examples
var className = 'codingclass'
console.log('Coding class.')

// user-defined fuctions- These are custom instructions written by 
// engineers to make code that preforms specific tasks.

// how do we write a user-defined fuction?

function exampleFuction() {
    console.log('the fuction script is connected.')
}

// in order to have a fuction work, we need to call it.
// the above is the fuction definition- Meaning- its only
// telling the computer the instruction- NOT to actully run it.

// we access or call a fuction by writing its name.
//exampleFuction()

let accountBalance=1000

function depositMoney(depositAmount) {
    let NewBalance = accountBalance + depositAmount ;
    document.getElementById('data').innerHTML = NewBalance;
}

// data tha we want to manipulate goes inside of the
// round brackets.
//the instruction on what we want to do with the data
// goes inside of the curly brackets.
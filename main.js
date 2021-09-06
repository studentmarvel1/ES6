"use strict"


// var a = 'Test1';
// let b = 'Test2';
// console.log(b);
// console.log(a);

/*
function testvar(){
    var a = 30;
    if(true){
        var a = 20;
        console.log(a);
    }
    console.log(a);
}


function testLet(){
    let a = 30;
    if(true){
        let a = 20;
        console.log(a);
    }
    console.log(a);
}


for(var i = 0; i < 10; i++){
    console.log(i);
}
console.log(i);

*/
// const colors = [];
// colors.push('red');
// colors.push('green');


// console.log(colors);

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

      static countUsers(){
          console.log('There are 50 Users');
      }

     register(){
         console.log(this.username + ' is now registered .');
     }
}

// let bob = new User('bob', 'bob@gmail.com', 'bob12345');

// bob.register();
// User.countUsers();

    /* 
    class Member extends User{
    constructor(username, email, password, MemberPackage){
      super(username, email, password);
      this.package = MemberPackage;
    }


    getpackage(){
        console.log(this.username + ' is subscribed to the ' + this.package + ' package');
    }
}

let mike = new Member('mike', 'mike@gmail.com', 'mike231123', 'standard')
mike.register();

*/

/*

let name = 'john';

function makeUpperCase(word){
    return word.toUpperCase();
}
let template =
 `<h1>${makeUpperCase('Hello')}, ${name}</h1>
<p>This is a simple template in JavaScript</p>`;

document.getElementById('template').innerHTML = template;


*/

// let thestring = 'Hello, i am a student and learning JavaScript';

//startswith()
//endswith()
//includes()


// console.log(thestring.startsWith('ello'));

// console.log(thestring.includes('and'));
// console.log(thestring.endsWith('JavaScript'));


//Hex 
/*
console.log(0xFF);

//binary
console.log(0b1101101);

//octal
console.log(0o547);


// console.log(Number.isFinite());
// console.log(Number.isNaN(NaN));
console.log(Number.isInteger(Infinity)); 
*/



// function greet($greeting = 'Hello World'){
//     console.log($greeting);
// }

// greet();

/*
let args1 = [1, 2, 3];
let args2 = [9,8,7];

function test(){
    console.log(args1+', '+args2 );
}

// test.apply(null, args);



test(...args1,...args2)

*/


/*

let myArray = [11,22,33,44,55,66];
let mySet = new Set(myArray);


mySet.add({a: 4, b: 2});
mySet.add('100');
mySet.delete('66')


mySet.add('100');
mySet.add('500');
// console.log(mySet.size);

mySet.forEach(function(val){
    console.log(val);
});





//Map

let myMap = new Map([['a1','Hello'], ['b2', 'GoodBye']])
 myMap.set('c3', 'hurray!')
 myMap.delete('a1')
console.log(myMap);

*/







// let carWeakSet = new WeakSet();

// let car1 = {
//     make: 'Honda',
//     model: 'Civic'
// }
// carWeakSet.add(car1);
// let car2 = {
//     make: 'toyota',
//     model: 'Camry'
// }
// carWeakSet.add(car2);
// carWeakSet.delete(car1)

// console.log(carWeakSet);



//iterator
"use  strict"
/*

function prefixer(prefix){
    this.prefix = prefix;

}
prefixer.prototype.prefixArray = function(arr){
    return arr.map((x) => {
        console.log(this.prefix + x);
    })
}
let pre = new prefixer('Hello ')
pre.prefixArray(['Brad', 'Jeffry'])
*/


// let add = function(a,b){
//     let sum = a+b;
//     console.log(sum);
//     return false;
// }


// let add = (a,b) => {
//     let sum = a+b;
//     console.log(sum);
//     return false;
// }
// add(10,2)



//Immediately Resolved


// var myPromise = Promise.resolve('Hulk');

// myPromise.then((res) => console.log(res));

/*

var myPromise = new Promise(function(resolve, reject){
     setTimeout(() => resolve(4), 2000);
});


myPromise.then((res) => {
  res += 21
  console.log(res);
})
*/




/*


function getData(method, url){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function(){
        if(this.status >= 200 && this.status < 300) {
            resolve(xhr.response);
        }else {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        }
    };
    
    
        xhr.onerror = function(){
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}
getData('GET', 'https://jsonplaceholder.typicode.com/todos').then(function(data){
   let todos = JSON.parse(data);
   let output = '';
   for(let todo of todos){
       output += `
       <li>
       <h3>${todo.title}</h3>
       <p>Completed: ${todo.completed}</p>
       </li>
       `;
   }

   document.getElementById('template').innerHTML =output
}).catch(function(err){
    console.log(err);
});


*/




//Generators

function *g1(){
    console.log('Hello');
    yield 'Yield 1 Ran..';
console.log('World');
yield 'Yield 2 Ran';
return 'Returned..'
}
var g = g1();
// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);

for(let val of g){
    console.log(val);
}
var requireVar = require('./count');

console.log('console.log: so we logged the counter1 function with an array of 3 items.', '\n', 'counter1 was required from the /.count file', '\n'
);

console.log(requireVar.counter(['shaun', 'crystal', 'ryu']));


//Normal function statement:
function sayHi(){
    console.log('hi - this is the sayHi, function in app.js');
    }
    
    //normal function statement needs to be invoked:
    sayHi();
    
    //function expression:
    var sayBye = function(){
    console.log('bye');
    };
    
    //sayBye();



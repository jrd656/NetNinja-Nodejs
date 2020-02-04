var counter = function(arr){
    return 'THERE ARE ' + arr.length + ' elements in this array';
    console.log('this is the counter function in count');
};

var counter1 = function(arr){
    return 'THERE ARE COUNTER1 ' + arr.length + ' elements in this array';
    console.log('this is the counter function in count');
};

var counter2 = function(arr){
    return 'THERE ARE COUNTER2 ' + arr.length + ' elements in this array';
    console.log('this is the counter function in count');
};

//console.log(counter1(['shaun', 'crystal', 'ryu']));

module.exports.counter = counter;

module.exports.counter1 = counter1;
module.exports.counter2 = counter2;

console.log(module);
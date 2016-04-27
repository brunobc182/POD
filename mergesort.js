'use strict';

//Generate a array of random numbers
var list = [];
for (var i = 0, l = 100000; i < l; i++) {
    list.push(Math.round(Math.random() * l))
}

//Generate a array of ascending numbers
//var list = [];
//for (var i = 0, l = 100000; i < l; i++) {
//    list.push(i)
//}


//Generate a array of decreasing numbers
//var list = [];
//for (var i = 100000; i >= 0; i--) {
//    list.push(i);
//}


function mergesort(list) {
    if (list.length <= 1)
        return list;

    var mid = Math.floor(list.length / 2),
        left = list.slice(0, mid),
        right = list.slice(mid, list.length);

    return merge(mergesort(left), mergesort(right))
}

function merge(left, right) {
    var sorted = [];
    while (left && left.length > 0 && right && right.length > 0) {
        sorted.push(left[0] <= right[0] ? left.shift() : right.shift());
    }
    return sorted.concat(left, right);
}

var start = new Date();
var sort = mergesort(list);
var finish = new Date();
//console.log(sort);
console.log("Tempo de Execução " + (finish.getTime() - start.getTime()) + " ms.");
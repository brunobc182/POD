'use strict';

//Generate a array of random numbers
/*var list = [];
 for (var i = 0, l = 100000; i < l; i++) {
 list.push(Math.round(Math.random() * l))
 }*/

//Generate a array of ascending numbers
/*
 var list = [];
 for (var i = 0, l = 5; i < l; i++) {
 list.push(i)
 }
 */


//Generate a array of decreasing numbers
var list = [];
for (var i = 10000; i >= 0; i--) {
    list.push(i);
}


function quicksort(list) {

    if (list.length <= 1) return list;

    var left = [], right = [], pivot = list[0];
    for (var i = 1; i < list.length; i++) {
        list[i] < pivot ? left.push(list[i]) : right.push(list[i]);
    }
    return quicksort(left).concat(pivot, quicksort(right));
}

var start = new Date();
var sorted = quicksort(list);
var finish = new Date();
// console.log(sorted);
console.log("Tempo de Execução " + (finish.getTime() - start.getTime()) + " ms.");
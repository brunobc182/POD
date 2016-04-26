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
var array = [10, 8, 4, 3, 1, 0];
// for (var i = 100; i >= 0; i--) {
//     array.push(i);
// }

function countingSort(array, min, max) {
    var i, z = 0, count = [];

    for (i = min; i <= max; i++) {
        count[i] = 0;
    }

    for (i = 0; i < array.length; i++) {
        count[array[i]]++;
    }

    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            array[z++] = i;
        }
    }
    return array;
}

var start = new Date();
var sortedNumbers = countingSort(array);
var finish = new Date();
console.log(sortedNumbers);
console.log("Tempo de Execução " + (finish.getTime() - start.getTime()) + " ms.");
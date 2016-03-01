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
for (var i = 0, l = 100000; i < 100000; i++, l--) {
    list.push(l);
}

//Bubble Sort
function bubble(list) {

    for (var i = 0; i <= list.length - 1; i++) {
        for (var j = 0; j <= list.length - 1; j++) {
            if (list[j] > list[j + 1]) {
                var temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
            }
        }
    }
}

var start = new Date();
bubble(list);
var finish = new Date();
console.log(list);
console.log("Tempo de Execução " + (finish.getTime() - start.getTime()) + " ms.");

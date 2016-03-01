'use strict';

/*
 //Generate a array of random numbers
 var list = [];
 for (var i = 0, l = 100000; i < l; i++) {
 list.push(Math.round(Math.random() * l))
 }
 */

/*//Generate a array of ascending numbers
var list = [];
for (var i = 0, l = 100000; i < l; i++) {
    list.push(i)
}*/

//Generate a array of decreasing numbers
var list = [];
for (var i = 0, l = 100000; i < 100000; i++, l--) {
    list.push(l);
}


function selection(list) {
    var length = list.length;

    for (var i = 0; i < length - 1; i++) {
        var min = i;
        for (var j = i + 1; j < length; j++) {
            if (list[j] < list[min]) {
                min = j;
            }
        }
        if (min != i) {
            var tmp = list[i];
            list[i] = list[min];
            list[min] = tmp;
        }
    }
}

var start = new Date();
selection(list);
var finish = new Date();
console.log(list);
console.log("Tempo de Execução " + (finish.getTime() - start.getTime()) + " ms.");
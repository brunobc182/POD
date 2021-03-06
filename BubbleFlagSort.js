'use strict';

/*//Generate a array of random numbers
 var list = [];
 for (var i = 0, l = 100000; i < l; i++) {
 list.push(Math.round(Math.random() * l))
 }*/

/*
//Generate a array of ascending numbers
var list = [];
for (var i = 0, l = 100000; i < l; i++) {
    list.push(i)
}
*/


//Generate a array of decreasing numbers
var list = [];
for (var i = 0, l = 100000; i < 100000; i++, l--) {
    list.push(l);
}


//Bubble Sort With Flag
function bubbleFlag(list) {
    do {
        var swap = false;
        for (var i = 0; i < list.length - 1; i++) {
            if (list[i] > list[i + 1]) {
                var temp = list[i];
                list[i] = list[i + 1];
                list[i + 1] = temp;
                swap = true;
            }
        }
    } while (swap);
}

var start = new Date();
bubbleFlag(list);
var finish = new Date();
console.log(list);
console.log("Tempo de Execução " + (finish.getTime() - start.getTime()) + " ms.");
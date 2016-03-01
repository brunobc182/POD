'use strict';

//Generate a array of random numbers
/*var list = [];
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

//Insertion Sort
function insertion(list) {

    var i, j, temp;

    for (i = 0; i < list.length; i++) {
        temp = list[i];
        j = i;
        while (j > 0 && list[j - 1] > temp) {
            list[j] = list[j - 1];
            j = j - 1;
        }
        list[j] = temp;
    }
}

var start = new Date();
insertion(list);
var finish = new Date();
console.log(list);
console.log("Tempo de Execução " + (finish.getTime() - start.getTime()) + " ms.");




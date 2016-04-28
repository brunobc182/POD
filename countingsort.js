'use strict';

//Generate a array of random numbers
var array = [];
for (var i = 0, l = 100000; i < l; i++) {
    array.push(Math.round(Math.random() * l))
}

//Generate a array of ascending numbers
//var array = [];
//for (var i = 0, l = 100000; i < l; i++) {
//    array.push(i)
//}


//Generate a array of decreasing numbers
//var array = [];
//for (var i = 100000; i >= 0; i--) {
//    array.push(i);
//}

function getMax(array) {

    var max = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

function countingSort(array, min, max) {
    var i, k = 0, count = [];

    //Conta a qtd de elementos
    for (i = min; i <= max; i++) {
        count[i] = 0;
    }


    //Insere a qtd de cada elemento dentro das respectivas posições
    for (i = 0; i < array.length; i++) {
        count[array[i]]++;
    }

    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            array[k++] = i;
        }
    }
    return array;
}

var start = new Date();
countingSort(array, 0, getMax(array));
var finish = new Date();
//console.log(sortedNumbers);
console.log("Tempo de Execução " + (finish.getTime() - start.getTime()) + " ms.");
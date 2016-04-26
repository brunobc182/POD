'use strict';

//Generate a array of random numbers
var numbers = [];
for (var i = 0, l = 100000; i < l; i++) {
    numbers.push(Math.round(Math.random() * l))
}

//Generate a array of ascending numbers
//var numbers = [];
//for (var i = 0, l = 100000; i < l; i++) {
//    numbers.push(i)
//}
//

//Generate a array of decreasing numbers
//var numbers = [];
//for (var i = 100000; i > 0; i--) {
//    numbers.push(i);
//}


function quickSort(numbers, indexLow, indexHigh) {
    if (indexLow == undefined) indexLow = 0;
    if (indexHigh == undefined) indexHigh = numbers.length - 1;

    var i = indexLow;
    var j = indexHigh;
    var pivot = numbers[indexLow + Math.floor((indexHigh - indexLow) / 2)];
    //var pivot = numbers[0];

    while (i <= j) {
        while (numbers[i] < pivot) {
            i++;
        }
        while (numbers[j] > pivot) {
            j--;
        }

        if (i <= j) {
            var swap = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = swap;

            i++;
            j--;
        }
    }

    if (indexLow < j) {
        quickSort(numbers, indexLow, j);
    }
    if (i < indexHigh) {
        quickSort(numbers, i, indexHigh);
    }
}

var start = new Date();
quickSort(numbers);
var finish = new Date();
//console.log(numbers);
console.log("Tempo de Execução " + (finish.getTime() - start.getTime()) + " ms.");
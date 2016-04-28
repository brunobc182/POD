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
var arr = [];
for (var i = 100000; i >= 0; i--) {
    arr.push(i);
}


//Função que troca elementos
function swap(data, i, j) {
    var tmp = data[i];
    data[i] = data[j];
    data[j] = tmp;
}


//Ordena o Heap
function heap_sort(arr) {
    put_array_in_heap_order(arr);
    var end = arr.length - 1;
    while (end > 0) {
        swap(arr, 0, end);
        sift_element_down_heap(arr, 0, end);
        end -= 1
    }
}


//Verifica se o vetor é uma estrutura Heap
function put_array_in_heap_order(arr) {
    var i;
    i = arr.length / 2 - 1;
    i = Math.floor(i);
    while (i >= 0) {
        sift_element_down_heap(arr, i, arr.length);
        i -= 1;
    }
}


//Verifica se o elemento esta na posição correta, se não estiver ele troca
function sift_element_down_heap(heap, i, max) {
    var i_big, c1, c2;
    while (i < max) {
        i_big = i;
        c1 = 2 * i + 1;
        c2 = c1 + 1;
        if (c1 < max && heap[c1] > heap[i_big])
            i_big = c1;
        if (c2 < max && heap[c2] > heap[i_big])
            i_big = c2;
        if (i_big == i) return;
        swap(heap, i, i_big);
        i = i_big;
    }
}
var start = new Date();
heap_sort(arr);
var finish = new Date();
console.log(arr);
console.log("Tempo de Execução " + (finish.getTime() - start.getTime()) + " ms.");
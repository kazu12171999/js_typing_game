'use strict';

const  question = [
    'JavaScript',
    'document',
    'window',
    'getElementById',
    'getElementByClassName',
    'addEventListener'
];

// console.log(question);

const entered = document.getElementById('enterhed');
const remained = document.getElementById('remained');
const inputText = document.getElementById('inputText');

let remainedTextWords = remained.textContent.split('');

document.addEventListener('input', (e) => {
    if(remainedTextWords[0] === e.data){
        console.log('正解！');
    }else{
        console.log('不正解');
    }
});
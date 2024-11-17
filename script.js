'use strict';

const  questions = [
    'JavaScript',
    'document',
    'window',
    'getElementById',
    'getElementByClassName',
    'addEventListener'
];

// console.log(question);

const entered = document.getElementById('entered');
const remained = document.getElementById('remained');
const inputText = document.getElementById('inputText');

let remainedTextWords = remained.textContent.split('');
let enterdTextWords = []; 
let currentKey;
let currentText;

const setQuestion  = () => {

    currentKey = Math.floor( Math.random() * questions.length);
    currentText = questions[currentKey];
    
    entered.textContent = '';
    remained.textContent = currentText;
    inputText.value = '';
    
    enterdTextWords = [];
    remainedTextWords = currentText.split('');
};

setQuestion();

document.addEventListener('input', (e) => {
    if(remainedTextWords[0] === e.data){
        
        enterdTextWords.push(remainedTextWords[0]);
        remainedTextWords.shift();

        console.log('==============================');
        console.log('入力済み：' + enterdTextWords);
        console.log('未入力：' + remainedTextWords);
        console.log('==============================');

        entered.textContent = enterdTextWords.join('');
        remained.textContent = remainedTextWords.join('');

        if (remainedTextWords.length <= 0){
            console.log('クリア！');
            setQuestion();
        }

    }else{
        console.log('不正解');
    }
});
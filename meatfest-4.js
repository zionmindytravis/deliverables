'use strict';

//  Write a functions that translates an input string by replacing each
//  character with a number representing the amount of times that character
//  appears in the string. Then separate each individual number with a
//  different character.


const translator = function (str, character) {
    let strArray = str.split('');

    const newArray = strArray.reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});

    let outputArray = [];

    strArray.forEach(char => {
        outputArray.push(newArray[char]);
    });

    console.log(outputArray.join(character));
};

translator('hello world', '-');
translator('challenge', '/');
'use strict';

//Write a function that makes the entire string uppercase and sorts it in alphabetical order by last name. if the last names are the same sort them by the first name. Put the last name in front of the first name, remove the colons and semicolons, put the names in paenthesis and seperate the names with commas. The end string should loook like this:

//(CARANGAL, GENE)(MEYER, JEFF)(MEYER....

function order(input) {
    input = input.toUpperCase();
    let names = input.split(';');
    let names2 =[];

    names.forEach(function(name) {
        names2.push(name.split(':'))
    });
    names2.forEach(function(name) {
        name = name.reverse();
    })
    names2.sort();

    names2.forEach(function(name) {
        name = name.join(', ');
    });
    return '(' + (names2.join(')(' ) + ')');

}

console.log(order('Travis:Meyer;Gene:Carangal;Tom:Young;Jeff:Meyer'));

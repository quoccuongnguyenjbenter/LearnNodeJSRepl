// console.log("Hello NodeJS");
// var readlineSync = require('readline-sync');

// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');
// var languages=[];
// var language=readlineSync.question("What is your favourite??? ");
// languages.push(language);
// console.log(languages);
// var pet={};
// var name=readlineSync.question("What is huni of you??? ");
// var age=readlineSync.question("Age of her???? ");
// var home=readlineSync.question("What is her's address???? ");
// pet.name=name;
// pet.age=parseInt(age);
// pet.home=home;
// console.log(pet);
var fs=require('fs');
// var song2=fs.readFileSync('./song2.txt',{encoding: 'utf8'});
// console.log(song2);
// console.log('End');
// console.log('Start');
// fs.readFile('./song1.txt',{encoding:'utf8'},function(err,song1){
//     console.log(song1);
// });
// console.log('End');
console.log('Start');
fs.readFile('./song1.txt',{encoding:'utf8'},function(err,song1){
    console.log(song1);
});
console.log('End');



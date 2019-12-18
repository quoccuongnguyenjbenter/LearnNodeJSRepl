//1------------
// console.log("Hello NodeJS");
//var readlineSync = require('readline-sync');
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

//2--------------
// var fs=require('fs');
// console.log('Start');
// var song1=fs.readFileSync('song1.txt',{encoding: 'utf8'});
// console.log(song1);
// var song2=fs.readFileSync('song2.txt',{encoding: 'utf8'});
// console.log(song2);
// console.log('End');
// console.log('Start');
// fs.readFile('song1.txt',{encoding:'utf8'},function(err,song1){
//     console.log(song1);
// });
// console.log('End');

//3--------------------------
// var coffeeMachine={
//     makeCofee: function (onFinish){
//         console.log("Is running");
//         onFinish();
//     }
// };
// var beep=function(){
//     console.log("tít tít");
// };
// coffeeMachine.makeCofee(beep);
// coffeeMachine.makeCofee(function(){
//     console.log("Finish");
// });

//4----------------
// var fs=require('promise-fs');
// fs.readFile("./song1.txt",{encoding:"utf8"})
// .then(function(song1){
//     console.log(song1);
// })
// .catch(function(error){
//     console.log(error);
// });

//5------------------------
var fs=require('fs');
function readFilePromise(path){
    return new Promise(function(resolve,reject){
        fs.readFile(path,{encoding:"utf8"},function(err,data){
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    });
}
readFilePromise("song3.txt")
.then(function(song1){
    console.log(song1);
})
.catch(function(error){
    console.log(error);
});



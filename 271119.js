// var readLineSync=require('readline-sync');
// var fs=require('fs');
// var students=[];
// function loadData(){
//     var fileContent=fs.readFileSync('./data.json');
//     students=JSON.parse(fileContent);
// }
// function showMenu(){
//     console.log("1. Show All Students");
//     console.log("2. Create A New Student");
//     console.log("3. Save And Exit");
//     var option=readLineSync.question(">>>");
//     switch(option){
//         case '1':
//                 showAllStudents();
//                 showMenu();
//                 break;
//         case '2':
//                 showCreateNewStudent();
//                 showMenu();
//                 break;
//         case '3':
//                 showSaveAndExit();
//                 break;
//         default:
//                 console.log("Wrong Option");
//                 showMenu();
//                 break;
//     }
// }
// function showAllStudents(){
//     for(var student of students){
//         console.log("Name: "+student.name+", Age: "+student.age);
//     }
    
// }
// function showCreateNewStudent(){
//     var name=readLineSync.question("What is your name???? ");
//     var age=readLineSync.question("How old are you????? ");
//     var student={
//         name: name,
//         age: parseInt(age)
//     };
//     students.push(student);
// }
// function showSaveAndExit(){
//     var content=JSON.stringify(students);
//     fs.writeFileSync('./data.json',content,{encoding:'utf8'});

// }
// function main(){
//     loadData();
//     showMenu();
// }
// main();
// function Mouse(color){
//     this.color=color;
//     this.dead=false;
// }
// Mouse.prototype.die=function(){
//     this.dead=true;
// }
// function Cat(){
//     this.stomach=[];
// }
// Cat.prototype.eat=function(mouse){
//     this.stomach.push(mouse);
//     mouse.die();
// }
// var Mouse=require("./mouse");
// var Cat=require("./cat");
// var mickey=new Mouse("black");
// var jerry=new Mouse("yellow");
// console.log(mickey);
// console.log(jerry);
// var tom=new Cat();
// tom.eat(mickey);
// tom.eat(jerry);
// console.log(tom);
// var fs=require('fs');
// var song1=fs.readFileSync('./song1.txt',{encoding:'utf8'});
// console.log(song1);
// fs.writeFileSync('./song2.txt','Hello Everybody');
// function abc(){
//     var value=Math.random();
//     var result=(value<0.5)?'Sap':'Ngua';
    // if(value<0.5){
    //     console.log('Sap');
    //     result = 'Sap';
    // }
    // else{
    //     console.log('Ngua');
    //     result = 'Ngua';
    // }
//     console.log(result);
// };
// abc();
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
readFilePromise("song1.txt")
.then(function(song1){
    console.log(song1);
})
.catch(function(error){
    console.log(error);
});

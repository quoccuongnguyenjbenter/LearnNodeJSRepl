var fs=require('fs');
var co=require('co');
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

// co(function*(){
//     // var song1=yield readFilePromise('./song1.txt');
//     // var song2=yield readFilePromise('./song2.txt');
//     // var song3=yield readFilePromise('./song3.txt');
//     // console.log(song1,song2,song3);
//     // return [song1,song2,song3];
//     var values= yield[
//         readFilePromise('./song1.txt'),
//         readFilePromise('./song2.txt'),
//         readFilePromise('./song-2.txt')
//     ];
//     return values;
// }).then(function(values){
//     console.log(values);
// }).catch(function(err){
//     console.log(err);
// });
// var readFiles=co.wrap(function*(files){
//     var values=yield files.map(function(file){
//         return readFilePromise(file);
//     });
//     return values;
// });

// readFiles(['song1.txt','song2.txt','song-2.txt'])
//     .then(function(values){
//     console.log(values);
// });



async function run(){
    var song1= await readFilePromise('./song1.txt');
    var song2= await readFilePromise('./song2.txt');
    var song3= await readFilePromise('./song-2.txt');
    // console.log(song1,song2,song3);
    return [song1, song2];
};
run();
run().then(function(values){
    console.log(values);
});
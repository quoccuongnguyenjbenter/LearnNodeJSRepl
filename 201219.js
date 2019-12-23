// var Cuong={
//   age: 24,
//   address: "Da Nang",
//   look:{
//     hair: "73",
//     eye: "brown"
//   }
// };
// function getObject(obj,keys){
//   for(var keys in Cuong){
//   console.log(keys);
//   //console.log(Cuong[i]);
//   //console.log(getObject(Cuong[i]));
//   }
//   if(keys !=null){
//     console.log(getObject(obj[keys]));
//   }
// }
const object1={
  name: "Cuong",
  age: 12,
  address: "Da Nang",
  look:{
    face: "handsome",
    hair: "black",
    eye: "brown"
  }
};
console.log(Object.values(object1.name));
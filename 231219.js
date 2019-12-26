// var a=[1,2,3];
// var b=[4,5,6];
// // var c=a.concat(b);
// // var c=4;
// // var d=a.push(c)
// // var c=a.pop();
// // var c=a.shift();
// var c=a.unshift(0);
// console.log(c);
var coffeeMachine={
  makeCoffee: function(onFinish){
    console.log("Making coffee......");
    onFinish();
  }
}
var beep=function(){
  console.log("Cường");
}
coffeeMachine.makeCoffee(beep);
coffeeMachine.makeCoffee(function(){
  console.log("Bảo");
})
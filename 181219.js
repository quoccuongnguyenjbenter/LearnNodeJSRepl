// var employees=[
//   {name:'Cuong',age:28},
//   {name:'Bao', age:29},
//   {name:'Nguyen',age:30}
// ];
// console.log("---------------------");
// for(i=0;i<3;i++){
//   console.log(employees[i].name,employees[i].age);
// }
// console.log("=====================");
// for(var employee of employees){
//   console.log(employee.name+" và "+employee.age);
// }
// var dem=0;
// for(dem;dem<employees.length;dem++){
//   console.log(dem);
// }
//  var myFreind={
//    name: 'Bảo',
//    age: 24,
//    gender: 'male'
//  };
//  for(var myBan in myFreind){
//    console.log(myBan, myFreind[myBan]);
//  }
function coolWaysToKillThanos() {
  return {
    data: {
      planOne: {
        method: 'Dr.Strange',
        rate: '7/10'
      },
      planTwo: {
        method: 'Call John Wick',
        rate: '8/10'
      }
    },
    possibility: '60%'
  }
}

function bestWaysToKillThanos() {
  return {
    data: {
      plans: [
        { method: 'Send Ant-man', rate: '9/10' },
        { method: "Blow Star-lord's head", rate: '10/10' },
      ],
      possibility: '100%'
    }
  }
}
// const res = coolWaysToKillThanos();
// const data = res.data;
// const possibility = res.possibility;

// console.log({ data, possibility });

// console.log("=================================");
// const { data, possibility } = coolWaysToKillThanos();
// console.log(data.planTwo, possibility);
// -> {method: 'Call John Wick', rate: '8/10'}  '60%'
// console.log("--------------------------------------");
// const { data: { planTwo }, possibility } = coolWaysToKillThanos();

// console.log(data.planTwo);
// console.log(planTwo, possibility);
// console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
// const { data: { planTwo: { method, rate } }, possibility } = coolWaysToKillThanos();

// console.log(method, rate);
// console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
// const { data: { planTwo: { method: cool, rate: notCool } }, possibility } = coolWaysToKillThanos();

// console.log(cool, notCool);
console.log("////////////////////////////////////////////");
const { data: { plans: [plan1, plan2] } } = bestWaysToKillThanos();

console.log(plan1, plan2);

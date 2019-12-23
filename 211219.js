//

var obj={
  "id": 23,
 "name": "Jacob",
 "link": {
     "rel": "self",
     "link": "www.abc.com"
 },
 "company":{
       "data":{
           "id": 1,
           "ref": 324
       }
 }
}
var arr = [];

for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        var innerObj = {};
        // var inner = '' ;
        innerObj[prop] = obj[prop];
        // inner[prop] = obj[prop];
        arr.push(innerObj)
        // arr.push(inner);
      }
}

console.log(arr);
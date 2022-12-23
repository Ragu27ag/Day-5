var a = [1,2,3,4,5,6,7,9,11];


//ODD ELEMENTS IN AN ARRAY
// (function (odd){
//     for(var i in odd){
//     if(odd[i] % 2 !== 0){
//         console.log(odd[i]);
//     }
// }
// })(a);


// var tc = ['csk','rcb','kkr'];

// var str = () => {

// }


//SUM OF NOS IN ARRAY
// (function (a){
//     var sum = 0;
//     for(var ele of a){
//         sum = sum + ele; 
//     }
//     console.log(sum);
// })(a);

// PRIME IN ARRAY
// var prime = function (a){
//     var p = "";
    
//     for(var i = 0;i < a.length;i++ ){
//         var count = 0;
//         for(var j = 2;j <= a[i]-1;j++){
//             if(a[i] % j == 0){
//                 count++;
//             }
//         }
//         if(count == 0){
//             p = p + a[i]+" ";
//         }
//     }
//     return p.trim();
// }

// console.log(prime(a));

//String return
// var b = ['mom','aaa'];

// var fun = function (b){
  
//   var res = "";
    
//     for(var i = 0;i < b.length;i++){
//       var pal = "";
//         var temp = b[i];
//         for(var j = temp.length-1;j >= 0;j--){
//         pal +=  temp[j];
//     }
//     if(pal === temp){
//         res += pal+' '
//     }
    
//     }
    
//     return res;
// }

// console.log(fun(b));


// var c = ['A','B','A','c'];


// var dup = c.filter((ele,index) => {
//     return c.indexOf(ele) === index;
// });

// console.log(dup);


var a = [1,2,3,4,5];

var r = function (a,k){
    for(var i = 0;i < k ;i++){
    a.unshift(a.pop());
}
return a;
}
console.log(r(a,2));

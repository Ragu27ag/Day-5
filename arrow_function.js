var a = [1,2,3,4,5];

// Odd numbers
// var c = (a) =>{
//     for(var ele of a){
//         if(ele % 2 !== 0){
//             console.log(ele);
//         }
//     }
// }
// c(a);


//Addition 

// var d = (a) =>{
//     var sum = 0;
//         for(var ele of a){
//            sum = sum + ele
//         }
//         return sum;
//     }
//     console.log(d(a));


//Prime

// var e = (a) =>{
//     for(var i = 0;i < a.length;i++){
//         var count = 0;
//         for(var j = 2;j < a[i];j++){
//             if(a[i] % j == 0){
//                count++;
//             }
//         }
//         if(count == 0){
//             console.log(a[i]);
//         }
//     }
// }
// e(a);

var b = ['mom','aaa'];

var fun = function (b){
  
  var res = "";
    
    for(var i = 0;i < b.length;i++){
      var pal = "";
        var temp = b[i];
        for(var j = temp.length-1;j >= 0;j--){
        pal +=  temp[j];
    }
    if(pal === temp){
        res += pal+' '
    }
    
    }
    
    return res;
}

console.log(fun(b));
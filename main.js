

	//question1	
//   
// function printInt(n){  
   
   
//     for (var i = 0; i<=n; i++) {
//     	console.log(i);
//     	} 

//  }
//        console.log(printInt(10));

 
 // question2

 // function printInt(n){

	
 //  for ( var i=n; i>0; i--) {
      
 //       console.log(i);
 //    } 	
    
 //    } 
 //        console.log(printInt(5));

//question3    
 
 // function checkInput(i){
    
 //    var i;
 
        
 //        if ( typeof i == 'number') {
 //          return typeof i;
         
 //         } else if (typeof i=='string') {
 //         return typeof i;
         
 //          }else if (typeof i=='boolean') {
 //           return typeof i;
         
 //          }else {
 //            return(-1);
 //          }
 //  }
  
    

  
    
 //     console.log(checkInput('room'));

//question4
  //  function evenAdding(num){
	
	 // var answer=0;
	
	
	 //  for (var i=1;i<=num; i+=1) {
		 
  //    if (i%2==0)
  //  		answer = answer + i;
  //  	} 

  //   return answer;

  //  }
  //  console.log(evenAdding(8));


 

 //question5

 // capitalize the first letter

 
 	// var myString = "hello world";
    // var myStringArray = myString.split(" ");
     
// function capitalize(myString){
//      	    var myString ='hello world';

//       	 // result to be return
//          var myStringCap1 = ""

//           // split string into array of words         
//           var myStringArray =myString.split(" ");

//   myStringArray = ['hello', 'world']
//            for (var i=0; i<myStringArray.length; i++) {

//            	 myStringCap1 += (myStringArray[i][0].toUpperCase()+ myStringArray[i].slice(1));
//            	 myStringCap1 += " ";
//  myStringCap2 = (myStringArray[i][1].toUpperCase()+ myStringArray[i].slice(1));
//             }

          
//            return myStringCap1;
//  }

              
        
//          console.log(capitalize("das"));
            	
//  question 6

    // function simpleReverse(myString){
     	
       // var myStringArray = myString.split("");
          
       // var arrayReversed = myStringArray.reverse();
    
        // var result = arrayReversed.join('');
     
           // return result;

   // }

      // console.log(simpleReverse("hello"));



 // question 7

// function findDiff(arr){
 
  
//   var max = Math.max.apply(null, arr); 

//   var min = Math.min.apply(null, arr);
//      return max - min;
//  }
 
//  console.log(findDiff([2,5,30]));


// question 8


// function convertTime(num) {
    
//    var hour = Math.floor(num/60);
//    var min = num%60
   
//     return hour+':'+min;
// }

// console.log(convertTime(122));




// question 9

 //      function findStr(word1,word2){
    
 //          var acc = word1.length;
 //          var acc1 = word2.slice(acc);
 //          var accumulator = 0
 // // / console.log(word2.length);
 //       for (var i=0; i < word2.length; i++) {
          
 //           if(word2.slice(i,acc+i) == word1){
            
 //             accumulator++

 //           }  

 //     }
 //  return accumulator++;
 // }
 //    console.log(findStr("mom","momymomymomymomy"));
 


 // question 10

//  function selfdividingNumbers(left,right){
     
//        var numb=[];
       
//        for (var i=left; i<=right;i++){
         
//            if (isselfDividing(i)) {
//              numb.push(i)
//            }
       
//        }
//       return numb;
//       }
    
//   function isselfDividing(num){

//     var num = num.toString();
        
//     for (var j=0; j<num.length; j++){
      
//       if((parseInt(num) % parseInt(num[j])) !== 0){
//         return false;
//       }
//     }

//      return true;
//   }
    
// console.log(selfdividingNumbers(1,22));







// extra credit

// function moveZeros(nums) {
//     var i;
//     var nums1;
//     for (i = 0; i < nums.length; i++) {
//         if(nums[i] === 0) {
//             nums1 = nums.splice(i, 1);
//             nums.push(0);
//         }
//     }
//     return nums  ;
// }
//  console.log(moveZeros([1,2,0,5,0]))
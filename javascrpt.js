console.log("hello my nams is Divya")
   


// find the max number in git
let arr1 = [10, 11, 29, 50, 68]

function findMax(arr1) {
   let max = arr1[0]
   for (let i = 1; i <= arr1.length; i++){
      if (arr1[i] >max) {
         max=arr1[i]
      }
     
   }
   return max
   
}
console.log(findMax(arr1))



// find the min number

let small = [1, 2, 3, 4, 0]
 
function findMin(small) {
   let min = small[0]
   for (let i = 1; i <= small.length; i++){
      if (small[i] < min) {
         min=small[i]
      }
   }
   
   return min;
}
console.log(findMin(small))



// rever the name in array

let myname = ["Divya",  "thapa"]
let reverse1 = " "
for (i = myname.length - 1;  i >= 0;  i--){
   reverse1+=myname[i]
}

console.log(reverse1)






// Map function

function addNum(array,num){
  return array.map((value)=>  value*2);
}

console.log(addNum([1,2,3],2))


// Filter function

function removeEgg (foods) {
  let eggsRemoved = 0;
   return foods.filter(food => {
    if(food === 'egg' && eggsRemoved<2){
      eggsRemoved++;
      return false;     
    }
      return true;
   });
}
console.log(removeEgg(['egg','apple','egg','egg','ham']));
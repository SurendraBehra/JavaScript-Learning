function heads(){  
  const Result = document.querySelector('.result');
  Result.innerHTML = `you choose heads`;
}

function tails(){
  console.log('tails');
  const Result = document.querySelector('.result');
  Result.innerHTML = `you choose tails`;
} 
function result(){
  const inputElement = document.querySelector('.inputbtn');
  document.querySelector('.js-para').innerHTML = inputElement.value;
}


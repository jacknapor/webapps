

fetch('https://dog.ceo/api/breeds/image/random')
  .then(function(response){
    return response.json()
  })
  .then(function(myJson){
    var myImage = document.getElementById('rand');
    myImage.src=myJson.message;
  });


fetch('https://dog.ceo/api/breeds/list/all')
	.then(function(response){
		console.log(response)});


var arr= fetch('https://dog.ceo/api/breeds/list').then(resp => resp.json()).then(j => return j.message);
console.log(arr);

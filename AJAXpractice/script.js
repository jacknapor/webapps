

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
		return response.json()})
	.then(function(response){
		console.log(response.message)
	});

fetch('https://dog.ceo/api/breed/retriever/golden/images/random')
  .then(function(response){
    return response.json()
  })
  .then(function(myJson){
    var myImage = document.getElementById('GoldenRetriever');
    myImage.src=myJson.message;
  });

  fetch('https://dog.ceo/api/breed/labrador/images/random')
  .then(function(response){
    return response.json()
  })
  .then(function(myJson){
    var myImage = document.getElementById('Lab');
    myImage.src=myJson.message;
  });

  fetch('https://dog.ceo/api/breed/germanshepherd/images/random')
  .then(function(response){
    return response.json()
  })
  .then(function(myJson){
    var myImage = document.getElementById('GermanShepherd');
    myImage.src=myJson.message;
  });




fetch('https://dog.ceo/api/breeds/image/random')
  .then(function(response){
    return response.json()
  })
  .then(function(myJson){
    var myImage = document.getElementById('rand');
    myImage.src=myJson.message;
  });

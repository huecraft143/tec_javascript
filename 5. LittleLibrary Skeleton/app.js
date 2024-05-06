var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
var button1= document.querySelector('.submit1');

button.addEventListener('click', function(name){
fetch('https://librarymanagementpw.azurewebsites.net/api/Book')
.then(response => response.json())
.then(data => {
  console.log(data);
})
.catch(err => alert("get andata male"));
})

post = {
  "id": 4,
  "title": "prova",
  "price": 24,
  "isOut": true,
  "isbn": "asdasdasdasdasd",
  "genreId": 1,
  "shelfId": 1,
  "genreName": "string"
}

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(post)
};

button1.addEventListener('click', function(name){
fetch('https://librarymanagementpw.azurewebsites.net/api/Book', requestOptions)
.catch(error => {
  console.error(error);
  alert("Post andata male");
})
})


const users = fetch('https://jsonplaceholder.typicode.com/users');

let mon = [];

fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(data => {
      data.forEach(user => {
         console.log(user);
      })
      mon = data;
   });


console.log(mon);
   


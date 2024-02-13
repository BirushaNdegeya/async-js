const API = 'https://jsonplaceholder.typicode.com/users';
// Async | Await

const myUsers = {
   userList: []
}

const myCoolFunction = async () => {
   const response = await fetch('https://jsonplaceholder.typicode.com/users');
   return response.json();
}
myCoolFunction();

const anotherFunc = async () => {
   const data = await myCoolFunction();
   console.log(data);
}

anotherFunc()
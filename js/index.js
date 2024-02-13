const API = 'https://jsonplaceholder.typicode.com/users';
const APILINK = 'https://icanhazdadjoke.com/';

// 2nd parameter of fetch

const joke = async () => {
   const resp = await fetch('https://icanhazdadjoke.com');
   return await resp.json();
}

const data = await joke();
console.log(data);

// 40
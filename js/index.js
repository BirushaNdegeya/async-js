const API = 'https://jsonplaceholder.typicode.com/users';
const DAD_JOKE_API = 'https://icanhazdadjoke.com/';
const TEST_API = 'https://httpbin.org/post/';
const POST_API =  'https://api.icndb.com/jokes/random';
const posts = { 
   id: "ucapjGQZTf", 
   joke: "What do you call a pig that knows karate? A pork chop!", 
   status: 200 
}

const dadJoke = async (first, last) => {
   const resp = await fetch(`${POST_API}?firstName=${first}&lastName=${last}`);
   const jsonResp = await resp.json();
   console.log(jsonResp.value);
};

dadJoke("Bruce","Lee");
const myPromise = new Promise((resolve, reject) => {
   const error = true;
   if (!error) {
      resolve('Yes! resolved the promise!');
   } else {
      reject("No! rejected the promise!");
   }
});

myPromise
   .then(value => value + 1)
   .then(update => console.log(update))
   .catch(err => console.warn("Something went wrong"));

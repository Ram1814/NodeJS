setInterval(() => {
  console.log('hello world')
}, 2000)
console.log(`I will run first`)
// process stays alive unless
// Kill Process CONTROL + C
// unexpected error
//// In node every time we have some synchronous action, it's just going to be offloaded. And then when it's time we invoke the callback.
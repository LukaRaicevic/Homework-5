/* CHALLENGE 1 */

function sayHowdy() {
    console.log('Howdy');
  }
  
  function testMe() {
    setTimeout(sayHowdy, 0);
    console.log('Partnah');
  }
  // After thinking it through, uncomment the following line to check your guess!
  testMe(); // what order should these log out? Howdy or Partnah first?
  //Partnah pa Howdy, jer se setTimeout stavlja u Callback Queue,
  //i tek ce se dodati u Call stack kad Call stack bude prazan
  
  
  /* CHALLENGE 2 */
  
  
  function delayedGreet() {
       setTimeout(function() {
        console.log("welcome");
      }, 3000);
  }
  // Uncomment the following line to check your work!
  delayedGreet(); // should log (after 3 seconds): welcome
  
  
  /* CHALLENGE 3 */
  
  
  function helloGoodbye() {
    console.log("hello");
    setTimeout(function() {
        console.log("good bye");
      }, 2000);
  }
  // Uncomment the following line to check your work!
  helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye
  
  
  /* CHALLENGE 4 */
  
  
  function brokenRecord() {
    setInterval(function() {
        console.log("hi again");
      }, 1000);
  }
  // Uncomment the following line to check your work!
  brokenRecord(); // should log (every second): hi again
  
  
  /* CHALLENGE 5 */
  
  function limitedRepeat() {
    var intrvl = setInterval(function() {
      console.log("hi for now");
      }, 1000);
    
    setTimeout(function() {
        clearInterval(intrvl);
      }, 5000);
  }
  // Uncomment the following line to check your work!
  limitedRepeat(); // should log (every second, for 5 seconds): hi for now
  
  
  /* CHALLENGE 6 */
  
  function everyXsecsForYsecs(func, interval, duration) {
    var int = setInterval(func, interval);
    
    setTimeout(function() {
      clearInterval(int);
    }, duration);
  }
  // Uncomment the following lines to check your work!
  function theEnd() {
    console.log('This is the end!');
  }
  everyXsecsForYsecs(theEnd, 1000, 5000); 
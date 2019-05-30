$(document).ready(function(){
// Array of words
var words = ['innovation', 'design', 'social good'];
// Function that executes every 2000 milliseconds
var t = setInterval(function() {
  // Random number generator
  var randomNumber = Math.round( Math.random() * (words.length-1) );
  // Change the word in the span for a random one in the array of words
  $('#changeText').html( words[ randomNumber ] );
}, 2000);

});
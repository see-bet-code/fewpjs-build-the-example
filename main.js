// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector('div#modal')
modal.classList.add('hidden')

const hearts = document.querySelectorAll('.like-glyph')

function updateHeart(heart) {
  if (heart.textContent === EMPTY_HEART) {
    heart.textContent = FULL_HEART
    heart.classList.add('activated-heart')
  } else {
    heart.textContent = EMPTY_HEART
    heart.classList.remove('activated-heart')
  }
}

function recognizeClick(heart) {
  mimicServerCall()
    .then(function() {
      updateHeart(heart)
    })
    .catch(function(error) {
      modal.textContent = error
      modal.classList.remove('hidden');
      setTimeout(function() {
        modal.classList.add('hidden');
      }, 5000)
      
    }); 
}
hearts.forEach( function(heart) {
  heart.addEventListener('click', function () {
    recognizeClick(heart)
  })
})


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

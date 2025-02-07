// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.getElementById("modal").hidden = true;

// EMPTY_HEART
// document.addEventListener('click', (e) => {
//   mimicServerCall()
//   .then((resp) => {
//   //   //change empty heart to full heart 
//     document.body.append(FULL_HEART)
//     document.getElementById('like').classList.value = FULL_HEART;
//     document.getElementsByClassName('like-glyph').EMPTY_HEART = FULL_HEART;
//     //.classList.add('activated-heart')
//     }) 
//   .catch(function (error) {
//   //   document.getElementById("modal").hidden = false;
//     alert("heyo");
//     document.body.append(error.message);
//     // setTimeout = 300;
//   //   document.getElementById("modal").hidden = true;
//   })
// });

// FULL_HEART.addEventListener('click', (e) => {
//   // full heart > emty heart
//   // remove activated-heart class
//   document.getElementById("like-glyph").classList.remove("activated-heart");
//   })

// --------------------------------------------------------------------------------------------------------------

document.querySelectorAll('.like-glyph').forEach(function(likeGlyph) {
  likeGlyph.addEventListener('click', function() {
    // const isLiked = likeGlyph.classList.contains('activated-heart'); // Check if the heart is currently filled
    const isLiked = likeGlyph.textContent === FULL_HEART; // Check if the heart is currently full (liked)


    mimicServerCall()
      .then((message) => {
        // Toggle the heart color based on the state
        if (isLiked) {
          likeGlyph.textContent = EMPTY_HEART; // Change to empty heart (unlike)
          likeGlyph.classList.remove('activated-heart'); // Remove red color (unlike)
        } else {
          likeGlyph.textContent = FULL_HEART; // Change to filled heart (like)
          likeGlyph.classList.add('activated-heart'); // Add red color (like)

        }
      })
      .catch((error) => {
        // Show error modal with a custom message if there's an error
        console.error(error);
        showErrorModal("ERROR!!! No Loro Piana's for you");
      });
  });
});

function showErrorModal(message) {
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modal-message');
  modalMessage.textContent = message;
  modal.classList.remove('hidden'); // Show the modal

  setTimeout(() => {
    modal.classList.add('hidden'); // Hide the modal after 3 seconds
  }, 3000);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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

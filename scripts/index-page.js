console.log(":bye");

let userDetail = [
  {
    name: "Connor Walton",
    timeStamp: "02/17/2021",
    commentText:"This is Attr. This is inexplicable magic expressed in the purest WebAssembly, everything that makes up this majestic work deserve reverence. Let us appreciate this for what it is and what it contains."
  },
  {
    name: "Emilie Beach",
    timeStamp: "01/09/2021",
    commentText:"I feel blessed to have sen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
  },
  {
    name: "Miles Acosta",
    timeStamp: "12/20/2020",
    commentText:"I can't stop listening.Every time I hear one of their songs- the vocals- it gives me goosebimps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough"
  },
];

const  conversationCommentDisplay= document.querySelector(".conversation__comment-display");
const  conversationNameDisplay= document.querySelector(".conversation__name-display")
// let displayComment = document.querySelector("#conversation_comment.value");

//function to loop through array and apppend to conversation
function displayComment(userDetailArray) {
  // Go through the list of userDetails
  for (let i = 0; i < userDetailArray.length; i++) {
    // Create li element, add a class, change its inner text
    let displayListComment = document.createElement("li");
    displayListComment.classList.add("conversation__comment--list");
    displayListComment.innerHTML = userDetailArray[i];


    // Add click listener for the button
        // We're doing this in a loop because we want to listen for clicks on all li elements
        conversationCommentDisplay.appendChild(displayListComment)

      }
}

function displayName(userDetailArray) {
  // Go through the list of userDetails
  for (let i = 0; i < userDetailArray.length; i++) {
    // Create li element, add a class, change its inner text
    let displayListName = document.createElement("li");
    displayListName.classList.add("conversation__name--list");
    displayListName.innerHTML = userDetailArray[i];


    // Add click listener for the button
        // We're doing this in a loop because we want to listen for clicks on all li elements
        conversationNameDisplay.appendChild(displayListName)
      }
}

// call/invoke the append books function
displayComment(userDetail);
displayName(userDetail);

const commentButton = document.querySelector('.conversation__form--button')

commentButton.addEventListener('click', function(event) {
  event.preventDefault();
  const userComment = document.querySelector('.user__comment');
  const userName = document.querySelector('.user__name');
  // Could clear the comment list and add elements all over again OR just add the last element
  conversationCommentDisplay.innerHTML = '';
  conversationNameDisplay.innerHTML = '';
  userDetail.push(userComment.value);
  userDetail.push(userName.value);
  displayComment([userComment.value]);
  displayName([userName.value]);

  // const book = [];
  // book.push(bookName.value)
  // 👆🏼 is same as [bookName.value]
  // displayComment([userComment.value]);
});

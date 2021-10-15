console.log(":bye");
var currentdate = new Date();

let userDetail = [
  {
    name: "Connor Walton",
    date: currentdate.getMonth() + "/" + currentdate.getDate()
    + "/" + currentdate.getFullYear(),
    commentText:"This is Attr. This is inexplicable magic expressed in the purest WebAssembly, everything that makes up this majestic work deserve reverence. Let us appreciate this for what it is and what it contains."
  },
  {
    name: "Emilie Beach",
    date:  currentdate.getMonth() + "/" + currentdate.getDate()
    + "/" + currentdate.getFullYear(),
    commentText:"I feel blessed to have sen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
  },
  {
    name: "Miles Acosta",
   date: currentdate.getMonth() + "/" + currentdate.getDate()
   + "/" + currentdate.getFullYear(),
    commentText:"I can't stop listening.Every time I hear one of their songs- the vocals- it gives me goosebimps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough"
  },
];

const  conversationCommentDisplay= document.querySelector(".conversation__comment-display");
const  conversationNameDisplay= document.querySelector(".conversation__name-display")
const  conversationDateDisplay= document.querySelector(".conversation__date-display")
// let displayComment = document.querySelector("#conversation_comment.value");

//function to loop through array and apppend to conversation
function displayComment(userDetail) {
  // Go through the list of userDetails
  for (let i = 0; i < userDetail.length; i++) {
    // Create li element, add a class, change its inner text
    let displayListComment = document.createElement("li");
    displayListComment.classList.add("conversation__comment--list");
    displayListComment.innerHTML = userDetail[i].commentText;


    // Add click listener for the button
        // We're doing this in a loop because we want to listen for clicks on all li elements
        conversationCommentDisplay.appendChild(displayListComment)

      }
}

function displayName(userDetail) {
  // Go through the list of userDetails
  for (let i = 0; i < userDetail.length; i++) {
    // Create li element, add a class, change its inner text
    let displayListName = document.createElement("li");
    displayListName.classList.add("conversation__name--list");
    displayListName.innerHTML = userDetail[i].name;


    // Add click listener for the button
        // We're doing this in a loop because we want to listen for clicks on all li elements
        conversationNameDisplay.appendChild(displayListName)
      }
}

function displayDate(userDetail) {
  // Go through the list of userDetails
  for (let i = 0; i < userDetail.length; i++) {
    // Create li element, add a class, change its inner text
    let displayListDate = document.createElement("li");
    displayListDate.classList.add("conversation__date--list");
    displayListDate.innerHTML = currentdate.getMonth() + "/" + currentdate.getDate()
    + "/" + currentdate.getFullYear();


    // Add click listener for the button
        // We're doing this in a loop because we want to listen for clicks on all li elements
        conversationDateDisplay.appendChild(displayListDate)
      }
}

// call/invoke the append books function
displayComment(userDetail);
displayName(userDetail);
displayDate(userDetail);

const commentButton = document.querySelector('.conversation__form--button')

commentButton.addEventListener('click', function(event) {
  event.preventDefault();
  const userComment = document.querySelector('.user__comment');
  const userName = document.querySelector('.user__name');
  // Could clear the comment list and add elements all over again OR just add the last element
  conversationCommentDisplay.innerHTML = '';
  conversationNameDisplay.innerHTML = '';
  conversationDateDisplay.innerHTML = '';
  userDetail.push(userComment.value);
  userDetail.push(userName.value);
  // userDetail.push(userDate.value);
  displayComment(userComment.value);
  displayName(userName.value);
  displayDate(currentdate.getMonth() + "/" + currentdate.getDate()
  + "/" + currentdate.getFullYear());

  // const book = [];
  // book.push(bookName.value)
  // 👆🏼 is same as [bookName.value]
  // displayComment([userComment.value]);
});

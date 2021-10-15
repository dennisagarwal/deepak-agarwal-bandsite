console.log(":bye");

let userDetail = [
  {
    name: "document.querySelector('#conversation_name.value')",
    timeStamp: "Ronald Lane",
    commentText: "('#conversation_comment.value')",
  },
  {
    name: "document.querySelector('#conversation_name.value')",
    timeStamp: "Ronald Lane",
    commentText: "('#conversation_comment.value')",
  },
  {
    name: "document.querySelector('#conversation_name.value')",
    timeStamp: "Ronald Lane",
    commentText: "('#conversation_comment.value')",
  },
];

// let displayComment = document.querySelector("#conversation_comment.value");

//function to loop through array and apppend to conversation
function displayComment(userDetailArray) {
  // Go through the list of userDetails
  for (let i = 0; i < userDetailArray.length; i++) {
    // Create li element, add a class, change its inner text
    let conversationListComment = document.createElement("li");
    conversationListComment.classList.add("conversation__comment--list");
    conversationListComment.innerHTML = userDetailArray[i];

    // Add click listener for the button
        // We're doing this in a loop because we want to listen for clicks on all li elements
  }
}

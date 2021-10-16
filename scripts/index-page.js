console.log(":bye");
var currentdate = new Date();

let userDetail = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
     commentText: "This is Attr. This is inexplicable magic expressed in the purest WebAssembly, everything that makes up this majestic work deserve reverence. Let us appreciate this for what it is and what it contains.",
  image: "./assets/images/Mohan-muruge.jpg"
    },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    commentText:"I feel blessed to have sen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    image:"./assets/images/Mohan-muruge.jpg"
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    commentText:"I can't stop listening.Every time I hear one of their songs- the vocals- it gives me goosebimps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough",
    image: "./assets/images/Mohan-muruge.jpg"
  },
];

//DOM Elements
const conversationUserRight = document.querySelector(".conversation__user-right");
const conversationForm = document.querySelector(".conversation__form");
// const commentButton = document.querySelector(".conversation__form--button");

function conversationDetail() {
  conversationUserRight.innerHTML = "";
  for (let i = 0; i < userDetail.length; i++) {
    //create <li>
    const userCommentDisplay = document.createElement("li");
    userCommentDisplay.innerText = userDetail[i].commentText;
    userCommentDisplay.classList.add("conversation__user-comment-display");


    const userNameDisplay = document.createElement("li");
    userNameDisplay.innerText = userDetail[i].name;
    userNameDisplay.classList.add("conversation__user-name-display");


    const userDateDisplay = document.createElement("li");
    userDateDisplay.innerText =userDetail[i].date;
    userDateDisplay.classList.add("conversation__user-date-display");

    const userImageDisplay = document.createElement("img");
    userImageDisplay.classList.add("conversation__user-image-display");
    userImageDisplay.setAttribute("src","./assets/images/Mohan-muruge.jpg");
//outer element for div
    const userImageDisplay = document.createElement("div");
    // const userCommentDisplay = document.createElement("li");
    // userCommentDisplay.innerText = userDetail[i].commentText;
    // userCommentDisplay.classList.add("conversation__user-comment-display");
    //append
    conversationUserRight.appendChild(userCommentDisplay);
    conversationUserRight.appendChild(userNameDisplay);
    conversationUserRight.appendChild(userDateDisplay);
    conversationUserRight.appendChild(userImageDisplay);
  }
}
// conversationDetail();
//create a new comment object

function createDetail(name,date,comment,image) {
  return {
    name: name,
    date: date,
    commentText: comment,
    image:image,
  };
}

conversationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const comment = document.getElementById("conversation__comment").value;
  const name = document.getElementById("conversation__name").value;
  const date =  currentdate.getMonth() + "/" + currentdate.getDate() +"/" + currentdate.getFullYear();
  const image = "https://generated.photos/face-generator/new";
  userDetail.unshift(createDetail(name,date,comment,image));
  userDetail.pop();
// console.log(createDetail(name,date,comment));
  // conversationDetail(userDetail);
  conversationDetail();
});
conversationDetail();

// const  conversationCommentDisplay= document.querySelector(".conversation__comment-display");

// // let displayComment = document.querySelector("#conversation_comment.value");

// //function to loop through array and apppend to conversation
// function displayComment(userDetail) {
//   // Go through the list of userDetails
//   for (let i = 0; i < userDetail.length; i++) {
//     // Create li element, add a class, change its inner text
//     let displayListComment = document.createElement("li");
//     displayListComment.classList.add("conversation__comment--list");
//     displayListComment.innerHTML = userDetail[i].commentText;

//     // Add click listener for the button
//         // We're doing this in a loop because we want to listen for clicks on all li elements
//         conversationCommentDisplay.appendChild(displayListComment);
//         console.log( displayListComment.innerHTML)

//       }
// }

// const  conversationNameDisplay= document.querySelector(".conversation__name-display").value;

// function displayName(userDetail) {
//   // Go through the list of userDetails
//   for (let i = 0; i < userDetail.length; i++) {
//     // Create li element, add a class, change its inner text
//     let displayListName = document.createElement("li");
//     displayListName.classList.add("conversation__name--list");
//     displayListName.innerHTML = userDetail[i].name;

//     // Add click listener for the button
//         // We're doing this in a loop because we want to listen for clicks on all li elements
//         conversationNameDisplay.appendChild(displayListName);
//         console.log( displayListName.innerHTML)
//       }
// }

// const  conversationDateDisplay= document.querySelector(".conversation__date-display")

// function displayDate(userDetail) {
//   // Go through the list of userDetails
//   for (let i = 0; i < userDetail.length; i++) {
//     // Create li element, add a class, change its inner text
//     let displayListDate = document.createElement("li");
//     displayListDate.classList.add("conversation__date--list");
//     displayListDate.innerHTML= userDetail[i].date;
//     // displayListDate.innerHTML = currentdate.getMonth() + "/" + currentdate.getDate()
//     // + "/" + currentdate.getFullYear();

//     // Add click listener for the button
//         // We're doing this in a loop because we want to listen for clicks on all li elements
//         conversationDateDisplay.appendChild(displayListDate);
//         console.log( displayListDate.innerHTML)
//       }
// }

// // call/invoke the append books function
// displayComment(userDetail);
// displayName(userDetail);
// displayDate(userDetail);

// const commentButton = document.querySelector('.conversation__form--button')

// commentButton.addEventListener('click', function(event) {
//   event.preventDefault();
//   const userComment = document.querySelector('.user__comment');
//   const userName = document.querySelector('.user__name');
//   // Could clear the comment list and add elements all over again OR just add the last element
//   conversationCommentDisplay.innerHTML = '';
//   userDetail.unshift(userComment.value);
//   // userDetail.pop(userComment.value);

//   conversationNameDisplay.innerHTML = '';
//   userDetail.unshift(userName.value);
//   // userDetail.pop(userName.value);

//   conversationDateDisplay.innerHTML = '';

//   // userDetail.push(userDate.value);
//   displayComment([userComment.value]);
//   displayName([userName.value]);
//   displayDate(currentdate.getMonth() + "/" + currentdate.getDate()
//   + "/" + currentdate.getFullYear());

//   // const book = [];
//   // book.push(bookName.value)
//   // 👆🏼 is same as [bookName.value]
//   // displayComment([userComment.value]);
// });

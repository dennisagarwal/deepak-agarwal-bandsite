console.log(":bye");
var currentdate = new Date();

let userDetail = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
     commentText: "This is Attr. This is inexplicable magic expressed in the purest WebAssembly, everything that makes up this majestic work deserve reverence. Let us appreciate this for what it is and what it contains.",
    image:("./assets/images/Mohan-muruge.jpg"),
    },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    commentText:"I feel blessed to have sen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    image:("./assets/images/Mohan-muruge.jpg"),
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    commentText:"I can't stop listening.Every time I hear one of their songs- the vocals- it gives me goosebimps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough",
    image:("./assets/images/Mohan-muruge.jpg"),
  },
];

//DOM Elements
const conversationUserRight = document.querySelector(".conversation__user-right");
const conversationForm = document.querySelector(".conversation__form");

function conversationDetail() {
  conversationUserRight.innerHTML = "";
  for (let i = 0; i < userDetail.length; i++) {
    //create <li>
    const userCommentDisplay = document.createElement("li");
    userCommentDisplay.innerText = userDetail[i].commentText;
    userCommentDisplay.classList.add("conversation__user-right-comment-display");


    const userNameDisplay = document.createElement("li");
    userNameDisplay.innerText = userDetail[i].name;
    userNameDisplay.classList.add("conversation__user-right-name-display");


    const userDateDisplay = document.createElement("li");
    userDateDisplay.innerText =userDetail[i].date;
    userDateDisplay.classList.add("conversation__user-right-date-display");

    const userImageDisplay = document.createElement("img");
    userImageDisplay.setAttribute("src",userDetail[i].image)
    userImageDisplay.classList.add("conversation__user-right-image-display");

    //append
    conversationUserRight.appendChild(userImageDisplay);
    conversationUserRight.appendChild(userNameDisplay);
    conversationUserRight.appendChild(userCommentDisplay);
    conversationUserRight.appendChild(userDateDisplay);

  }
}

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
  const image =("./assets/images/Mohan-muruge.jpg");
  userDetail.unshift(createDetail(name,date,comment,image));
  userDetail.pop();

  conversationDetail();
});
conversationDetail();

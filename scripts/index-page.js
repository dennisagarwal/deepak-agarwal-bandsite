console.log(":bye");
var currentdate = new Date();

let userDetail = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    commentText:
      "This is Attr. This is inexplicable magic expressed in the purest WebAssembly, everything that makes up this majestic work deserve reverence. Let us appreciate this for what it is and what it contains.",
    image: "./assets/images/Mohan-muruge.jpg",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    commentText:
      "I feel blessed to have sen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    image: "./assets/images/Mohan-muruge.jpg",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    commentText:
      "I can't stop listening.Every time I hear one of their songs- the vocals- it gives me goosebimps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough",
    image: "./assets/images/Mohan-muruge.jpg",
  },
];

const conversationUser = document.querySelector(".conversation__user");
const conversationForm = document.querySelector(".conversation__form");

function conversationDetail() {
  conversationUser.innerHTML = "";
  for (let i = 0; i < userDetail.length; i++) {
    const conversationUserRight = document.createElement("div");
    conversationUserRight.classList.add("conversation__user-right");


    const userImageDisplay = document.createElement("div");
    userImageDisplay.classList.add("conversation__user-right-image-display");
    const userImageInside = document.createElement("img");
    userImageInside.setAttribute("src", userDetail[i].image);
    userImageInside.classList.add("conversation__user-right-image-display--inside");
    userImageDisplay.appendChild(userImageInside);
    conversationUserRight.appendChild(userImageDisplay);


    const userCommentNameDate = document.createElement("div");
    userCommentNameDate.classList.add("conversation__user-right-comment-name-date" );

    const userNameDate = document.createElement("div");
    userNameDate.classList.add("conversation__user-right-name-date" );


    const userNameDisplay = document.createElement("div");
    const userNameText = document.createElement("p");
    userNameText.innerText = userDetail[i].name;
    userNameText.classList.add("conversation__user-right-name-display--text");
    userNameDisplay.appendChild(userNameText);
    userNameDate.appendChild(userNameDisplay);
    userCommentNameDate.appendChild(userNameDate);
    conversationUserRight.appendChild(userCommentNameDate);

    const userDateDisplay = document.createElement("div");
    const userDateText = document.createElement("p");
    userDateText.innerText = userDetail[i].date;
    userDateText.classList.add("conversation__user-right-date-display--text");
    userDateDisplay.appendChild(userDateText);
    userNameDate.appendChild(userDateDisplay);
    userCommentNameDate.appendChild(userNameDate);
    conversationUserRight.appendChild(userCommentNameDate);


    const userCommentDisplay = document.createElement("div");
    const userCommentText = document.createElement("p");
    userCommentText.innerText = userDetail[i].commentText;
    userCommentText.classList.add("conversation__user-right-comment-display--text" );
    userCommentDisplay.appendChild(userCommentText);
    userCommentNameDate.appendChild(userCommentDisplay);
    conversationUserRight.appendChild(userCommentNameDate);



    conversationUser.appendChild(conversationUserRight);
  }
}

function createDetail(name, date, comment, image) {
  return {
    name: name,
    date: date,
    commentText: comment,
    image: image,
  };
}

conversationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const comment = document.getElementById("conversation__comment").value;
  const name = document.getElementById("conversation__name").value;
  const date =
    currentdate.getMonth() +
    "/" +
    currentdate.getDate() +
    "/" +
    currentdate.getFullYear();
  const image = "./assets/images/Mohan-muruge.jpg";
  userDetail.unshift(createDetail(name, date, comment, image));
  userDetail.pop();

  conversationDetail();
});
conversationDetail();

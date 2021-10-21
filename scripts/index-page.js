// let currentdate = new Date();

const conversationUser = document.querySelector(".conversation__user");
const conversationForm = document.querySelector(".conversation__form");

conversationForm.addEventListener("submit", handleConversationFormSubmit);

function getAllComments() {
  axios
    .get(
      ` https://project-1-api.herokuapp.com/comments?api_key=4f7ce3b1-e392-4f50-92a1-941144a00017`
    )
    .then((result) => {
      console.log(result.data);
      // save array of allComments in variable `comments`, sort by timestamp before looping
      const userDates = result.data.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );
      console.log(userDates);
      conversationUser.innerHTML = "";

      userDates.forEach((user) => {
        const conversationUserRight = document.createElement("div");
        conversationUserRight.classList.add("conversation__user-right");

        const userImageDisplay = document.createElement("div");
        userImageDisplay.classList.add(
          "conversation__user-right-image-display"
        );
        const userImageInside = document.createElement("img");
        userImageInside.setAttribute("src", "./assets/images/Mohan-muruge.jpg");
        userImageInside.classList.add(
          "conversation__user-right-image-display--inside"
        );
        userImageDisplay.appendChild(userImageInside);
        conversationUserRight.appendChild(userImageDisplay);

        const userCommentNameDate = document.createElement("div");
        userCommentNameDate.classList.add(
          "conversation__user-right-comment-name-date"
        );

        const userNameDate = document.createElement("div");
        userNameDate.classList.add("conversation__user-right-name-date");

        const userNameDisplay = document.createElement("div");
        const userNameText = document.createElement("p");
        userNameText.innerText = user.name;
        userNameText.classList.add(
          "conversation__user-right-name-display--text"
        );
        userNameDisplay.appendChild(userNameText);
        userNameDate.appendChild(userNameDisplay);
        userCommentNameDate.appendChild(userNameDate);
        // conversationUserRight.appendChild(userCommentNameDate);

        const userDateDisplay = document.createElement("div");
        const userDateText = document.createElement("p");
        userDateText.innerText = user.timestamp;
        userDateText.classList.add(
          "conversation__user-right-date-display--text"
        );
        userDateDisplay.appendChild(userDateText);
        userNameDate.appendChild(userDateDisplay);
        userCommentNameDate.appendChild(userNameDate);

        const userCommentDisplay = document.createElement("div");
        const userCommentText = document.createElement("p");
        userCommentText.innerText = user.comment;
        userCommentText.classList.add(
          "conversation__user-right-comment-display--text"
        );
        userCommentDisplay.appendChild(userCommentText);
        userCommentNameDate.appendChild(userCommentDisplay);

        conversationUserRight.appendChild(userCommentNameDate);
        conversationUser.appendChild(conversationUserRight);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

// getAllComments();

function handleConversationFormSubmit(event) {
  // function UserFormSubmit(event) {
  event.preventDefault();
  // create a new user object
  const newUser = {
    name: event.target.conversation__name.value,
    comment: event.target.conversation__comment.value,
  };
  // post new user

  axios
    .post(
      "https://project-1-api.herokuapp.com/comments?api_key=4f7ce3b1-e392-4f50-92a1-941144a00017",
      newUser
    )
    .then((result) => {
      getAllComments();
      event.target.reset();
      console.log(result);
    })
    .catch(() => console.log(`error posting to api`));
}

// Start the appication, runs as soon as the JS file is loaded
function init() {
  getAllComments();
  // if more functions needed to run when the app loads they can be called from here
}

// call function to start the application
init();

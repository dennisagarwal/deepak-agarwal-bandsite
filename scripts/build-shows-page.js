
let concert = document.querySelector(".concert__show");
let paraText = document.createElement("p");

function getAllShows() {
  axios
    .get(
      ` https://project-1-api.herokuapp.com/showdates?api_key=4f7ce3b1-e392-4f50-92a1-941144a00017`
    )
    .then((result) => {
      result.data.forEach((show) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("concert-detail");
        concert.appendChild(newDiv);

        //assigning date paragraph text
        paraText = document.createElement("p");
        paraText.classList.add("concert-detail__text");
        paraText.innerText = "Date";
        newDiv.appendChild(paraText);

        //date for shows
        let paraDate = document.createElement("p");
        paraDate.classList.add("concert-detail__date");
        paraDate.innerText = new Date(parseInt(show.date)).toLocaleDateString(
          "en-US"
        );
        newDiv.appendChild(paraDate);

        //assigning venue paragraph text
        paraText = document.createElement("p");
        paraText.classList.add("concert-detail__text");
        paraText.innerText = "Venue";
        newDiv.appendChild(paraText);

        //venue for shows
        let paraVenue = document.createElement("p");
        // let pVenueText = document.createTextNode(show.place);
        paraVenue.classList.add("concert-detail__venue");
        paraVenue.innerText = show.place;
        newDiv.appendChild(paraVenue);

        //assigning location paragraph text
        paraText = document.createElement("p");
        paraText.classList.add("concert-detail__text");
        paraText.innerText = "Location";
        newDiv.appendChild(paraText);

        //location for shows
        let paraLocation = document.createElement("p");
        // let pLocationText = document.createTextNode(show.location);
        paraLocation.classList.add("concert-detail__location");
        paraLocation.innerText = show.location;
        newDiv.appendChild(paraLocation);

        //button for show card
        let paraButton = document.createElement("button");
        paraButton.classList.add("concert-detail__button");
        paraButton.innerText = "BUY TICKETS";
        newDiv.appendChild(paraButton);
      });
    });
}
getAllShows();

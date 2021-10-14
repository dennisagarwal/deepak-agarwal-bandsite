console.log("hello");

let shows = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

let concert = document.querySelector(".concert");
let paraText = document.createElement("p");

for (i = 0; i < shows.length; i++) {
  // div
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
  paraDate.innerText = shows[i].date;
  newDiv.appendChild(paraDate);

  //assigning venue paragraph text
  paraText = document.createElement("p");
  paraText.classList.add("concert-detail__text");
  paraText.innerText = "Venue";
  newDiv.appendChild(paraText);

  //venue for shows
  let paraVenue = document.createElement("p");
  let pVenueText = document.createTextNode(shows[i].venue);
  paraVenue.classList.add("concert-detail__venue");
  paraVenue.innerText = shows[i].venue;
  newDiv.appendChild(paraVenue);

  //assigning location paragraph text
  paraText = document.createElement("p");
  paraText.classList.add("concert-detail__text");
  paraText.innerText = "Location";
  newDiv.appendChild(paraText);

  //location for shows
  let paraLocation = document.createElement("p");
  let pLocationText = document.createTextNode(shows[i].location);
  paraLocation.classList.add("concert-detail__location");
  paraLocation.innerText = shows[i].location;
  newDiv.appendChild(paraLocation);

  //button for show card
  let paraButton = document.createElement("button");
  paraButton.classList.add("concert-detail__button");
  paraButton.innerText="BUY TICKETS";
  newDiv.appendChild(paraButton);


  console.log(newDiv);
}

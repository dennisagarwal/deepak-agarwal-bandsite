console.log("hello");

let shows = [
  {
    date: 'Mon Sept 06 2021',
   venue: 'Ronald Lane',
   location: 'San Francisco, CA',
  },
  {
    date: 'Tue Sept 21 2021',
    venue: 'Pier 3 East',
    location: 'San Francisco, CA',
  },
  {
    date: 'Fri Oct 15 2021',
    venue: 'View Lounge',
    location: 'San Francisco, CA',
  },
  {
    date: 'Sat Nov 06 2021',
    venue: 'Hyatt Agency',
    location: 'San Francisco, CA',
  },
];

//create new elements

// let newDiv = document.createElement('div');
// newDiv.classList.add("concert-detail");

let appendTest= document.querySelector(".appendTest");




// let paraDate = document.createElement('p');
// paraDate.classList.add("concert-detail__date");
// let paraVenue = document.createElement('p');
// paraVenue.classList.add("concert-detail__venue");
// let paraLocation = document.createElement('p');
// paraLocation.classList.add("concert-detail__location");


for(i=0; i<shows.length;i++){
  // pDateText= document.createTextNode(shows[i].date);
  // console.log(pDateText);
  let newDiv = document.createElement('div');
newDiv.classList.add("concert-detail");

appendTest.appendChild(newDiv);

let paraDate = document.createElement('p');
paraDate.classList.add("concert-detail__date");
paraDate.innerText=shows[i].date;
newDiv.appendChild(paraDate);
// console.log(newDiv);

let paraVenue = document.createElement('p');
let pVenueText= document.createTextNode(shows[i].venue);
paraVenue.classList.add("concert-detail__venue");
paraVenue.innerText=shows[i].venue;
newDiv.appendChild(paraVenue);

let paraLocation = document.createElement('p');
let pLocationText= document.createTextNode(shows[i].location);
paraLocation.classList.add("concert-detail__location");
paraLocation.innerText=shows[i].location;
 newDiv.appendChild(paraLocation);

console.log(newDiv);


  // paraDate.innerText=shows[i].date;
  // paraVenue.innerText=shows[i].venue;
  // newDiv.appendChild(paraDate);
  // newDiv.appendChild(paraVenue);

// console.log(paraDate);
}


// dateFunc();

// console.log(shows.forEach(dateFunc()));

// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction)

// paraDate.appendChild(pDateText);
// newDiv.appendChild(paraDate);
// console.log(newDiv);

// for(i=0; i<shows.length;i++){
//   let pVenueText= document.createTextNode(shows[i].venue);
//   let newDiv = document.createElement('div');
//   newDiv.classList.add("concert-detail");
//   let paraVenue = document.createElement('p');
//   paraVenue.classList.add("concert-detail__venue");
//   // console.log(pVenueText);
//   paraVenue.innerText=shows[i].venue;
//   newDiv.appendChild(paraVenue);
//   console.log(newDiv);
// }

// for(i=0; i<shows.length;i++){
//   // let pLocationText= document.createTextNode(shows[i].location);
//   // // console.log(pLocationText);
//   // paraLocation.innerText=shows[i].location;
//   // newDiv.appendChild(paraLocation);
//   // console.log(newDiv);
// }


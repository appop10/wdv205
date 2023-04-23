/*
    JavaScript file for Doogies EVENT page
*/
let event1 = {
    eventName: "Tanis",
    eventDate: "June 4 - 6",
    eventDescription: "Solo artist, Tanis, takes the stage for her first show of 2023. Watch her kick off her Colorado tour with a bang!",
    eventImageSrc: "doogies_images/concert-venue-wideshot.jpg",
    eventImageAlt: "concert venue wideshot",
    eventID: "Tanis"
}

let event2 = {
    eventName: "Indie Symphony",
    eventDate: "June 15 - 16",
    eventDescription: "Two days packed with Indie artists from far and wide. We're proud to welcome back Snake Juice, Carl Turner, and many more.",
    eventImageSrc: "doogies_images/stage-with-blue-lights.jpg",
    eventImageAlt: "performance stage with blue light squares",
    eventID: "Indie-symphony"
}

let event3 = {
    eventName: "Rock Fest",
    eventDate: "June 26",
    eventDescription: "Returning artists: Rummy Merge, Serpent Moonlight <br> Newbie artists: Achiever Bits, The Courteous Litterbugs",
    eventImageSrc: "doogies_images/guitar-close-up.jpg",
    eventImageAlt: "guitar close up with purple to orange gradient",
    eventID: "Rock-fest"
}

let event4 = {
    eventName: "James Trucker",
    eventDate: "July 10 - 11",
    eventDescription: "James Trucker is back to bring his country sound to Colorado Springs!",
    eventImageSrc: "doogies_images/stage-with-white-lights.jpg",
    eventImageAlt: "stage with white lights",
    eventID: "James-trucker"
}

let event5 = {
    eventName: "Exempt Mistakes",
    eventDate: "August 13 - 14",
    eventDescription: "Exempt Mistakes returns to Doogies on their Colorado tour. <br> Featured acts: Provider Pincushion, John Kilnsy",
    eventImageSrc: "doogies_images/drummer-and-mist.jpg",
    eventImageAlt: "drummer in mist",
    eventID: "Exempt-mistakes"
}

let event6 = {
    eventName: "Pop Rocks",
    eventDate: "October 30",
    eventDescription: "Returning artists: Funnel Sixth, The Farewell Smith, Sector Haddock <br> Newbie artists: Archer Callahan, The Projectors",
    eventImageSrc: "doogies_images/outdoor-concert-pink-and-blue-lights.jpg",
    eventImageAlt: "outdoor concert with pink and blue stage lights",
    eventID: "Pop-rocks"
}

let eventList = [event1, event2, event3, event4, event5, event6];

function printEvents(inEvent) {
    // eventName
    let eventNamePara = document.createElement("a");
    eventNamePara.innerHTML = inEvent.eventName;
    // eventDate
    let eventDatePara = document.createElement("p");
    eventDatePara.innerHTML = inEvent.eventDate;
    // eventDescription
    let eventDescriptionPara = document.createElement("p");
    eventDescriptionPara.innerHTML = inEvent.eventDescription;
    // buy button
    let buyButton = document.createElement("a");
    buyButton.innerHTML = "Buy Tickets";
    buyButton.setAttribute("href", "#");
    buyButton.classList.add("button");

    // information part of the event card
    let h3 = document.createElement("h3");
    h3.appendChild(eventNamePara);
    h3.appendChild(eventDatePara);
    let div = document.createElement("div");
    div.appendChild(h3);
    div.appendChild(eventDescriptionPara);
    div.appendChild(buyButton);

    // whole event with image
    let image = document.createElement("img");
    image.setAttribute("src", inEvent.eventImageSrc);
    image.setAttribute("alt", inEvent.eventImageAlt);
    let outterDiv = document.createElement("div");
    outterDiv.appendChild(image);
    outterDiv.appendChild(div);
    outterDiv.classList.add("indv-event");
    outterDiv.setAttribute("id", inEvent.eventID);

    return outterDiv;
}

function pageLoad() {
    let eventListDiv = document.querySelector("div.event-list section");

    for(x=0; x<eventList.length; x++) {
        let eventCard = printEvents(eventList[x]);

        eventListDiv.appendChild(eventCard);
    }
}
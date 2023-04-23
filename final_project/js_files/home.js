/*
    JavaScript file for Doogies HOME page
*/

let event1 = {
    eventName: "Rock Fest",
    eventDate: "June 26",
    eventDescriptionLine1: "Returning artists: Rummy Merge, Serpent Moonlight",
    eventDescriptionLine2: "Newbie artists: Achiever Bits, The Courteous Litterbugs",
    eventImageSrc: "doogies_images/stage-with-blue-lights.jpg",
    eventImageAlt: "performance stage with blue light squares"
}

let event2 = {
    eventName: "Exempt Mistakes",
    eventDate: "August 13 - 14",
    eventDescriptionLine1: "Exempt Mistakes returns to Doogies on their Colorado tour for two nights",
    eventDescriptionLine2: "Featured acts: Provider Pincushion, John Kilnsy",
    eventImageSrc: "doogies_images/singer-silhouette.jpg",
    eventImageAlt: "solo guitarist performance"
}

let event3 = {
    eventName: "Pop Rocks",
    eventDate: "October 30",
    eventDescription: "Returning artists: Funnel Sixth, The Farewell Smith, Sector Haddock",
    eventDescriptionLine2: "Newbie artists: Archer Callahan, The Projectors",
    eventImageSrc: "doogies_images/blue-and-orange-light-stage.jpg",
    eventImageAlt: "performance stage with blue and orange lights"
}

let eventList = [event1, event2, event3];

function printEvents(inEvent) {
    // eventName
    let eventNamePara = document.createElement("p");
    eventNamePara.innerHTML = inEvent.eventName;
    // eventDate
    let eventDatePara = document.createElement("p");
    eventDatePara.innerHTML = inEvent.eventDate;
    // eventDescriptionLine1
    let eventDescriptionLine1Para = document.createElement("p");
    eventDescriptionLine1Para.innerHTML = inEvent.eventDescriptionLine1;
    // eventDescriptionLine2
    let eventDescriptionLine2Para = document.createElement("p");
    eventDescriptionLine2Para.innerHTML = inEvent.eventDescriptionLine2;
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
    div.appendChild(eventDescriptionLine1Para);
    div.appendChild(eventDescriptionLine2Para);
    div.appendChild(buyButton);

    // whole event with image
    let image = document.createElement("img");
    image.setAttribute("src", inEvent.eventImageSrc);
    image.setAttribute("alt", inEvent.eventImageAlt);
    let section = document.createElement("section");
    section.appendChild(image);
    section.appendChild(div);

    return section;
}

function pageLoad() {
    let popularDiv = document.querySelector(".popular");

    for(x=0; x<eventList.length; x++) {
        let eventCard = printEvents(eventList[x]);

        popularDiv.appendChild(eventCard);
    }
}

function closeAd() {
    let adDiv = document.querySelector(".banner-ad");

    adDiv.style.display = "none";
}
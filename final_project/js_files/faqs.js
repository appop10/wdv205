/*
    JavaScript file for Doogies FAQs page
*/
function minimizeContent(inContent) {
    inContent.classList.toggle("hide-content");
}

function pageLoad() {
    let arrowList = document.querySelectorAll(".material-symbols-outlined");
    let content = document.querySelectorAll("div.questions div > p");

    arrowList[0].onclick = () => {
        minimizeContent(content[0]);
        arrowList[0].classList.toggle("rotate-arrow");
    }
    arrowList[1].onclick = () => {
        minimizeContent(content[1]);
        arrowList[1].classList.toggle("rotate-arrow");
    }
    arrowList[2].onclick = () => {
        minimizeContent(content[2]);
        arrowList[2].classList.toggle("rotate-arrow");
    }
    arrowList[3].onclick = () => {
        minimizeContent(content[3]);
        arrowList[3].classList.toggle("rotate-arrow");
    }
    arrowList[4].onclick = () => {
        minimizeContent(content[4]);
        arrowList[4].classList.toggle("rotate-arrow");
    }
    arrowList[5].onclick = () => {
        minimizeContent(content[5]);
        arrowList[5].classList.toggle("rotate-arrow");
    }
}
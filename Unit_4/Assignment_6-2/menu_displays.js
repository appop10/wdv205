/*
    JavaScript file for Cookies!
    Displays different options based on select menues 
*/
function displayFlavor() {
    switch (document.querySelector("#cookie-category").value) {
        case "classic":
            document.querySelector("#classic-options").style.display = "block";
            document.querySelector("#fancy-options").style.display = "none";
            break;
        case "fancy":
            document.querySelector("#classic-options").style.display = "none";
            document.querySelector("#fancy-options").style.display = "block";
            break;
        default: 
            document.querySelector("#classic-options").style.display = "none";
            document.querySelector("#fancy-options").style.display = "none";
            break;
    }
}

function displaySizes() {
    switch (document.querySelector("#bundles").value) {
        case "BL":
            document.querySelector("#bundle-options").style.display = "block";
            document.querySelector("#bulk-options").style.display = "none";
            break;
        case "BK":
            document.querySelector("#bundle-options").style.display = "none";
            document.querySelector("#bulk-options").style.display = "block";
            break;
        default: 
            document.querySelector("#bundle-options").style.display = "none";
            document.querySelector("#bulk-options").style.display = "none";
            break;
    }
}
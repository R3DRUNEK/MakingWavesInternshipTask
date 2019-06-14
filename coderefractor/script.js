function hidelist() {
    let obj = document.querySelector(".list");
    let compStyles = window.getComputedStyle(obj).visibility;
    compStyles == "hidden" ? obj.style.visibility = "visible" : obj.style.visibility = "hidden";
};

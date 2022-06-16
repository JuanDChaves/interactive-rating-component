const submitBtn = document.getElementById("submit-btn");
const numbers = document.querySelectorAll("#number");
const result = document.getElementById("result");
const ratingCont = document.getElementById("rating-container");
const thankyouCont = document.getElementById("thankyou-container");

let selectedNum = 0;

function getSelectedNum(e) {

    numbers.forEach((number) => {
        number.classList.remove("selected-num");
    });
    e.target.classList.add("selected-num");
    selectedNum = e.target.innerText;
    result.innerText = selectedNum;
}

function submitRating() {
    ratingCont.style.display = "none";
    thankyouCont.style.display = "flex";
}

numbers.forEach((number) => {
    number.addEventListener("click", getSelectedNum);
});
submitBtn.addEventListener("click", submitRating);
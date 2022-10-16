//imports go at the top of the JS file
//import { getData } from "./modules/dataminers.js";
//this is an IIFE(immediately invoked function expression)
// this is great for en



const buttons = document.querySelectorAll(".button");

console.log('fired');

let myself = {};

function getData() {

    fetch("./data.json")
        .then(res => res.json())
        .then(data => {

            myself = data;
            console.log(data);

        })
        .catch(error => console.error(error));
}

function showData(event) {

    let panel = document.querySelector(".fav-section");

    if (panel) {
        panel.classList.remove("hidden");

        let containers = panel.children;

        containers[0].querySelector('img').src = `images/${myself[this.dataset.key].image}`;
        containers[1].textContent = myself[this.dataset.key].Title;
        containers[2].textContent = myself[this.dataset.key].Desc;
        containers[3].textContent = myself[this.dataset.key].why;
    }


}






buttons.forEach(button => (button.addEventListener("click", showData)));

getData();




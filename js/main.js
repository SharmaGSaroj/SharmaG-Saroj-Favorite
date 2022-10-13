//imports go at the top of the JS file
import { getData } from "./modules/dataminers.js";
//this is an IIFE(immediately invoked function expression)
// this is great for en


(() => {

    let theThings = document.querySelector('#favoriteSection'),
        theTemplate = document.querySelector('.fav-Template').textContent,
        favedata;

    console.log('fired')


    function showData(data) {
        // debugger;

        favedata = data;

        const things = Object.keys(data);

        things.forEach(thing => {

            let panel = theTemplate.cloneNode(true);
            let containers = panel.firstElementChild.children;

            containers[0].querySelector('img').src = `images/${data[thing].images}`;

            containers[0].querySelector('img').id = thing;

            containers[0].querySelector('img').addEventHandler('click', showthing);

            containers[1].textContent = data[thing].Title;

            containers[2].textContent = data[thing].Desc;




            theThings.appendChild(panel);
        })
        function showthing() {
            debugger;

            let currentThing = favedata[this.id];
        }

    }
    getData('./data.json', showData);

})();
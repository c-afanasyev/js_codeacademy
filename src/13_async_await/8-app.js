let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./4-library.js')

// Write your code below:

async function serveDinner() {
    let vegetablePromise = steamBroccoli();
    let starchPromise = cookRice();
    let proteinPromise = bakeChicken();
    let sidePromise = cookBeans();

    console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`);
}

//serveDinner();

//--------------------------------------------------//

async function serveDinnerAgain() {
    let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans() ]);

    console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`);
}

serveDinnerAgain();



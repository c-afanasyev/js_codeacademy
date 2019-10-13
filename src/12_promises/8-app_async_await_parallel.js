const {checkAvailability} = require('./3-library.js');

const onFulfill = (itemsArray) => {
    console.log('onFulfill: ');
    console.log(`Items checked: ${itemsArray}`);
    console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
    console.log('onReject: ' + rejectionReason);
};

// Write your code below:

let checkAll = async () => {
    let checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
    let checkPants = checkAvailability('pants', 'Favorite Supply Co.');
    let checkBags = checkAvailability('bags', 'Favorite Supply Co.');

    return await Promise.all([checkSunglasses, checkPants, checkBags]);
};


checkAll()
    .then(onFulfill)
    .catch(onReject);



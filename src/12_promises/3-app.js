const {checkInventory} = require('./1-library.js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
    console.log(rejectionReason);
};

// Write your code below:

checkInventory(order)
    .then(handleSuccess)
    .catch(handleFailure);




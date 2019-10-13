const {checkInventory, processPayment, shipOrder} = require('./2-library.js');

const order = {
    items: [['sunglasses', 1], ['bags', 2]],
    giftcardBalance: 79.82
};

let buyProduct = async (order) => {
    let inventory = await checkInventory(order);
    let payment = await processPayment(inventory);
    return await shipOrder(payment);
};

buyProduct(order)
    .then((returnedResult) => {console.log('Result is: ' + returnedResult)})
    .catch((returnedResult) => {console.log('Exception: ' + returnedResult)});

const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};

// Write your code below:

function myExecutor(resolve, reject) {
    if (inventory.sunglasses > 0){
        resolve('Sunglasses order processed.');
    } else {
        reject('That item is sold out.');
    }
}

function orderSunglasses(){
    return new Promise(myExecutor);
}

let orderPromise = orderSunglasses();

console.log(orderPromise);

//--------------------------------------------------//

function usingSTO() {
    console.log('Blah blah blah');
}

setTimeout(usingSTO, 2000);

//--------------------------------------------------//

let prom = new Promise((resolve, reject) => {
    let num = Math.random();
    if (num < .5 ){
        resolve('Yay!');
    } else {
        reject('Ohhh noooo!');
    }
});

const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
    console.log(rejectionReason);
};

prom.then(handleSuccess, handleFailure);

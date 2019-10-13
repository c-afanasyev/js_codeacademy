console.log('First message!');
setTimeout(() => {
    console.log('This message will always run last...');
}, 0);
console.log('Second message!');

// output:
// First message!
// Second message!
// This message will always run last...

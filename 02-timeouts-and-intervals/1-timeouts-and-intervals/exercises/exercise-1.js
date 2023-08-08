import { labeledLogger } from '../../../lib/labeled-logger.js';

const { log } = labeledLogger();

// fill in the blanks

let x = '';
log(x);

const callback1 = () => {
    x += 'ri';
    log('cb 1:', x);
};
setTimeout(callback1, 30); //java scri

x += 'j';
log(x); // j

const callback2 = () => {
    const test = x === 'javascript';
    log('cb 2:', test);
    console.assert(test, 'x should be "javascript"');
};
setTimeout(callback2, 100);

x += 'a';
log(x); // ja

const callback3 = () => {
    x += 'sc';
    log('cb 3:', x);
};
setTimeout(callback3, 15); // javasc

x += 'v';
log(x); // jav

const callback4 = () => {
    x += 'pt';
    log('cb 4:', x);
};
setTimeout(callback4, 50);

x += 'a';
log(x); // java

log('= = = =  the call stack is empty  = = = =');

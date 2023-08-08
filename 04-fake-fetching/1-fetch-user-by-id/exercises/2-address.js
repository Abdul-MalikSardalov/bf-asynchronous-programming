import { labeledLogger } from '../../../lib/labeled-logger.js';
import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log, error } = labeledLogger();

/* Address */

// --- declare some callbacks ---

const getAddress = (user) => {
    return `${user.id}: ${user.address.street}, ${user.address.zipcode}`;
};

const handleError = (err) => error(err);

// --- use the callbacks ---

log('fetching and processing user 9');
// "9: Dayna Park, Bartholomebury 76495-3109"
fetchUserById(9)
    .then((userData) => getAddress(userData))
    .then((userAddress) => log(userAddress))
    .catch((err) => error(err));

log('fetching and processing user 8');
// "8: Ellsworth Summit, Aliyaview 45169"
fetchUserById(8)
    .then((userData) => getAddress(userData))
    .then((userAddress) => log(userAddress))
    .catch((err) => error(err));

log('fetching and processing user 2');
// "2: Victor Plains, Wisokyburgh 90566-7771"
fetchUserById(2)
    .then((userData) => getAddress(userData))
    .then((userAddress) => log(userAddress))
    .catch((err) => error(err));

log('fetching and processing user 0');
// 404
fetchUserById(0).catch((err) => {
    if (err.status === 404) {
        error('User not found: 404');
    } else {
        error(err);
    }
});

log('= = = =  the call stack is empty  = = = =');

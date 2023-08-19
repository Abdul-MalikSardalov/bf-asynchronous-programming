import dom from '../../dom.js';
import data from '../../data.js';
import getUser from '../../apis/getUser.js';
import createUserDom from '../components/createUserDom.js';
import updateUserDom from '../components/updateUserDom.js';

const showUserHandler = async (e) => {
    e.preventDefault();

    const value = Number(dom.userInput.value);

    if (!value) {
        dom.error.innerText = 'You must write some id';
        dom.root.classList.add('hidden');
        dom.error.classList.add('error');
        data.id = null;

        return;
    }

    if (value <= 0 || value > 11) {
        dom.error.innerText = 'Please, write valid id';
        dom.root.classList.add('hidden');
        dom.error.classList.add('error');
        data.id = null;

        return;
    }

    const userData = await getUser(value);
    const userDom = createUserDom(userData);
    const alreadyExisted = document.querySelector('.container');

    dom.root.classList.remove('hidden');
    dom.error.innerHTML = '';
    dom.error.classList.remove('error');

    debugger;
    if (!alreadyExisted) {
        dom.root.append(userDom);
    } else {
        updateUserDom(alreadyExisted, userData);
    }

    data.id = value;
};

export default showUserHandler;

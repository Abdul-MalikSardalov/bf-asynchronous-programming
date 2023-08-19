import showUserHandler from '../handlers/showUserHandler.js';
import dom from '../../dom.js';

const showUserListener = () => {
    dom.btn.addEventListener('click', async (e) => {
        showUserHandler(e);
    });
};

export default showUserListener;

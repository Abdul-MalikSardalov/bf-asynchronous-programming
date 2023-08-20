import dom from '../../dom.js';
import showUserAndTodosHandler from '../handlers/showUserAndTodosHandler.js';

const showUserAndTodosListener = () => {
    dom.btn.addEventListener('click', () => {
        showUserAndTodosHandler();
    });
};

export default showUserAndTodosListener;

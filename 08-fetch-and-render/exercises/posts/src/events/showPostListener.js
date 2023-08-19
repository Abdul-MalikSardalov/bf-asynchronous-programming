import showPostHandler from '../handlers/showPostHandler.js';
import dom from '../dom.js';

const showPostListener = () => {
    dom.btn.addEventListener('click', showPostHandler);
};
export default showPostListener;

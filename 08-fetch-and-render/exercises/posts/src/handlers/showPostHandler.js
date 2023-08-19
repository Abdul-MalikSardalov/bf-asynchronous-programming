import dom from '../dom.js';
import getPost from '../../apis/getPosts.js';
import createPostDom from '../components/createPostDom.js';
import createCommentsDom from '../components/createCommentsDom.js';

const showPostHandler = async () => {
    dom.root.innerHTML = '';
    const id = Number(dom.inputForm.value);

    const postsData = await getPost(id); // json with category
    const postDom = createPostDom(postsData);

    dom.root.append(postDom);

    const commentsData = await getPost(id, 'comments');

    commentsData.forEach((comment) => {
        const commentDom = createCommentsDom(comment);
        dom.root.append(commentDom);
    });
};

export default showPostHandler;

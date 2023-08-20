import dom from '../../dom.js';
import data from '../../data.js';
import getUserData from '../../apis/getUserData.js';
import createUserCard from '../components/createUserCard.js';
import createTodoList from '../components/createTodoList.js';

const showUserAndTodosHandler = async () => {
    const id = dom.value.value;

    if (id === data.id) {
        return;
    } else {
        dom.root.innerHTML = '';
        const userCardData = await getUserData(id);
        const userCard = createUserCard(userCardData);
        dom.root.append(userCard);

        const userTodoData = await getUserData(id, 'todos');

        userTodoData.forEach((data) => {
            const toDoListDom = createTodoList(data);

            dom.root.append(toDoListDom);
        });
    }
    data.id = id;
};

export default showUserAndTodosHandler;

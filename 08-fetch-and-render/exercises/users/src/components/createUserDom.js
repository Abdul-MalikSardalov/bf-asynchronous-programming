const createUserDom = (userData) => {
    const container = document.createElement('div');
    container.className = 'container';

    const name = document.createElement('h2');
    name.innerText = `Name: ${userData.name}`;
    name.className = 'user-name';

    const email = document.createElement('p');
    email.className = 'user-email';
    email.innerText = `Email: ${userData.email}`;

    const phone = document.createElement('p');
    phone.className = 'user-phone';
    phone.innerText = `Phone: ${userData.phone}`;

    const website = document.createElement('p');
    website.innerHTML = `<a href="${userData.website}">WebSite: ${userData.website}</a>`;
    website.classList.add('website');

    container.append(name, email, phone, website);

    return container;
};

export default createUserDom;

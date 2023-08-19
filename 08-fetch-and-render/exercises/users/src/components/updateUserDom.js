const updateUserDom = (userDom, userData) => {
    userDom.querySelector('.user-name').innerText = `Name: ${userData.name}`;
    userDom.querySelector('.user-email').innerText = `Email: ${userData.email}`;
    userDom.querySelector('.user-phone').innerText = `Phone: ${userData.phone}`;
    userDom.querySelector(
        '.website',
    ).innerHTML = `<a href="${userData.website}">WebSite: ${userData.website}</a>`;
};

export default updateUserDom;

export const getToken = () => {
    const cookie = document.cookie
    let token = cookie.replace(/token=([\w\-_]+)/g, '$1');

    return token;
}
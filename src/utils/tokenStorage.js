function storeToken(token, remember) {
    if (remember) {
        localStorage.setItem('token', token);
    } else {
        sessionStorage.setItem('token', token);
    }
}

function getToken() {
    return localStorage.getItem('token') || sessionStorage.getItem('token');
}

function removeToken() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
}

export { storeToken, getToken, removeToken };
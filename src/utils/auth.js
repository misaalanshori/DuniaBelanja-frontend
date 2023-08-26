import { storeToken, getToken, removeToken } from './tokenStorage'

async function login(email, password, remember) {
    logout();
    const url = import.meta.env.VITE_API+'/api/login';
    const data = new URLSearchParams();
    data.append('email', email);
    data.append('password', password);

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'accept': 'application/json'
        },
        body: data
    };

    const response = await fetch(url, requestOptions)
    const json = await response.json()

    if (json.code == 200) {
        storeToken(json.data.token, remember)
    } else {
        throw json.data.message || 'Error'
    }

}

function logout() {
    removeToken()
}

function isLoggedIn() {
    return Boolean(getToken())
}

export { login, logout, isLoggedIn }
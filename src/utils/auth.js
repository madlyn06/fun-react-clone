import Cookies from 'js-cookie';

export function checkUserLogin() {
    return !!Cookies.get("accessToken");
}

export function setAccessToken(token) {
    Cookies.set("accessToken", token);
}

export function getAccessToken() {
    return Cookies.get("accessToken");
}

export function setRefreshToken(token) {
    Cookies.set("refreshToken", token);
}

export function getRefreshToken() {
    return Cookies.get("refreshToken");
}

export function clearToken() {
    Cookies.remove("refreshToken");
    Cookies.remove("accessToken");
    Cookies.remove("user");
}

export function getUser() {
    return Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;
}
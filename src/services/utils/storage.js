function setStorage(key, value) {
    return localStorage.setItem(key, value);
}

function getStorage(key, value) {
    return localStorage.getItem(key);
}

export { setStorage, getStorage}
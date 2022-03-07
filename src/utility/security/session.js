
const set_authentication = async () => {
    return await window.localStorage.setItem("pointer_auth", "test")
}

const is_authenticated = () => {
    const auth_token = window.localStorage.getItem("pointer_auth")
    if (auth_token) {
        return auth_token
    }

    return null;
}

export { set_authentication, is_authenticated }
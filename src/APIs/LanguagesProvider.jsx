export async function getLanguages() {
    return {
        mailPlaceHolder: 'insert mail',
        passwordPlaceHolder: 'insert password',
        loginLabel: 'Login',
        forgotPasswordLabel: 'Forgot Password',
    }
}


export async function getAvailableLanguages() {
    return [
        {[en-us]: 'English'},
        {[he-il]: 'Hebrew'},
    ]
}
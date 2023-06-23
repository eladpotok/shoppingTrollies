const users = [

    {
        mail: 'eladpeleg@gmail.com',
        password: "1234",
        roleId: '1',
        firstName: 'elad',
        surename: 'peleg'
    }, 
    {
        mail: 'israelisraeli@gmail.com',
        password: "1234",
        roleId: '2',
        firstName: 'israel',
        surename: 'israeli'
    }, 

]


export async function getUser() {
    return {
        name: 'elad peleg',
        role: 'admin',
        mail: 'potokelad@gmail.com'
    }
}


export async function login(mail, password) {

    const loggedInUser = users.filter( u=> u.mail === mail && u.password === password )
    if (loggedInUser.length == 0) {
        console.log('no users found')
        return null
    }

    return loggedInUser[0]
}
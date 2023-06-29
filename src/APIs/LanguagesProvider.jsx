export async function getLanguages(id) {
    const langs = [
        {            
            flow: 'ltr',
            id: 1,
            translations: {
                mailPlaceHolder: 'insert mail',
                passwordPlaceHolder: 'insert password',
                loginLabel: 'Login',
                forgotPasswordLabel: 'Forgot Password',
                homeTab: 'Find', 
                overViewFindEntityPlaceHolder: 'Find you branch...',
                emailAddressLabel: 'Email Address',
                passwordLabel: 'Password',
                myAccountLabel: 'My Account',
                logoutButtonText: 'Logout',
                warehouseTab: 'Warehouse',
                ordersTab: 'Orders',
                findTab: 'Find',
                branchesTab: 'Branches',
                productsTitle: 'Product',
                profileTitle: 'Profile'
            }
        },
        {
            flow: 'rtl',
            id: 2,
            translations: {
                mailPlaceHolder: 'insert mail',
                passwordPlaceHolder: 'insert password',
                loginLabel: 'Login',
                forgotPasswordLabel: 'Forgot Password',
                homeTab: 'חיפוש',
                overViewFindEntityPlaceHolder: 'הקלד את שם המקום שאתה מחפש...',
                emailAddressLabel: 'כתובת מייל אלקטרוני',
                passwordLabel: 'סיסמה',
                myAccountLabel: 'החשבון שלי',
                logoutButtonText: 'יציאה מהחשבון',
                warehouseTab: 'מחסן',
                ordersTab: 'הזמנות',
                findTab: 'חיפוש',
                branchesTab: 'סניפים',
                productsTitle: 'מוצר',
                profileTitle: 'פרופיל'
            }
        }
    ] 

    return langs.filter( l => l.id == id)[0]
}


export async function getAvailableLanguages() {
    return [
        {
            short: 'en-us',
            display: 'English',
            id: 1
        },
        {
            short: 'he-il',
            display: 'Hebrew',
            id: 2
        }
    ]
}
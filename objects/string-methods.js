let name = 'Vardhan Bhatt'

console.log(name.length)

name.toUpperCase()

let password = '!@#$%password&*(_'

console.log(password.includes('password'))

let isValidPassword = function (pwdString) {
    return pwdString.length > 8 && !pwdString.includes('password')
}

console.log(isValidPassword('jhahdgpassword94638746'))
console.log(isValidPassword('&$%*^%$VBGGJFJG'))
const phoneRegex = document.getElementById('phone-regex')
const myPhone = document.getElementById('my-phone')
const checkPhoneNumber = (value) => {
    const regex = /^0[0-9]{9,11}$/
    const isPhoneNumber = regex.test(value)
    if (isPhoneNumber) {
        return true
    } else {
        return false
    }
}

phoneRegex.addEventListener('keyup', (e) => {
    const value = e.target.value
    const isPhoneNumber = checkPhoneNumber(value)
    if (value.length <= 12) {
        if (isPhoneNumber) {
            myPhone.innerHTML = 'berhasil'
        } else {
            myPhone.innerHTML = 'gagal'
        }
    } else {
        myPhone.innerHTML = 'melebihi'
    }
})
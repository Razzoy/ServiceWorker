
const chkRegister = document.getElementById('figRegister')
const chkInstall = document.getElementById('figInstall')
const chkActivate = document.getElementById('figActivate')
const chkFetch = document.getElementById('figFetch')


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
    .then(reg => {
        console.log('Service worker registered', reg,)
        chkRegister.classList.toggle('chkTrue')
    })
    .catch(err => {
        console.log('Service worker not registered', err)
        chkRegister.classList.toggle('chkFalse')
    })
}

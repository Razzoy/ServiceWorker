//Installer Service Worker
self.addEventListener('install', event =>{
    console.log('Service Worker has been installed', event);
})

//Aktiver Service Worker
self.addEventListener('activate', event =>{
    console.log('Service Worker has been activated', event);
})

//Fetch Service Worker
self.addEventListener('fetch', event =>{
    console.log('Fetch event', event);
})
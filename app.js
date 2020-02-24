if('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js')
    .then(reg => console.info('Service worker registered.'))
    .catch(err => console.error('Service worker not registered.', err));
}
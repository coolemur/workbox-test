let dynamicManifest = {
  "name": "test",
  "short_name": "test",
  "start_url": window.location.href,
  "icons": [{
    "src": `${window.location.href}apple-touch-icon.png`,
    "sizes": "180x180",
    "type": "image/png"
  },
  {
    "src": `${window.location.href}android-chrome-512x512.png`,
    "sizes": "512x512",
    "type": "image/png"
  }],
  "theme_color": "#1F1F1F",
  "background_color": "#434A7F",
  "display": "standalone"
};

const stringManifest = JSON.stringify(dynamicManifest);
const blob = new Blob([stringManifest], {type: 'application/json'});
const manifestURL = URL.createObjectURL(blob);
document.querySelector('[rel="manifest"]').setAttribute('href', manifestURL);

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js')
    .then(reg => console.info('Service worker registered.'))
    .catch(err => console.error('Service worker not registered.', err));
}
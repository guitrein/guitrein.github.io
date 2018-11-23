const HOST='https://guitrein.github.io'

if ('serviceWorker' in navigator) {
  console.log("tem serviceWorker");
  navigator.serviceWorker
    .register(`${HOST}/service-worker.js`)
    .then(function () { console.log('Service Worker Registered'); });
}

var cacheName = 'wallet';
var filesToCache = [
  `${HOST}/css/style.css`,
  `${HOST}/img/perfil.png`,
  `${HOST}/img/icons/icon-128x128.png`,
  `${HOST}/img/icons/icon-144x144.png`,
  `${HOST}/img/icons/icon-152x152.png`,
  `${HOST}/img/icons/icon-192x192.png`,
  `${HOST}/img/icons/icon-256x256.png`,
  `${HOST}/js/app.js`,
  `${HOST}/js/script.js`,
  `${HOST}/service-worker.js`,
  `${HOST}/js/tarefas.js`,
  `${HOST}/js/wallet.js`,
  `${HOST}/lib/bulma.css`,
  `${HOST}/index.html`,
  `${HOST}/manifest.json`
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(cacheName).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
// On install la PWA
self.addEventListener('install', e => {
  e.waitUntil(
    // Fonction qui renvoie une promesse
    caches.open('pwa')
    .then(cache => {
      return cache.addAll([
        '/', // Ensemble du projet
        '/serviceWorker.js',
        '/manifest.json',
        '/ets-logo.png',
        '/index.html'
      ])
      .then(() => self.skipWaiting())
    })
  )
})

// On active la PWA
self.addEventListener('activate', event => {
  // Les clients attendent des chose, on les active
  event.waitUntil(self.clients.claim())
})

// On repond au front qui attend les données
self.addEventListener('fetch', event => {
  // Ton event doit repondre avec
  event.respondWith(
    // On veut matcher les caches de la request
    caches.match(event.request)
    .then(response => {
      // S'il y a une response on la retourne sinon on fetch l'event.request
      return response || fetch(event.request)
    })
  )
})
const CACHE_NAME = "nutrisafe-v1";
const assets = [
  "./",
  "./index.html",
  "./app.js",
  "./style.css",
  "./manifest.json"
];

// Instal·lació del Service Worker i guardat a la memòria cau (offline)
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Interceptar peticions per servir l'app més ràpid
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});

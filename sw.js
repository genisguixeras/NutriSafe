const CACHE_NAME = "nutrisafe-v3";
const assets = [
  "./",
  "./index.html",
  "./app.js",
  "./style.css",
  "./manifest.json",
  "./logo.png"
];

// Instal·lació del Service Worker i desat a la memòria cau (offline).
// Guardem cada fitxer per separat (en comptes de cache.addAll, que és tot o res):
// així, si algun fitxer encara no existeix (p.ex. logo.png), la resta es desen
// igualment i el Service Worker s'instal·la correctament.
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.allSettled(assets.map(asset => cache.add(asset)));
    })
  );
  self.skipWaiting();
});

// Activació del Service Worker i neteja de memòria cau antiga
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Interceptar les peticions: si és a la memòria cau, la servim d'allà (offline);
// si no, la demanem a la xarxa i, si funciona, la guardem per a la propera vegada.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;

  e.respondWith(
    caches.match(e.request).then(cachedResponse => {
      if (cachedResponse) return cachedResponse;

      return fetch(e.request)
        .then(networkResponse => {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(e.request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => cachedResponse);
    })
  );
});

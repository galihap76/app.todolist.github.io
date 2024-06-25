const CACHE_NAME = "todo-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/assets/css/style.css",
  "/assets/js/app.js",
  "/assets/img/icon-192x192.png",
  "/assets/img/icon-512x512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

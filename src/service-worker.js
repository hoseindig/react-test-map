const CACHE_NAME = "react-pwa-app-cache";
const urlsToCache = [
  "/",
  "/index.html",
  "/logo192.png",
  "/logo512.png",
  // Add other assets you want to cache here
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});

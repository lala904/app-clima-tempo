self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("app-clima-e-tempo-cache").then(cache => {
            return cache.addAll([
                "index.html",
                "manifest.json",
                "icone-192.png",
                "icon-512.png",
                "foto1.jpg",
                "foto2.jpg",
                "foto3.jpg",
                "foto4.jpg"
            ]);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
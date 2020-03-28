'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/assets/worldmap.jpg": "69919f61b69024f881018ac278e20291",
"/assets/assets/beach.jpg": "73df522274d819896d5f99145043c3bd",
"/assets/assets/barcode.png": "ebe3f605c6a8b0aadb8ecc4ab50062d8",
"/assets/assets/macau.jpg": "22582b7c87f0f313935167eab82c7557",
"/assets/assets/operahouse.jpg": "4f4985400e9121b3b5ad2607cf844361",
"/assets/assets/people.jpeg": "d6cf848a44d30b66c7519cb7099bfd50",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "f1f0c7adb0dd97e24c2504039ff137c3",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "d802f22cda6977e815741b40d8c7cc83"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

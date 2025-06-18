const CACHE_NAME = 'thannxai-particles-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://upload.wikimedia.org/wikipedia/commons/8/8a/Lotus_flower_symbol.svg',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=192',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=512',
  'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200',
  'https://images.pexels.com/photos/5325567/pexels-photo-5325567.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600',
  'https://images.unsplash.com/photo-1579606039705-b708d7d8abfc?w=600',
  'https://images.unsplash.com/photo-1618477461853-c0fbd4630b76?w=600'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

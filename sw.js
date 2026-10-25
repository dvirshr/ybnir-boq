// Service worker מינימלי – רק כדי שהדפדפן יאפשר התקנה כאפליקציה. בלי מטמון: תמיד הגרסה העדכנית מהרשת.
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});

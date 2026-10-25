// Service worker מינימלי – רק כדי שהדפדפן יאפשר התקנה כאפליקציה. בלי מטמון: תמיד הגרסה העדכנית מהרשת.
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
// דף האפליקציה נטען תמיד מהרשת בלי מטמון הדפדפן (no-store), כדי שעדכון יופיע מיד ברענון
self.addEventListener('fetch',e=>{ if(e.request.mode==='navigate') e.respondWith(fetch(e.request,{cache:'no-store'}).catch(()=>fetch(e.request))); });

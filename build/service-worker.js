"use strict";var precacheConfig=[["/index.html","fb3c2129cce2c764bd2eb2b427efb31b"],["/static/css/main.7620a374.css","21476b2d5bdffff43b8c57a83abda380"],["/static/js/0.382ad552.chunk.js","c15c879d55fa52dbe80ed93b31de3f64"],["/static/js/1.5612448d.chunk.js","be1bb9523dcf0c88d64897a34a27a29c"],["/static/js/10.a66434d2.chunk.js","954172dd632b6b93614e8cbbf326ce08"],["/static/js/11.be1de14d.chunk.js","e6fada4de04faa9a38cec4952c37513c"],["/static/js/12.b56133f6.chunk.js","efe13bc89572815f7535b87db2dddbcb"],["/static/js/13.ad1360b4.chunk.js","696d51fce746146f53b81271fe6be771"],["/static/js/2.b0306f37.chunk.js","a0e1dca52ee6c21b35b8f04353f198cb"],["/static/js/3.05ae5058.chunk.js","3237376f4c7745fc51e85e5323defef1"],["/static/js/4.2811a5ec.chunk.js","14ea05fb0c25aaf0cce08411aa88f353"],["/static/js/5.b87506cc.chunk.js","283f3e61a25d98123d12903a46bee8ea"],["/static/js/6.b3cb093a.chunk.js","7ae7655ac77906fa1909ca166ae7a567"],["/static/js/7.75718db7.chunk.js","7d28f6859610136982e843db5fc31bc9"],["/static/js/8.6ecf121f.chunk.js","ce02ea65e44d893c7f8fa90eef5632ff"],["/static/js/9.52ae4073.chunk.js","af0602ba6c483863fac3bf43fbee98ae"],["/static/js/main.9af132db.js","84703d650ade0cbdf63dd7e022ee73f3"],["/static/media/404.f4f3a8d8.jpg","f4f3a8d8e518a09ed15cbf5313a63dea"],["/static/media/facebook.c3310087.svg","c33100879ab19da0c462c84931aada39"],["/static/media/logo.3ae5cd3b.svg","3ae5cd3be23d876f6c655de0c1db6fef"],["/static/media/twitter.8ead66e0.svg","8ead66e0ac63aa4b5c0ef94ab07210f0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});
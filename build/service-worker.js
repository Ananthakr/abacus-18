"use strict";var precacheConfig=[["/index.html","d28d4acbe46a31f8f60e618493847395"],["/static/css/main.6d27f868.css","99542ab191978a996b1dce8b013901d7"],["/static/js/0.f021a063.chunk.js","296bef94d542c10e9c4f54b504ddb124"],["/static/js/1.4fcf6979.chunk.js","f4243b7c53d37be1811a5fd7a56f1933"],["/static/js/10.15bea624.chunk.js","574722c71177adf70d638409e0326ff4"],["/static/js/11.6146549c.chunk.js","6c3c93fd8b13cfee4a35428085fddf1e"],["/static/js/12.75a726da.chunk.js","13c7797fc116d992c4dba6e3d529a8b6"],["/static/js/13.be3be309.chunk.js","567fe27415a7bc2ef24bbac028ad0efa"],["/static/js/2.b3cea16e.chunk.js","88c8e0272345a3001e75f71060706451"],["/static/js/3.8c98a781.chunk.js","c9026df137ad8842815d14be87bb03c1"],["/static/js/4.9d5135e4.chunk.js","63167a55dabc8836550552bfd18ad3ba"],["/static/js/5.7b85b98a.chunk.js","cb767975668ea4ce264febe761ea7ec3"],["/static/js/6.6f188d58.chunk.js","53f927f2b7579ad57b6e42b923d8945c"],["/static/js/7.3e441db5.chunk.js","3e3538228398f932872b5a865d792e25"],["/static/js/8.27d551e8.chunk.js","291cc5749620e6d38b3836cfe75d2838"],["/static/js/9.b235fc19.chunk.js","d459a13da9e17272e2ff9f1977f68b03"],["/static/js/main.c017c4e6.js","4db8da8603dffceedb3107c43ccda52c"],["/static/media/404.f4f3a8d8.jpg","f4f3a8d8e518a09ed15cbf5313a63dea"],["/static/media/facebook.c3310087.svg","c33100879ab19da0c462c84931aada39"],["/static/media/light.feee2b15.jpg","feee2b15e95cf3a4ebb0f998fbceca87"],["/static/media/logo.3ae5cd3b.svg","3ae5cd3be23d876f6c655de0c1db6fef"],["/static/media/twitter.8ead66e0.svg","8ead66e0ac63aa4b5c0ef94ab07210f0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});
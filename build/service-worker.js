"use strict";var precacheConfig=[["/index.html","0b0e4c83dce4dbf46f17cf54b04a48b6"],["/static/css/main.9f74f954.css","e205858b08ec3421f4d50d5c1ade43ca"],["/static/js/0.5164952c.chunk.js","d3153d85e8009000c049e5fc64b11db8"],["/static/js/1.1e90e71a.chunk.js","1a829bdb69112810f7f15fd9bf2c2c3c"],["/static/js/10.afa3b514.chunk.js","886e705cbe3fb302ecd170eb5cbd013f"],["/static/js/11.67480bea.chunk.js","48ac01eedd5a080ac700d425456ebc1e"],["/static/js/12.61914c57.chunk.js","4e5fa36ce84e3254879abe446b514bf9"],["/static/js/13.c9ede4fc.chunk.js","902a54aea03272544b3c3da61ff425fb"],["/static/js/14.c290c423.chunk.js","2a1edbff6206a39662cf2a4fc64114ab"],["/static/js/2.8140ebc9.chunk.js","914974f2660489eaa3b8d61400de7855"],["/static/js/3.4e3a5803.chunk.js","dacb6979ebd6f00f1f7afa2c64256e3b"],["/static/js/4.32ad0d7b.chunk.js","f909306cc8bde302c4a992bada8e7ec7"],["/static/js/5.9c2daf12.chunk.js","111efce1f573fdae6aff462381fc56c5"],["/static/js/6.2abbc1cb.chunk.js","7e1f90f801fef5b29f459d9165f93f40"],["/static/js/7.ac267cbf.chunk.js","f28022aa1e11b7b265be31fb096ac904"],["/static/js/8.c16cb04b.chunk.js","2f91d686d067eca69f4c8e25a669f1d4"],["/static/js/9.4c9e28f0.chunk.js","8410464f90b6e9040bc7673ebfad0cc6"],["/static/js/main.ec88d2e8.js","eb0c1f4cd527ea5919c9cb5f9aa7f61a"],["/static/media/404.f4f3a8d8.jpg","f4f3a8d8e518a09ed15cbf5313a63dea"],["/static/media/SpriteXtreme.e97025fe.png","e97025fef8ed95e87be63452e593233e"],["/static/media/facebook.c3310087.svg","c33100879ab19da0c462c84931aada39"],["/static/media/logo.3ae5cd3b.svg","3ae5cd3be23d876f6c655de0c1db6fef"],["/static/media/opteamize.7a744934.png","7a744934b6eebe4836bf88c4785004ca"],["/static/media/twitter.8ead66e0.svg","8ead66e0ac63aa4b5c0ef94ab07210f0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});
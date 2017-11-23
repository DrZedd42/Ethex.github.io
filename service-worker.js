"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["./index.html","44eb178f64da761e30cff98569b655b8"],["./static/css/main.f3f767a3.css","e06341406b4ad1ba83298e4caaed281e"],["./static/js/main.6642414e.js","718c4e84d4576da254770ffbc33e9519"],["./static/media/ETHEREUM-ICON_Black.f9eebb41.png","f9eebb415150081b1aa944c64fe1720c"],["./static/media/ethex-is-decentralized2x.1551cb1c.png","1551cb1caecba21fca6699f62fb448d8"],["./static/media/ethex-mainpage-bg.b298ffd6.png","b298ffd6f95672649eb1f5bb94b39835"],["./static/media/ethex-screen2x.8fc2e33b.png","8fc2e33bd7c316d3cb4fbfa896010757"],["./static/media/etx-header-bg.83f7ac36.jpg","83f7ac366ce8c22c6f07b04cbc0ec12e"],["./static/media/etx-logotype-main2x.13dc7803.png","13dc7803e4063784a51fbe69fb11ffa2"],["./static/media/etx-logotype2x.35d66103.png","35d66103bcbee2c21284c968df2f6660"],["./static/media/etx-tokenhover2x.47f1846b.png","47f1846bc24c485983c78490fb8f69bd"],["./static/media/ic_add_circle_white_24px.22cbdba9.svg","22cbdba95d26379e29709a056cdf4ae1"],["./static/media/ic_content_copy_white_24px.8ac479f4.svg","8ac479f4d5b4e71fd4b09889a4fa283b"],["./static/media/ic_delete_forever_white_24px.bd0986d2.svg","bd0986d268d4497658968755f5a16ecb"],["./static/media/ic_file_download_white_24px.4b5c054e.svg","4b5c054e76b0df3cbbc851854cd10c3c"],["./static/media/ic_file_upload_white_24px.f95b7756.svg","f95b7756c87585daa0c2391b34958be4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("./index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});
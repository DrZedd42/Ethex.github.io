"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["./index.html","e4ef506a702c71d325abaf60a94b1bc7"],["./static/css/main.dea22ec2.css","00f51a8c745a431c25ffe13fe80d2e99"],["./static/js/main.5e9c20cf.js","d640f9ca96f7fc36a482bfab3258e04d"],["./static/media/ETHEREUM-ICON_Black.f9eebb41.png","f9eebb415150081b1aa944c64fe1720c"],["./static/media/arrow-left-thick.d98c5eca.svg","d98c5eca94aebeee8184c383a1b6e099"],["./static/media/arrow-right-thick.63451c78.svg","63451c783b09efef32bb87a652e1f421"],["./static/media/ethex-is-decentralized2x.1551cb1c.png","1551cb1caecba21fca6699f62fb448d8"],["./static/media/ethex-mainpage-bg.b298ffd6.png","b298ffd6f95672649eb1f5bb94b39835"],["./static/media/ethex-screen2x.8fc2e33b.png","8fc2e33bd7c316d3cb4fbfa896010757"],["./static/media/etx-header-bg.83f7ac36.jpg","83f7ac366ce8c22c6f07b04cbc0ec12e"],["./static/media/etx-logotype-main2x.13dc7803.png","13dc7803e4063784a51fbe69fb11ffa2"],["./static/media/etx-logotype2x.35d66103.png","35d66103bcbee2c21284c968df2f6660"],["./static/media/etx-tokenhover2x.47f1846b.png","47f1846bc24c485983c78490fb8f69bd"],["./static/media/exchangetool.53d128f2.svg","53d128f2024fff244ada02fa7e5d01fc"],["./static/media/ic_add_circle_white_24px.22cbdba9.svg","22cbdba95d26379e29709a056cdf4ae1"],["./static/media/ic_content_copy_white_24px.8ac479f4.svg","8ac479f4d5b4e71fd4b09889a4fa283b"],["./static/media/ic_delete_forever_white_24px.df29baf1.svg","df29baf18e64177e5499acf7b596d71c"],["./static/media/ic_file_download_black_48px.130c3918.svg","130c3918d3b4338031e262858de60063"],["./static/media/ic_file_download_white_24px.e61ff228.svg","e61ff2286b39385f098abc67edfd1935"],["./static/media/ic_file_upload_white_24px.f95b7756.svg","f95b7756c87585daa0c2391b34958be4"],["./static/media/logo.44357d12.png","44357d12027c4257619829bed0b4b688"],["./static/media/scale-balance.2c8c8be4.svg","2c8c8be47cb4b63feb1e6b132f5950ef"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("./index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});
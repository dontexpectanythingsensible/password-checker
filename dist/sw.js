var __wpo = {"assets":{"main":["/app.f6e84d7ae975ff275ad8dd64d49dfdb1.css","/vendor.f0d030f7e951bfa14ee8.js","/app.9b5c9262064cc671b73d.js"],"additional":[],"optional":[]},"externals":[],"hashesMap":{"466ab84770af677162d519f150b67d23d159a975":"/vendor.f0d030f7e951bfa14ee8.js","71317748b159fadd6c5a2b77fdd81f1b2323a6ad":"/app.9b5c9262064cc671b73d.js","6af31d2c5b7e14f0b96ae79a287ecfee78c2d3fb":"/app.f6e84d7ae975ff275ad8dd64d49dfdb1.css"},"navigateFallbackURL":"/","navigateFallbackForRedirects":true,"strategy":"changed","responseStrategy":"cache-first","version":"5/30/2017, 11:45:55 AM","name":"webpack-offline","pluginVersion":"4.8.1","relativePaths":false};

!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var t={};return n.m=e,n.c=t,n.p="/",n(0)}([function(e,n,t){"use strict";function r(e,n){function t(){if(!P.additional.length)return Promise.resolve();var e=void 0;return e="changed"===b?c("additional"):r("additional"),e.catch(function(e){console.error("[SW]:","Cache section `additional` failed to load")})}function r(n){var t=P[n];return caches.open(W).then(function(n){return x(n,t,{bust:e.version,request:e.prefetchRequest})}).then(function(){f("Cached assets: "+n,t)}).catch(function(e){throw console.error(e),e})}function c(n){return h().then(function(t){if(!t)return r(n);var o=t[0],i=t[1],a=t[2],c=a.hashmap,u=a.version;if(!a.hashmap||u===e.version)return r(n);var s=Object.keys(c).map(function(e){return c[e]}),l=i.map(function(e){var n=new URL(e.url);return n.search="",n.toString()}),h=P[n],d=[],v=h.filter(function(e){return l.indexOf(e)===-1||s.indexOf(e)===-1});Object.keys(R).forEach(function(e){var n=R[e];if(h.indexOf(n)!==-1&&v.indexOf(n)===-1&&d.indexOf(n)===-1){var t=c[e];t&&l.indexOf(t)!==-1?d.push([t,n]):v.push(n)}}),f("Changed assets: "+n,v),f("Moved assets: "+n,d);var p=Promise.all(d.map(function(e){return o.match(e[0]).then(function(n){return[e[1],n]})}));return caches.open(W).then(function(n){var t=p.then(function(e){return Promise.all(e.map(function(e){return n.put(e[0],e[1])}))});return Promise.all([t,x(n,v,{bust:e.version,request:e.prefetchRequest})])})})}function l(){return caches.keys().then(function(e){var n=e.map(function(e){if(0===e.indexOf(L)&&0!==e.indexOf(W))return console.log("[SW]:","Delete cache:",e),caches.delete(e)});return Promise.all(n)})}function h(){return caches.keys().then(function(e){for(var n=e.length,t=void 0;n--&&(t=e[n],0!==t.indexOf(L)););if(t){var r=void 0;return caches.open(t).then(function(e){return r=e,e.match(new URL(j,location).toString())}).then(function(e){if(e)return Promise.all([r,r.keys(),e.json()])})}})}function d(){return caches.open(W).then(function(n){var t=new Response(JSON.stringify({version:e.version,hashmap:R}));return n.put(new URL(j,location).toString(),t)})}function v(e,n,t){return o(t,W).then(function(r){if(r)return r;var o=fetch(e.request).then(function(r){return r.ok?(t===n&&!function(){var t=r.clone(),o=caches.open(W).then(function(e){return e.put(n,t)}).then(function(){console.log("[SW]:","Cache asset: "+n)});e.waitUntil(o)}(),r):r});return o})}function p(e,n,t){return fetch(e.request).then(function(e){if(e.ok)return e;throw new Error("Response is not ok")}).catch(function(){return o(t,W)})}function m(e){return e.catch(function(){}).then(function(e){var n=e&&e.ok,t=e&&"opaqueredirect"===e.type;return n||t&&!F?e:o(C,W)})}function g(){Object.keys(P).forEach(function(e){P[e]=P[e].map(function(e){var n=new URL(e,location);return U.indexOf(e)===-1?n.search="":n.hash="",n.toString()})}),Object.keys(E).forEach(function(e){E[e]=E[e].map(function(e){var n=new URL(e,location);return U.indexOf(e)===-1?n.search="":n.hash="",n.toString()})}),R=Object.keys(R).reduce(function(e,n){var t=new URL(R[n],location);return t.search="",e[n]=t.toString(),e},{}),U=U.map(function(e){var n=new URL(e,location);return n.hash="",n.toString()})}function x(e,n,t){var r=t.allowLoaders!==!1,o=t&&t.bust,a=t.request||{credentials:"omit",mode:"cors"};return Promise.all(n.map(function(e){return o&&(e=i(e,o)),fetch(e,a).then(u)})).then(function(o){if(o.some(function(e){return!e.ok}))return Promise.reject(new Error("Wrong response status"));var i=[],a=o.map(function(t,o){return r&&i.push(w(n[o],t)),e.put(n[o],t)});return i.length?!function(){var r=s(t);r.allowLoaders=!1;var o=a;a=Promise.all(i).then(function(t){var i=[].concat.apply([],t);return n.length&&(o=o.concat(x(e,i,r))),Promise.all(o)})}():a=Promise.all(a),a})}function w(e,n){var t=Object.keys(E).map(function(t){var r=E[t];if(r.indexOf(e)!==-1&&O[t])return O[t](n.clone())}).filter(function(e){return!!e});return Promise.all(t).then(function(e){return[].concat.apply([],e)})}function y(e){var n=e.url,t=new URL(n),r=void 0;r="navigate"===e.mode?"navigate":t.origin===location.origin?"same-origin":"cross-origin";for(var o=0;o<k.length;o++){var i=k[o];if(i&&(!i.requestTypes||i.requestTypes.indexOf(r)!==-1)){var a=void 0;if(a="function"==typeof i.match?i.match(t,e):n.replace(i.match,i.to),a&&a!==n)return a}}}var O=n.loaders,k=n.cacheMaps,b=e.strategy,q=e.responseStrategy,P=e.assets,E=e.loaders||{},R=e.hashesMap,U=e.externals,L=e.name,S=e.version,W=L+":"+S,j="__offline_webpack__data";g();var _=[].concat(P.main,P.additional,P.optional),C=e.navigateFallbackURL,F=e.navigateFallbackForRedirects;self.addEventListener("install",function(e){console.log("[SW]:","Install event");var n=void 0;n="changed"===b?c("main"):r("main"),e.waitUntil(n)}),self.addEventListener("activate",function(e){console.log("[SW]:","Activate event");var n=t();n=n.then(d),n=n.then(l),n=n.then(function(){if(self.clients&&self.clients.claim)return self.clients.claim()}),e.waitUntil(n)}),self.addEventListener("fetch",function(e){var n=e.request.url,t=new URL(n),r=void 0;U.indexOf(n)!==-1?r=n:(t.search="",r=t.toString());var o="GET"===e.request.method,i=_.indexOf(r)!==-1,c=r;if(!i){var u=y(e.request);u&&(c=u,i=!0)}if(!i&&o&&C&&a(e.request))return void e.respondWith(m(fetch(e.request)));if(!i||!o)return void(t.origin!==location.origin&&navigator.userAgent.indexOf("Firefox/44.")!==-1&&e.respondWith(fetch(e.request)));var s=void 0;s="network-first"===q?p(e,r,c):v(e,r,c),C&&a(e.request)&&(s=m(s)),e.respondWith(s)}),self.addEventListener("message",function(e){var n=e.data;if(n)switch(n.action){case"skipWaiting":self.skipWaiting&&self.skipWaiting()}})}function o(e,n){return caches.match(e,{cacheName:n}).then(function(t){return c()?t:u(t).then(function(t){return caches.open(n).then(function(n){return n.put(e,t)}).then(function(){return t})})}).catch(function(){})}function i(e,n){var t=e.indexOf("?")!==-1;return e+(t?"&":"?")+"__uncache="+encodeURIComponent(n)}function a(e){return"navigate"===e.mode||e.headers.get("Upgrade-Insecure-Requests")||(e.headers.get("Accept")||"").indexOf("text/html")!==-1}function c(e){return!e||!e.redirected||!e.ok||"opaqueredirect"===e.type}function u(e){if(c(e))return Promise.resolve(e);var n="body"in e?Promise.resolve(e.body):e.blob();return n.then(function(n){return new Response(n,{headers:e.headers,status:e.status})})}function s(e){return Object.keys(e).reduce(function(n,t){return n[t]=e[t],n},{})}function f(e,n){console.groupCollapsed("[SW]:",e),n.forEach(function(e){console.log("Asset:",e)}),console.groupEnd()}!function(){var e=ExtendableEvent.prototype.waitUntil,n=FetchEvent.prototype.respondWith,t=new WeakMap;ExtendableEvent.prototype.waitUntil=function(n){var r=this,o=t.get(r);return o?void o.push(Promise.resolve(n)):(o=[Promise.resolve(n)],t.set(r,o),e.call(r,Promise.resolve().then(function e(){var n=o.length;return Promise.all(o.map(function(e){return e.catch(function(){})})).then(function(){return o.length!=n?e():(t.delete(r),Promise.all(o))})})))},FetchEvent.prototype.respondWith=function(e){return this.waitUntil(e),n.call(this,e)}}();r(__wpo,{loaders:{},cacheMaps:[]}),e.exports=t(1)},function(e,n){}]);
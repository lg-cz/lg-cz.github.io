!function(){var s=["2ee7bdf08cca4694/bundle.js","c52d359f3dfe3e7d/bundle.css","assets/.DS_Store","assets/icon/.DS_Store","assets/icon/awful_active.png","assets/icon/bad_active.png","assets/icon/bad.png","assets/icon/camera.png","assets/icon/close.png","assets/icon/dropdown.png","assets/icon/good.png","assets/icon/good_active.png","assets/icon/polling.png","assets/icon/record.png","assets/icon/polling_active.png","assets/icon/soso_active.png","assets/icon/awful.png","assets/icon/soso.png","assets/icon/record_active.png","assets/icon/wecord_active.png","assets/icon/spinner.gif","assets/icon/wecord.png","assets/icon/weight.png","assets/icon/weight_active.png","manifest.json"];self.addEventListener("fetch",function(s){s.respondWith(self.caches.match(s.request).then(function(e){return e||self.fetch(s.request)}))}),self.addEventListener("install",function(e){e.waitUntil(self.caches.open("1.0.0").then(function(e){return e.addAll(s)}))}),self.addEventListener("activate",function(s){s.waitUntil(self.caches.keys().then(function(s){return Promise.all(s.map(function(e,n){if("1.0.0"!==s[n])return self.caches.delete(s[n])}))}))})}();
//# sourceMappingURL=bankai-service-worker.js.map
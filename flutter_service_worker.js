'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "34adcb80fc680d2e0a109e1d45bbef36",
".git/config": "4a3bd6f91c14faa7529be2f56d3ed69a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3b225a9c864b768af20d2b3803c07b72",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "47ddc1fd35c48544200d1f73f0f1a8cf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7441747dcf2df5988d59c41ea970794e",
".git/logs/refs/heads/master": "7441747dcf2df5988d59c41ea970794e",
".git/logs/refs/remotes/origin/master": "eb4f0a7c0211bbd188f707780922a69a",
".git/objects/00/bdaa74a6f351ff48de16b56a2a8b23cb8e7210": "d51f3c1e08de4c9c1daeba6da5a09aa8",
".git/objects/02/e6f8150008e6a50f6a29da78acd249940a2506": "52110f300cf1142dc4cb46c3bd513ddd",
".git/objects/03/3160ac21001bab4b934cafc94c783e5cd7750b": "4ab99478efa30add7f4248236c85da34",
".git/objects/17/d4f8d061efe71013b2dc2fa2f33415d6fc577b": "45e8055f2027c9b2b12eb4048cb548d1",
".git/objects/18/d53b56e6d6877f149f6c0ad3159cae2fc5aad6": "c7e08b91636ed28103174906cafa3b64",
".git/objects/1b/531fbbfe2be971de5a04aeb28278878f11ff53": "7b4d2bfc712fe70135fcb2f5c65378b4",
".git/objects/2e/c41d44743c35cb6e39123c64128c8b1ed75d20": "b161adb134fc20a05bf04c5756c966f6",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/4a238a89c3ab0120a7ea3e4ac2b9c84d881f3d": "4162076f21a5036fefc9c473cc4214ad",
".git/objects/50/5a4be3d8a8ed730a8a387be73bf3da29363633": "d31c5591a1d030f3639ac3409be275dd",
".git/objects/52/f1e664a948910fb8970c731dfad6672712959f": "f3f1af0b5de55782c1369e3df022a88f",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5b/8486e79594fb3aaf3c71dad8ffb0968b37fea6": "a29b9b83b1ff11d10e1089f335f54c79",
".git/objects/5f/a79a8ad49ba6ca71a85e0ec0e4731ebcfc41de": "6e62476a265a0fa692d160e58c8e18ab",
".git/objects/60/c4a3749411a8d37b1efea45e0b4613ad25daee": "2c08e75d53c1aed2ca857157bfcb7c80",
".git/objects/62/bdab39ce7d24552286fae9102b5f911f884547": "fe7b39540707bd95f81e7a83318fd1e3",
".git/objects/6c/e50050f7810773566bf76ff8620b85cf850da3": "77f0056e8e4120064ef319d0461c7cfe",
".git/objects/73/afb27ea8612caa00e196017d394e4bf6ec534d": "f48605f49380a69f0813d7452f133303",
".git/objects/7c/ed94cb638643784343ec63b982a853865e0cd8": "120ece8c4142c4aac67391e6f2f45668",
".git/objects/7d/4d1f1ca09858b028468e231d605dbf4654879f": "bc8134a01ab98cecd42fb94a62e9fa40",
".git/objects/80/d99e128ced69ef39cb273b55de71f11f730e40": "5b6ae0c4393a15afcaf66f85fa055f45",
".git/objects/90/0319b491b9a5406db37ab59920371659cee63c": "fdb0b7dae45acbe4ed7c1461fe482758",
".git/objects/9c/03d33470f8f0f64a6c57627229857297200489": "d54aefdb55a18161094241f071bcff0d",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/a5/2ba31c2474e43bfa2f78c756bfd4862933641a": "d7c2f007bdf386ec43a3f302f18e1086",
".git/objects/b4/12121f9533c136844b03b547eabc15d71413b4": "34fa4f1bc1a0e11026fd877c14190c8c",
".git/objects/b6/6f568a4e35b5a395194686829e3428672e686a": "c1b52b56f4a77b77ce6cc3b7db75b515",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/d0/0802d00610deb1530a1a9b365112c169dce819": "10af9bbf5156edffa36f30eb94d4472b",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/2001d812d92cedb91260d9ff8fd0fd880117c8": "a1ca94c81a3ba485338be3452be98588",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/c036986ecabad563d65c9f9c4bac2340e013a0": "a46af4a0335db09a025a29c96e5d3689",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/ea/7c9a6bc1325efbaded7b2050d0580b1d827b4d": "4e4a7b12ff463be14bad58b97f539468",
".git/objects/f5/50accee3f0a6342da0709eafe4e6d956845113": "3206a131eb711d3b9e23d3199bf6ef7a",
".git/objects/fa/4d19c79212b7c9b4a82fa9023a284931b3874a": "806c9225aca31b7a1c1123d64bcbb34d",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/refs/heads/master": "57481e07f18d82484d3057aeed5b041f",
".git/refs/remotes/origin/master": "77a2423bf9f86c36974925598230c536",
"assets/AssetManifest.bin": "5832997014f6318da4984726ccc3251b",
"assets/AssetManifest.json": "681f14b9887e0cbfefd05eed130e27a5",
"assets/assets/dark.png": "855f580006af9d9d888a5dfd48ae0f93",
"assets/assets/icon.png": "bbc34454d08361a3d3072b194f8bab7e",
"assets/assets/light.png": "31b06955ca44264d4cd430a896eae2d0",
"assets/assets/logo.png": "e7046cff93742647f30377e1378f5c35",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "87b91e6c0258ac5a199c06efe705cf76",
"assets/NOTICES": "13bc41a600da988e77e95adc26ce5857",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5d5418597ea2e32ebe506071ef84020b",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "3369a0a7b23ef7f1aea85c1d5a71d1e8",
"icons/Icon-512.png": "9525e1c9c2b91a0f863d4ce0d8082443",
"icons/Icon-maskable-192.png": "3369a0a7b23ef7f1aea85c1d5a71d1e8",
"icons/Icon-maskable-512.png": "9525e1c9c2b91a0f863d4ce0d8082443",
"index.html": "cdd3ba9cc6543cdce5df8685f6ebd538",
"/": "cdd3ba9cc6543cdce5df8685f6ebd538",
"main.dart.js": "1264c7b1e3889a81ab062ac25748c917",
"manifest.json": "def4c9ad383627e5e7ea57795a1cdb36",
"version.json": "bee4f41e2452dc52c86930b047c89558"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

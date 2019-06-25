/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b06d237fe5fb768128940aeaeebcedad"
  },
  {
    "url": "assets/css/0.styles.86146b40.css",
    "revision": "d83394ae5c31b86fd82b221095a737a7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.163201a7.js",
    "revision": "88014d3acd563d49f7ed9c339f60627c"
  },
  {
    "url": "assets/js/3.cee8e4e2.js",
    "revision": "86f7c5ef3d8dd3c2c31de917dea192b3"
  },
  {
    "url": "assets/js/4.d638eb9d.js",
    "revision": "861fc13432f8cf6ec1d43b9b355725cd"
  },
  {
    "url": "assets/js/5.3d8a2aba.js",
    "revision": "974267128c1a5ff8a63c4faba8d5ba51"
  },
  {
    "url": "assets/js/app.d7168da6.js",
    "revision": "1d6be93a97a61869005ee79f4cde211b"
  },
  {
    "url": "index.html",
    "revision": "1cada2afe43598716f6bb59b36c0f843"
  },
  {
    "url": "logo.png",
    "revision": "a53179ca13039218c56cb6bce42e3aa6"
  },
  {
    "url": "wap/zh-cn.html",
    "revision": "7957f1dace249a984014e56379763cca"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

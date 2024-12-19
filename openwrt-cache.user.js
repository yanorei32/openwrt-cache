// ==UserScript==
// @name         OpenWRT Cache
// @description  OpenWRT Cache
// @author       yanorei32
// @supportURL   https://github.com/yanorei32/openwrt-cache/issues
// @namespace    https://yr32.net/
// @website      https://github.com/yanorei32/openwrt-cache
// @updateURL    https://github.com/yanorei32/openwrt-cache/raw/master/openwrt-cache.user.js
// @downloadURL  https://github.com/yanorei32/openwrt-cache/raw/master/openwrt-cache.user.js
// @include      https://openwrt.org/*
// @version      0.1.0
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openwrt.yr32.net
// @grant        none
// @license      BSD-2-Clause
// @run-at       document-start
// ==/UserScript==

(function() {
    location.href = `https://openwrt.yr32.net${location.pathname}`;
})();

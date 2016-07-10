// ==UserScript==
// @name         TopBar-Blur
// @namespace    http://stackapps.com/questions/6968/blur-the-topbar-s-background
// @version      0.1
// @description  blurs the SE top bar
// @author       transferred to JS by IAP-Reloaded; by "J F" on SE
// @grant        none
// @match        *://*/*
// ==/UserScript==

var style = document.createElement('style')
style.type = 'text/css'
style.innerHTML = '.topbar{background-color:rgba(12,13,14,.4)!important;-webkit-backdrop-filter:blur(10px)}.triangle,.topbar-icon:not(.icon-site-switcher){-webkit-filter:brightness(200%);filter:brightness(200%)}.topbar-icon.yes-hover:hover,.topbar-links a:hover,.topbar-icon.topbar-icon-on{background-color:rgba(59,64,69,.4)!important}'
document.getElementsByTagName('head')[0].appendChild(style)

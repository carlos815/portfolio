!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){const n=document.querySelector(".available");if(n){let e=e=>e>=9&&e<=17,t=new Date,o=new Date(t.toLocaleString("en-US",{timeZone:"America/Caracas"}));n.textContent=e(o.getHours())?"🟢  I'm probably online right now.":"🟠  I'm probably offline right now."}},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var o=e=>new Promise(t=>setTimeout(t,e));var r=e=>{for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),o=0;o<n.length;o++){for(var r=n[o];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(t))return r.substring(t.length,r.length)}return""};const a=document.querySelector(".theme-toggle");a.style.opacity="1";const i=[{themeName:"dark",mainColor:"#D4D4D4",secondaryColor:"#1E1E1E",hightlight:"#CE9178",comment:"#6A9953",filter:"invert(98%) sepia(1%) saturate(2185%) hue-rotate(205deg) brightness(106%) contrast(66%)"},{themeName:"blue",mainColor:"#EEEDF0",secondaryColor:"#012456",hightlight:"#FFFF00",comment:"#008080",filter:"invert(94%) sepia(6%) saturate(59%) hue-rotate(218deg) brightness(102%) contrast(91%)"},{themeName:"ubuntu",mainColor:"#ffffff",secondaryColor:"#2d0922",hightlight:"#6eda34",comment:"#bc8b0a",filter:"invert(100%) sepia(100%) saturate(0%) hue-rotate(241deg) brightness(107%) contrast(106%)"},{themeName:"light",mainColor:"#2b2b2b",secondaryColor:"#ffffff",hightlight:"blue",comment:"#008000",filter:"invert(9%) sepia(0%) saturate(441%) hue-rotate(191deg) brightness(112%) contrast(83%)"}];async function l(e,t=100){const{themeName:n,mainColor:r,secondaryColor:i,hightlight:l,comment:c,filter:m}=e;console.log("theme changed"),document.cookie="theme="+n,s=n,a.style.transform="rotate(1turn)",await o(2*t),a.children[0].style.opacity=0,a.style.backgroundColor=i,document.documentElement.style.setProperty("--main-color",r),document.documentElement.style.setProperty("--secondary-color",i),document.documentElement.style.setProperty("--img-filter",m),document.documentElement.style.setProperty("--highlight-color",l),document.documentElement.style.setProperty("--comment-color",c),await o(5*t),a.style.position="inherit",a.style.backgroundColor="transparent",a.children[0].style.opacity=1,a.style.transform="rotate(-1turn)"}let s=r("theme");if(""==r("theme"))l(i[0],0),document.cookie="theme="+i[0].themeName;else{const e=c(i,"themeName",r("theme"));l(i[e],0)}function c(e,t,n){for(let o=0;o<e.length;o++)if(e[o][t]==n)return o}a.onclick=async()=>{const e=c(i,"themeName",s);l(i[e==i.length-1?0:e+1])};n(0);function m(){let e="abcdefgaweqwrcschijklmnñopiop-iñk..l,mqrstuvwxyz";return e[Math.floor(Math.random()*e.length)]}var f=async function(e){e.classList.add("selected"),e.textContent="",e.style.opacity=1,await o(500);let t=0;for(;e.textContent!=e.finalText;){if(null==e.finalText[t]||1==e.hasBeenAnimated){e.textContent=e.finalText,e.classList.remove("selected");break}e.textContent+=e.finalText[t],t++;let n=40;","==e.finalText[t]&&(n=200),Math.random()<.007&&(e.textContent+=m(),await o(200),e.textContent+=m(),await o(100),e.textContent=e.textContent.substring(0,e.textContent.length-1),await o(200),e.textContent=e.textContent.substring(0,e.textContent.length-1),await o(200)),await o(n)}e.innerHTML=e.finalINNERHTML,e.classList.remove("selected")};async function u(e){for(let t of e.children)if("H1"==t.tagName)await f(t);else if("image-and-description"==t.className){for(let e of t.children)if("FIGURE"==e.tagName)await o(100),e.style.opacity=1,e.style.top=0,await o(500);else if("description"==e.className)for(let t of e.children)t.style.opacity=1}else if("scroll"==t.className||"small"==t.className)await o(300),t.style.opacity=1;else if("about-me"==t.className)for(let e of t.children)await f(e)}n(1),n(2);const d=document.querySelectorAll("h1"),h=document.querySelectorAll(".description p, .about-me p"),y=document.querySelectorAll(".page");function g(e){let t=e.getBoundingClientRect();const n=.25*window.innerHeight;return t.top<window.innerHeight-n&&t.bottom>=0}function p(e){for(let t of e)g(t)&&0==t.hasBeenAnimated&&(t.hasBeenAnimated=!0,u(t))}d.forEach(e=>{e.finalText=e.textContent,e.finalINNERHTML=e.innerHTML,e.hasBeenAnimated=!1}),h.forEach(e=>{e.finalText=e.textContent,e.finalINNERHTML=e.innerHTML,e.hasBeenAnimated=!1}),y.forEach(e=>{e.hasBeenAnimated=!1,e.onclick=()=>{!async function(e){for(let t of e.children)if("H1"==t.tagName)t.hasBeenAnimated=!0;else if("image-and-description"==t.className){for(let e of t.children)if("FIGURE"==e.tagName)e.style.opacity=1,e.style.top=0;else if("description"==e.className)for(let t of e.children)t.hasBeenAnimated=!0}else if("scroll"==t.className||"small"==t.className)t.style.opacity=1;else if("about-me"==t.className)for(let e of t.children)e.hasBeenAnimated=!0}(e)}}),p(y),window.addEventListener("scroll",()=>{p(y)});document.querySelectorAll(".small").forEach(e=>{e.onclick=()=>{e.nextElementSibling;let t="true"==e.getAttribute("aria-pressed");e.setAttribute("aria-pressed",!t),t?e.nextElementSibling.classList.add("hidden"):e.nextElementSibling.classList.remove("hidden")}})}]);
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);const o=(e,t=[],n=[],o=null)=>{const r=document.createElement(e);return t&&r.classList.add(...t),n&&n.forEach(e=>r.appendChild(e)),o&&o(r),r};class r{constructor(){((e,t="latest")=>{fetch(((e,t)=>`https://unpkg.com/@creativecommons/vocabulary@${e}/${t}`)(t,e)).then(e=>e.text()).then(e=>o("div",[],[],t=>{t.innerHTML=e,t.style.display="none"})).then(e=>{document.body.prepend(e)})})("/assets/logos/cc/logomark.svg"),this.logomark='<svg xmlns="http://www.w3.org/2000/svg"\n        preserveAspectRatio="xMidYMid meet"\n        viewBox="0 0 304 73">\n        <use href="#logomark"></use>\n      </svg>'}queryApi(e){fetch("https://cors-anywhere.herokuapp.com/https://creativecommons.org/wp-json/ccglobal/menu").then(e=>e.json()).then(t=>{e(t)}).catch(e=>{console.log(e)})}build(e){const t=o("header",["global-header-header"],[o("a",["main-logo"],[o("div",["has-text-white"],[],e=>{e.innerHTML=this.logomark})],e=>{e.setAttribute("href","https://creativecommons.org"),e.setAttribute("target","_blank")})]),n=o("div",["column","is-one-quarter"],[o("aside",["donate-section"],[o("h5",[],[document.createTextNode("Our work relies on you!")]),o("p",[],[document.createTextNode("Help us keep the internet free and open.")]),o("a",["button","small","donate"],[o("i",["icon","cc-letterheart","margin-right-small","is-size-5","padding-top-smaller"]),document.createTextNode("Donate now")],e=>{e.setAttribute("href","https://us.netdonor.net/page/6650/donate/1?ea.tracking.id=global-navigation-bar")})])]),r=o("div",["column"],[o("nav",["products"],[o("div",["product-list"],e.map(e=>o("a",["product-item"],[o("strong",[],[document.createTextNode(e.title)]),o("span",["item-description"],[document.createTextNode(e.description)])],t=>{t.setAttribute("href",e.url),t.setAttribute("target","_blank")})))],e=>{e.setAttribute("role","navigation"),e.setAttribute("aria-label","global navigation")})]);let i=null;const a=o("header",["cc-global-header"],[o("div",["container"],[o("a",["open-tab"],[document.createTextNode("Explore CC")],e=>{e.setAttribute("href","#"),i=e}),o("div",["global-header-content"],[o("div",["level"],[o("div",["level-left"],[t])]),o("div",["columns","padding-bottom-normal"],[n,r])])])]);i.addEventListener("click",e=>{e.preventDefault(),a.classList.toggle("is-active")}),document.body.prepend(a)}up(){this.queryApi(this.build.bind(this))}}(new r).up();n(0)}]);
!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var i=t("h6c0i");function r(e,o){var n=Math.random()>.3;return new Promise((function(t,i){setTimeout((function(){n?t({position:e,delay:o}):i({position:e,delay:o})}),o)}))}formEl=document.querySelector(".form"),formEl.addEventListener("submit",(function(e){e.preventDefault();var o=e.currentTarget.elements,n=o.delay,t=o.step,u=o.amount,l=Number(n.value),a=Number(t.value),c=Number(u.value);if(l<0||a<0||c<=0)return void i.Notify.warning("Please fill with positive numbers",{timeout:2e3,clickToClose:!0});(function(e,o,n){for(var t=[],i=1;i<=n;i+=1){var u=r(i,e+o*(i-1));t.push(u)}return t})(l,a,c).map((function(e){return e.then((function(e){var o=e.position,n=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"),{timeout:2e3,clickToClose:!0})})).catch((function(e){var o=e.position,n=e.delay;i.Notify.failure("❌ Rejected promise ".concat(o," in ").concat(n,"ms"),{timeout:2e3,clickToClose:!0})}))}))}))}();
//# sourceMappingURL=03-promises.2b4ba207.js.map
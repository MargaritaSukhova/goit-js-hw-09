!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var i=t("h6c0i");function r(e,n){var o=Math.random()>.3;return new Promise((function(t,i){setTimeout((function(){o?t({position:e,delay:n}):i({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements,o=n.delay,t=n.step,u=n.amount,a=Number(o.value),l=Number(t.value),c=Number(u.value);if(a<0||l<0||c<=0)return void i.Notify.warning("Please fill with positive numbers",{timeout:2e3,clickToClose:!0});(function(e,n,o){for(var t=[],i=1;i<=o;i+=1){var u=r(i,e+n*(i-1));t.push(u)}return t})(a,l,c).map((function(e){return e.then((function(e){var n=e.position,o=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"),{timeout:2e3,clickToClose:!0})})).catch((function(e){var n=e.position,o=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"),{timeout:2e3,clickToClose:!0})}))}))}))}();
//# sourceMappingURL=03-promises.ae9c6969.js.map
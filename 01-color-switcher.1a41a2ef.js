!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(t){r=setInterval(a,1e3),t.target.setAttribute("disabled",""),e.removeAttribute("disabled")})),e.addEventListener("click",(function(e){clearInterval(r),t.removeAttribute("disabled"),e.target.setAttribute("disabled","")}));var r=null;function a(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));document.body.style.backgroundColor=t}}();
//# sourceMappingURL=01-color-switcher.1a41a2ef.js.map
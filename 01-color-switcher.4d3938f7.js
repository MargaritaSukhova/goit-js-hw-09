!function(){bntStartEl=document.querySelector("[data-start]"),bntStopEl=document.querySelector("[data-stop]"),bntStartEl.addEventListener("click",(function(r){t=setInterval(e,1e3),r.target.setAttribute("disabled",""),bntStopEl.removeAttribute("disabled")})),bntStopEl.addEventListener("click",(function(e){clearInterval(t),bntStartEl.removeAttribute("disabled"),e.target.setAttribute("disabled","")}));var t=null;function e(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));document.body.style.backgroundColor=t}}();
//# sourceMappingURL=01-color-switcher.4d3938f7.js.map
const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(t){r=setInterval(a,1e3),t.target.setAttribute("disabled",""),e.removeAttribute("disabled")})),e.addEventListener("click",(function(e){clearInterval(r),t.removeAttribute("disabled"),e.target.setAttribute("disabled","")}));let r=null;function a(){const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style.backgroundColor=t}
//# sourceMappingURL=01-color-switcher.ff235c2f.js.map
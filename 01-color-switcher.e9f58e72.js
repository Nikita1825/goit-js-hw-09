!function(){function t(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}var e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]"),n=document.querySelector("body");r.setAttribute("disabled",!0);var a=null;e.addEventListener("click",(function(){r.removeAttribute("disabled",!0),e.setAttribute("disabled",!0),t(),a=setInterval((function(){n.style.backgroundColor="".concat(t())}),1e3)})),r.addEventListener("click",(function(){r.setAttribute("disabled",!0),e.removeAttribute("disabled",!0),clearInterval(a)}))}();
//# sourceMappingURL=01-color-switcher.e9f58e72.js.map

!function(){var e=document.querySelector(".form"),t=document.querySelector('[name="delay"]'),n=document.querySelector('[name="step"]'),o=document.querySelector('[name="amount"]');function a(e,t){return new Promise((function(n,o){var a=Math.random()>.3;setTimeout((function(){a?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}e.addEventListener("submit",(function(r){r.preventDefault();for(var i=parseInt(o.value),c=parseInt(t.value),u=parseInt(n.value),l=1;l<=i;l+=1)a(l,c+u*(l-1)).then((function(e){var t=e.position,n=e.delay;alert("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;Notiflix.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))}));e.reset()}))}();
//# sourceMappingURL=03-promises.8449203b.js.map

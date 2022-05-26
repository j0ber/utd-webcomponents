var utd=function(e){"use strict";var t,n=((t={}).afficher=function(e){(e=a({type:"",titre:"",corps:"",texteBoutonPrimaire:"",texteBoutonSecondaire:"",texteBoutonFermer:"fr"===c()?"Fermer":"Close",afficherBoutonFermer:!1,estBoutonsTexteLong:!1,idControleFocusFermeture:null},e)).idControleFocusFermeture=function(e){if(!e.idControleFocusFermeture&&document.activeElement){var t=document.activeElement.id;return t||(t=u(),document.activeElement.id=t),e.idControleFocusFermeture=t,t}return e.idControleFocusFermeture}(e);var t=function(e){var t='\n        <utd-dialog titre="'.concat(e.titre,'" idfocus="').concat(e.idControleFocusFermeture,'" estfenetremessage="true" estboutonstextelong="').concat(e.estBoutonsTexteLong,'" type="').concat(e.type,'" >\n            <div slot="contenu">\n                ').concat(e.corps,'\n            </div>\n            <div slot="pied">'),n='<button type="button" class="utd-btn primaire compact" raison-fermeture="primaire" data-ga-action="'.concat(e.titre,'">').concat(e.texteBoutonPrimaire,"</button>"),r=e.texteBoutonSecondaire?'<button type="button" class="utd-btn secondaire compact" raison-fermeture="secondaire" data-ga-action="'.concat(e.titre,'">').concat(e.texteBoutonSecondaire,"</button>"):"";t+="\n                ".concat(r).concat(n,"                        \n            </div>\n        </utd-dialog>");var o=u(),i=document.createElement("div");return i.id=o,i.innerHTML=t,document.body.appendChild(i),i}(e),n=t.querySelector("utd-dialog");return t.querySelectorAll('[slot="pied"] > button').forEach((function(e){e.addEventListener("click",(function(){var e=this.getAttribute("raison-fermeture");n.setAttribute("raisonfermeture",e),n.setAttribute("afficher","false")}))})),new Promise((function(e){!function(e,t){e.addEventListener("fermeture",(function(n){t(n.detail.raisonFermeture),e.parentElement.remove()}))}(n,e),n.setAttribute("afficher","true")}))},t),r=function(){var e={};return e.afficher=function(e,t){if(e){t=t||function(){if(document.activeElement){var e=document.activeElement.id;return e||(e=u(),document.activeElement.id=e),e}return null}();var n=document.getElementById(e);n?(n.setAttribute("afficher","true"),t&&n.setAttribute("idfocus",t)):console.error('utd.dialogue.afficher -> Contrôle utd-dialog "'.concat(n,'" non trouvé.'))}else console.error("utd.dialogue.afficher -> Aucun id de dialogue spécifié.")},e.masquer=function(e){if(e){var t=document.getElementById(e);if(t){t.setAttribute("afficher","false");var n=t.getAttribute("idfocus");if(n){var r=document.getElementById(n);r?r.focus():console.log('utd.dialogue.masquer -> Contrôle "'.concat(n,'" à qui redonner le focus non trouvé.'))}}else console.error('utd.dialogue.masquer -> Contrôle utd-dialog "'.concat(t,'" non trouvé.'))}else console.error("utd.dialogue.masquer -> Aucun id de dialogue spécifié.")},e}(),o=function(){var e={};function t(e,t){e.id||(e.id=u());var n="zoneNotification_".concat(e.id),r=document.getElementById(n);r||((r=document.createElement("div")).id=n,r.classList.add("utd-sr-only"),document.body.appendChild(r));var o="";o=t?"fr"===c()?"Traitement terminé.":"Processing complete.":"fr"===c()?"Traitement en cours.":"Processing...",r.innerHTML=o}return e.debuter=function(e,n){if(n=void 0===n||n,e){if(n){var r=document.createElement("div");document.getElementsByClassName("utd-overlay").length>0&&r.classList.add("utd-d-none"),r.classList.add("utd-overlay"),document.body.appendChild(r)}if(e.setAttribute("overlay",n?"true":"false"),"button"===e.tagName.toLowerCase()||"input"===e.tagName.toLowerCase()&&"submit"===e.type.toLowerCase()){e.classList.add("utd-traitement-en-cours");0===e.getElementsByClassName("utd-spinner").length&&(e.innerHTML+='<div class="utd-spinner"></div>'),n||(e.disabled=!0)}t(e)}},e.terminer=function(e){if(e){var n=e.querySelector(".utd-spinner");n&&n.remove(),e.classList.remove("utd-traitement-en-cours"),e.disabled=!1,function(e){if("true"===e.getAttribute("overlay")){var t=document.getElementsByClassName("utd-overlay");if(t.length>1){var n=document.getElementsByClassName("utd-overlay utd-d-none");n.length>0?n[0].remove():t[0].remove()}else 1===t.length&&t[0].remove()}}(e),e.removeAttribute("overlay"),t(e,!0)}},e}(),i=function(){var e={};function t(e){e.classList.remove("visible"),setTimeout((function(){e.remove()}),500)}return e.emettre=function(e){e=a({type:"positif",titre:"",message:"",texteBoutonFermer:"fr"===c()?"Fermer":"Close",delaiFermeture:5e3},e);var n=function(e,n){var r=document.createElement("div");r.classList.add("notification",n.type);var o=!!n.titre;o||r.classList.add("sans-titre");return r.innerHTML=function(e,t){var n='\n            <button type="button">\n                <span class="utd-sr-only">'.concat(e.texteBoutonFermer,'</span>\n                <span class="utd-icone-svg x-fermer-blanc" aria-hidden="true"></span>\n            </button>');if(t){var r=function(e){switch(e){case"negatif":return"erreur-blanc";case"neutre":return"information-blanc";default:return"succes-blanc"}}(e.type);n+='\n                <div class="titre">\n                    <span class="utd-icone-svg '.concat(r,' md" aria-hidden="true"></span>\n                    <span class="texte">').concat(e.titre,"</span>\n                </div>            \n            ")}return n+='\n            <div class="message">\n                '.concat(e.message,"\n            </div>")}(n,o),function(e){e.addEventListener("click",(function(n){t(e)}))}(r),e.appendChild(r),function(e){setTimeout((function(){e.classList.add("visible")}),10)}(r),r}(function(){var e=document.getElementById("utdZoneNotifications");e||((e=document.createElement("div")).id="utdZoneNotifications",e.classList.add("utd-notifications"),e.setAttribute("role","alert"),e.setAttribute("aria-atomic","true"),document.body.appendChild(e));return e}(),e);!function(e,n){setTimeout((function(){t(e)}),n.delaiFermeture)}(n,e)},e}();function a(e,t){for(var n in t){var r=t[n];r&&"[object Object]"===Object.prototype.toString.call(r)?(e[n]=e[n]||{},a(e[n],r)):e[n]=r}return e}function u(){return Date.now().toString(36)+"-"+Math.random().toString(36).substr(2,9)}function c(){return document.getElementsByTagName("html")[0].getAttribute("lang")||"fr"}return e.ajusterAccessibiliteLiens=function(e){e=e||"fr"===c()?". Ce lien sera ouvert dans un nouvel onglet.":". This link will open in a new tab.",document.querySelectorAll('main a[target="_blank"]').forEach((function(t){t.getAttribute("href")&&(t.getAttribute("href").endsWith(".pdf")||t.classList.contains("utd-sans-lien-externe")||(t.classList.contains("utd-lien-externe")||t.querySelector(".utd-lien-externe")||t.classList.add("utd-lien-externe"),t.querySelector(".utd-sr-only")||(t.innerHTML=t.innerHTML+'<span class="utd-sr-only">'.concat(e,"</span>"))))}))},e.dialogue=r,e.extend=a,e.genererId=u,e.message=n,e.notification=i,e.obtenirLanguePage=c,e.traitementEnCours=o,Object.defineProperty(e,"__esModule",{value:!0}),e}({});

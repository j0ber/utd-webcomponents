var utd=function(t){"use strict";function e(t,n){for(var r in n){var o=n[r];o&&"[object Object]"===Object.prototype.toString.call(o)?(t[r]=t[r]||{},e(t[r],o)):t[r]=o}return t}function n(){return Date.now().toString(36)+"-"+Math.random().toString(36).substr(2,9)}return t.afficherMessage=function(t){(t=e({type:"",titre:"",corps:"",texteBoutonPrimaire:"",texteBoutonSecondaire:"",texteBoutonFermer:"Fermer",afficherBoutonFermer:!1,estBoutonsTexteLong:!1,idControleFocusFermeture:null},t)).idControleFocusFermeture=function(t){if(!t.idControleFocusFermeture&&document.activeElement){var e=document.activeElement.id;return e||(e=n(),document.activeElement.id=e),t.idControleFocusFermeture=e,e}return t.idControleFocusFermeture}(t);var r=function(t){var e='\n    <utd-dialog titre="'.concat(t.titre,'" idfocus="').concat(t.idControleFocusFermeture,'" estfenetremessage="true" estboutonstextelong="').concat(t.estBoutonsTexteLong,'" type="').concat(t.type,'" >\n        <div slot="contenu">\n            ').concat(t.corps,'\n        </div>\n        <div slot="pied">'),r='<button type="button" class="utd-btn primaire compact" raison-fermeture="primaire" data-ga-action="'.concat(t.titre,'">').concat(t.texteBoutonPrimaire,"</button>"),o=t.texteBoutonSecondaire?'<button type="button" class="utd-btn secondaire compact" raison-fermeture="secondaire" data-ga-action="'.concat(t.titre,'">').concat(t.texteBoutonSecondaire,"</button>"):"";e+="\n            ".concat(o).concat(r,"                        \n        </div>\n    </utd-dialog>");var i=n(),c=document.createElement("div");return c.id=i,c.innerHTML=e,document.body.appendChild(c),c}(t),o=r.querySelector("utd-dialog");return r.querySelectorAll('[slot="pied"] > button').forEach((function(t){t.addEventListener("click",(function(){var t=this.getAttribute("raison-fermeture");o.setAttribute("raisonfermeture",t),o.setAttribute("afficher","false")}))})),new Promise((function(t){!function(t,e){t.addEventListener("fermeture",(function(n){e(n.detail.raisonFermeture),t.parentElement.remove()}))}(o,t),o.setAttribute("afficher","true")}))},t.extend=e,t.genererId=n,Object.defineProperty(t,"__esModule",{value:!0}),t}({});

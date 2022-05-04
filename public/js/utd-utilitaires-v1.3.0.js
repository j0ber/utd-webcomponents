var utd = (function (exports) {
   'use strict';

   /*======================================================================================================================*/

   /* -10- FENÊTRES DE MESSAGE
   /*======================================================================================================================*/
   var message = function () {
     var elementsPublics = {};
     /**
      * Affiche une fenêtre de message (dialog).
      * @param {Object} parametres Paramètres.
      * @param {Object} parametres.type Type de message ("erreur", "information", "avertissement", "succes"  pour l'instant, autres types à venir). Défaut "avertissement".
      * @param {Object} parametres.titre Titre du message. Texte brut ou HTML (ex. Annuler les modifications) Défaut "". 
      * @param {Object} parametres.corps Corps du message. Texte brut ou HTML (ex. Désirez-vous annuler les modifications ou poursuivre?.) Défaut "".
      * @param {Object} parametres.texteBoutonPrimaire Texte du bouton primaire. (Celui le plus à droite). Si vide n'est pas affiché.
      * @param {Object} parametres.texteBoutonSecondaire Texte du bouton secondaire. (Situé à la gauche du bouton primaire). Si vide n'est pas affiché.
      * @param {Object} parametres.afficherBoutonFermer Afficher le bouton pour fermer la fenêtre de message. Défaut true.
      * @param {Object} parametres.idControleFocusFermeture Id du contrôle auquel on redonne le focus à la fermeture de la fenêtre de message.
      * @returns {Object} Une promesse jQuery qui contiendra éventuellement un objet contenant la raison de fermeture. (ex. objet.primaire ou objet.secondaire)
      * @example afficherMessage(parametres)
                 .done(function (resultat) {
                     if (resultat.primaire) {
                         alert("Très bon choix! Poursuivre aurait pu causer une rupture du continuum espace temps!");
                     } else if (resultat.secondaire) {
                         alert("Mauvais choix! Vous auriez-du poursuivre. À cause de vous le continuum espace temps risque de se briser!");
                     } else {
                         alert("Vous vous êtes contenté de fermer la fenêtre sans faire de choix... La prochaine fois assumez-vous! L'avenir du monde est entre vos mains!");
                     }
                 });
     * @references https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/alertdialog.html
     * @notes Le titre et les boutons sont lus 2 fois dans NVDA... ça semble faire partie du pattern (voir lien ci-dessus). 
     */
     //TODO remplacer texteEdite et texte auto selon html lang

     elementsPublics.afficher = function (parametres) {
       var valeursDefaut = {
         type: "",
         titre: "",
         corps: "",
         texteBoutonPrimaire: "",
         texteBoutonSecondaire: "",
         texteBoutonFermer: "Fermer",
         //TODO détecter langue sur balise html et mettre Close si eng
         afficherBoutonFermer: false,
         estBoutonsTexteLong: false,
         idControleFocusFermeture: null
       };
       parametres = extend(valeursDefaut, parametres);
       parametres.idControleFocusFermeture = afficherMessage_obtenirIdControleFocusFermeture(parametres);
       var conteneurFenetreMessage = afficherMessage_ajouterControle(parametres);
       var fenetreMessage = conteneurFenetreMessage.querySelector('utd-dialog');
       var boutons = conteneurFenetreMessage.querySelectorAll('[slot="pied"] > button');
       boutons.forEach(function (btn) {
         btn.addEventListener("click", function () {
           var raison = this.getAttribute('raison-fermeture');
           fenetreMessage.setAttribute('raisonfermeture', raison);
           fenetreMessage.setAttribute('afficher', 'false');
         });
       }); //Définir une promesse qui sera résolue à la fermeture de la fenêtre.

       return new Promise(function (resolve) {
         afficherMessage_definirEvenementFermeture(fenetreMessage, resolve);
         fenetreMessage.setAttribute('afficher', 'true');
       });
     };
     /**
      * (Privée)
      * Obtient l'id du contrôle auquel il faut redonner le focus lors de la fermeture.
      * @param {Object} parametres Paramètres de la function afficherMessage.
      * @returns Id du contrôle auquel il faut redonner le focus à la fermeture du message.
      */


     function afficherMessage_obtenirIdControleFocusFermeture(parametres) {
       if (!parametres.idControleFocusFermeture) {
         if (document.activeElement) {
           var id = document.activeElement.id;

           if (!id) {
             id = genererId();
             document.activeElement.id = id;
           }

           parametres.idControleFocusFermeture = id;
           return id;
         }
       }

       return parametres.idControleFocusFermeture;
     }
     /**
      * (Privée)
      * Ajoute le contrôle de fenêtre de message au DOM.
      * @param {Object} parametres Paramètres de la function afficherMessage.
      * @returns Object correspondant au conteneur de la fenêtre de message.
      */


     function afficherMessage_ajouterControle(parametres) {
       //    var classeIcone = afficherMessage_obtenirClasseIcone(parametres.type);
       var html = "\n        <utd-dialog titre=\"".concat(parametres.titre, "\" idfocus=\"").concat(parametres.idControleFocusFermeture, "\" estfenetremessage=\"true\" estboutonstextelong=\"").concat(parametres.estBoutonsTexteLong, "\" type=\"").concat(parametres.type, "\" >\n            <div slot=\"contenu\">\n                ").concat(parametres.corps, "\n            </div>\n            <div slot=\"pied\">");
       var htmlBoutonPrimaire = "<button type=\"button\" class=\"utd-btn primaire compact\" raison-fermeture=\"primaire\" data-ga-action=\"".concat(parametres.titre, "\">").concat(parametres.texteBoutonPrimaire, "</button>");
       var htmlBoutonSecondaire = parametres.texteBoutonSecondaire ? "<button type=\"button\" class=\"utd-btn secondaire compact\" raison-fermeture=\"secondaire\" data-ga-action=\"".concat(parametres.titre, "\">").concat(parametres.texteBoutonSecondaire, "</button>") : '';
       html += "\n                ".concat(htmlBoutonSecondaire).concat(htmlBoutonPrimaire, "                        \n            </div>\n        </utd-dialog>");
       var id = genererId();
       var conteneurFenetreMessage = document.createElement('div');
       conteneurFenetreMessage.id = id;
       conteneurFenetreMessage.innerHTML = html;
       document.body.appendChild(conteneurFenetreMessage);
       return conteneurFenetreMessage;
     }
     /**
      * (Privéee)
      * Compléter la promesse indiquant de quelle façon la fenêtre s'est fermée et supprimer l'élément du DOM une fois qu'il n'est plus affiché.
      * @param {Object} fenetreMessage Objet correspondant à la fenêtre de message.
      * @param {Promise} resolve Résolution de promesse.
      */


     function afficherMessage_definirEvenementFermeture(fenetreMessage, resolve) {
       fenetreMessage.addEventListener("fermeture", function (e) {
         resolve(e.detail.raisonFermeture);
         fenetreMessage.parentElement.remove();
       });
     }

     return elementsPublics;
   }();
   /*======================================================================================================================*/

   /* -20- TRAITEMENT EN COURS
   /*======================================================================================================================*/

   var traitementEnCours = function () {
     var elementsPublics = {};

     elementsPublics.debuter = function (element, avecOverlay) {
       avecOverlay = avecOverlay !== undefined ? avecOverlay : true;

       if (element) {
         //Ajouter un overlay global pendant le traitement en cours s'il y a lieu (défaut oui)  
         if (avecOverlay) {
           var overlay = document.createElement("div"); //Si un overlay est déjà présent, on ajoute le nouveau mais on le masque (il sera peut-être éventuellement réaffiché dans le traitement terminer du traitement en cours)

           if (document.getElementsByClassName('utd-overlay').length > 0) {
             overlay.classList.add('utd-d-none');
           }

           overlay.classList.add('utd-overlay');
           document.body.appendChild(overlay);
         }

         element.setAttribute('overlay', avecOverlay ? 'true' : 'false');

         if (element.tagName.toLowerCase() === 'button' || element.tagName.toLowerCase() === 'input' && element.type.toLowerCase() === 'submit') {
           element.classList.add("utd-traitement-en-cours");
           var htmlTraitementEnCours = '<div class="utd-spinner"></div>';

           if (element.getElementsByClassName('utd-spinner').length === 0) {
             element.innerHTML += htmlTraitementEnCours;
           } //Si aucun overlay on désactive le bouton


           if (!avecOverlay) {
             element.disabled = true;
           }
         }

         notifierTraitementEnCoursLecteurEcran(element);
       }
     };

     elementsPublics.terminer = function (element) {
       if (element) {
         var spinner = element.querySelector('.utd-spinner');

         if (spinner) {
           spinner.remove();
         }

         element.classList.remove("utd-traitement-en-cours");
         element.disabled = false;
         supprimerOverlay(element);
         element.removeAttribute('overlay');
         notifierTraitementEnCoursLecteurEcran(element, true);
       }
     };

     function supprimerOverlay(element) {
       //Si le traitement en cours sur l'élément avait un overlay on le retire.
       var avecOverlay = element.getAttribute('overlay');

       if (avecOverlay === 'true') {
         //Retrait du overlay 
         var overlayTraitementEnCours = document.getElementsByClassName('utd-overlay');

         if (overlayTraitementEnCours.length > 1) {
           //On enlève 1 overlay, si un masqué existe c'est lui qu'on enlève. S'il y en a d'autres ils seront fermés éventuellement.
           var overlayInvisibles = document.getElementsByClassName('utd-overlay utd-d-none');

           if (overlayInvisibles.length > 0) {
             overlayInvisibles[0].remove();
           } else {
             //Si aucun overlay invisible, on enlève le 1er trouvé.
             overlayTraitementEnCours[0].remove();
           }
         } else if (overlayTraitementEnCours.length === 1) {
           overlayTraitementEnCours[0].remove();
         }
       }
     }

     function notifierTraitementEnCoursLecteurEcran(element, estTraitementTermine) {
       //Générer un id à l'élément qui va contenir le spinner de traitement en cours
       if (!element.id) {
         element.id = genererId();
       }

       var idZoneNotification = "zoneNotification_".concat(element.id); //Ajouter la zone de notification hors écran si elle n'existe pas déjà.

       var zoneNotificationsLecteurEcran = document.getElementById(idZoneNotification);

       if (!zoneNotificationsLecteurEcran) {
         zoneNotificationsLecteurEcran = document.createElement("div");
         zoneNotificationsLecteurEcran.id = idZoneNotification;
         zoneNotificationsLecteurEcran.classList.add('sr-only');
         document.body.appendChild(zoneNotificationsLecteurEcran);
       } //TODO multilingue via paramètre


       zoneNotificationsLecteurEcran.innerHTML = estTraitementTermine ? "Traitement terminé." : "Traitement en cours.";
     }

     return elementsPublics;
   }();
   /* ============================================================= */

   /* ======================== UTILITAIRES ======================== */

   /* ============================================================= */

   /**
    * 
    * @param {Object} cible Objet dans lequel on doit copier les données. 
    * @param {Object} source Objet contenant les infos à copier dans l'objet cible. 
    * @returns 
    */

   function extend(cible, source) {
     for (var sourceProp in source) {
       var sourceVal = source[sourceProp]; // Is this value an object?  If so, iterate over its properties, copying them over

       if (sourceVal && Object.prototype.toString.call(sourceVal) === "[object Object]") {
         cible[sourceProp] = cible[sourceProp] || {};
         extend(cible[sourceProp], sourceVal);
       } else {
         cible[sourceProp] = sourceVal;
       }
     }

     return cible;
   }
   /**
    * Génère un id unique.
    * @returns Un id unique.
    */

   function genererId() {
     return Date.now().toString(36) + '-' + Math.random().toString(36).substr(2, 9);
   }

   exports.extend = extend;
   exports.genererId = genererId;
   exports.message = message;
   exports.traitementEnCours = traitementEnCours;

   Object.defineProperty(exports, '__esModule', { value: true });

   return exports;

})({});

/*======================================================================================================================*/
/* FENÊTRE DE MESSAGE
/*======================================================================================================================*/
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
export function afficherMessage(parametres) {

    const valeursDefaut = {
        type: "",
        titre: "",
        corps: "",
        texteBoutonPrimaire: "",
        texteBoutonSecondaire: "",
        texteBoutonFermer: "Fermer", //TODO détecter langue sur balise html et mettre Close si eng
        afficherBoutonFermer: false,
        estBoutonsTexteLong: false,
        idControleFocusFermeture: null
    };

    parametres = extend(valeursDefaut, parametres);

    parametres.idControleFocusFermeture = afficherMessage_obtenirIdControleFocusFermeture(parametres);

    const conteneurFenetreMessage = afficherMessage_ajouterControle(parametres);
    const fenetreMessage = conteneurFenetreMessage.querySelector('utd-dialog');  

    const boutons = conteneurFenetreMessage.querySelectorAll('[slot="pied"] > button')    
    boutons.forEach(btn => {
        btn.addEventListener("click", function() {
            const raison = this.getAttribute('raison-fermeture');
            fenetreMessage.setAttribute('raisonfermeture', raison);
            fenetreMessage.setAttribute('afficher', 'false');
        });    
    });
    
    //Définir une promesse qui sera résolue à la fermeture de la fenêtre.
    return new Promise((resolve) => {        
        afficherMessage_definirEvenementFermeture(fenetreMessage, resolve)      
        fenetreMessage.setAttribute('afficher', 'true');    
    });
}



/**
 * (Privée)
 * Obtient l'id du contrôle auquel il faut redonner le focus lors de la fermeture.
 * @param {Object} parametres Paramètres de la function afficherMessage.
 * @returns Id du contrôle auquel il faut redonner le focus à la fermeture du message.
 */
function afficherMessage_obtenirIdControleFocusFermeture(parametres) {
    if (!parametres.idControleFocusFermeture) {
        if (document.activeElement) {
            let id = document.activeElement.id;

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

    let html = `
    <utd-dialog titre="${parametres.titre}" idfocus="${parametres.idControleFocusFermeture}" estfenetremessage="true" estboutonstextelong="${parametres.estBoutonsTexteLong}" type="${parametres.type}" >
        <div slot="contenu">
            ${parametres.corps}
        </div>
        <div slot="pied">`;   
    
    const htmlBoutonPrimaire = `<button type="button" class="utd-btn primaire compact" raison-fermeture="primaire" data-ga-action="${parametres.titre}">${parametres.texteBoutonPrimaire}</button>`;
    const htmlBoutonSecondaire = parametres.texteBoutonSecondaire ? `<button type="button" class="utd-btn secondaire compact" raison-fermeture="secondaire" data-ga-action="${parametres.titre}">${parametres.texteBoutonSecondaire}</button>` : '';
            
    html += `
            ${htmlBoutonSecondaire}${htmlBoutonPrimaire}                        
        </div>
    </utd-dialog>`

    const id = genererId();
    const conteneurFenetreMessage = document.createElement('div');
    conteneurFenetreMessage.id = id;
    conteneurFenetreMessage.innerHTML = html;

    document.body.appendChild(conteneurFenetreMessage);

    return conteneurFenetreMessage;
}

/*TODO à implémenter*/
function afficherMessage_obtenirClasseIcone(type) {
    switch (type) {
        case "erreur":
            return "erreur";
        case "avertissement":
            return "averti";
        case "succes":
            return "succes";
        default:
            return "inform";
    }
}

/**
 * Compléter la promesse indiquant de quelle façon la fenêtre s'est fermée et supprimer l'élément du DOM une fois qu'il n'est plus affiché.
 * @param {Object} fenetreMessage Objet correspondant à la fenêtre de message.
 * @param {Promise} resolve Résolution de promesse.
 */
function afficherMessage_definirEvenementFermeture(fenetreMessage, resolve) {
    fenetreMessage.addEventListener("fermeture", e => {        
        resolve(e.detail.raisonFermeture);
        fenetreMessage.parentElement.remove();
    });
}




/* ============================================================= */
/* ======================== UTILITAIRES ======================== */
/* ============================================================= */

/**
 * 
 * @param {Object} cible Objet dans lequel on doit copier les données. 
 * @param {Object} source Objet contenant les infos à copier dans l'objet cible. 
 * @returns 
 */
export function extend(cible, source) {
    for (var sourceProp in source) {
        var sourceVal = source[sourceProp]
        // Is this value an object?  If so, iterate over its properties, copying them over
        if (sourceVal && Object.prototype.toString.call(sourceVal) === "[object Object]") {
            cible[sourceProp] = cible[sourceProp] || {}
            extend(cible[sourceProp], sourceVal)
        }
        else {
            cible[sourceProp] = sourceVal
        }
    }
    return cible
}

/**
 * Génère un id unique.
 * @returns Un id unique.
 */
export function genererId() {
    return Date.now().toString(36) + '-' + Math.random().toString(36).substr(2, 9)
}

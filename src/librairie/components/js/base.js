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
 * @param {Object} parametres.forcerBoutons Forcer l'utilisateur à utiliser le bouton primaire ou secondaire pour fermer la fenêtre de message. Défaut false.
 * @param {Object} parametres.afficherBoutonFermer Afficher le bouton pour fermer la fenêtre de message. Défaut true.
 * @param {Object} parametres.idControleFocusFermeture Id du contrôle auquel on redonne le focus à la fermeture de la fenêtre de message.
 * @param {Object} parametres.afficherBoutonSecondaire Afficher le bouton secondaire. Défaut true.
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
        type: "avertissement",
        titre: "",
        corps: "",
        texteBoutonPrimaire: "",
        texteBoutonSecondaire: "",
        texteBoutonFermer: obtenirTexteEdite("boutonCommunFermer"),
        forcerBoutons: false,
        afficherBoutonFermer: false,
        idControleFocusFermeture: null,
        afficherBoutonSecondaire: parametres.type && parametres.type !== "information" && parametres.type !== "erreur"
    };

    parametres = extend(valeursDefaut, parametres);

    parametres.idControleFocusFermeture = afficherMessage_obtenirIdControleFocusFermeture(parametres);

    const conteneurFenetreMessage = afficherMessage_ajouterControle(parametres)

    const boutons = conteneurFenetreMessage.querySelectorAll('[slot="pied"] > button')    
    boutons.addEventListener("click", function(){ alert("Hello World!"); });

    //TODO assigner la raison de fermeture à la modale
    //Affecter la raison de fermeture de la fenêtre modale au click d'un bouton
/*    fenetreMessage.find(".modal-footer, .pied").find("button").on("click", function () {
        fenetreMessage.data("raison-fermeture", $(this).data("raison-fermeture"));
    });
*/
    //Définir une promesse qui sera résolue à la fermeture de la fenêtre.
    const promesse = new Promise()

    const fenetreMessage = conteneurFenetreMessage.querySelector('utd-dialog')    
    afficherMessage_definirEvenementFermeture(fenetreMessage, promesse)

    return promesse
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
            let id = document.activeElement.id

            if (!id) {
                id = genererId()
                document.activeElement.id = id
            }

            parametres.idControleFocusFermeture = id

            return id
        }
    }
    return parametres.idControleFocusFermeture
}

/**
 * (Privée)
 * Ajoute le contrôle de fenêtre de message au DOM.
 * @param {Object} parametres Paramètres de la function afficherMessage.
 * @returns Object correspondant au conteneur de la fenêtre de message.
 */
function afficherMessage_ajouterControle(parametres) {
//    var classeIcone = afficherMessage_obtenirClasseIcone(parametres.type);

    const html = `
    <utd-dialog titre="${parametres.titre}" idfocus="${parametres.idControleFocusFermeture}" >
        <div slot="contenu">
            ${parametres.corps}
        </div>
        <div slot="pied">` +
            parametres.texteBoutonSecondaire ? `<button type="button" class="utd-btn secondaire" data-raison-fermeture="secondaire" data-ga-action="${parametres.titre}">${parametres.texteBoutonSecondaire}</button>` : '' +
            `<button type="button" class="utd-btn primaire" data-raison-fermeture="primaire" data-ga-action="${parametres.titre}">${parametres.texteBoutonPrimaire}</button>
        </div>
    </utd-dialog>`

    const id = genererId()
    const conteneurFenetreMessage = document.createElement('div')
    conteneurFenetreMessage.id = id
    conteneurFenetreMessage.innerHTML = html

    document.body.appendChild(conteneurFenetreMessage)

    return conteneurFenetreMessage
}

/*TODO à implémenter*/
function afficherMessage_obtenirClasseIcone(type) {
    switch (type) {
        case "erreur":
            return "erreur"
        case "avertissement":
            return "averti"
        case "succes":
            return "succes"
        default:
            return "inform"
    }
}

/**
 * Compléter la promesse indiquant de quelle façon la fenêtre s'est fermée et supprimer l'élément du DOM une fois qu'il n'est plus affiché.
 * @param {Object} fenetreMessage Objet correspondant à la fenêtre de message.
 * @param {Promise} promesse Promesse à résoudre.
 */
function afficherMessage_definirEvenementFermeture(fenetreMessage, promesse) {

    fenetreMessage.addEventListener("fermeture", e => {
        promesse.resolve(e.detail.raisonFermeture)
        console.log(`Événement de fermeture modale`)
      })
  
        //TODO Destruction de la fenêtre modale
//        $(this).remove()
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

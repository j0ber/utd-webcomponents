<script>
  import { onMount } from 'svelte';
  import CodeSource from '../components/CodeSource.svelte'; 

  let resultat1 = ''
  let resultat2 = ''
  let resultat3 = ''
  let resultat4 = ''
  let resultat5 = ''
  let resultat6 = ''

  onMount(() => {

    document.getElementById('btnTest1').addEventListener('click', () => {
        utd.traitementEnCours.test('BananaBoat!!!!');
        const params =             
            {type: "avertissement",
             titre: "Continuum espace temps en péril",
             corps: "<p>Vos dernières actions ont provoqué de graves perturbations du continuum espace temps.</p><p>Désirez-vous poursuivre avec la destruction potentielle de l'univers ou corriger le tout?</p>",
             texteBoutonPrimaire: "Corriger",
             texteBoutonSecondaire: "Détruire"};

        utd.message.afficher(params)
            .then((retour) => {
                resultat1 = retour
            })
    })

    document.getElementById('btnTest2').addEventListener('click', () => {
        const params =             
            {type: "information",
             titre: "Continuum espace temps en péril",
             corps: "<p>Vos dernières actions ont provoqué de graves perturbations du continuum espace temps.</p><p>Espérons que tout ira pour le mieux.</p>",
             texteBoutonPrimaire: "Je m'excuse"
            }

        utd.message.afficher(params)
            .then((retour) => {
                resultat2 = retour
            })
    })

    document.getElementById('btnTest3').addEventListener('click', () => {
        const params =             
            {type: "succes",
             titre: "Continuum espace temps sauvé",
             corps: "<p>Vos dernières actions ont réparé les graves perturbations du continuum espace temps.</p><p>Vous avez sauvé le monde!</p>",
             texteBoutonPrimaire: "Merci!"
            }

        utd.message.afficher(params)
            .then((retour) => {
                resultat3 = retour
            })
    })

    document.getElementById('btnTest4').addEventListener('click', () => {
        const params = {
            type: "erreur",
            titre: "Continuum espace temps brisé",
            corps: "<p>Une erreur est survenu lors de vos tentatives de réparation des perturbations du continuum espace temps.</p><p>Il n'y a rien à faire.</p>",
            texteBoutonPrimaire: "D'accord"
        }

        utd.message.afficher(params)
            .then((retour) => {
                resultat4 = retour
            })
    })

    document.getElementById('btnTest5').addEventListener('click', () => {
        const params =             
            {titre: "Continuum espace temps en péril",
             corps: "<p>Vos dernières actions ont provoqué de graves perturbations du continuum espace temps.</p><p>Désirez-vous poursuivre avec la destruction potentielle de l'univers ou corriger le tout?</p>",
             texteBoutonPrimaire: "Corriger",
             texteBoutonSecondaire: "Détruire"};

        utd.message.afficher(params)
            .then((retour) => {
                resultat5 = retour
            })
    })

    document.getElementById('btnTest6').addEventListener('click', () => {
        const params =             
            {titre: "Continuum espace temps en péril",
             corps: "<p>Vos dernières actions ont provoqué de graves perturbations du continuum espace temps.</p><p>Désirez-vous poursuivre avec la destruction potentielle de l'univers ou corriger le tout?</p>",
             texteBoutonPrimaire: "Corriger et demander pardon",
             texteBoutonSecondaire: "Détruire",
             estBoutonsTexteLong: true
            }

        utd.message.afficher(params)
            .then((retour) => {
                resultat6 = retour
            })
    })


})

</script>

<h1>Messages</h1>
<h2>Message de type avertissement avec 2 boutons</h2>
<button type="button" id="btnTest1" class="utd-btn secondaire mb-32">Test 1</button>
<div>{resultat1 ? `Raison fermeture = ${resultat1}` : ''}</div>

<h2>Message de type information avec 1 bouton</h2>
<button type="button" id="btnTest2" class="utd-btn secondaire mb-32">Test 2</button>
<div>{resultat2 ? `Raison fermeture = ${resultat2}` : ''}</div>

<h2>Message de type succès avec 1 bouton</h2>
<button type="button" id="btnTest3" class="utd-btn secondaire mb-32">Test 3</button>
<div>{resultat3 ? `Raison fermeture = ${resultat3}` : ''}</div>

<h2>Message de type erreur avec 1 bouton</h2>
<button type="button" id="btnTest4" class="utd-btn secondaire mb-32">Test 4</button>
<div>{resultat4 ? `Raison fermeture = ${resultat4}` : ''}</div>

<h2>Message sans type avec 2 boutons</h2>
<button type="button" id="btnTest5" class="utd-btn secondaire mb-32">Test 5</button>
<div>{resultat5 ? `Raison fermeture = ${resultat5}` : ''}</div>

<h2>Message sans type avec 2 boutons et texte long</h2>
<button type="button" id="btnTest6" class="utd-btn secondaire mb-32">Test 6</button>
<div>{resultat6 ? `Raison fermeture = ${resultat6}` : ''}</div>

<style>
</style>
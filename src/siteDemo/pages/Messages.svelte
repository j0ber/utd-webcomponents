<script>
    import { onMount } from 'svelte';
    import CodeSource from '../components/CodeSource.svelte'; 

    let mounted = false;

    onMount(() => {
        message1();
        message2();
        message3();
        message4();
        message5();
        message6();
        mounted = true;
    });


    function message1() {
        document.getElementById('btnTest1').addEventListener('click', () => {
        const params =             
            {type: "avertissement",
             titre: "Continuum espace temps en péril",
             corps: "<p>Vos dernières actions ont provoqué de graves perturbations du continuum espace temps.</p><p>Désirez-vous poursuivre avec la destruction potentielle de l'univers ou corriger le tout?</p>",
             texteBoutonPrimaire: "Corriger",
             texteBoutonSecondaire: "Détruire"};

        utd.message.afficher(params)
            .then((retour) => {
                document.getElementById('resultat1').innerText = `Raison fermeture = ${retour}`;
            });
        });
    }

    function message2() {
        document.getElementById('btnTest2').addEventListener('click', () => {
        const params =             
            {type: "information",
             titre: "Continuum espace temps en péril",
             corps: "<p>Vos dernières actions ont provoqué de graves perturbations du continuum espace temps.</p><p>Espérons que tout ira pour le mieux.</p>",
             texteBoutonPrimaire: "Je m'excuse"
            };

        utd.message.afficher(params)
            .then((retour) => {
                document.getElementById('resultat2').innerText = `Raison fermeture = ${retour}`;
            });
        });
    }

    function message3() {
        document.getElementById('btnTest3').addEventListener('click', () => {
        const params =             
            {type: "succes",
             titre: "Continuum espace temps sauvé",
             corps: "<p>Vos dernières actions ont réparé les graves perturbations du continuum espace temps.</p><p>Vous avez sauvé le monde!</p>",
             texteBoutonPrimaire: "Merci!"
            };

        utd.message.afficher(params)
            .then((retour) => {
                document.getElementById('resultat3').innerText = `Raison fermeture = ${retour}`;
            });
        });
    }

    function message4() {
        document.getElementById('btnTest4').addEventListener('click', () => {
        const params = {
            type: "erreur",
            titre: "Continuum espace temps brisé",
            corps: "<p>Une erreur est survenu lors de vos tentatives de réparation des perturbations du continuum espace temps.</p><p>Il n'y a rien à faire.</p>",
            texteBoutonPrimaire: "D'accord"
        };

        utd.message.afficher(params)
            .then((retour) => {
                document.getElementById('resultat4').innerText = `Raison fermeture = ${retour}`;
            });
        });
    }

    function message5() {
        document.getElementById('btnTest5').addEventListener('click', () => {
        const params =             
            {titre: "Continuum espace temps en péril",
             corps: "<p>Vos dernières actions ont provoqué de graves perturbations du continuum espace temps.</p><p>Désirez-vous poursuivre avec la destruction potentielle de l'univers ou corriger le tout?</p>",
             texteBoutonPrimaire: "Corriger",
             texteBoutonSecondaire: "Détruire"};

        utd.message.afficher(params)
            .then((retour) => {
                document.getElementById('resultat5').innerText = `Raison fermeture = ${retour}`;
            });
        });
    }

    function message6() {    
        document.getElementById('btnTest6').addEventListener('click', () => {
            const params =             
                {titre: "Continuum espace temps en péril",
                corps: "<p>Vos dernières actions ont provoqué de graves perturbations du continuum espace temps.</p><p>Désirez-vous poursuivre avec la destruction potentielle de l'univers ou corriger le tout?</p>",
                texteBoutonPrimaire: "Corriger et demander pardon",
                texteBoutonSecondaire: "Détruire",
                estBoutonsTexteLong: true
                };

            utd.message.afficher(params)
                .then((retour) => {
                    document.getElementById('resultat6').innerText = `Raison fermeture = ${retour}`;
                });
        });
    }
</script>

<h1>Messages</h1>

<h2>Paramètres</h2>
<table class="utd-table bordures-lignes">
    <thead>
        <tr>
            <th style="width: 100px;">Nom</th>
            <th style="width: 80px;">Type</th>
            <th>Description</th> 
        </tr>
    </thead> 
    <tbody>
        <tr>
            <th><span>type</span></th>
            <td>String</td> 
            <td>Type de message. Valeurs possibles : "" (Défaut, aucun type), "avertissement", "succes", "erreur".</td>

        </tr>
        <tr>
            <th><span>titre</span></th>
            <td>String</td> 
            <td>Titre du message.</td>
        </tr>
        <tr>
            <th>corps</th>
            <td>String</td>  
            <td>Corps du message.</td>
        </tr>
        <tr>
            <th>texteBoutonPrimaire</th>
            <td>String</td>  
            <td>Texte du bouton primaire. Si non spécifié, le bouton primaire n'est pas affiché.</td>
        </tr>
        <tr>
            <th>texteBoutonSecondaire</th>
            <td>String</td>  
            <td>Texte du bouton secondaire. Si non spécifié, le bouton secondaire n'est pas affiché.</td>
        </tr>
        <tr>
            <th>estBoutonsTexteLong</th>
            <td>Boolean</td>  
            <td>Indique si le texte des boutons est long. Si c'est le cas, les boutons sont affichés verticalement en pleine largeur si la largeur d'écran est inférieure ou égale à 525px. (Au lieu de 425px normalement)</td>
        </tr>

    </tbody>
</table>

<h2>Exemples</h2>
<h3>Message de type avertissement avec 2 boutons</h3>
<button type="button" id="btnTest1" class="utd-btn secondaire mb-16">Test 1</button>
<div id="resultat1"></div>
{#if mounted}
    <utd-accordeon titre="Code source">
        <span slot="contenu">
            <CodeSource codeSource="{message1.toString()}" language="language-javascript">
            </CodeSource>   
        </span>
    </utd-accordeon>
{/if}   


<h3>Message de type information avec 1 bouton</h3>
<button type="button" id="btnTest2" class="utd-btn secondaire mb-16">Test 2</button>
<div id="resultat2"></div>
{#if mounted}
    <utd-accordeon titre="Code source">
        <span slot="contenu">
            <CodeSource codeSource="{message2.toString()}" language="language-javascript">
            </CodeSource>   
        </span>
    </utd-accordeon>
{/if}   


<h3>Message de type succès avec 1 bouton</h3>
<button type="button" id="btnTest3" class="utd-btn secondaire mb-16">Test 3</button>
<div id="resultat3"></div>
{#if mounted}
    <utd-accordeon titre="Code source">
        <span slot="contenu">
            <CodeSource codeSource="{message3.toString()}" language="language-javascript">
            </CodeSource>   
        </span>
    </utd-accordeon>
{/if}   


<h3>Message de type erreur avec 1 bouton</h3>
<button type="button" id="btnTest4" class="utd-btn secondaire mb-16">Test 4</button>
<div id="resultat4"></div>
{#if mounted}
    <utd-accordeon titre="Code source">
        <span slot="contenu">
            <CodeSource codeSource="{message4.toString()}" language="language-javascript">
            </CodeSource>   
        </span>
    </utd-accordeon>
{/if}   


<h3>Message sans type avec 2 boutons</h3>
<button type="button" id="btnTest5" class="utd-btn secondaire mb-16">Test 5</button>
<div id="resultat5"></div>
{#if mounted}
    <utd-accordeon titre="Code source">
        <span slot="contenu">
            <CodeSource codeSource="{message5.toString()}" language="language-javascript">
            </CodeSource>   
        </span>
    </utd-accordeon>
{/if}   


<h3>Message sans type avec 2 boutons et texte long</h3>
<button type="button" id="btnTest6" class="utd-btn secondaire mb-16">Test 6</button>
<div id="resultat6"></div>
{#if mounted}
    <utd-accordeon titre="Code source">
        <span slot="contenu">
            <CodeSource codeSource="{message6.toString()}" language="language-javascript">
            </CodeSource>   
        </span>
    </utd-accordeon>
{/if}   


<style>
</style>
<script>
    import {Route} from 'tinro'; 
    import {active} from 'tinro';
    import Accueil from './pages/Accueil.svelte'; 
    import AideContextuelle from './pages/AideContextuelle.svelte'; 
    import Avis from './pages/Avis.svelte'; 
    import Boutons from './pages/Boutons.svelte'; 
    import Modal from './pages/Modal.svelte'; 
    import MenuSecondaire from './components/MenuSecondaire.svelte'; 
</script>

<div class="conteneur-principal">
    <header role="banner">
        <div class="conteneur-passer-contenu">
            <div class="passer-contenu">
                <a href="#main" class="passer-contenu">Passer au contenu</a>
            </div>   
        </div>

        <!--Javascript désactivé-->
        <noscript>
        <div id="javascriptDesactive" class="fureteur-desuet">
            <div class="utd-container" role="alert" aria-atomic="true">
                <div class="icone">
                    <img src="/images/sprite.svg?v=L6YVXIAKuVAsazZbNMnpYAUcadqD1WYnTZ7ucs4AHPA#ico-avertissement" width="28" height="26" aria-hidden="true">
                </div>
                <div class="texte">
                    Activez JavaScript dans votre navigateur pour que Système de design MTESS fonctionne correctement.
                </div>
            </div>
        </div>
        </noscript>
        <img id="pivLogoGouvernementPrint" alt="Logo du gouvernement du Québec." src="/images/quebecPrint.gif" width="199" height="60">
        <div class="piv piv-entete">
            <div class="utd-container">
                <div class="conteneur-sections">
                    <div class="section-gauche signature-gouvernement" lang="fr">
                        <a href="/">
                            <img alt="Signature du gouvernement du Québec. Accédez à Système de design MTESS." src="/images/utd-sprite-v1.2.0.svg#QUEBEC_blanc">
                        </a>
                    </div>
                    <div class="section-centre">
                        <a href="/" class="titre-site">
                            <span>Système de design MTESS</span>
                            <span class="description"></span>
                        </a>
                    </div>

                    
                    <div class="section-droite">
                        <ul>
                            <li><a href="/Commun/NousJoindre">Nous joindre</a></li>
                        </ul>
                    </div>
                </div>
                <div class="titre-site mobile">
                    <span>Système de design MTESS</span>
                </div>
            </div>
        </div>

        
        <div class="conteneur-menu-identification d-none">
            <div class="container zone-menu-identification d-flex">
                    <div class="zone-identification d-flex ml-auto">
                    </div>
            </div>
            <div class="container zone-menu-principal d-flex d-md-none">
            </div>
        </div>

    </header>

    <div class="utd-container">
        <div id="conteneur2Colonnes" class="contenu-principal-droite">
            <div id="colonneGauche">
                <MenuSecondaire titre="Liste des composants">
                    <div slot="contenu">
                        <ul>
                            <li><a href="/">Accueil</a></li>
                            <li><a on:click|preventDefault={() => window.location.href = '/avis'} href="/avis" use:active exact>Avis</a></li>
                            <li><a on:click|preventDefault={() => window.location.href = '/boutons'} href="/boutons" use:active exact>Boutons</a></li>
                            <li><a on:click|preventDefault={() => window.location.href = '/aidecontextuelle'} href="/aidecontextuelle" use:active exact>Infobulle</a></li>
                            <li><a on:click|preventDefault={() => window.location.href = '/modal'} href="/modal" use:active exact>Modal</a></li>
                        </ul>
                    </div>          
                </MenuSecondaire> 
            </div>
        
            <div id="colonneDroite">
                <main id="main">
                    <Route path="/"><Accueil /></Route>
                    <Route path="/avis"><Avis /></Route>
                    <Route path="/boutons"><Boutons /></Route>
                    <Route path="/aidecontextuelle"><AideContextuelle /></Route>
                    <Route path="modal"><Modal /></Route>
                </main>        
            </div>
        </div>
        
    </div>
</div>

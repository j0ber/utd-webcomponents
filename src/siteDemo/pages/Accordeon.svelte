<script>
</script>

<style type="text/css">
</style>

<h1>Accordéon</h1>

<h2>Exemple avec attributs "titre" et "contenu"</h2>
<utd-accordeon titre="Exemple d'utilisation 1" contenu="<p>Ici un texte incroyable.</p><p>Qui peut même contenir du html.</p>">
</utd-accordeon>

<h2>Exemple avec attribut "titre" et slot "contenu"</h2>
<utd-accordeon titre="Exemple d'utilisation 2">
    <span slot="contenu">
        <p>Ici un texte incroyable.</p>
        <p>Qui peut même contenir du html.</p>
    </span>
</utd-accordeon>

<h2>Exemple avec slots "titre" et "contenu"</h2>
<utd-accordeon>
    <span slot="titre">
        Exemple d'utilisation 3
    </span>   
    <span slot="contenu">
        <p>Ici un texte incroyable.</p>
        <p>Qui peut même contenir du html.</p>
    </span>
</utd-accordeon>



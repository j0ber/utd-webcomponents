<script>
    import { onMount } from 'svelte';
    import CodeSource from '../components/CodeSource.svelte'; 
    let mounted = false;

    onMount(() => {
        notification1();
        notification2();
        notification3();
        notification4();
        notification5();
        notification6();
        mounted = true;
    });

    function notification1() {
        document.getElementById('test1').addEventListener('click', () => {
            const params = {
                titre: "Bravo champion!",
                message: "Tu as réussi à enregistrer le formulaire."
                };

            utd.notification.emettre(params);
        });
    }

    function notification2() {
        document.getElementById('test2').addEventListener('click', () => {
            const params = {
                message: "Tu as réussi à enregistrer comme un grand.",
                delaiFermeture: 10000
                };

            utd.notification.emettre(params);
        });
    }

    function notification3() {
        document.getElementById('test3').addEventListener('click', () => {
            const params = {
                type: "negatif",
                titre: "Erreur",
                message: "Une erreur s'est produite."
                };

            utd.notification.emettre(params);
        });
    }

    function notification4() {
        document.getElementById('test4').addEventListener('click', () => {
            const params = {
                type: "negatif",
                message: "Une erreur s'est produite."
                };

            utd.notification.emettre(params);
        });
    }

    function notification5() {
        document.getElementById('test5').addEventListener('click', () => {
            const params = {
                type: "neutre",
                titre: "À noter",
                message: "Chuck Norris est incroyable. Il a compté jusqu'à l'infini. 2 fois!"
                };

            utd.notification.emettre(params);
        });
    }

    function notification6() {
        document.getElementById('test6').addEventListener('click', () => {
            const params = {
                type: "neutre",
                message: "Chuck Norris est incroyable. Il a compté jusqu'à l'infini. 2 fois!"
                };

            utd.notification.emettre(params);
        });
    }
</script>

<h1>Notifications</h1>
<h2>Paramètres</h2>
<h2>Exemples</h2>
<h3>Notification de type "positif" avec titre</h3>
<button type="button" id="test1" class="utd-btn secondaire mb-16">Test 1</button>
{#if mounted}
    <utd-accordeon titre="Code source">
        <span slot="contenu">
            <CodeSource codeSource="{notification1.toString()}" language="language-javascript">
            </CodeSource>   
        </span>
    </utd-accordeon>
{/if}   

<h3>Notification de type "positif" sans titre et délai de fermeture plus long spécifié (10 secondes)</h3>
<button type="button" id="test2" class="utd-btn secondaire mb-16">Test 2</button>
{#if mounted}
    <utd-accordeon titre="Code source">
        <span slot="contenu">
            <CodeSource codeSource="{notification2.toString()}" language="language-javascript">
            </CodeSource>   
        </span>
    </utd-accordeon>
{/if}   

<h3>Notification de type "negatif" avec titre</h3>
<button type="button" id="test3" class="utd-btn secondaire mb-16">Test 3</button>
{#if mounted}
    <utd-accordeon titre="Code source">
        <span slot="contenu">
            <CodeSource codeSource="{notification3.toString()}" language="language-javascript">
            </CodeSource>   
        </span>
    </utd-accordeon>
{/if}   


<h3>Notification de type "negatif" sans titre</h3>
<button type="button" id="test4" class="utd-btn secondaire mb-16">Test 4</button>
{#if mounted}
    <utd-accordeon titre="Code source">
        <span slot="contenu">
            <CodeSource codeSource="{notification4.toString()}" language="language-javascript">
            </CodeSource>   
        </span>
    </utd-accordeon>
{/if}   


<h3>Notification de type "neutre" avec titre</h3>
<button type="button" id="test5" class="utd-btn secondaire mb-16">Test 5</button>
{#if mounted}
    <utd-accordeon titre="Code source">
        <span slot="contenu">
            <CodeSource codeSource="{notification5.toString()}" language="language-javascript">
            </CodeSource>   
        </span>
    </utd-accordeon>
{/if}   


<h3>Notification de type "neutre" sans titre</h3>
<button type="button" id="test6" class="utd-btn secondaire mb-16">Test 6</button>
{#if mounted}
    <utd-accordeon titre="Code source">
        <span slot="contenu">
            <CodeSource codeSource="{notification6.toString()}" language="language-javascript">
            </CodeSource>   
        </span>
    </utd-accordeon>
{/if}   

<style>
</style>
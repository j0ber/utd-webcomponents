<script>
    import { onMount } from 'svelte';
    import CodeSource from '../components/CodeSource.svelte'; 

    let mounted = false;

    onMount(() => {
        test1();
        test2();
        test3();
        mounted = true;
    })

    function test1() {
        document.getElementById('btnTest1').addEventListener('click', function() {

            utd.traitementEnCours.debuter(this);
            
            setTimeout((that) => {
                utd.traitementEnCours.terminer(that);
            }, 5000, this);
        })
    }

    function test2() {
        document.getElementById('btnTest2').addEventListener('click', function() {
            utd.traitementEnCours.debuter(this, false);

            setTimeout((that) => {
                utd.traitementEnCours.terminer(that);
            },5000, this);
        })
    }

    function test3() {
        document.getElementById('btnTest3').addEventListener('click', function() {
            const bouton1 = document.getElementById('btnTest1');
            const bouton2 = document.getElementById('btnTest2');
            
            //On débute le traitement en cours sur les 3 boutons
            utd.traitementEnCours.debuter(bouton1);
            utd.traitementEnCours.debuter(bouton2, false);
            utd.traitementEnCours.debuter(this);

            setTimeout(() => {
                utd.traitementEnCours.terminer(bouton1);
            },5000);

            setTimeout(() => {
                utd.traitementEnCours.terminer(bouton2);
            },10000);

            setTimeout((that) => {
                //Terminer le traitement en cours sur le bouton 3
                utd.traitementEnCours.terminer(that);
            },15000, this);
        })
    }

</script>

<h1>Traitement en cours</h1>

<h2>Sur un bouton (avec overlay)</h2>
<p>Simule un traitement de 5 secondes.</p>
<button type="button" id="btnTest1" class="utd-btn secondaire mb-16">Test 1</button>
{#if mounted}
    <utd-accordeon titre="Code source">
        <span slot="contenu">
            <CodeSource codeSource="{test1.toString()}" language="language-javascript">
            </CodeSource>   
        </span>
    </utd-accordeon>
{/if}   



<h2>Sur un bouton (sans overlay)</h2>
<p>Simule un traitement de 5 secondes.</p>
<button type="button" id="btnTest2" class="utd-btn primaire mb-16">Test 2</button>
{#if mounted}
    <utd-accordeon titre="Code source">
        <span slot="contenu">
            <CodeSource codeSource="{test2.toString()}" language="language-javascript">
            </CodeSource>   
        </span>
    </utd-accordeon>
{/if}   


<h2>Sur un bouton compact (avec overlay)</h2>
<p>Simule un traitement simultané de 5 secondes sur le bouton 1, 10 secondes sur le bouton 2 et 15 secondes sur le bouton 3.</p>
<button type="button" id="btnTest3" class="utd-btn primaire compact mb-16">Test 3</button>
{#if mounted}
    <utd-accordeon titre="Code source">
        <span slot="contenu">
            <CodeSource codeSource="{test3.toString()}" language="language-javascript">
            </CodeSource>   
        </span>
    </utd-accordeon>
{/if}   

<style>
</style>
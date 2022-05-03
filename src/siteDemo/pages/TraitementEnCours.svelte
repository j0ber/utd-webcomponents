<script>
  import { onMount } from 'svelte';
  import CodeSource from '../components/CodeSource.svelte'; 

  onMount(() => {

    document.getElementById('btnTest1').addEventListener('click', function() {

        utd.traitementEnCours.debuter(this);

        setTimeout((that) => {
            utd.terminer(that);
        }, 5000), this;
    })

    document.getElementById('btnTest2').addEventListener('click', function() {

        utd.traitementEnCours.debuter(this);

        setTimeout((that) => {
            utd.terminer(that);
        },5000, this);
    })
})

</script>

<h1>Traitement en cours</h1>
<h2>Sur un bouton (avec overlay)</h2>
<p>Simule un traitement de 5 secondes.</p>
<button type="button" id="btnTest1" class="utd-btn secondaire mb-32">Test 1</button>


<h2>Sur un bouton (sans overlay)</h2>
<button type="button" id="btnTest2" class="utd-btn secondaire mb-32">Test 2</button>
<p>Simule un traitement de 5 secondes.</p>

<style>
</style>
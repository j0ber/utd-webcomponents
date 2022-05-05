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
        const params = {
             titre: "Bravo champion!",
             message: "Tu as réussi à enregistrer le formulaire."
            }

        utd.notification.emettre(params);
    })

    document.getElementById('btnTest2').addEventListener('click', () => {
        const params = {
             message: "Tu as réussi à enregistrer comme un grand."
            }

        utd.notification.emettre(params);
    })

    document.getElementById('btnTest3').addEventListener('click', () => {
        const params = {
             type: "negatif",
             titre: "Erreur",
             message: "Une erreur s'est produite."
            }

        utd.notification.emettre(params);
    })

    document.getElementById('btnTest4').addEventListener('click', () => {
        const params = {
             type: "negatif",
             message: "Une erreur s'est produite."
            }

        utd.notification.emettre(params);
    })

    document.getElementById('btnTest5').addEventListener('click', () => {
        const params = {
             type: "neutre",
             titre: "À noter",
             message: "Chuck Norris est incroyable. Il a compté jusqu'à l'infini. 2 fois!"
            }

        utd.notification.emettre(params);
    })

    document.getElementById('btnTest6').addEventListener('click', () => {
        const params = {
             type: "neutre",
             message: "Chuck Norris est incroyable. Il a compté jusqu'à l'infini. 2 fois!"
            }

        utd.notification.emettre(params);
    })
})

</script>

<h1>Notifications</h1>
<h2>Notification de type "positif" avec titre</h2>
<button type="button" id="btnTest1" class="utd-btn secondaire mb-32">Test 1</button>

<h2>Notification de type "positif" sans titre</h2>
<button type="button" id="btnTest2" class="utd-btn secondaire mb-32">Test 2</button>

<h2>Notification de type "negatif" avec titre</h2>
<button type="button" id="btnTest3" class="utd-btn secondaire mb-32">Test 3</button>

<h2>Notification de type "negatif" sans titre</h2>
<button type="button" id="btnTest4" class="utd-btn secondaire mb-32">Test 4</button>

<h2>Notification de type "neutre" avec titre</h2>
<button type="button" id="btnTest5" class="utd-btn secondaire mb-32">Test 5</button>

<h2>Notification de type "neutre" sans titre</h2>
<button type="button" id="btnTest6" class="utd-btn secondaire mb-32">Test 6</button>

<style>
</style>
<!-- 
Le tag est nécessaire afin que le compilateur svelte sache qu'on veut batîr un custom element.
<svelte:options tag="utd-menumobile" />
-->


<script>
  import { onMount } from "svelte";
  import {HighlightJS} from "highlight.js";
  import {html_beautify} from "js-beautify";
  import { Utils } from '../../librairie/components/utils.js'
  
  export let lang = "fr"
  export let srLabelMenu = ""
  export let idElementCodeSource = ""


  let controleCodeSource = null
  let codeSource = ""
  let afficher = false

  const idConteneurCode = Utils.genererId()
  const srTexteLabelMenu = srLabelMenu  
    ? srLabelMenu
    : lang === "fr"
    ? "Menu principal"
    : "Secondary menu"

  onMount(() => {
    controleCodeSource = document.getElementById(idElementCodeSource)
    codeSource = obtenirCodeSource(controleCodeSource)
    setTimeout(function(){ 
      const conteneurCode = document.getElementById(idConteneurCode)
      HighlightJS.highlightElement(conteneurCode);
    }, 100);
    
  })

  function obtenirCodeSource(element) {

    const options = {
      "indent":"auto",
      "indent-spaces":4,
      "wrap":300,
      "markup":true,
      "output-xml":true,
      "numeric-entities":true,
      "quote-marks":true,
      "quote-nbsp":false,
      "show-body-only":false,
      "quote-ampersand":false,
      "break-before-br":true,
      "uppercase-tags":false,
      "uppercase-attributes":false,
      "drop-font-tags":true,
      "tidy-mark":false,
      "new-blocklevel-tags": "utd-avis"
    }

    let codeSource = element.outerHTML
    codeSource = codeSource.replace(/<span/g, "\r\n<span")

    codeSource = html_beautify(codeSource, options) 
    return codeSource.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }

</script>

<div class="code-source">
  <pre>
    <code class="language-html" id={idConteneurCode}>
      {@html codeSource}
    </code>
  </pre>
</div>


<style>
</style>


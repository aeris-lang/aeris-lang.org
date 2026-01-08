<script lang="ts">
  import { Code } from "$lib/components";
  import { syndef1 } from "$lib/preview";
</script>

<h1>Syntax Definition</h1>
<p>
  You can define custom syntax tailored to your domain via plugins, enabling the
  language to evolve with your needs.
</p>

<p>
  Beyond simple parsing, these plugins provide full semantic highlighting,
  formatting, and IDE support for your custom syntax.
</p>

<Code text={syndef1} />

<blockquote>
  <strong>How it works:</strong> In this example, the <code>cpnt</code> keyword and
  embedded HTML-style tags are not hardcoded into AERIS; they are provided by external
  UI plugins.
</blockquote>

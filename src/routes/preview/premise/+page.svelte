<script lang="ts">
  import { Code } from "$lib/components";
  import { premise1, premise2 } from "$lib/preview";
</script>

<h1>Premise</h1>
<p>
  Premise allows you to enforce static constraints on values, catching potential
  bugs before your code even runs.
</p>

<h2>Compile-time Validation</h2>
<p>
  In its basic usage, a premise is verified during compilation. By shifting
  validation from runtime to compile-time, AERIS ensures safety without
  performance overhead.
</p>
<Code text={premise1} />
<blockquote>
  <strong>Note:</strong> If a value can be proven to violate the condition, AERIS
  will trigger a compile-time error, preventing the build from succeeding.
</blockquote>

<h2>Runtime Integration</h2>
<p>
  For values that can only be known at runtime (such as user input), use the <code
    >sat</code
  > keyword. It allows you to safely bridge dynamic data with your static premises.
</p>
<Code text={premise2} />

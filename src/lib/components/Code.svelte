<script lang="ts" module>
  const syntax: [color: string, ...patterns: RegExp[]][] = [
    [
      // Comments
      "#6A9955",
      /\/\/[^\n]*/g,
      /\/\*[\s\S]*?\*\//g,
    ],
    [
      // Strings
      "#CE9178",
      /"[^"]*"/g,
    ],
    [
      // Numbers
      "#B5CEA8",
      /\b\d+(?:\.\d+)?\b/g,
    ],
    [
      // Keywords
      "#569CD6",
      /\bimport\b/g,
      /\bfrom\b/g,
      /\bfn\b/g,
      /\blet\b/g,
      /\bmut\b/g,
      /\bpremise\b/g,
      /\bsat\b/g,
      /\bif\b/g,
      /\belse\b/g,
      /\bwhile\b/g,
      /\bfor\b/g,
      /\breturn\b/g,
      /\btrue\b/g,
      /\bfalse\b/g,
      /\bnull\b/g,
      /\band\b/g,
      /\bor\b/g,
    ],
    [
      // Functions
      "#DCDCAA",
      /(?<=\bfn\b\s*)[a-zA-Z_]\w*/g,
      /[a-zA-Z_]\w*(?=\s*\()/g,
    ],
    [
      // Types
      "#4EC9B0",
      /(?<=\bimport\b\s*)[a-zA-Z_]\w*/g,
      /(?<=\bfrom\b\s*(?:[a-zA-Z_]\w*\/)*)[a-zA-Z_]\w*/g,
      /(?<=:\s*)[a-zA-Z_]\w*/g,
    ],
    [
      // Identifiers
      "#9CDCFE",
      /[a-zA-Z_]\w*/g,
    ],
    [
      // Punctuations
      "#CCCCCC",
      /[(),./:;<=>{}]/g,
    ],
  ];
</script>

<script lang="ts">
  interface Props {
    text: string;
  }
  const { text }: Props = $props();

  const tokens = $derived.by(() => {
    const tokens: [color: string | null, content: string][] = [];
    let index = 0;

    while (index < text.length) {
      let bestMatch: { color: string; start: number; end: number } | null =
        null;

      for (const [color, ...patterns] of syntax) {
        for (const pattern of patterns) {
          pattern.lastIndex = index;
          const match = pattern.exec(text);

          if (match) {
            if (!bestMatch || match.index < bestMatch.start) {
              bestMatch = {
                color,
                start: match.index,
                end: match.index + match[0].length,
              };
            }
          }
        }
      }

      if (bestMatch && bestMatch.start >= index) {
        if (bestMatch.start > index) {
          tokens.push([null, text.slice(index, bestMatch.start)]);
        }
        tokens.push([
          bestMatch.color,
          text.slice(bestMatch.start, bestMatch.end),
        ]);
        index = bestMatch.end;
      } else {
        tokens.push([null, text.slice(index)]);
        break;
      }
    }

    return tokens;
  });
</script>

<pre><code
    >{#each tokens as [color, content]}<span style:color>{content}</span
      >{/each}</code
  ></pre>

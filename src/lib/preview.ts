import type { resolve } from "$app/paths";

export interface Preview {
  name: string;
  href: Parameters<typeof resolve>;
}

export const previews: Preview[] = [
  {
    name: "Premise",
    href: ["/preview/premise"],
  },
  {
    name: "Syntax Definition",
    href: ["/preview/syndef"],
  },
];

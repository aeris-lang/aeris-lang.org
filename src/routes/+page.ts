import type { PageLoad } from "./$types";

export const load: PageLoad = () => {
  return {
    title: "AERIS",
    subtitle: "Next Generation Programming Language",
    description:
      "AERIS is a general-purpose programming language " +
      "featuring compile-time premises and a sophisticated type system, " +
      "designed for high performance and zero-overhead.",
    robots: "index, follow",
  };
};

import type { PageLoad } from "./$types";

export const load: PageLoad = () => {
  return {
    title: "Page Not Found — AERIS",
    description:
      "The page you’re looking for can’t be found. Please check the URL or go back to the homepage.",
  };
};

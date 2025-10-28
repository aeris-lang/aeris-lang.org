import extractorSvelte from "@unocss/extractor-svelte";
import {
  defineConfig,
  presetAttributify,
  presetMini,
  presetTypography,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [presetMini(), presetAttributify(), presetWebFonts(), presetTypography()],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  extractors: [extractorSvelte],
});

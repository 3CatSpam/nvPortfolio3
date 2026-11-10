// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Adresse du site en ligne (sert aux URL canoniques)
  site: "https://adamgosmat.com",
  // Garde les espaces entre les éléments comme en HTML classique
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
    // le dossier test réutilise le node_modules du dossier parent (lien symbolique)
    server: { fs: { allow: [".."] } },
  },
});

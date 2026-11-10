# Portfolio · Adam Gosmat

Portfolio de design graphique et 3D, fait avec [Astro](https://astro.build) et [Tailwind CSS](https://tailwindcss.com).
En ligne : https://adamgosmat.com

## Lancer le site

Il faut Node.js 22.12 ou plus récent.

```sh
npm install
npm run dev      # site en local sur http://localhost:4321
npm run build    # génère le site dans dist/
npm run preview  # regarde la version générée
```

## Où est quoi

```
src/
  data/projets.ts        ← tous les projets (études de cas + autres travaux)
  pages/index.astro      ← accueil en défilement horizontal
  pages/projets/[slug].astro ← une page par étude de cas
  pages/mentions-legales.astro, confidentialite.astro, 404.astro
  components/            ← Menu, Curseur, Jeu (Empile), CarteEtude, Pastille
  layouts/Base.astro     ← <head>, menu et curseur communs
  styles/global.css      ← couleurs, polices, briques néo-brutalistes
public/                  ← fichiers servis tels quels (images, vidéos, CV, modèles 3D, _redirects)
docs/                    ← positionnement, pistes écartées, technos
IA.md · JOURNAL.md · QUALITE.md
```

## Ajouter un projet

Ajouter un objet dans `etudes` ou `travaux` de `src/data/projets.ts`, et ses images dans `public/`.

## Mise en ligne (Cloudflare Pages)

Commande de build : `npm run build` · dossier de sortie : `dist`.
Les anciennes adresses du premier portfolio sont redirigées par `public/_redirects`.

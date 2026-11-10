# Portfolio d'Adam Gosmat

Portfolio professionnel (BUT MMI 2e année, projet du semestre 3) : identités graphiques et 3D.
En ligne sur **https://adamgosmat.com**, hébergé sur Cloudflare Pages.

## Lancer le site

```sh
npm run dev       # serveur de développement
npm run build     # génère le site statique dans dist/
npm run preview   # prévisualise le build
```

## Technologies et librairies

Aucun thème ni template : la mise en page, les couleurs et les interactions sont écrites pour ce site.

| Outil | Rôle | Licence |
|---|---|---|
| [Astro](https://astro.build) 7 | Framework : pages, composants, génération statique | MIT |
| [Tailwind CSS](https://tailwindcss.com) 4 | Styles, avec un thème personnalisé dans `src/styles/global.css` (6 couleurs, polices, contours épais, ombres dures) | MIT |
| [Lenis](https://lenis.darkroom.engineering) | Défilement doux (copié dans `public/vendor/`) | MIT |
| [model-viewer](https://modelviewer.dev) (Google) | Affichage du modèle 3D Wankel (`.glb`), chargé seulement quand il est nécessaire | Apache 2.0 |
| Archivo, DM Mono, Parisienne (via `@fontsource`) | Texte, étiquettes et une police de titre | OFL |
| Polices de titre (Audio Nugget, Akka, etc.) | Une police tirée au hasard à chaque visite, hébergée dans `public/fonts/` | voir `QUALITE.md` |

## Ce qui est propre à ce site

- Direction artistique néo-brutaliste : couleurs d'accent et fond tirés au hasard à chaque visite, texte et contours toujours noirs.
- Défilement horizontal sur ordinateur (le scroll vertical fait avancer la page de gauche à droite), vertical sur téléphone.
- Cartes d'études de cas qui s'empilent (CSS `position: sticky`).
- Curseur personnalisé orienté selon sa direction (seulement avec un pointeur précis).
- Aucun cookie ni traceur.

## Organisation du code

```text
src/
├── components/   composants Astro (menu, curseur, carte d'étude de cas, pied de page…)
├── data/projets.ts   toutes les données des projets : on ajoute un projet en ne modifiant que ce fichier
├── layouts/Base.astro   structure commune, balises SEO, scripts partagés
├── pages/   accueil, pages /projets/[slug]/, mentions légales, confidentialité, 404
└── styles/global.css   thème Tailwind et styles communs
public/   images, polices, modèles 3D, sitemap.xml, robots.txt, redirections
```

## Suivi du projet

- `JOURNAL.md` : journal de bord
- `IA.md` : déclaration d'usage de l'IA
- `QUALITE.md` : grille qualité (accessibilité, sobriété, référencement, juridique)

# Grille qualité du portfolio

Pour chaque critère : ce qui compte **dans mon cas**, comment je vérifie, et ce que j'ai corrigé.
La colonne « Résultat » se remplit au fur et à mesure des tests.

## Audits réalisés

Les résultats chiffrés viennent des audits Lighthouse et 3CS, lancés sur le site en ligne. Chaque audit est daté pour montrer l'évolution avant et après corrections.

| Date | Outil | Page | Performance | Accessibilité | Bonnes pratiques | SEO | Remarques |
|---|---|---|---|---|---|---|---|
| [à remplir] | Lighthouse (mobile) | Accueil | | | | | |
| [à remplir] | Lighthouse (desktop) | Accueil | | | | | |
| [à remplir] | Lighthouse (mobile) | Étude de cas Wankel | | | | | |
| [à remplir] | 3CS | Accueil | | | | | |

## 1. Accessibilité

Points à risque propres à mon site : le défilement horizontal, les animations, le curseur personnalisé, les couleurs vives.

| Critère | Pourquoi c'est un risque ici | Comment je vérifie | Résultat / correction |
|---|---|---|---|
| Navigation au clavier dans le défilement horizontal | Le site défile à l'horizontale avec la molette | Tab dans toute la page, flèches, liens du menu | [ ] |
| Menu utilisable au clavier | Menu en `popover` | Ouvrir/fermer avec Entrée et Échap | [ ] |
| Mouvements réduits | Loader, bande qui défile, pastille qui tourne, texte qui s'allume | Activer « réduire les animations » dans le système | Media query `prefers-reduced-motion` : animations coupées, texte affiché en entier. [ ] |
| Contrastes | Texte noir sur jaune, rose, ciel ; texte gris du « À propos » | Contrast checker (WebAIM) | Texte courant toujours noir (#111) sur couleur claire. Le gris du texte animé est décoratif : il finit en noir. [ ] |
| Curseur personnalisé | Le curseur natif est caché | Tester souris, trackpad, tactile | Activé seulement avec `pointer: fine`, jamais sur tactile. [ ] |
| Textes alternatifs | Beaucoup d'images de projets | Lecture avec VoiceOver, extension WAVE | Images décoratives (versions tramées) en `alt=""`. [ ] |
| Titres sans accents (Audio Nugget) | La police n'a pas d'accents | Écoute avec VoiceOver | [ ] |
| Lien d'évitement, langue, titres | Base de l'accessibilité | Lighthouse, axe DevTools | « Aller au contenu », `lang="fr"`, un seul `h1` par page. [ ] |

## 2. Sobriété et performance

Points lourds propres à mon site : modèle 3D Wankel (3,8 Mo), vidéos, images de projets, polices.

| Critère | Comment je vérifie | Résultat / correction |
|---|---|---|
| Poids de l'accueil | Onglet Réseau (cache désactivé), EcoIndex | [ ] |
| Modèle 3D chargé seulement quand nécessaire | Onglet Réseau : le `.glb` ne se charge qu'à l'approche de la carte (`loading="lazy"`) | [ ] Piste : compresser le `.glb` (gltf-transform, textures en WebP). Attention : la compression Draco ferait charger un décodeur depuis un serveur Google, donc mettre à jour la page confidentialité. |
| Images | Lighthouse « Properly size images » | Vignettes tramées en PNG 2 couleurs (quelques Ko). [ ] Piste : utiliser `<Image />` d'Astro pour les grandes images. |
| Polices | Onglet Réseau | Polices hébergées sur le site, seulement 4 graisses chargées. [ ] |
| JavaScript | Lighthouse « Unused JavaScript » | Pas de framework côté client, scripts courts. [ ] |
| Scores | Lighthouse (mobile et desktop), PageSpeed Insights | [ ] |

## 3. Référencement

| Critère | Comment je vérifie | Résultat / correction |
|---|---|---|
| Titre et description uniques par page | Code source, Lighthouse SEO | Définis dans chaque page via `Base.astro`. [ ] |
| URL canonique | Code source | `<link rel="canonical">` généré avec `site` d'Astro. [ ] |
| Données structurées (Person) | Google Rich Results Test / validator.schema.org | JSON-LD sur l'accueil. [ ] |
| sitemap.xml et robots.txt | Ouvrir `/sitemap.xml`, Google Search Console | [ ] Mettre à jour le sitemap si j'ajoute une page. |
| Anciennes URL redirigées | Tester `/design.html` et `/project.html` après la mise en ligne | `public/_redirects` (redirections 301). [ ] |
| HTML valide | validator.w3.org | [ ] |
| Partage sur les réseaux | Aperçu LinkedIn (Post Inspector) | Balises Open Graph. [ ] Ajouter une image `og:image`. |

## 4. Conformité juridique

| Critère | Ce que dit la loi | Comment je vérifie | Résultat / correction |
|---|---|---|---|
| Mentions légales | LCEN, article 1-1 : éditeur et hébergeur identifiés | Page `/mentions-legales/` | [ ] Vérifier que l'hébergeur est toujours Cloudflare Pages et que mon identité est bien renseignée dans mon compte Cloudflare. |
| Données du formulaire | RGPD : information sur la finalité, la base légale, la durée, les droits | Page `/confidentialite/` | Le formulaire ouvre la messagerie : rien n'est stocké par le site. [ ] |
| Cookies et traceurs | Article 82 Informatique et Libertés : consentement sauf traceurs strictement nécessaires | Onglet Application > Cookies et stockage local, extension type Cookie-Editor | Aucun traceur déposé par le site, donc pas de bandeau. [ ] Revérifier si j'ajoute des statistiques, une vidéo YouTube ou une police Google. |
| Droits sur les contenus | Code de la propriété intellectuelle | Liste des projets | [ ] Accord du client pour Vassil.fr, crédits des coéquipiers (Urbex, Eishi, SocialScope). |
| Licences des polices et librairies | Chaque licence | Fichiers de licence | Archivo et DM Mono : OFL. Astro, Tailwind : MIT. model-viewer : Apache 2.0. [ ] **Audio Nugget : vérifier la licence (usage web autorisé ?)**. |

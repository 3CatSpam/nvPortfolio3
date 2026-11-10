# Déclaration d'usage de l'IA

Ce fichier déclare, pour chaque outil d'IA utilisé : à quelle étape, pour quoi faire, et ce que j'ai modifié, corrigé ou rejeté.

## Modèle utilisé

Claude Sonnet 5.

## Tâches effectuées

| Étape | Ce que j'ai demandé | Ce que l'IA a produit | Ce que j'ai gardé, modifié ou rejeté |

| Développement | Passer la maquette en Astro + Tailwind | Composants, pages légales, mini-jeu | J'ai gardé ce que j'ai compris, et demandé clarification pour ce que je n'ai pas compris. J'ai cependant du modifier les textes et ajouter  |
| Développement | Récupéré les informations venant de mon ancien portfolio | L'ia a tout récupéré, j'ai donc du faire le tri |
| Rédaction | QUALITE.md, textes légaux, IA.md | j'ai gardé le légal, et la mise en page de IA.md mais réécris le IA.md |
| Debugging | aider a régler un problème avec npm run dev qui ne marchait pas (30go de ram utilisé, l'ordinateur a planté, puis npm run dev ne se lancait plus) | suivant les instructions de claude, j'ai reinstallé une ancienne version de node, retiré node modules puis refait npm install et ça à marché, sauf que quand j'allais sur la page, elle charge à l'infini, sans rien montrer. J'ai retiré l'ancien portfolio du dossier, fait une bonne quinzaines de curl, de ps aux et de sample. Ce qui à marché: j'ai (de mon propre chef) créé un nouveau dossier ou j'ai tout réinstallé et pris l'ancien src, et ça à marché. |
| developpement | j'ai demandé à claude de rajouter des polices a mon ancien script pour qui change les polices à chaque visite du site, et je ne sais pas comment ni pourquoi, mais après ça, le bug du dessus est réapparu | j'ai du re-recréer un dossier et y mettre le src |
| debugging | j'ai essayer de faire étape par étape, voir où ça coince. | le problème viens de tailwind, qui scannait des gros fichiers en dehors du src |
| Debugging | le popup d'aperçu au survol de "Autres travaux" laguait, demandé d'ajouter un léger délai au popup. ainsi, lorsque l'on passe rapidement notre curseur dessus, les images n'apparaissent pas toutes | trouvé 2 causes : les images utilisées pour la miniature/le popup étaient les images pleine résolution (jusqu'à 2940x1912 pour un popup affiché à 224px), et le mouseleave posé sur chaque ligne relançait un fondu de sortie aussitôt annulé par le fondu d'entrée suivant à chaque changement de ligne (saccades surtout visibles sur mon navigateur WebKit maison) | mis les images en webp pour les miniature (les pages détail gardent l'image d'origine), ajouté un léger délai avant de charger l'image au survol, déplacé le mouseleave sur la liste entière au lieu de chaque ligne, et ajouté will-change-transform sur le popup |
| Rédaction | Rédiger le README, créer sitemap.xml, robots.txt | README (librairies déclarées), sitemap et robots écrits à la main | claude à généré un og.png placeholder que j'ai remplacé par le miens |

### Ce que l'IA n'a pas fait

- recherche graphique (moodboard, styles, idées)
- Le prototype Figma
- Les textes
- Les audits
- Les projets

### Vérifications faites de mon côté

- [ ] J'ai vérifié les fichiers dans /src
- [ ] J'ai vérifié les mentions légales et la politique de confidentialité
- [ ] J'ai testé le site sur ordinateur, téléphone, au clavier et avec un lecteur d'écran.
- [ ] j'ai effecté des audits (Lighthouse et audit venant d'un programme personlel)

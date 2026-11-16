// Toutes les données des projets. [Crochets] = brouillon.

export type Etude = {
  slug: string;
  titre: string;
  categorie: string;
  annee: string;
  cadre: string;
  resume: string;
  couleur: string;
  tags: string[];
  modele?: string;
  image?: string;
  contexte: string;
  role: string;
  processus: string;
  techniques: string;
  resultat: string;
};

export const etudes: Etude[] = [
  {
    slug: "wankel",
    titre: "Moteur Wankel",
    categorie: "3D · Animation",
    annee: "2026",
    cadre: "Université",
    resume: "Chambre à piston rotatif modélisée pièce par pièce et animée : on voit le rotor faire son cycle.",
    couleur: "bg-c3",
    tags: ["Blender", "Méca", "Animation"],
    modele: "/models/wankel.glb",
    contexte: "Le moteur Wankel remplace les pistons par un rotor triangulaire qui tourne dans une chambre ovale. Je voulais comprendre ce principe mécanique en le reconstruisant en 3D, et le rendre lisible pour quelqu'un qui n'a jamais ouvert un moteur.",
    role: "Projet personnel réalisé seul, de la recherche de références à l'animation : modélisation, matériaux, rigging du cycle et export pour le web.",
    processus: "Je suis parti de schémas et de coupes de moteur pour isoler les pièces (chambre, rotor, arbre excentrique, bougie, échappement), puis j'ai modélisé chacune séparément. Ensuite, j'ai animé la rotation du rotor sur son arbre jusqu'à ce que le cycle soit lisible, et j'ai ajusté la caméra pour qu'on comprenne le mouvement sans explication.",
    techniques: "Modélisation de précision dans Blender, matériaux PBR avec textures de fonte et d'aluminium, une animation en boucle. Export en glTF (.glb, environ 3,8 Mo) pour l'afficher en temps réel et le faire tourner directement sur cette page.",
    resultat: "Un moteur complet, animé et manipulable dans le navigateur. J'en retiens qu'il faut penser le poids du fichier dès la modélisation, et qu'un mouvement bien animé explique mieux qu'un long texte.",
  },
  {
    slug: "khromapen-ultra",
    titre: "Khromapen Ultra",
    categorie: "3D · Produit",
    annee: "2025",
    cadre: "Université",
    resume: "Version luxe du stylo Khromapen : matériaux métalliques, reflets, éclairage studio.",
    couleur: "bg-c1",
    tags: ["Blender", "PBR", "Lighting"],
    image: "/previews/khromapen_ultra.webp",
    contexte: "Khromapen est un stylo aux couleurs infinies. Pour la version Ultra, j'ai imaginé une déclinaison haut de gamme, plus sobre et métallique, présentée comme un vrai produit de catalogue.",
    role: "Projet réalisé seul : design de la version, modélisation du stylo, matériaux, éclairage studio, rendus et courte animation.",
    processus: "J'ai commencé par décomposer le stylo en pièces (corps, bague, clip, mécanisme), puis j'ai testé plusieurs finitions : chrome, acier brossé, anodisé. J'ai ensuite construit un éclairage de studio pour faire ressortir les reflets, avant de garder la combinaison la plus lisible.",
    techniques: "Matériaux PBR métalliques dans Blender, éclairage à base de panneaux lumineux et reflets contrôlés, rendu en haute définition. Le modèle 3D est léger (environ 160 Ko) et prêt pour l'affichage web.",
    resultat: "Un stylo qui a l'air d'un produit fini, avec des reflets crédibles. La suite logique serait un packaging et une présentation produit complète.",
  },
  {
    slug: "vassil",
    titre: "Vassil.fr",
    categorie: "Web · 3D",
    annee: "2025",
    cadre: "Stage",
    resume: "Refonte du site d'un sculpteur animalier, avec intégration 3D légère.",
    couleur: "bg-c4",
    tags: ["Figma", "Blender", "Web"],
    image: "/previews/vassil.webp",
    contexte: "Vassil est un sculpteur animalier. Son site existant ne montrait pas bien ses pièces, et il voulait une vitrine plus moderne, qui fasse sentir le volume de son travail.",
    role: "Refonte réalisée pour un client : maquettes dans Figma, direction visuelle, modélisation 3D légère et intégration web. Je me suis occupé du design et de la 3D.",
    processus: "J'ai d'abord listé ce qui comptait pour lui : montrer les sculptures, rassurer les visiteurs et faciliter la prise de contact. Puis j'ai maquetté la structure, testé plusieurs mises en page et validé avec lui une version avant l'intégration.",
    techniques: "Maquettes Figma, modèles Blender optimisés pour le web, images compressées et accessibilité soignée (contrastes, navigation clavier). Le défi était de garder l'effet 3D sans alourdir les pages.",
    resultat: "Un site plus lisible qui met ses sculptures en valeur, validé par le client. J'y ai appris à arbitrer entre ce que je trouve beau et ce que le client et le web permettent.",
  },
];

export type Travail = {
  titre: string;
  categorie: string;
  annee: string;
  cadre: string;
  image: string;
  imageMini: string;
  couleur: string;
  lien?: string; // externe, sinon page interne
  slug?: string;
  description?: string;
  tags?: string[];
  role?: string;
  processus?: string;
  techniques?: string;
  resultat?: string;
};

export const travaux: Travail[] = [
  { titre: "ESTRN", categorie: "Typographie", annee: "2025", cadre: "Université", image: "/previews/ESTRN_typo.webp", imageMini: "/previews/mini/ESTRN_typo.webp", couleur: "hover:bg-c1", slug: "estrn", description: "Création d'une famille typographique autour du nom ESTRN : trouver des lettres qui ont du caractère et restent lisibles." , role: "Dessin de l'alphabet de A à Z, du premier croquis à la police utilisable, seul.", processus: "Croquis à la main de quelques lettres clés, vectorisation, puis déclinaison du reste de l'alphabet en gardant les mêmes proportions. Plusieurs tests d'espacement sur des mots réels.", techniques: "Illustrator pour le dessin des formes, tests d'approche et de crénage, planches de présentation pour montrer la police en situation.", resultat: "Une typographie cohérente, présentée en affiche et en exemples d'usage. Le crénage reste le point à retravailler." },
  { titre: "Château", categorie: "3D · Blender", annee: "2025", cadre: "Université", image: "/previews/chateau.webp", imageMini: "/previews/mini/chateau.webp", couleur: "hover:bg-c3", slug: "chateau", description: "Modélisation et mise en scène d'un château en 3D, pour travailler l'échelle, l'architecture et l'ambiance." , role: "Modélisation, texturing, éclairage et rendu, seul.", processus: "Blocage des volumes, puis détails architecturaux (tours, remparts, fenêtres), matériaux de pierre et choix d'une lumière qui donne de l'atmosphère.", techniques: "Blender, matériaux PBR, éclairage de scène en extérieur et rendu final retouché.", resultat: "Une image qui raconte quelque chose, pas juste un décor. Je referais le projet avec une base plus modulaire." },
  { titre: "Eishi", categorie: "Branding · Web", annee: "2025", cadre: "Université", image: "/previews/eishi.webp", imageMini: "/previews/mini/eishi.webp", couleur: "hover:bg-c2", lien: "http://eishi.free.nf" },
  { titre: "Vision", categorie: "Logo", annee: "2025", cadre: "Université", image: "/previews/eye.webp", imageMini: "/previews/mini/eye.webp", couleur: "hover:bg-c4", slug: "vision", description: "Création d'un logo autour du motif de l'œil, simple et mémorable." , role: "Conception de l'identité du logo, de la recherche à la déclinaison, seul.", processus: "Recherche autour de la forme de l'œil, tests de plusieurs constructions géométriques, puis simplification jusqu'à un signe lisible en petit comme en grand.", techniques: "Illustrator, construction sur grille, déclinaisons en couleur et en noir et blanc.", resultat: "Un logo net qui fonctionne sur fond clair ou sombre. Il reste à le tester sur un support réel." },
  { titre: "Le Monde de l'Urbex", categorie: "Webdocumentaire", annee: "2025", cadre: "Université", image: "/images/urbex.webp", imageMini: "/images/mini/urbex.webp", couleur: "hover:bg-c6", slug: "urbex", description: "Un webdocumentaire sur l'exploration urbaine : raconter des lieux abandonnés par l'image et le son, sur une page web." , role: "Projet d'équipe, avec les crédits en bas de page. Je me suis occupé de la direction visuelle et du design de l'interface.", processus: "Choix de l'angle éditorial, découpage en chapitres, maquettes de la navigation, puis intégration et ajustements avec l'équipe.", techniques: "Figma pour les maquettes, intégration web, images optimisées pour garder le site fluide malgré des visuels lourds.", resultat: "Un récit qui se parcourt comme un parcours dans un lieu. La coordination d'équipe a été le plus gros apprentissage." },
  { titre: "3CS Browser", categorie: "Logiciel · Swift", annee: "2026", cadre: "Projet perso", image: "/previews/3cs/starfield.webp", imageMini: "/previews/3cs/mini_starfield.webp", couleur: "hover:bg-c3", slug: "3cs-browser", description: "Un navigateur de fichiers et de ressources développé en Swift pour macOS, avec ses propres visuels génératifs (flowfield, matrixrain, starfield, topomap)." , role: "Développement et design de l'application, seul.", processus: "Partir d'un besoin personnel, prototyper l'interface, puis ajouter des fonctions petit à petit en testant au quotidien.", techniques: "Swift et SwiftUI, visuels génératifs en temps réel, interface sombre pensée pour la lisibilité.", resultat: "Un outil que j'utilise vraiment. Prochaine étape : le rendre plus stable et le partager." },
];

// Pages projet : études + travaux sans lien externe
export const pagesProjet: Etude[] = [
  ...etudes,
  ...travaux
    .filter((travail) => !travail.lien && travail.slug)
    .map((travail) => ({
      slug: travail.slug!,
      titre: travail.titre,
      categorie: travail.categorie,
      annee: travail.annee,
      cadre: travail.cadre,
      resume: travail.description ?? "",
      couleur: travail.couleur.replace("hover:", ""),
      tags: travail.tags ?? ["[Outils]"],
      image: travail.image,
      contexte: travail.description ?? "[Contexte.]",
      role: travail.role ?? "[Mon rôle exact.]",
      processus: travail.processus ?? "[Recherches, pistes, arbitrages.]",
      techniques: travail.techniques ?? "[Détails techniques.]",
      resultat: travail.resultat ?? "Un stylo qui a l'air d'un produit fini, avec des reflets crédibles. La suite logique serait un packaging et une présentation produit complète.",
    })),
];

// Audio Nugget n'a pas d'accents
export const sansAccents = (texte: string) => texte.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

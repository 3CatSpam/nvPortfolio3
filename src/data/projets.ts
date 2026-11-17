// Toutes les données des projets. [Crochets] = brouillon.

export type Vue = { src: string; alt: string; legende: string };

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
  iframe?: string; // site embarqué
  images?: string[]; // aperçu accueil tiré au hasard
  galerie?: Vue[];
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
    slug: "demicolon",
    titre: "Demicolon",
    categorie: "Logiciel · Swift",
    annee: "2026",
    cadre: "Projet personnel",
    resume: "Mon propre éditeur de notes pour macOS, pensé pour remplacer Pages : léger, natif et à mon image.",
    couleur: "bg-c1",
    tags: ["Swift", "AppKit", "macOS"],
    image: "/previews/demicolon.webp",
    contexte: "Pages, le logiciel de traitement de texte que j'utilisais, me posait problème : il plantait tout le temps et gérait très mal les images et la mise en page. Je voulais un éditeur simple, rapide, sans Electron ni navigateur complet, et que je maîtrise, qui n'a pas ce genre de problèmes. L'idée du nom et de la fonction principale, le 'demicolon', vient d'une vidéo Instagram où quelqu'un utilisait un demicolon dans son livre : une tangente glissée au milieu d'une phrase. Curieux, je me suis renseigné, et j'ai découvert que c'était une blague, quelque chose qui n'existe pas. Le trouvant pratique, j'ai décidé de le rendre réel.",
    role: "Projet personnel, conçu et développé seul : idées, design de l'interface et du logo.",
    processus: "J'ai d'abord fait un prototype en web, puis je l'ai abandonné pour repartir en natif (Swift), plus léger. Je l'utilise tous les jours pour prendre des notes, ce qui me sert de test : dès qu'un détail m'agace, je le corrige. J'ai ajouté, en plus des tangentes (demicolons), une colonne d'images (Marginalia) permettant de mieux gérer ses notes, des thèmes, l'insertion de code et de LaTeX, etc.",
    techniques: "Swift et AppKit (TextKit), sans aucune dépendance externe. Un format de fichier (.dmcl) compact et capable d'embarquer les images, avec chiffrement et signature numérique possible. Exports en PDF, DJVU, DOCX, HTML et Markdown.",
    resultat: "Une vraie application que j'utilise au quotidien, qui s'ouvre vite et que je peux faire évoluer comme je veux. J'ai même un format de fichier spécifique à l'application (.DMCL) qui est 9 fois plus léger qu'un fichier DOCX identique, 23 à 25 fois plus léger qu'un PDF et 70 fois plus léger qu'un fichier Pages (sur des documents de petite taille. Sur de grands documents, .dmcl est environ 1.7 fois plus léger que PDF, 2.1 à 2.5 fois plus léger que Pages mais 1.03 fois plus lourd qu'un DOCX compressé).",
  },
  {
    slug: "3cs-browser",
    titre: "3CS Browser",
    categorie: "Logiciel · Swift",
    annee: "2026",
    cadre: "Projet personnel",
    resume: "Un navigateur MacOS à mon image, complet, rapide, customisable.",
    couleur: "bg-c3",
    tags: ["Swift", "SwiftUI", "WebKit"],
    image: "/previews/3cs/app-matrixrain.webp",
    images: ["/previews/3cs/app-navigation.webp", "/previews/3cs/app-matrixrain.webp", "/previews/3cs/app-topomap-app.webp", "/previews/3cs/app-apparence.webp", "/previews/3cs/app-brutaliste.webp", "/previews/3cs/app-navbar-transparente.webp"],
    galerie: [
    { src: "/previews/3cs/app-navigation.webp", alt: "3CS Browser affichant une page Wikipédia, onglets verticaux à gauche", legende: "Navigation : onglets verticaux, barre d'outils personnalisable" },
    { src: "/previews/3cs/app-navbar-minimale.webp", alt: "3CS Browser avec une barre de navigation réduite à l'essentiel : précédent, suivant, adresse et thème", legende: "Navbar épurée : on ne garde que les boutons dont on a besoin" },
    { src: "/previews/3cs/app-navbar-transparente.webp", alt: "3CS Browser avec une navbar transparente posée sur une vidéo en plein cadre, sidebar à gauche", legende: "Navbar transparente : le contenu passe sous la barre" },
    { src: "/previews/3cs/app-apparence.webp", alt: "Réglages d'apparence de 3CS Browser sur fond flowfield", legende: "Apparence : économiseur d'écran, thème sombre, effet verre liquide" },
    { src: "/previews/3cs/app-outils.webp", alt: "Réglages des outils intégrés de 3CS Browser", legende: "Outils intégrés : convertisseur, calculatrice, crawler de liens" },
    { src: "/previews/3cs/app-matrixrain.webp", alt: "Page d'accueil de 3CS Browser avec l'économiseur matrixrain", legende: "Visuel génératif : matrixrain" },
    { src: "/previews/3cs/app-starfield-app.webp", alt: "Page d'accueil de 3CS Browser avec l'économiseur starfield", legende: "Visuel génératif : starfield" },
    { src: "/previews/3cs/app-topomap-app.webp", alt: "Page d'accueil de 3CS Browser avec l'économiseur topographique", legende: "Visuel fluide, inspiré de plans topographiques" },
    ],
    contexte: "J'utilisais le navigateur Zen, mais certains détails me gênaient ou ne fonctionnaient pas comme je le souhaitais. En décembre 2025, sur un coup de tête, j'ai décidé de concevoir mon propre navigateur, plus adapté à mon usage. Une autre idée derrière ce navigateur fut une curiosité pour la capacité de développement des intelligences artificielles. J'ai ainsi pu constater leur evolution au cours de cette dernière année.",
    role: "Conception, idées et design de l'application.",
    processus: "Le développement a débuté le 14 Décembre 2025 et est toujours en cours. J'utilise le navigateur au quotidien, ce qui me permet de tester en conditions réelles l'application et d'ajuster les problèmes, que se soient bugs ou fonctionalités manquantes.",
    techniques: "Swift, SwiftUI et AppKit autour de WebKit, sans dépendance externe : un seul petit module en C pour vectoriser des images. Gestionnaire de mots de passe sur le Trousseau, bloqueur de pubs pré-installé, support des extensions Chrome, lecteur PDF, convertisseur de fichiers, traducteur, liseuse, widgets, etc.. Environ 180 fichiers Swift et plus de 700 commits, pour un total de 105 487 lignes de swift, 15 172 lignes de JavaScript, 9001 lignes d'HTML et 3576 lignes de CSS (entre autres).",
    resultat: "Un navigateur que j'utilise vraiment, à ma façon. Prochaine étape : le rendre plus stable et le partager.",
  },];

export type Travail = {
  titre: string;
  categorie: string;
  annee: string;
  cadre: string;
  image: string;
  imageMini: string;
  couleur: string;
  lien?: string; // externe, sinon page interne
  iframe?: string; // site embarqué dans la page
  slug?: string;
  description?: string;
  contexte?: string;
  tags?: string[];
  galerie?: Vue[];
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
  { titre: "Vassil.fr", categorie: "Web · 3D", annee: "2025", cadre: "Stage", image: "/previews/vassil.webp", imageMini: "/previews/mini/vassil.webp", couleur: "hover:bg-c4", slug: "vassil", iframe: "https://vassil.fr", tags: ["Figma", "Blender", "Web"], description: "Refonte du site d'un sculpteur animalier, avec intégration 3D légère.", contexte: "Vassil est un sculpteur animalier. Son site existant ne montrait pas bien ses pièces, et il voulait une vitrine plus moderne, qui fasse sentir le volume de son travail.", role: "Refonte réalisée pour un client : maquettes dans Figma, direction visuelle, modélisation 3D légère et intégration web. Je me suis occupé du design et de la 3D.", processus: "J'ai d'abord listé ce qui comptait pour lui : montrer les sculptures, rassurer les visiteurs et faciliter la prise de contact. Puis j'ai maquetté la structure, testé plusieurs mises en page et validé avec lui une version avant l'intégration.", techniques: "Maquettes Figma, modèles Blender optimisés pour le web, images compressées et accessibilité soignée (contrastes, navigation clavier). Le défi était de garder l'effet 3D sans alourdir les pages.", resultat: "Un site plus lisible qui met ses sculptures en valeur, validé par le client. J'y ai appris à arbitrer entre ce que je trouve beau et ce que le client et le web permettent." },];

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
      iframe: travail.iframe,
      galerie: travail.galerie,
      contexte: travail.contexte ?? travail.description ?? "[Contexte.]",
      role: travail.role ?? "[Mon rôle exact.]",
      processus: travail.processus ?? "[Recherches, pistes, arbitrages.]",
      techniques: travail.techniques ?? "[Détails techniques.]",
      resultat: travail.resultat ?? "[Résultat et ce que j'en retiens.]",
    })),
];

// Audio Nugget n'a pas d'accents
export const sansAccents = (texte: string) => texte.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

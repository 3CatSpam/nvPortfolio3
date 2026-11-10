// Toutes les données du site sont ici : pour ajouter ou modifier un projet, on ne touche qu'à ce fichier.
// Les textes entre [crochets] sont des brouillons à réécrire.

export type Etude = {
  slug: string;
  titre: string;
  categorie: string;
  annee: string;
  resume: string;
  couleur: string; // classe Tailwind du fond de la barre
  tags: string[];
  modele?: string; // fichier .glb (affiché en 3D)
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
    resume: "Chambre à piston rotatif modélisée pièce par pièce et animée : on voit le rotor faire son cycle.",
    couleur: "bg-c3",
    tags: ["Blender", "Méca", "Animation"],
    modele: "/models/wankel.glb",
    contexte: "Le moteur Wankel remplace les pistons par un rotor triangulaire qui tourne dans une chambre ovale. [Pourquoi ce sujet, la commande s'il y en a une.]",
    role: "J'ai tout réalisé seul, de la modélisation à l'animation du cycle du rotor. [Durée, contraintes.]",
    processus: "[Références, blocking, pistes testées et abandonnées, arbitrages.]",
    techniques: "Modélisation de précision, matériaux PBR et animation dans Blender, export glTF pour l'afficher en temps réel sur le site. [Nombre de polygones, poids du fichier.]",
    resultat: "[Ce que j'ai appris, ce que je referais autrement.]",
  },
  {
    slug: "khromapen-ultra",
    titre: "Khromapen Ultra",
    categorie: "3D · Produit",
    annee: "2025",
    resume: "Version luxe du stylo Khromapen : matériaux métalliques, reflets, éclairage studio.",
    couleur: "bg-c1",
    tags: ["Blender", "PBR", "Lighting"],
    image: "/previews/khromapen_ultra.webp",
    contexte: "Variante haut de gamme du stylo Khromapen, un stylo aux couleurs infinies. [Contexte du projet.]",
    role: "[Mon rôle exact.]",
    processus: "[Recherches, pistes, arbitrages.]",
    techniques: "Rendu des matériaux métalliques et des réflexions dans Blender. [Détails techniques.]",
    resultat: "[Résultat, ce que j'en retiens.]",
  },
  {
    slug: "vassil",
    titre: "Vassil.fr",
    categorie: "Web · 3D",
    annee: "2025",
    resume: "Refonte du site d'un sculpteur animalier, avec intégration 3D légère.",
    couleur: "bg-c4",
    tags: ["Figma", "Blender", "Web"],
    image: "/previews/vassil.webp",
    contexte: "Refonte du site vitrine vassil.fr. [La commande, le client.]",
    role: "Design et modélisation 3D. [Rôle exact, travail en équipe ?]",
    processus: "[Recherches, pistes, arbitrages.]",
    techniques: "Concilier esthétique 3D, performances web et accessibilité. [Détails.]",
    resultat: "[Résultat, retours du client.]",
  },
];

export type Travail = {
  titre: string;
  categorie: string;
  annee: string;
  image: string;
  imageMini: string; // vignette légère utilisée pour la miniature et le popup au survol
  couleur: string; // classe Tailwind au survol
  lien?: string; // lien externe : sinon le titre pointe vers une page /projets/[slug]/
  slug?: string; // requis quand il n'y a pas de lien externe
  description?: string; // résumé + contexte de la page /projets/[slug]/
  // Textes optionnels de la page /projets/[slug]/ (sinon un [brouillon] s'affiche)
  tags?: string[];
  role?: string;
  processus?: string;
  techniques?: string;
  resultat?: string;
};

export const travaux: Travail[] = [
  { titre: "ESTRN", categorie: "Typographie", annee: "2025", image: "/previews/ESTRN_typo.webp", imageMini: "/previews/mini/ESTRN_typo.webp", couleur: "hover:bg-c1", slug: "estrn", description: "[Description du projet ESTRN : contexte, rôle, outils.]" },
  { titre: "Château", categorie: "3D · Blender", annee: "2025", image: "/previews/chateau.webp", imageMini: "/previews/mini/chateau.webp", couleur: "hover:bg-c3", slug: "chateau", description: "[Description du projet Château : contexte, rôle, outils.]" },
  { titre: "Eishi", categorie: "Branding · Web", annee: "2025", image: "/previews/eishi.webp", imageMini: "/previews/mini/eishi.webp", couleur: "hover:bg-c2", lien: "http://eishi.free.nf" },
  { titre: "Vision", categorie: "Logo", annee: "2025", image: "/previews/eye.webp", imageMini: "/previews/mini/eye.webp", couleur: "hover:bg-c4", slug: "vision", description: "[Description du logo Vision : contexte, rôle, outils.]" },
  { titre: "Le Monde de l'Urbex", categorie: "Webdocumentaire", annee: "2025", image: "/images/urbex.webp", imageMini: "/images/mini/urbex.webp", couleur: "hover:bg-c6", slug: "urbex", description: "[Description du webdocumentaire Urbex : contexte, rôle, outils.]" },
  { titre: "3CS Browser", categorie: "Logiciel · Swift", annee: "2026", image: "/previews/3cs/starfield.webp", imageMini: "/previews/3cs/mini_starfield.webp", couleur: "hover:bg-c3", slug: "3cs-browser", description: "[Description de 3CS Browser : contexte, rôle, outils.]" },
];

// Toutes les pages /projets/[slug]/ : les projets principaux + les autres travaux sans lien externe,
// qui utilisent le même gabarit (les parties vides restent en [brouillon]).
export const pagesProjet: Etude[] = [
  ...etudes,
  ...travaux
    .filter((travail) => !travail.lien && travail.slug)
    .map((travail) => ({
      slug: travail.slug!,
      titre: travail.titre,
      categorie: travail.categorie,
      annee: travail.annee,
      resume: travail.description ?? "",
      couleur: travail.couleur.replace("hover:", ""),
      tags: travail.tags ?? ["[Outils]"],
      image: travail.image,
      contexte: travail.description ?? "[Contexte.]",
      role: travail.role ?? "[Mon rôle exact.]",
      processus: travail.processus ?? "[Recherches, pistes, arbitrages.]",
      techniques: travail.techniques ?? "[Détails techniques.]",
      resultat: travail.resultat ?? "[Résultat, ce que j'en retiens.]",
    })),
];

// Audio Nugget n'a pas d'accents : on les retire des textes écrits avec cette police.
export const sansAccents = (texte: string) => texte.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

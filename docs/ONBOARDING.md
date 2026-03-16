# Funnel d'Onboarding - FORGE 🏋️‍♂️

Ce document décrit le tunnel d'inscription et d'initialisation du profil utilisateur. L'objectif est de personnaliser l'expérience dès le premier écran tout en maintenant un parcours rapide et engageant.

---

## Vue d'ensemble du Funnel

```
[Écran 1 — Choix du mode]
        |
        ├──> [Mode LIBRE]  ──────────────────────────────> Accès direct au Workout Builder
        |
        └──> [Mode GUIDÉ PAR L'IA]
                    |
                    ├──> [Étape 2 — Profil de base]
                    |         nom · sexe · âge · taille · poids · objectif
                    |
                    ├──> [Étape 3 — Habitudes sportives]
                    |         lieu · équipement · fréquence · historique
                    |                 |
                    |                 └──> Génération du programme par l'IA
                    |
                    └──> [Étape 4 — Ajustement du programme]
                                  révision séance par séance · swap d'exercices
                                  modification séries/reps · confirmation finale
                                          |
                                          └──> Accès au Dashboard
```

---

## Étape 1 — Choix du mode d'entrée

_Premier écran, aucune information n'est encore demandée._

### Objectif

Orienter l'utilisateur vers le parcours qui correspond à son niveau de maturité sportive sans le bloquer avec un formulaire dès le départ.

### Contenu de l'écran

- **Titre :** _"Comment veux-tu démarrer ?"_
- **Option A — Mode Guidé (Coach IA)**
  - Icône : robot / coach
  - Label : _"Je veux être guidé par le coach IA"_
  - Sous-titre : _"Je réponds à quelques questions et le coach crée un programme sur-mesure pour moi."_
- **Option B — Mode Libre**
  - Icône : crayon / outil
  - Label : _"Je crée mon programme moi-même"_
  - Sous-titre : _"J'ai de l'expérience, je veux construire ma routine librement."_

### Règles UX

- Pas de champ de texte libre sur cet écran : ce n'est qu'une bifurcation.
- Le Mode Libre redirige directement vers le **Workout Builder** (cf. MENUS.md — Onglet "MON PROGRAMME").
- Les utilisateurs ayant choisi le Mode Libre peuvent, à tout moment depuis leurs paramètres, activer le Coach IA pour générer un programme.

### Mapping Personas

| Persona | Choix attendu |
| :------ | :------------ |
| **Léo (Débutant)** | Mode Guidé — il cherche à être pris en charge |
| **Sarah (Confirmée)** | Mode Libre — elle veut le contrôle total |

---

## Étape 2 — Profil de base (Mode Guidé uniquement)

_Collecte des données morphologiques et de l'objectif principal. Affiché uniquement si l'utilisateur a choisi le Mode Guidé._

### Objectif

Fournir au moteur IA les données minimales nécessaires pour calculer un programme adapté (volume, fréquence, intensité).

### Champs collectés

| Champ | Type | Détail |
| :---- | :--- | :----- |
| **Prénom** | Texte libre | Utilisé pour personnaliser les messages du coach IA |
| **Sexe** | Sélecteur | Homme · Femme · Non-binaire / Préfère ne pas préciser |
| **Âge** | Numérique | Saisie directe ou molette (16–80 ans) |
| **Taille** | Numérique | cm ou ft/in selon la locale |
| **Poids** | Numérique | kg ou lbs selon la locale |
| **Objectif principal** | Choix unique | Voir liste ci-dessous |

### Options d'objectif principal

- 🔥 **Perdre du poids / Brûler les graisses**
- 💪 **Prendre du muscle (Hypertrophie)**
- ⚡ **Améliorer ma condition physique générale**
- 🏋️ **Augmenter ma force (Powerlifting / Athlétisme)**
- 🧘 **Me remettre en forme après une pause**
- **Saisie de texte personnalisée**

> L'objectif sélectionné déterminera les ratios Séries × Répétitions × Repos proposés par l'IA (ex: 4×6 pour la force, 3×12 pour l'hypertrophie).

### Règles UX

- **Progression pas-à-pas :** Afficher un champ à la fois (style questionnaire conversationnel) pour réduire la charge cognitive, plutôt qu'un formulaire unique.
- **Indicateur de progression :** Barre ou étapes numérotées visibles en haut (ex: "2 / 3").
- L'IA peut s'adresser à l'utilisateur par son prénom dès le prochain écran : _"Super, [Prénom] ! Maintenant, parlons de tes habitudes…"_

---

## Étape 3 — Habitudes sportives (Mode Guidé uniquement)

_Le coach IA mène une "interview" courte pour affiner le programme avant de le générer._

### Objectif

Recueillir le contexte d'entraînement pour que le programme généré soit immédiatement applicable (bon lieu, bon matériel, bonne fréquence).

### Questions posées par le coach IA

Les questions sont posées de façon conversationnelle, une par une, avec des boutons de réponse rapide (chips).

---

#### Question 1 — Lieu d'entraînement préféré

> _"Où est-ce que tu t'entraînes en général ?"_

- 🏢 **En salle de sport** — accès aux machines et aux poids libres.
- 🏠 **À la maison** — espace réduit, matériel limité ou absent.
- 🔄 **Les deux selon les jours** — programme hybride.
- 🌳 **En extérieur** — calisthenics, course, outdoor fitness.

---

#### Question 2 — Équipement disponible

_La question s'adapte selon la réponse précédente._

**Si "En salle"** :
> _"Quelle est ta salle ? As-tu accès à tout le matériel classique ?"_
- ✅ Salle complète (barres, haltères, câbles, machines guidées)
- ⚠️ Salle basique (haltères et quelques appareils)

**Si "À la maison"** :
> _"C'est quoi ton matériel à la maison ?"_ _(sélection multiple)_
- Aucun matériel (poids du corps uniquement)
- Haltères ajustables
- Barre de traction
- Bandes élastiques / TRX
- Banc de musculation
- Cage / Barre olympique
- Kettlebells

**Si "Les deux"** :
> _"Super ! Quels jours es-tu plutôt en salle, et quels jours plutôt à la maison ?"_
- Champ libre ou sélecteur de jours de la semaine.

---

#### Question 3 — Fréquence d'entraînement souhaitée

> _"Combien de fois par semaine veux-tu t'entraîner ?"_

- 2 fois / semaine _(Programme minimaliste, séances complètes)_
- 3 fois / semaine _(Recommandé pour débuter)_
- 4 fois / semaine _(Split Haut/Bas ou Push/Pull)_
- 5 fois / semaine _(Split avancé, pour profils motivés)_
- Je ne sais pas encore _(L'IA suggère 3 par défaut)_

---

#### Question 4 — Durée disponible par séance

> _"Combien de temps as-tu pour chaque séance ?"_

- ⚡ 30 minutes (séance express)
- 🕐 45 minutes (séance standard)
- 🕑 1 heure (séance complète)
- 🕒 Plus d'1h (pas de contrainte de temps)

---

#### Question 5 — Niveau et historique sportif

> _"Comment tu te situes en musculation ?"_

- 🐣 **Débutant** — Je commence tout juste, les mouvements de base sont nouveaux pour moi.
- 🌱 **Intermédiaire** — J'ai déjà pratiqué mais pas de façon régulière ou structurée.
- 💪 **Confirmé** — Je m'entraîne régulièrement depuis plus d'un an avec un vrai programme.

> _Question complémentaire si "Débutant" :_
> _"As-tu des douleurs ou des blessures dont l'IA doit tenir compte ?"_
> — Oui (champ texte libre) · Non

---

#### Question 6 — Zones ou groupes musculaires prioritaires

> _"Sur quoi veux-tu mettre le paquet en priorité ?"_ _(sélection jusqu'à 2 choix)_

- 🫀 Corps complet (Full Body)
- 💪 Haut du corps (Pectoraux, Dos, Épaules, Bras)
- 🦵 Bas du corps (Quadriceps, Ischio-jambiers, Fessiers)
- 🎯 Abdominaux / Gainage
- 🔙 Dos / Posture

---

### Récapitulatif avant génération

Après la dernière question, l'IA affiche un écran récapitulatif :

> _"Voilà ce que j'ai compris, [Prénom] :"_
> - 📍 Lieu : En salle
> - ⏱️ Fréquence : 3 séances / semaine · 45 min
> - 🎯 Objectif : Prise de muscle (Haut du corps)
> - 🏋️ Niveau : Débutant
>
> _"Je génère ton programme sur-mesure. Ça prend quelques secondes…"_

Un bouton **"Modifier une réponse"** permet de revenir en arrière sans repartir de zéro.

---

## Étape 4 — Ajustement du programme (Mode Guidé uniquement)

_Affiché immédiatement après la génération du programme, toujours dans le tunnel d'onboarding. L'utilisateur peut affiner le programme avant de valider définitivement._

### Objectif

Donner à l'utilisateur un sentiment de contrôle et d'appropriation sur son programme, même s'il a choisi le Mode Guidé. Il co-construit avec l'IA plutôt que de subir passivement un plan imposé.

### Contenu de l'écran

L'IA affiche le programme généré dans une vue structurée, modifiable en direct :

> _"Voilà ton programme, [Prénom] ! Tu peux l'ajuster comme tu veux avant de commencer."_

**Structure affichée :**
- Nom du programme (ex: _"Prise de masse Haut du corps – Débutant 3j/sem"_)
- Répartition des séances sur la semaine (ex: Lundi · Mercredi · Vendredi)
- Pour chaque séance : liste des exercices avec Séries × Répétitions

### Actions disponibles en direct

#### Modifier une séance
- Changer le jour d'une séance (glisser-déposer ou sélecteur de jours).
- Renommer une séance (ex: "Séance A" → "Séance Pec/Épaules").

#### Swapper un exercice
- Appuyer sur un exercice pour ouvrir le panneau d'alternatives proposées par l'IA.
- L'IA présente 2 ou 3 substituts compatibles avec le matériel déclaré et le groupe musculaire ciblé.
  > _"Pour tes pectoraux, tu préfères : les Pompes (poids du corps) ou le Développé Couché avec haltères ?"_
- L'utilisateur sélectionne une alternative : le programme se met à jour instantanément.

#### Modifier les paramètres d'un exercice
- Éditer le nombre de séries (ex: 3 → 4).
- Éditer le nombre de répétitions (ex: 10 → 12).
- Un badge **"Modifié"** apparaît sur l'exercice pour distinguer les choix de l'IA des ajustements manuels.

#### Ajouter ou supprimer un exercice
- **Supprimer :** Swipe ou bouton poubelle sur un exercice. L'IA affiche un avertissement si la suppression déséquilibre la séance (ex: _"Attention, tu n'as plus d'exercice pour le dos dans cette séance."_).
- **Ajouter :** Bouton "+ Ajouter un exercice" en bas de chaque séance. L'IA propose des exercices compatibles avec le contexte (matériel, groupe musculaire non encore couvert).

### Règles UX

- **Toutes les modifications sont non destructives** : un bouton **"Réinitialiser la suggestion IA"** permet de revenir à la version originale générée, exercice par exercice ou pour toute la séance.
- L'IA commente les changements importants en temps réel pour éduquer l'utilisateur :
  > _"Tu passes à 4 séries — c'est un bon choix pour maximiser le volume, assure-toi d'avoir assez de récupération entre tes séances."_
- Ne pas surcharger : limiter les options visibles à l'essentiel. Les réglages avancés (tempo, RPE cible, ordre des exercices) restent accessibles via un menu **"Avancé"** discret.

### Confirmation finale

Bouton principal en bas de l'écran :

> **"Je valide ce programme — C'est parti ! 🚀"**

Au clic, toutes les données de l'onboarding sont conservées en mémoire temporaire et l'utilisateur est redirigé vers l'**Étape 5 — Création de compte**.

---

## Étape 5 — Création de compte

_Dernier écran du funnel, commun aux deux modes (Guidé et Libre). L'utilisateur crée son compte uniquement à la fin, une fois qu'il a déjà construit ou validé son programme._

### Objectif

Reporter la friction de l'inscription au maximum pour que l'utilisateur arrive à cette étape avec une forte motivation à continuer (il a déjà un programme qui lui appartient). C'est la mécanique du **"valeur d'abord, compte ensuite"**.

### Contenu de l'écran

> _"Ton programme est prêt. Crée ton compte pour le sauvegarder et suivre ta progression."_

**Options d'inscription :**

| Méthode | Bouton | Détail |
| :------ | :----- | :----- |
| **Google** | `Continuer avec Google` | OAuth 2.0 via Supabase Auth |
| **Apple** | `Continuer avec Apple` | Obligatoire sur iOS (règles App Store) |
| **Email** | `Continuer avec mon email` | Saisie email + mot de passe ou lien magique |

### Flux Email (si sélectionné)

1. Champ **Email** + champ **Mot de passe** (min. 8 caractères, indicateur de robustesse).
2. Bouton **"Créer mon compte"**.
3. L'utilisateur reçoit un email de confirmation. Il peut cependant accéder immédiatement à l'application (vérification différée, bannière de rappel non intrusive).

_Alternative :_ Proposer un **lien magique** (magic link) — l'utilisateur entre seulement son email et reçoit un lien de connexion directe, sans mot de passe.

### Règles UX

- **Pas de collecte redondante :** le prénom saisi à l'Étape 2 est pré-rempli dans le profil créé. L'utilisateur ne ressaisit rien.
- **Aucune interruption avant cette étape :** aucun écran de login, wall ou paywall ne doit apparaître pendant les étapes 1 à 4.
- **Données temporaires préservées :** si l'utilisateur quitte l'application avant cette étape, les réponses sont stockées localement et restaurées à la réouverture.
- Afficher les logos officiels Google et Apple pour rassurer sur la sécurité.
- Lien **"Politique de confidentialité"** et **"CGU"** visibles sous les boutons (petite typographie, non intrusif).

### Après la création du compte

1. Les données collectées (profil + préférences + programme ajusté) sont persistées en base de données.
2. L'utilisateur est redirigé vers l'onglet **"AUJOURD'HUI"** avec un message de bienvenue du coach.

> _"Ton compte est créé et ton programme est sauvegardé, Léo ! Ta première séance t'attend. Bienvenue dans la forge. 🔥"_

---

## Post-Onboarding — Accès au Dashboard

Une fois le compte créé à l'Étape 5 :

1. L'onglet **"AUJOURD'HUI"** affiche la première séance planifiée.
2. Un message de bienvenue personnalisé du coach IA est visible.
3. Le programme complet est accessible dans l'onglet **"MON PROGRAMME"**.

---

## Résumé des données collectées par étape

| Étape | Données | Stockage |
| :---- | :------- | :------- |
| Étape 1 | Mode choisi (Guidé / Libre) | Local (temporaire) |
| Étape 2 | Prénom, sexe, âge, taille, poids, objectif | Local (temporaire) |
| Étape 3 | Lieu, équipement, fréquence, durée, niveau, zones cibles | Local (temporaire) |
| Étape 4 | Ajustements manuels (exercices swappés, séries/reps modifiés) | Local (temporaire) |
| Étape 5 | Création du compte (email / Google / Apple) | `auth.users` → `profiles` + `programs` + `program_exercises` |

---

# Installation du projet

```
git clone https://github.com/Willix-IT/fastory-project.git
cd Backend
npm i
npm start
```
**Assurez vous de lancer le Back d'abord, il doit tourner sur le port 3000**

**Dans un autre terminal**
```
cd Frontend
npm i
npm start
```


## Objectifs de mission

### Etape 1

#### Obligatoire

- Création d'un back-end en Node permettant de récupérer les données de SWAPI <br /> ![Done](https://img.shields.io/badge/Fait-green)
  - Implémentation d'un endpoint recherchant tout type de données sur la base de données. ![Done](https://img.shields.io/badge/Fait-green)
  - L'API devra s'adapter aux besoins de la deuxième étape. ![Done](https://img.shields.io/badge/Fait-green)

#### Optionnel

- Système d'authentification qui doit vérifier ![Done](https://img.shields.io/badge/Fait-green)

  - l'utilisateur: `Luke`
  - password: `DadSucks`

  **(petite précision, comme je ne savais pas la façon dont cela devait être implémenté, j'ai simplement protégé les routes avec une Basic Auth. Côté Front il n'y a rien à faire car les identifiants sont directement dans le code. Cependant si vous essayez de faire une requête au back depuis par exemple Postman, cela ne fonctionnera pas sans l'authentification)** <br />

- L'utilisation d'[HAPI](https://hapi.dev/) car les développeur de la rébellion l'apprécie. ![Done](https://img.shields.io/badge/Fait-green)

### Etape 2

#### Obligatoire

- Création d'un front-end en ReactJS permettant de rechercher facilement sur le back-end créé au préalable. <br/> ![Done](https://img.shields.io/badge/Fait-green)
  - Création d'un champ de recherche ![Done](https://img.shields.io/badge/Fait-green)
  - Création d'un affichage par liste des résultats avec le nom ![Done](https://img.shields.io/badge/Fait-green)
  - Création d'une fiche détaillant le résultat où sera présentée les informations de base ![Done](https://img.shields.io/badge/Fait-green)

#### Optionnel

- Faire des fiches ultra détaillées

  - Afficher des fiches differentes en fonction du type de donnée ![Almost Done](https://img.shields.io/badge/Fait-yellow)

  **Fait en partie, je ne sais pas ce que vous attendez d'une fiche différente par type de résultat, néanmoins les champs sont différents pour chaque résultat**

- Implémentation d'un router ![Done](https://img.shields.io/badge/Fait-green)

  - Le router doit permettre d'accèder à n'importe quelle fiche ![Not Sure](https://img.shields.io/badge/Pas_Sur-orange)

  **Point non compris de mon côté, je ne sais pas s'il sera considéré comme fait, je n'ai pas pu comprendre ce qui était demandé.**

  - Il peut permettre d'accèder directement au résultat d'une recherche ![Done](https://img.shields.io/badge/Fait-green)

- Implémentation d'un système de filtre ![Done](https://img.shields.io/badge/Fait-green)
  - Mettre en place un système de filtre par type de donnée (personnage, vaisseau, ...) ![Done](https://img.shields.io/badge/Fait-green)
- Mise en place d'un système d'authentification avec l'API ![Done](https://img.shields.io/badge/Fait-green)
- Utilisation de Redux ![Done](https://img.shields.io/badge/Fait-green)

**Fait. J'ai privilégié l'utilisation des contextes au redux, comme je suis beaucoup plus familier avec**

- Utilisation du fonctionnel et de l'immutabilité ![Almost Done](https://img.shields.io/badge/Fait-yellow)

**Je pense que cela doit être bon ?**

- Un debounce pour la recherche ![Done](https://img.shields.io/badge/Fait-green)
- Mise en place de CSS modules ![Not Done](https://img.shields.io/badge/Pas_Fait-red)

**Comme je suis passé par MUI pour le style, je n'ai pas créé de modules CSS**

#### Bonus

Malgré les tensions entre l'Empire et le peuple Wookiee, il est étonnant de trouver dans leur base de données un moyen de traduire dans cette langue.

- Permettre d'afficher les résultats en Wookiee ![Done](https://img.shields.io/badge/Fait-green)

## Objectifs de mission

### Etape 1

#### Obligatoire
 - Création d'un back-end en Node permettant de récupérer les données de SWAPI <br /> **Fait**
   - Implémentation d'un endpoint recherchant tout type de données sur la base de données. **Fait**
   - L'API devra s'adapter aux besoins de la deuxième étape. **Fait**


#### Optionnel
 - Système d'authentification qui doit vérifier 
    - l'utilisateur: `Luke`
    - password: `DadSucks`
    **Fait (petite précision, comme je ne savais pas la façon dont cela devait être implémenter, j'ai simplement protégé les routes avec une Basic Auth. Côté Front il n'y a rien à faire car les identifiants sont directement dans le code. Cependant si vous essayez de faire une requête au back depuis par ex Postman, cela ne fonctionnera pas sans l'authentification)**
 - L'utilisation d'[HAPI](https://hapi.dev/) car les développeur de la rébellion l'apprécie. **Fait**


### Etape 2
#### Obligatoire
 - Création d'un front-end en ReactJS permettant de rechercher facilement sur le back-end créé au préalable. <br/> **Fait**
   - Création d'un champ de recherche **Fait**
   - Création d'un affichage par liste des résultats avec le nom **Fait**
   - Création d'une fiche détaillant le résultat où sera présentée les informations de base **Fait**

#### Optionnel
 - Faire des fiches ultra détaillées
   - Afficher des fiches differentes en fonction du type de donnée **Fait en partie, je ne sais pas ce que vous attendez d'une fiche différente par type de résultat, néanmoins les champs sont différents pour chaque résultat**
 - Implémentation d'un router **Fait**
   - Le router doit permettre d'accèder à n'importe quelle fiche **Point non compris de mon côté, je ne sais pas s'il sera considéré comme fait, je n'ai pas pu comprendre ce qui était demandé.**
   - Il peut permettre d'accèder directement au résultat d'une recherche **Fait**
 - Implémentation d'un système de filtre **Fait**
   - Mettre en place un système de filtre par type de donnée (personnage, vaisseau, ...) **Fait**
 - Mise en place d'un système d'authentification avec l'API **Fait**
 - Utilisation de Redux **Fait. J'ai privilégié l'utilisation des contextes au redux, comme je suis beaucoup plus familier avec**
 - Utilisation du fonctionnel et de l'immutabilité **Je pense que cela doit être bon ?**
 - Un debounce pour la recherche **Fait**
 - Mise en place de CSS modules **Comme je suis passé par MUI pour le style, je n'ai pas créé de modules CSS**

#### Bonus
Malgré les tensions entre l'Empire et le peuple Wookiee, il est étonnant de trouver dans leur base de données un moyen de traduire dans cette langue.

 - Permettre d'afficher les résultats en Wookiee **Fait**
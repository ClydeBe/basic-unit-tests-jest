Clyde-Borel KUIATE BOGNE


# Basic unit testing with Jest

## Installer NodeJS

[NodeJS](https://nodejs.org/en/) est un moteur JavaScript externe (c-à-d fonctionnant en dehors d'un navigateur web).
Il est notamment utilisé pour écrire des scripts et développer des serveurs d'application.
Il s'accompagne de [npm](https://www.npmjs.com/), le principal gestionnaire de dépendances utilisé par la communauté JS.

Plutôt que d'installer  directement NodeJS, il est recommandé d'installer un outil de gestion de versions.
Ce type d'outil permet d'installer aisément plusieurs versions de NodeJS et de passer de l'une à l'autre (pour tester le bon fonctionnement d'un projet sur une version antérieure ou pour être compatible avec certaines dépendances.)

- Pour Linux/Mac, utiliser [nvm](https://github.com/nvm-sh/nvm)
- Pour Windows, utiliser [nvm-windows](https://github.com/coreybutler/nvm-windows)

## Installer Jest

La configuration initiale du projet (renseignée dans le fichier `package.json`) liste les différentes dépendances nécessaires pour son fonctionnement et son développement.
Dans notre cas, seul [Jest](https://jestjs.io/) est nécessaire.

À la racine du projet, exécuter la commande suivante pour l'installer :

```
npm install
```

## Lancer les tests

Une fois Jest installé, il ne vous reste plus qu'à exécuter la commande suivante pour lancer les tests :

```
npm test
```

# Générateur de Groupes Aléatoires

Cette application permet aux enseignants de créer facilement des groupes aléatoires d'élèves pour des travaux de groupe, des activités ou des projets collaboratifs.

## Fonctionnalités

- Création de groupes aléatoires à partir d'une liste d'élèves
- Personnalisation du nombre d'élèves par groupe
- Interface intuitive et conviviale
- Export des groupes en format PDF ou CSV (coming soon)
- Sauvegarde des listes d'élèves pour une utilisation ultérieure (coming soon)

## Installation

1. Clonez le repository :

```bash
git clone https://github.com/votre-username/generateur-groupes.git
cd generateur-groupes
```

2. Installez les dépendances :

```bash
npm install
# ou
yarn install
```

## Utilisation

1. Lancez l'application :

```bash
npm run dev
# ou
yarn dev
```

2. Accédez à l'application dans votre navigateur à l'adresse `http://localhost:5173`

### Guide d'utilisation rapide

1. Définissez le nombre d'élèves souhaité par groupe
2. Coller un liste d'élève dans le champ prévu à cet effet
3. Cliquez sur "Générer les groupes"
4. Exportez ou partagez les groupes générés (coming soon)

## Configuration

Pour personnaliser les paramètres de l'application, modifiez le fichier `.env` :

```env
VITE_MAX_GROUP_SIZE=6
VITE_MIN_GROUP_SIZE=2
```

## Développement

### Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

### Structure du projet

```
src/
├── components/    # Composants React
├── hooks/        # Hooks personnalisés
├── utils/        # Fonctions utilitaires
└── types/        # Types TypeScript
```

### Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Crée une version de production
- `npm run test` : Lance les tests
- `npm run lint` : Vérifie le code avec ESLint

## Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

### Guide de contribution

- Respectez les conventions de code existantes
- Ajoutez des tests pour les nouvelles fonctionnalités
- Mettez à jour la documentation si nécessaire
- Vérifiez que tous les tests passent avant de soumettre une PR

## Auteur

- [Raphael Sanchez](https://www.linkedin.com/in/raphael-sanchez-design/)

## Support

Si vous rencontrez des problèmes ou avez des questions :

- Ouvrez une issue sur GitHub
- Contactez l'équipe de développement à [hello@raphaelsanchez.design]

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

# Task App 📋

Task App est une application de gestion de tâches développée avec **React Native** et **Expo**. Elle permet aux utilisateurs de créer, filtrer et gérer leurs tâches quotidiennes.

---

## Fonctionnalités ✨

- **Ajouter des tâches** : Ajoutez une tâche avec une catégorie spécifique.
- **Filtrer les tâches** : Filtrez les tâches par catégorie (Work, Personal, Shopping, etc.).
- **Supprimer des tâches** : Supprimez les tâches terminées ou non nécessaires.
- **Interface intuitive** : Une interface utilisateur simple et moderne.

---

## Installation 🚀

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/nasrallah49/task-manager-app.git
   cd task-app
 Installez les dépendances :
 2.npm install
 3.Lancez l'application avec Expo 
  `bash : expo start

## Structure du projet 📂
```bash
1.:
task-app/
├── app/                     # Gestion des routes et des écrans
│   ├── (tabs)/              # Navigation par onglets
│   │   ├── _layout.tsx      # Layout principal des onglets
│   │   ├── index.tsx        # Écran principal (Home)
│   │   ├── explore.tsx      # (Supprimable) Onglet Explore
│   │   └── not-found.tsx    # (Supprimable) Page 404
│   ├── components/          # Composants réutilisables
│   │   ├── TaskInput.tsx    # Composant pour ajouter une tâche
│   │   ├── TaskList.tsx     # Composant pour afficher les tâches
│   │   └── ...              # Autres composants
├── assets/                  # Images et ressources
├── constants/               # Constantes globales (ex. couleurs)
├── hooks/                   # Hooks personnalisés
├── Context/                 # Gestion du contexte (ex. tâches)
├── package.json             # Dépendances et scripts
├── app.json                 # Configuration Expo
└── README.md                # Documentation du projet

## INFO
```bash
2.:
Développé par Nasserallah Khadli
Challenge pour le poste de Mobile Developer.


# Task App 📋

Task App est une application de gestion de tâches développée avec **React Native** et **Expo**. Elle permet aux utilisateurs de créer, filtrer et gérer leurs tâches quotidiennes.

---

## ✨ Fonctionnalités

- **Ajouter des tâches** : Ajoutez une tâche avec une catégorie spécifique.
- **Filtrer les tâches** : Filtrez les tâches par catégorie (Work, Personal, Shopping, etc.).
- **Supprimer des tâches** : Supprimez les tâches terminées ou non nécessaires.
- **Interface intuitive** : Une interface utilisateur simple et moderne.

---

## 🚀 Installation

Suivez ces étapes pour installer et exécuter l'application localement :

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/nasrallah49/task-manager-app.git
   cd task-app
*Installez les dépendances :
  npm install

## 📂 Structure du projet
```bash
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
├── [package.json](http://_vscodecontentref_/1)             # Dépendances et scripts
├── [app.json](http://_vscodecontentref_/2)                 # Configuration Expo
└── [README.md](http://_vscodecontentref_/3)                # Documentation du projet

##🛠️ Utilisation
```bash
Ajouter une tâche :

Remplissez le champ "What's for the day?".
Sélectionnez une catégorie dans le menu déroulant.
Cliquez sur "Add Task".
Filtrer les tâches :

Utilisez le menu déroulant "Filter" pour afficher les tâches par catégorie.
Supprimer une tâche :

Cliquez sur une tâche pour la marquer comme terminée ou la supprimer.
##🛠️ Technologies utilisées
```bash
React Native : Framework pour le développement mobile.
Expo : Plateforme pour simplifier le développement React Native.
TypeScript : Typage statique pour JavaScript.
React Context : Gestion de l'état global.

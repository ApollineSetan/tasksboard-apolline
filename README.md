# Séquence 3 – Lazy Loading & Composants dynamiques

---

## 1. Qu’est-ce que le Lazy Loading ?

Le lazy loading permet de charger une partie de l’application uniquement lorsqu’elle est nécessaire, et non dès le démarrage.

### Avantages
- Réduction du temps de chargement initial  
- Amélioration des performances globales  

En Angular, le lazy loading est généralement mis en place via le Router, en chargeant des modules ou des features à la demande.

---

## 2. Organisation d’une application par features

Une application Angular est souvent structurée par fonctionnalités plutôt que par type de fichiers.

Le dossier `features` contient des blocs indépendants de l’application.

### Cette organisation rend le code :
- Plus lisible  
- Plus facile à maintenir  
- Compatible avec le lazy loading  

---

## 3. Qu’est-ce qu’un composant dynamique ?

`ViewContainerRef` représente un emplacement dans le template où Angular peut insérer dynamiquement un composant.

Cela permet :
- Un template plus simple  
- Une interface flexible et dynamique  

### Fonctionnement
1. Placer une balise avec une référence (`#container`) dans le HTML  
2. Récupérer cette référence avec `@ViewChild`  
3. Vider le container si nécessaire avec `clear()`  
4. Créer le composant dynamiquement avec `createComponent()`

---

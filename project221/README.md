# KaayNoss - Restaurant Sénégalais à Dakar

Site web professionnel pour le restaurant sénégalais KaayNoss situé à Dakar.

## 🚀 Déploiement sur Render

### Étapes de déploiement :

1. **Préparer le repository GitHub :**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - KaayNoss Restaurant"
   git branch -M main
   git remote add origin https://github.com/VOTRE_USERNAME/kaaynoss-restaurant.git
   git push -u origin main
   ```

2. **Configurer Render :**
   - Connectez-vous sur [render.com](https://render.com)
   - Cliquez sur "New +" → "Static Site"
   - Connectez votre repository GitHub
   - Configurez les paramètres :
     - **Build Command:** `npm install && npm run build`
     - **Publish Directory:** `dist`
     - **Node Version:** `18` (ou plus récent)

3. **Variables d'environnement (optionnel) :**
   - Aucune variable d'environnement requise pour cette version

4. **Déploiement automatique :**
   - Render déploiera automatiquement à chaque push sur la branche main

## 📸 Modification des Images

### Méthode simple - Fichier centralisé :

Toutes les images sont configurées dans le fichier `src/data/images.ts`. 

**Pour changer une image :**
1. Ouvrez `src/data/images.ts`
2. Remplacez l'URL de l'image souhaitée
3. Sauvegardez le fichier

**Exemple :**
```typescript
// Changer l'image du Ceebu Jën
plats: {
  ceebujen: "NOUVELLE_URL_IMAGE_ICI",
  // ...
}
```

### Structure des images :
- **hero** : Images principales (fond, restaurant)
- **plats** : Images des plats principaux
- **entrees** : Images des entrées (ndékki)
- **desserts** : Images des desserts
- **boissons** : Images des boissons
- **chefs** : Photos des chefs
- **galerie** : Images de la galerie du restaurant

## 🛠️ Développement Local

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualisation du build
npm run preview
```

## 📱 Fonctionnalités

- ✅ Page d'accueil avec présentation du restaurant
- ✅ Menu interactif avec catégories (ndékki, plats, desserts, boissons)
- ✅ Système de réservation de table
- ✅ Système de commande en ligne avec panier
- ✅ Formulaire de contact
- ✅ Authentification utilisateur (inscription/connexion)
- ✅ Design responsive pour tous les appareils
- ✅ Prix en FCFA adaptés au marché sénégalais
- ✅ Localisation Dakar avec coordonnées locales

## 🎨 Technologies Utilisées

- **Frontend :** React 18 + TypeScript
- **Styling :** Tailwind CSS
- **Icons :** Lucide React
- **Routing :** React Router DOM
- **Build Tool :** Vite
- **Déploiement :** Render

## 📞 Support

Pour toute question technique ou modification, contactez l'équipe de développement.

---

**KaayNoss** - Votre restaurant sénégalais authentique au cœur de Dakar 🇸🇳
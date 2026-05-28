# Deployment Guide

Complete step-by-step instructions for deploying Fadi Al Banna's Engineering Portfolio to GitHub Pages.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [GitHub Repository Setup](#github-repository-setup)
3. [Local Development](#local-development)
4. [Build & Test](#build--test)
5. [Deploy to GitHub Pages](#deploy-to-github-pages)
6. [Custom Domain Setup](#custom-domain-setup-optional)
7. [Troubleshooting](#troubleshooting)

## Prerequisites

Before deploying, ensure you have:

- **Node.js 16+** - Download from [nodejs.org](https://nodejs.org/)
- **Git** - Download from [git-scm.com](https://git-scm.com/)
- **GitHub Account** - Sign up at [github.com](https://github.com/)

### Verify Installation

```bash
node --version
npm --version
git --version
```

All three commands should return version numbers.

## GitHub Repository Setup

### Step 1: Create a New Repository

1. Go to [github.com/new](https://github.com/new)
2. **Repository name**: `portfolio`
3. **Description**: "Professional engineering portfolio for Fadi Al Banna"
4. **Visibility**: Choose `Public` or `Private`
5. **Do NOT initialize** with README, .gitignore, or license
6. Click **Create repository**

### Step 2: Copy Repository URL

After creation, you'll see the repository URL. Copy the HTTPS URL (looks like):

```
https://github.com/YOUR-USERNAME/portfolio.git
```

## Local Development

### Step 1: Navigate to Project

```bash
cd "c:/Users/TOSHIBA/Desktop/Portfolio"
```

### Step 2: Initialize Git

```bash
git init
git add .
git commit -m "Initial commit: Add portfolio website"
```

### Step 3: Add Remote Repository

Replace `YOUR-USERNAME` and `YOUR-REPO` with your GitHub details:

```bash
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

You'll be prompted for GitHub credentials. Use:

- **Username**: Your GitHub username
- **Password**: Your GitHub personal access token (not your account password)

**To create a personal access token:**

1. Go to [github.com/settings/tokens](https://github.com/settings/tokens)
2. Click "Generate new token"
3. Select scopes: `repo`, `public_repo`, `admin:repo_hook`
4. Copy the token and use it as your password

### Step 4: Install Dependencies

```bash
npm install
```

This installs all required packages (React, Vite, Tailwind, etc.).

## Build & Test

### Step 1: Test Locally

```bash
npm run dev
```

Opens at `http://localhost:5173`

Test:

- [ ] All sections render correctly
- [ ] Navigation works
- [ ] Responsive design on mobile (F12 → Device toolbar)
- [ ] Project filtering works
- [ ] Modals open/close properly
- [ ] Links work

Press `Ctrl+C` to stop the dev server.

### Step 2: Build for Production

```bash
npm run build
```

Creates optimized files in `dist/` folder.

### Step 3: Preview Production Build

```bash
npm run preview
```

Previews the production build at `http://localhost:4173`

Verify everything looks correct, then press `Ctrl+C` to stop.

## Deploy to GitHub Pages

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Settings → Pages
3. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: Select `main`
   - **Folder**: Select `/root`
4. Click Save

### Step 2: Deploy the Site

```bash
npm run deploy
```

This command:

1. Builds the project
2. Creates a `gh-pages` branch
3. Pushes the `dist/` folder to GitHub Pages

### Step 3: Wait for GitHub Pages to Activate

GitHub Pages takes 1-2 minutes to become active.

1. Go to your repository Settings → Pages
2. Wait for the green checkmark and URL
3. The site will be available at:

```
https://YOUR-USERNAME.github.io/portfolio
```

### Step 4: Verify Deployment

1. Open the URL in your browser
2. Test all functionality:
   - [ ] Navigation works
   - [ ] Projects display correctly
   - [ ] Images load properly
   - [ ] Links work (GitHub, LinkedIn, etc.)
   - [ ] Mobile responsive
   - [ ] Modals function correctly

## Custom Domain Setup (Optional)

If you have a custom domain (e.g., `fadi-albanna.com`):

### Step 1: Update Vite Configuration

Edit `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: "/", // Change from '/portfolio/'
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
```

### Step 2: Configure GitHub Pages

1. Go to Settings → Pages
2. Under "Custom domain":
   - Enter your domain: `fadi-albanna.com`
   - Click Save

GitHub creates a CNAME file automatically.

### Step 3: Update DNS Records

In your domain registrar's DNS settings, add:

**For apex domain (fadi-albanna.com):**

```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For www subdomain (www.fadi-albanna.com):**

```
Type: CNAME
Name: www
Value: YOUR-USERNAME.github.io
```

### Step 4: Redeploy

```bash
npm run deploy
```

DNS changes can take 24-48 hours to propagate.

## Updating Content

After deploying, to make changes:

### 1. Edit Content (JSON Files)

```bash
# Edit any file in src/data/
# Example: Update projects in src/data/projects.json
```

### 2. Commit Changes

```bash
git add .
git commit -m "Update projects"
git push
```

### 3. Rebuild & Deploy

```bash
npm run deploy
```

Site updates automatically within 2-3 minutes.

## Automatic Deployments (Optional)

If you enabled GitHub Actions workflow (`.github/workflows/deploy.yml`):

The site **automatically redeploys** when you push to `main` branch.

No need to run `npm run deploy` manually anymore!

Just:

```bash
git add .
git commit -m "Update content"
git push
```

GitHub Actions handles the rest.

## Troubleshooting

### "403 Forbidden" Error During Deploy

**Problem**: GitHub rejects your push
**Solution**:

```bash
# Use a personal access token (not your password)
# Generate at: https://github.com/settings/tokens
# Scopes: repo, public_repo, admin:repo_hook
```

### Site Shows 404 on Custom Domain

**Problem**: Custom domain not configured correctly
**Solution**:

1. Verify DNS records are correct
2. Wait 24-48 hours for DNS propagation
3. Check GitHub Pages settings for CNAME file

### Images Not Loading

**Problem**: Images show broken image icon
**Solution**:

1. Ensure images are in `src/assets/` folder
2. Check image paths in JSON files
3. For GitHub Pages: paths should start with `/portfolio/` (if subdirectory)
4. For custom domain: paths should be `/assets/...`
5. Rebuild: `npm run build && npm run deploy`

### Build Fails During Deploy

**Problem**: `npm run deploy` fails
**Solution**:

```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install

# Try building again
npm run build

# Try deploying again
npm run deploy
```

### Site Content Not Updated

**Problem**: GitHub Pages shows old content
**Solution**:

1. Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Check that `gh-pages` branch was updated
4. Wait 2-3 minutes for GitHub Pages to rebuild

### Responsive Design Looks Wrong on Mobile

**Problem**: Images or layout broken on mobile
**Solution**:

1. Test in Chrome DevTools (F12)
2. Toggle device toolbar
3. Test different screen sizes
4. Ensure images are responsive

## Performance Tips

### Optimize Images

Before adding to portfolio:

```bash
# Use online tools to compress images
# - tinypng.com (PNG/JPG)
# - svgomg.net (SVG)
# Reduces file size by 50-80%
```

### Check Performance

```bash
npm run build
npm run preview
# Open in Chrome DevTools → Lighthouse
# Run performance audit
```

Target scores: 90+ for all metrics

### Monitor Build Size

```bash
npm run build
# Check dist/ folder size
# Should be < 1MB
```

## Maintenance Checklist

Regular maintenance tasks:

- [ ] **Monthly**: Review and update projects
- [ ] **Quarterly**: Update skills and certifications
- [ ] **Annually**: Update work experience
- [ ] **As needed**: Update contact information
- [ ] **Bi-weekly**: Commit changes to GitHub

## Support Resources

- **Vite Documentation**: https://vitejs.dev/
- **React Documentation**: https://react.dev/
- **Tailwind CSS**: https://tailwindcss.com/
- **GitHub Pages Help**: https://docs.github.com/en/pages
- **Framer Motion**: https://www.framer.com/motion/

## Common Commands Reference

```bash
# Development
npm run dev              # Start local dev server
npm run build            # Build for production
npm run preview          # Preview production build
npm run deploy           # Build and deploy to GitHub Pages

# Git
git add .               # Stage all changes
git commit -m "msg"     # Commit changes
git push                # Push to GitHub
git log                 # View commit history
```

---

**Questions?** Refer to the main README.md for content customization help.

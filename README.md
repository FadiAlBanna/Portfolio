# Fadi Al Banna - Engineering Portfolio

A professional engineering portfolio website for Fadi Al Banna, showcasing expertise in mechatronics, robotics, embedded systems, automation, and AI integration.

## Features

✨ **Modern & Professional Design**

- Clean, minimalist interface with professional color scheme
- Responsive design optimized for desktop, tablet, and mobile
- Smooth animations and transitions using Framer Motion
- Light mode aesthetic suitable for professional context

🚀 **Key Sections**

- **Hero Section** - Eye-catching introduction with CTA buttons
- **About** - Professional biography and specializations
- **Projects** - Featured projects with search/filter functionality
- **Skills** - Categorized technical skills with icons
- **Experience** - Professional timeline of work history
- **Certifications** - Credentials and professional certifications
- **Resume** - CV download section
- **Contact** - Multiple contact methods and social links

🔧 **Technical Features**

- Project cards with GitHub and live demo links
- Full-screen project modals with detailed descriptions
- Certificate management system with preview modals
- Search and filter projects by technology/tags
- Sticky navigation with smooth scroll anchors
- Mobile-responsive hamburger menu

## Tech Stack

- **React 18** - UI framework
- **Vite 5** - Build tool and dev server
- **TailwindCSS 3** - Utility-first CSS framework
- **Framer Motion 10** - Animation library
- **JavaScript** - Language
- **gh-pages** - GitHub Pages deployment

## Installation & Setup

### Prerequisites

- Node.js 16+ and npm

### Local Development

1. **Clone or navigate to the project directory**

   ```bash
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```
   Output will be in the `dist/` directory

## Customization Guide

### Editing Content

All content is managed through JSON files in the `src/data/` directory. No coding knowledge is required to update content.

#### 1. Update Social Links

**File:** `src/data/socialLinks.json`

```json
{
  "email": "your.email@example.com",
  "linkedin": "https://linkedin.com/in/your-profile",
  "github": "https://github.com/your-username",
  "whatsapp": "+1-234-567-8900"
}
```

#### 2. Add/Edit Projects

**File:** `src/data/projects.json`

```json
{
  "id": "1",
  "title": "Project Name",
  "shortDescription": "Brief description (shown in grid)",
  "fullDescription": "Detailed description (shown in modal)",
  "technologies": ["Tech1", "Tech2", "Tech3"],
  "tags": ["Category1", "Featured"],
  "imageUrl": "/portfolio/assets/projects/image.jpg",
  "videoUrl": null,
  "githubUrl": "https://github.com/...",
  "liveUrl": "https://demo.com",
  "featured": true
}
```

**Notes:**

- Set `featured: true` to show at the top of the projects grid
- Tags are used for filtering - can be any string
- Image URLs can be external (Unsplash, etc.) or local paths
- Leave `videoUrl`, `githubUrl`, or `liveUrl` as `null` if not applicable

#### 3. Add/Edit Skills

**File:** `src/data/skills.json`

```json
{
  "categories": [
    {
      "name": "Category Name",
      "skills": [
        { "name": "Skill Name", "icon": "emoji" },
        { "name": "Another Skill", "icon": "🤖" }
      ]
    }
  ]
}
```

**Notes:**

- Use emojis for icons (or add Font Awesome later)
- Skills within each category are displayed in a grid
- Add new category objects to expand skill sections

#### 4. Add/Edit Work Experience

**File:** `src/data/experience.json`

```json
{
  "id": "1",
  "position": "Job Title",
  "company": "Company Name",
  "startDate": "2023-01",
  "endDate": null,
  "description": "Job description and responsibilities",
  "technologies": ["Tech1", "Tech2"]
}
```

**Notes:**

- Use `YYYY-MM` format for dates
- Set `endDate` to `null` for current position
- List relevant technologies used in that role

#### 5. Add Certifications

**File:** `src/data/certifications.json`

```json
{
  "id": "1",
  "title": "Certification Name",
  "organization": "Issuing Organization",
  "issueDate": "2023-08-15",
  "imageUrl": "/portfolio/assets/certificates/cert-image.jpg",
  "pdfUrl": "/portfolio/assets/certificates/cert.pdf",
  "url": "https://verification-link.com"
}
```

**Notes:**

- Use `YYYY-MM-DD` format for dates
- PDFs and images go in `src/assets/certificates/`
- Leave `url` as `null` if no verification link exists

### Updating Profile Information

#### Hero Section

Edit the text in `src/components/sections/HeroSection.jsx`:

- Line 32: Professional tagline
- Line 43: Introduction paragraph

#### About Section

Edit the text in `src/components/sections/AboutSection.jsx`:

- Update specializations and descriptions as needed

#### Resume Section

Replace or link your actual CV:

1. Place your CV PDF in `src/assets/resume/`
2. Update the download link in `src/components/sections/ResumeSection.jsx`

### Adding Project Images & Certificates

1. **For Projects:**
   - Add image files to `src/assets/projects/`
   - Update the `imageUrl` in `projects.json` to the local path
   - Example: `"/portfolio/assets/projects/my-project.jpg"`

2. **For Certificates:**
   - Add certificate images/PDFs to `src/assets/certificates/`
   - Update paths in `certifications.json`
   - Example: `"/portfolio/assets/certificates/cert-name.pdf"`

### Styling & Colors

The color scheme is defined in `tailwind.config.js`. The primary color palette uses a professional blue:

```javascript
primary: {
  50: '#f5f7fa',
  100: '#eaeef6',
  // ... more shades
  900: '#1e2d4a'
}
```

To change the color scheme:

1. Modify the `primary` colors in `tailwind.config.js`
2. All components will automatically use the new colors

### Animations

Animations are controlled in two places:

1. **Framer Motion animations** (smooth scroll reveals, hover effects)
   - Defined in component files
   - Can be adjusted in `useInView` hook and `AnimatedSection` component

2. **CSS animations** (custom transitions)
   - Defined in `src/styles/globals.css`
   - Modify durations and easing as needed

## Deployment

### Deploy to GitHub Pages

This portfolio is optimized for GitHub Pages deployment to a subdirectory (`username.github.io/portfolio`).

#### Prerequisites

- GitHub repository (can be public or private)
- Git installed locally

#### Steps

1. **Initialize Git (if not already done)**

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Add portfolio website"
   ```

2. **Add remote repository**

   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Select `main` branch and `/root` folder
   - Wait a few minutes for deployment

4. **Deploy the site**

   ```bash
   npm run deploy
   ```

5. **View your site**
   - URL will be: `https://YOUR-USERNAME.github.io/portfolio`
   - This may take a few minutes to become active

#### Custom Domain (Optional)

If you have a custom domain:

1. Update `vite.config.js`:

   ```javascript
   base: '/',  // Change from '/portfolio/'
   ```

2. In GitHub Pages settings:
   - Add your custom domain
   - Create a CNAME file with your domain

3. Update DNS records with your registrar

### Deploy to Other Platforms

The built `dist/` folder can be deployed to any static hosting service:

- **Vercel**: Connect GitHub repo, auto-deploys
- **Netlify**: Drag & drop `dist/` folder or connect GitHub
- **AWS S3**: Upload `dist/` contents to S3 bucket
- **Custom Server**: Copy `dist/` to web server

## Development Workflow

### Add a New Project

1. Create project folder: `src/assets/projects/project-name/`
2. Add project images
3. Add entry to `src/data/projects.json`
4. Project automatically appears with filtering

### Add a New Certification

1. Save certificate to `src/assets/certificates/`
2. Add entry to `src/data/certifications.json`
3. Certification automatically appears in grid

### Update Skills

1. Edit `src/data/skills.json`
2. Add/remove skill categories or skills
3. Changes reflect instantly

## Performance Optimization

- ✅ Lazy image loading
- ✅ Code splitting with Vite
- ✅ CSS minification with Tailwind
- ✅ Optimized animations (GPU-accelerated)
- ✅ Mobile-first responsive design

Test performance: `npm run build && npm run preview`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Port Already in Use

```bash
npm run dev -- --port 3000
```

### Images Not Loading

- Check image path in JSON files
- Ensure images are in correct asset folder
- Use `/portfolio/` prefix for GitHub Pages paths

### Styles Not Applying

```bash
npm run build
npm run preview
```

### GitHub Pages Not Updating

1. Clear browser cache
2. Check gh-pages branch exists
3. Re-run: `npm run deploy`

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, Layout
│   │   ├── sections/        # Page sections
│   │   ├── cards/           # Reusable card components
│   │   ├── modals/          # Modal dialogs
│   │   └── common/          # Common UI components
│   ├── data/                # JSON content files
│   ├── assets/              # Images, PDFs
│   ├── styles/              # CSS
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Helper functions
│   ├── pages/               # Page components
│   └── main.jsx
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── index.html
└── README.md
```

## Future Enhancements

- [ ] Blog section for technical articles
- [ ] Project filtering by date
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Email contact form integration
- [ ] Analytics tracking
- [ ] Certificate upload via admin panel

## Support & Questions

For questions or issues:

1. Check the troubleshooting section
2. Review the customization guide
3. Consult Vite/React/TailwindCSS documentation

## License

This portfolio template is provided as-is for personal use.

---

**Last Updated:** 2024
**Portfolio Version:** 1.0.0

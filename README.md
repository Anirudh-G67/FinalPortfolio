# Anirudh Goel - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features include dark mode, smooth animations, and mobile-first design.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Rainbow Headings**: Beautiful gradient text effects with glow
- **Interactive Elements**: Hover effects, animations, and smooth scrolling
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Filterable project gallery
- **Performance Optimized**: Fast loading with code splitting

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deployment**: Netlify

## 📱 Mobile Optimizations

- Responsive grid layouts
- Touch-friendly buttons and interactions
- Optimized text sizes for mobile screens
- Proper spacing and padding for small devices
- Mobile-first navigation menu

## 🚀 Deployment

### Netlify Deployment

1. **Connect to Git Repository**:
   - Push your code to GitHub/GitLab
   - Connect your repository to Netlify

2. **Build Settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18

3. **Environment Variables** (if needed):
   - Add any environment variables in Netlify dashboard

4. **Deploy**:
   - Netlify will automatically build and deploy your site
   - Your site will be available at `https://your-site-name.netlify.app`

### Manual Deployment

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Build for Production**:
   ```bash
   npm run build
   ```

3. **Preview Build**:
   ```bash
   npm run preview
   ```

4. **Deploy**:
   - Upload the `dist` folder to your hosting provider
   - Configure your domain and SSL

## 🐛 Bug Fixes & Improvements

### Mobile Responsiveness
- ✅ Fixed text sizing for mobile devices
- ✅ Improved button layouts on small screens
- ✅ Optimized grid layouts for different screen sizes
- ✅ Enhanced touch interactions

### Performance
- ✅ Added code splitting for better loading
- ✅ Optimized build configuration
- ✅ Reduced bundle size with manual chunks

### Error Handling
- ✅ Added Error Boundary component
- ✅ Graceful error handling for runtime errors
- ✅ User-friendly error messages

### Netlify Compatibility
- ✅ Added `netlify.toml` configuration
- ✅ Proper build settings
- ✅ SPA routing support
- ✅ Security headers

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation and theme controls
│   ├── Hero.tsx           # Main landing section
│   ├── About.tsx          # About section with skills
│   ├── Projects.tsx       # Project showcase
│   ├── Contact.tsx        # Contact form and methods
│   ├── Footer.tsx         # Footer with links
│   ├── NeuButton.tsx      # Custom button component
│   ├── AmbientLight.tsx   # Ambient lighting effect
│   └── ErrorBoundary.tsx  # Error handling
├── hooks/
│   ├── useTheme.ts        # Theme management
│   └── useAmbientLight.ts # Ambient light controls
├── App.tsx                # Main app component
└── main.tsx              # Entry point
```

## 🎨 Customization

### Colors
- Update color schemes in `tailwind.config.js`
- Modify gradient colors in component classes
- Customize theme colors in CSS variables

### Content
- Update personal information in components
- Add/remove projects in `Projects.tsx`
- Modify contact information in `Contact.tsx`

### Styling
- Adjust spacing and typography in Tailwind classes
- Modify animations and transitions
- Update component layouts as needed

## 🔧 Development

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Code Quality
```bash
# Run linting
npm run lint
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

- **Email**: ani.rushu3023@gmail.com
- **Phone**: +91 93065 32383
- **Location**: India

---

Built with ❤️ by Anirudh Goel 
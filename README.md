# Software Engineer Portfolio 👩‍💻

A modern, responsive portfolio website showcasing my journey as a software engineer, built with Next.js and TypeScript. This site features my professional experience, skills, case studies, and projects with a focus on performance and user experience.

## 🌟 Live Demo

Visit the live portfolio: [portfolio-poornima-rajappans-projects.vercel.app](https://portfolio-poornima-rajappans-projects.vercel.app)

## ✨ Features

- **🎨 Modern Design**: Clean, professional interface with smooth animations
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **🚀 Performance Optimized**: Built with Next.js 16+ for optimal loading speeds
- **♿ Accessible**: WCAG 2.1 compliant with proper semantic markup
- **🎯 Interactive Navigation**: Smooth scrolling with active section highlighting
- **📊 Dynamic Content**: Skills, experience, and projects loaded from structured data

## 🏗️ Portfolio Sections

- **Hero**: Professional introduction with years of experience
- **About**: Personal background and professional philosophy
- **Skills & Tools**: Technical expertise organized by categories
- **Experience**: Professional journey and key achievements
- **Case Studies**: In-depth project analyses and outcomes
- **Projects**: Showcase of development work and contributions
- **Contact**: Professional contact information and links

## 🛠️ Tech Stack

- **Frontend**: React 19, Next.js 16, TypeScript
- **Styling**: Tailwind CSS v4
- **Performance**: Code splitting, smooth animations, responsive design
- **Development**: ESLint, pnpm for package management
- **Deployment**: Vercel Platform

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my_portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/
│   ├── common/              # Reusable UI components
│   ├── constants/           # Data and configuration files
│   ├── hooks/               # Custom React hooks
│   ├── menu/                # Navigation components
│   ├── page_sections/       # Main portfolio sections
│   ├── globals.css          # Global styles
│   ├── interface.ts         # TypeScript interfaces
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
└── public/                  # Static assets
```

## 🎨 Customization

### Adding New Sections

1. Create section component in `app/page_sections/`
2. Add constants in `app/constants/`
3. Import and include in `app/page.tsx`
4. Update navigation menu items

### Modifying Content

Update the respective constant files in `app/constants/`:
- `skills_section_constants.ts` - Technical skills
- `experience_section_constants.ts` - Work history
- `project_section_constants.ts` - Project showcases
- `about_section_constants.ts` - Personal information

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px  
- Desktop: > 1024px

## ⚡ Performance Features

- **Code Splitting**: Automatic route-based code splitting
- **Smooth Animations**: CSS transitions and hover effects throughout
- **Intersection Observer**: Content animations in About section
- **Bundle Optimization**: Tree shaking and minification
- **Caching**: Static generation with ISR capabilities

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Connect your repository** to [Vercel](https://vercel.com)
2. **Configure build settings**:
   - Build Command: `pnpm build`
   - Output Directory: `.next`
3. **Deploy** automatically on every push to main branch

### Alternative Deployment Methods

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## 🤝 Contributing

This is a personal portfolio project. However, if you find bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Poornima Rajappan**  
Software Engineer | Crafting Digital Experiences

- Portfolio: [portfolio-poornima-rajappans-projects.vercel.app](https://portfolio-poornima-rajappans-projects.vercel.app)
- LinkedIn: [Connect with me on LinkedIn](https://www.linkedin.com/in/poornima-r-)
- Email: [Send me an email](mailto:poornivanaz@gmail.com)

---

*Built with ❤️ using Next.js and TypeScript*

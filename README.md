
# Xinhai Consultancy Website

A modern, responsive website for Xinhai Consultancy - a professional consulting agency specializing in services for Chinese businesses in Uganda.

## 🚀 Tech Stack

- **React 18** with **TypeScript**
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **ESLint** for code quality

## 📁 Project Structure

```
xinhai-consultancy/
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Navigation.tsx    # Main navigation component
│   │   │   ├── Footer.tsx        # Footer component
│   │   │   └── index.ts          # Layout exports
│   │   ├── UI/
│   │   │   ├── Button.tsx        # Reusable button component
│   │   │   ├── ServiceCard.tsx   # Service card component
│   │   │   ├── EventCard.tsx     # Event card component
│   │   │   └── index.ts          # UI exports
│   │   └── index.ts              # All component exports
│   ├── pages/
│   │   ├── HomePage.tsx          # Landing page
│   │   ├── BusinessesPage.tsx    # Business services page
│   │   ├── EventsPage.tsx        # Events and workshops page
│   │   └── index.ts              # Page exports
│   ├── types/
│   │   ├── index.ts              # Main type definitions
│   │   └── navigation.ts         # Navigation-specific types
│   ├── App.tsx                   # Main application component
│   ├── main.tsx                  # Application entry point
│   └── index.css                 # Global styles and Tailwind imports
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🎨 Design Features

- **Corporate & Minimalistic**: Clean design inspired by the company's branding
- **Brand Colors**: Custom Xinhai blue color palette (#2B5A8A)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Geometric Elements**: Triangular design elements matching the logo
- **Professional Typography**: Inter font family for clean readability

## 📱 Pages

### 1. Home Page
- Hero section with company introduction
- Services overview with interactive cards
- About section with company values
- Call-to-action buttons

### 2. Businesses Page
- Comprehensive service offerings
- Detailed service cards with features
- Professional consultation CTA

### 3. Events Page
- Upcoming events showcase
- Past events timeline
- Newsletter subscription

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd xinhai-consultancy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🔧 Development

### Component Structure
- **Modular Design**: Each component is self-contained with proper TypeScript typing
- **Reusable UI Components**: Button, ServiceCard, and EventCard components
- **Layout Components**: Navigation and Footer for consistent layout
- **Page Components**: Separate components for each main page

### Styling Approach
- **Tailwind CSS**: Utility-first CSS framework
- **Custom Theme**: Extended Tailwind config with Xinhai brand colors
- **Component Classes**: Custom component classes for consistent styling
- **Responsive Design**: Mobile-first responsive design patterns

### TypeScript Integration
- **Strong Typing**: All components and props are properly typed
- **Interface Definitions**: Clear interfaces for component props
- **Type Safety**: Full TypeScript support throughout the application

## 🌟 Key Features

- **Professional Branding**: Consistent with Xinhai's corporate identity
- **Multilingual Support**: English with Chinese company name (鑫海咨询)
- **Interactive Elements**: Hover effects and smooth transitions
- **SEO Friendly**: Semantic HTML structure
- **Accessibility**: WCAG compliant with proper focus management
- **Performance**: Optimized with Vite and efficient component structure

## 📞 Contact Information

**Xinhai Consultancy Co. Limited**
- **Address**: Nakawa Global, Kampala, Uganda
- **Phone**: +256 774 964 XXX
- **Email**: info@xinhai-consulting.com

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ for Xinhai Consultancy
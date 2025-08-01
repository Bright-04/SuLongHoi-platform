<div align="center">
  <img src="src/assets/images/logos/logo.png" alt="SuLongHoi Logo" width="120" height="120">
  
  # 🏮 Sư Long Hội
  
  **Preserving Vietnamese Traditional Performing Arts Through Digital Innovation**
  
  [![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)---

<div align="center">
  <img src="src/assets/images/illustrations/collage1.png" alt="Cultural Collage" width="600">
  
  **"Preserving the past, inspiring the future"**
  
  *Building bridges between traditional Vietnamese culture and modern technology*
  
  ---
  
  ### 🚀 **Live Development Status**
  
  **Current Version**: v0.1.0 (Active Development)  
  **Last Updated**: August 2025  
  **Development Server**: `npm run dev` → `http://localhost:5173`  
  **Build Status**: ✅ Stable  
  **3D Designer**: ✅ Fully Functional  
  **Knowledge System**: ✅ Framework Complete  
  
  ---
  
  [![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![Three.js](https://img.shields.io/badge/Three.js-0.179.0-000000?style=for-the-badge&logo=three.js)](https://threejs.org/)
  [![Vite](https://img.shields.io/badge/Vite-4.0.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
</div>te](https://img.shields.io/badge/Vite-4.0.0-646CFF.svg)](https://vitejs.dev/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
  
  *A comprehensive cultural-tech platform dedicated to preserving and promoting Vietnam's rich heritage of lion dance (múa lân) and dragon dance traditions through digital design, interactive education, and vibrant community connection.*
  
  <img src="src/assets/images/illustrations/preview-site.png" alt="SuLongHoi Platform Preview" width="800">
</div>

---

## 🎭 About SuLongHoi

Sư Long Hội is an innovative platform that bridges the gap between traditional Vietnamese performing arts and modern digital technology. Our mission is to preserve, teach, and celebrate the ancient art forms of lion and dragon dance that have been integral to Vietnamese culture for over eight centuries.

### ✨ What Makes Us Special

-   **🏮 Cultural Preservation**: Digitally documenting and preserving traditional lion and dragon dance techniques, history, and regional variations
-   **🎓 Interactive Learning**: Comprehensive educational resources with video tutorials, technique guides, and gamified learning experiences
-   **🎨 3D Design Tools**: Revolutionary 3D designer for creating and customizing traditional lion and dragon costumes
-   **🌟 Community Hub**: Vibrant marketplace and social platform connecting artists, performers, and cultural enthusiasts
-   **🏆 Competitions & Events**: Live streaming competitions and cultural events to showcase talent and preserve traditions

---

## 🚀 Current Features & Implementation Status

### ✅ **Fully Implemented**

#### 🎨 **3D Lân Sư Designer** (Complete)

-   **Interactive 3D Modeling**: Full 3D lion head customization using Three.js and React Three Fiber
-   **Real-time Customization**: Live color changes for fur, mane, and eyes
-   **Design Controls**: Complete UI for adjusting textures, patterns, and features
-   **3D Model Integration**: Authentic Lân Sư head model (lan-su-head.glb) with material mapping
-   **Export Functionality**: Save designs as high-quality PNG/JPEG with design metadata
-   **Responsive 3D Viewer**: Drag to rotate, scroll to zoom, right-click to pan

#### 🏠 **Homepage & Navigation** (Complete)

-   **Hero Section**: Animated collage showcasing Vietnamese lion dance culture
-   **Section Navigation**: Complete layout with all cultural sections
-   **Responsive Design**: Mobile-optimized interface with modern animations
-   **Professional UI**: Consistent design system with Vietnamese cultural elements

#### 📚 **Knowledge Library Foundation** (Complete Structure)

-   **Article System**: Complete article browsing with categories and filtering
-   **Search & Filter**: Advanced filtering by category, difficulty, and content type
-   **Content Categories**: History, Techniques, Music, Culture, Costumes, Stories
-   **Rich Content Display**: Support for articles, tutorials, guides, and stories

### 🚧 **In Development**

#### 📖 **Content Population** (Partial)

-   **Sample Articles**: 6 demo articles with Vietnamese cultural content
-   **Content Management**: Framework ready for additional articles and tutorials
-   **Media Integration**: Structure prepared for video tutorials and audio guides

#### 🎓 **Learning Platform** (Framework Ready)

-   **Section Placeholders**: Learn, Events, Community, and Competitions sections
-   **UI Components**: Ready for interactive learning content integration

### 📋 **Planned Features**

#### 🌐 **Community Features** (Future Phase)

-   User authentication and profiles
-   Community marketplace for authentic costumes
-   Social sharing and cultural story contributions
-   Performance showcase platform

#### 🏆 **Events & Competitions** (Future Phase)

-   Live streaming integration
-   Virtual performance showcases
-   Cultural workshops and masterclasses
-   International cultural exchange programs

---

## 🛠️ Technology Stack

### **Frontend Framework**

-   **React 18.2.0** - Modern hooks and functional components
-   **React Router DOM 7.7.1** - Client-side routing and navigation
-   **Vite 4.0.0** - Lightning-fast development and build tool

### **3D Graphics & Visualization**

-   **Three.js 0.179.0** - 3D graphics rendering engine
-   **@react-three/fiber 8.15.13** - React renderer for Three.js
-   **@react-three/drei 9.122.0** - Useful helpers and components for React Three Fiber

### **State Management & Utilities**

-   **Zustand 5.0.7** - Lightweight state management for design controls
-   **Custom CSS** - Modern design system with responsive layouts and animations

### **Architecture & Performance**

-   **Component-based** modular architecture with reusable UI components
-   **Responsive Design** optimized for desktop and mobile devices
-   **Hot Module Replacement** for instant development feedback
-   **Optimized 3D Assets** with efficient model loading and material mapping

---

## 📁 Project Structure

```
SuLongHoi-platform/
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── common/             # Button, Card, Loading, SectionTitle
│   │   ├── layout/             # Navbar, Footer, Layout wrapper
│   │   ├── sections/           # Homepage sections (Hero, Knowledge, etc.)
│   │   └── designer/           # 3D designer components
│   │       ├── LionDesigner3D.jsx    # Main 3D canvas and model
│   │       ├── DesignControls.jsx    # UI controls for customization
│   │       ├── ModelLoader.jsx       # 3D model loading with error handling
│   │       └── ExportModal.jsx       # Design export functionality
│   ├── pages/                  # Main application pages
│   │   ├── Home.jsx           # Landing page with all sections
│   │   ├── LionDesigner.jsx   # Standalone 3D designer page
│   │   ├── KnowledgePage.jsx  # Knowledge library and articles
│   │   └── ArticlePage.jsx    # Individual article reader
│   ├── store/                  # State management
│   │   └── lionDesignStore.js # Zustand store for 3D designer state
│   ├── styles/                 # Organized CSS architecture
│   │   ├── base/              # Variables, global styles, mobile optimizations
│   │   ├── components/        # Component-specific styles
│   │   ├── layout/            # Layout component styles
│   │   ├── pages/             # Page-specific styles
│   │   ├── sections/          # Section component styles
│   │   └── LionDesigner.css   # Complete 3D designer styling
│   ├── assets/                # Static assets
│   │   └── images/           # Logos, illustrations, cultural images
│   ├── hooks/                 # Custom React hooks
│   │   ├── useNavigationLoading.js # Loading states for navigation
│   │   ├── useRouteLoading.js      # Route transition management
│   │   └── useScrollManager.js     # Scroll behavior and animations
│   └── utils/                 # Constants and helper functions
│       ├── constants.js       # Application constants
│       ├── helpers.js         # Utility functions
│       └── navigation.js      # Navigation helpers
├── public/                    # Static assets served directly
│   └── models/               # 3D model files
│       └── lan-su-head.glb   # Authentic Lân Sư head 3D model
├── package.json              # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md                # Project documentation
```

---

## 🚀 Quick Start

### Prerequisites

-   **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
-   **npm** or **yarn** package manager
-   **Modern Web Browser** with WebGL support for 3D features

### Installation & Setup

1. **Clone the repository**

    ```bash
    git clone https://github.com/Bright-04/SuLongHoi-platform.git
    cd SuLongHoi-platform
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Start development server**

    ```bash
    npm run dev
    ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

### Available Scripts

-   `npm run dev` - Start development server with hot reload
-   `npm run build` - Build production-ready application
-   `npm run preview` - Preview production build locally

### 🎨 **Quick Tour of Features**

1. **Homepage** - Experience the cultural showcase and navigation
2. **3D Designer** - Click "Design Your Own Lion Head" to access the 3D designer
    - Customize colors: fur, mane, and eye colors
    - Adjust textures and patterns
    - Export your design as PNG/JPEG
3. **Knowledge Library** - Browse articles about Vietnamese lion dance culture
    - Filter by category and difficulty
    - Read cultural stories and techniques

---

## 🎯 Development Roadmap

### ✅ **Phase 1: Foundation** (Completed - December 2024)

-   [x] **Core Platform Architecture** - React + Vite setup with routing
-   [x] **3D Design System** - Complete Lân Sư head designer with Three.js integration
-   [x] **Knowledge Library Framework** - Article system with search and categorization
-   [x] **Responsive UI/UX** - Mobile-optimized design with Vietnamese cultural elements
-   [x] **Component Architecture** - Reusable components and design system
-   [x] **3D Model Integration** - Authentic Lân Sư head model with material customization

### 🚧 **Phase 2: Content & Features** (In Progress - January 2025)

-   [x] **3D Design Controls** - Advanced customization options for colors, textures, patterns
-   [x] **Export Functionality** - High-quality image export with design metadata
-   [ ] **Content Population** - Additional articles, tutorials, and cultural stories
-   [ ] **Video Integration** - Embedded video tutorials and cultural documentaries
-   [ ] **Audio Integration** - Traditional music patterns and pronunciation guides
-   [ ] **Mobile App** - React Native version for mobile devices

### 🔮 **Phase 3: Community & Interaction** (Planned - Q2 2025)

-   [ ] **User Authentication** - Firebase/Auth0 integration for user accounts
-   [ ] **Community Features** - User profiles, comments, and cultural story sharing
-   [ ] **Marketplace Foundation** - Framework for costume and accessory trading
-   [ ] **Learning Progress** - Gamified learning paths with achievement tracking
-   [ ] **Multilingual Support** - Vietnamese, English, and Chinese language options

### 🚀 **Phase 4: Advanced Features** (Future - Q3-Q4 2025)

-   [ ] **Live Streaming** - Integration for cultural events and competitions
-   [ ] **VR/AR Experiences** - Virtual reality training and augmented reality previews
-   [ ] **AI-Powered Features** - Movement analysis and performance feedback
-   [ ] **International Platform** - Global cultural exchange and collaboration tools
-   [ ] **Advanced Analytics** - Performance tracking and cultural impact measurement

---

## 🌟 Cultural Impact & Current Status

### ✅ **Digital Preservation Achievements**

-   **Authentic 3D Model** - High-quality Lân Sư head model preserving traditional proportions
-   **Cultural Accuracy** - Design elements based on authentic Vietnamese lion dance traditions
-   **Educational Framework** - Comprehensive article categorization system for cultural learning
-   **Accessibility** - Web-based platform making Vietnamese culture globally accessible

### 📊 **Current Platform Metrics**

-   **6 Cultural Articles** - Covering history, techniques, music, and regional variations
-   **150+ Design Combinations** - Possible color and texture combinations in 3D designer
-   **3D Model Integration** - Real-time material manipulation and export capabilities
-   **Cross-platform Compatibility** - Responsive design for desktop and mobile devices

### 🎯 **Educational Impact Goals**

-   **Cultural Documentation** - Preserving traditional knowledge in digital format
-   **Global Outreach** - Making Vietnamese lion dance accessible to international audiences
-   **Next Generation** - Engaging youth through modern technology and interactive learning
-   **Master Knowledge Transfer** - Bridging traditional masters with digital learners

---

## 🤝 Contributing

We welcome contributions from cultural enthusiasts, developers, and community members! Here's how you can help:

### For Developers

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### For Cultural Experts

-   Share traditional knowledge and techniques
-   Provide historical documentation and stories
-   Review content for cultural accuracy
-   Contribute to the knowledge library

### For Community Members

-   Report bugs and suggest improvements
-   Share feedback on user experience
-   Contribute cultural stories and experiences
-   Help with translation and localization

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

-   **Vietnamese Cultural Masters** who shared their knowledge and expertise
-   **Traditional Artisans** who preserve authentic costume-making techniques
-   **Community Contributors** who help document and share cultural stories
-   **Open Source Community** for the amazing tools and libraries

---

## 📞 Contact & Support

-   **Website**: [SuLongHoi Platform](https://sulonghoi.com)
-   **Email**: contact@sulonghoi.com
-   **GitHub**: [@Bright-04](https://github.com/Bright-04)

---

<div align="center">
  <img src="src/assets/images/illustrations/collage1.png" alt="Cultural Collage" width="600">
  
  **"Preserving the past, inspiring the future"**
  
  *Building bridges between traditional Vietnamese culture and modern technology*
</div>Sư Long Hội - cultural-tech platform to preserve and promote Vietnam’s lion and dragon dance heritage through digital design, education, and community connection.

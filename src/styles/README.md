# CSS Architecture Documentation

## Overview

The CSS architecture has been refactored for better organization, maintainability, and scalability.

## File Structure

```
src/styles/
├── main.css                 # Main entry point - imports all CSS
├── Home.css                 # Home page specific styles
├── Home-legacy.css         # Backup of original Home.css
│
├── base/
│   ├── variables.css       # CSS custom properties and global variables
│   └── global.css          # Global styles and utilities
│
├── layout/
│   ├── Navbar.css          # Navigation bar styles
│   └── Footer.css          # Footer styles
│
├── sections/
│   ├── HeroSection.css     # Hero section styles
│   ├── KnowledgeSection.css# Knowledge section styles
│   ├── DesignerSection.css # 3D Designer section styles
│   ├── LearnSection.css    # Learn & Train section styles
│   ├── EventsSection.css   # Events section styles
│   ├── CommunitySection.css# Community section styles
│   └── CompetitionsSection.css # Competitions section styles
│
└── components/
    ├── Button.css          # Button component styles
    └── Card.css            # Card component styles
```

## Key Improvements

### 1. **Modular Architecture**

-   Each section has its own CSS file
-   Easy to maintain and debug
-   Better code organization

### 2. **CSS Custom Properties**

-   Consistent design tokens in `variables.css`
-   Easy theme customization
-   Better maintainability

### 3. **Simplified Home.css**

-   Only contains Home page specific styles
-   Reduced from 2400+ lines to ~200 lines
-   Focuses on animations and layout utilities

### 4. **Component-Based Styling**

-   Reusable component styles
-   Consistent button and card styling
-   Better code reusability

## CSS Variables

The `variables.css` file contains:

-   **Colors**: Primary, secondary, text colors
-   **Gradients**: Consistent gradient definitions
-   **Shadows**: Standardized shadow values
-   **Spacing**: Consistent spacing scale
-   **Typography**: Font sizes and weights
-   **Border Radius**: Consistent border radius values
-   **Transitions**: Standardized transition durations

## Usage

### Import Order

The `main.css` file imports styles in this order:

1. Base styles (variables, global)
2. Layout styles (navbar, footer)
3. Section styles
4. Home page specific styles

### Adding New Sections

1. Create a new CSS file in `styles/sections/`
2. Import it in `main.css`
3. Use CSS variables for consistency

### Using Components

Common components like buttons and cards are available:

```jsx
import { Button, Card } from '../common';

// Usage
<Button variant="primary" size="large">Click me</Button>
<Card variant="glass" hover>Content</Card>
```

## Benefits

1. **Maintainability**: Easier to find and modify specific styles
2. **Performance**: Better CSS organization for build tools
3. **Scalability**: Easy to add new sections and components
4. **Consistency**: CSS variables ensure design consistency
5. **Collaboration**: Clear structure for team development

## Migration Notes

-   Original `Home.css` backed up as `Home-legacy.css`
-   All existing styles preserved and reorganized
-   No breaking changes to existing functionality
-   Components updated to use new common components

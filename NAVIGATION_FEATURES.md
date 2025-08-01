# Navigation Enhancement Features

This document describes the new loading states and auto-scroll functionality added to the SuLongHoi Platform.

## Features Added

### 1. Loading States

-   **Global Loading Component**: Beautiful loading screen with dragon and lion animations
-   **Route-specific Loading Messages**: Different loading messages for different pages
-   **Progress Bar**: Visual progress indicator during navigation
-   **Smooth Transitions**: Page transition animations for better UX

### 2. Auto Scroll to Top

-   **Automatic Scroll**: Scrolls to top when navigating between pages
-   **Smooth Scrolling**: Uses smooth scrolling behavior for better user experience
-   **Position Management**: Optional scroll position restoration for specific pages

### 3. Enhanced Navigation

-   **Active States**: Visual indication of current page in navbar
-   **Loading Feedback**: Progress indicators during navigation
-   **Transition Effects**: Smooth page transitions with fade effects

## Components Added

### Loading Component (`src/components/common/Loading.jsx`)

-   Fullscreen loading overlay with cultural-themed animations
-   Customizable loading messages
-   Responsive design for mobile devices

### ProgressBar Component (`src/components/common/ProgressBar.jsx`)

-   Top navigation progress bar
-   Gradient animation effects
-   Auto-hide functionality

### PageTransition Component (`src/components/common/PageTransition.jsx`)

-   Smooth fade transitions between pages
-   Loading state management
-   CSS transition animations

### Layout Component (`src/components/layout/Layout.jsx`)

-   Centralized layout management
-   Navigation loading integration
-   Auto-scroll functionality

## Hooks Added

### useScrollToTop (`src/hooks/useScrollToTop.js`)

-   Automatically scrolls to top on route changes
-   Smooth scrolling behavior
-   Clean and simple implementation

### useNavigationLoading (`src/hooks/useNavigationLoading.js`)

-   Basic loading state management
-   Configurable delay timing
-   Route change detection

### useRouteLoading (`src/hooks/useRouteLoading.js`)

-   Advanced loading states with route-specific configurations
-   Custom loading messages per route
-   Optimized loading times

### useScrollManager (`src/hooks/useScrollManager.js`)

-   Advanced scroll position management
-   Optional position restoration
-   Session storage integration

## Usage Examples

### Basic Loading State

```jsx
import { useNavigationLoading } from "../hooks";
import { Loading } from "../components/common";

const MyComponent = () => {
	const isLoading = useNavigationLoading(300);

	if (isLoading) {
		return <Loading message="Loading..." />;
	}

	return <div>Page Content</div>;
};
```

### Auto Scroll to Top

```jsx
import { useScrollToTop } from "../hooks";

const MyPage = () => {
	useScrollToTop(); // Automatically scrolls to top on mount

	return <div>Page Content</div>;
};
```

### Custom Route Loading

```jsx
import { useRouteLoading } from "../hooks/useRouteLoading";
import { Loading } from "../components/common";

const MyLayout = () => {
	const { isLoading, loadingMessage } = useRouteLoading();

	if (isLoading) {
		return <Loading message={loadingMessage} />;
	}

	return <div>Layout Content</div>;
};
```

## Configuration

### Route Loading Configuration

The `useRouteLoading` hook includes predefined configurations for different routes:

-   **Home Page** (`/`): 300ms delay, "Loading home page..."
-   **Knowledge Library** (`/knowledge`): 500ms delay, "Loading knowledge library..."
-   **Articles** (`/knowledge/article`): 400ms delay, "Loading article..."
-   **Search** (`/knowledge/search`): 400ms delay, "Searching articles..."

### Customization

You can modify the route configurations in `src/hooks/useRouteLoading.js` to adjust:

-   Loading delays
-   Loading messages
-   Route patterns

## Performance Considerations

1. **Optimized Loading Times**: Different routes have optimized loading delays
2. **Efficient Animations**: CSS-based animations for better performance
3. **Memory Management**: Proper cleanup of timers and event listeners
4. **Session Storage**: Used for scroll position restoration without performance impact

## Browser Compatibility

-   **Modern Browsers**: Full support for all features
-   **IE11+**: Basic functionality with graceful degradation
-   **Mobile**: Responsive design and touch-friendly interactions
-   **Accessibility**: Screen reader compatible loading states

## Future Enhancements

-   [ ] Preloading for faster navigation
-   [ ] Custom loading animations per route
-   [ ] Advanced transition effects
-   [ ] Gesture-based navigation
-   [ ] Progressive loading for large pages

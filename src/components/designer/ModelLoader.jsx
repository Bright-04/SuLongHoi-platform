import React, { Suspense, useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import ModelErrorBoundary from './ModelErrorBoundary';

// Model Loader Component
const ModelLoader = ({ modelPath, onLoad, onError }) => {
  const hasLoaded = useRef(false);
  
  const { scene } = useGLTF(modelPath);
  
  useEffect(() => {
    if (scene && onLoad && !hasLoaded.current) {
      hasLoaded.current = true;
      // Wrap in setTimeout to avoid setState during render
      setTimeout(() => {
        onLoad(scene);
      }, 0);
    }
  }, [scene, onLoad]);

  return <primitive object={scene} />;
};

// Suspense wrapper for model loading with error boundary
const ModelWithSuspense = ({ modelPath, onLoad, onError }) => {
  return (
    <ModelErrorBoundary onError={onError}>
      <Suspense fallback={null}>
        <ModelLoader modelPath={modelPath} onLoad={onLoad} onError={onError} />
      </Suspense>
    </ModelErrorBoundary>
  );
};

export default ModelWithSuspense; 
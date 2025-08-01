import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import useLionDesignStore from '../../store/lionDesignStore';
import ModelWithSuspense from './ModelLoader';

// Lân Sư Head Component with Real 3D Model
const LionHead = ({ onModelLoad, onModelError }) => {
  const meshRef = useRef();
  const { design } = useLionDesignStore();
  const [modelScene, setModelScene] = useState(null);
  const [modelError, setModelError] = useState(null);
  
  // Auto-rotation for demo effect
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  // Apply design changes to the model
  React.useEffect(() => {
    if (modelScene) {
      console.log('🎨 Applying design changes:', design);
      // Apply design changes to the model
      modelScene.traverse((child) => {
        if (child.isMesh) {
          // Map different parts of the model to design properties
          const meshName = child.name.toLowerCase();
          const materialName = child.material?.name?.toLowerCase() || '';
          
          // Apply fur color to body parts (main body - material without underscore)
          if (materialName.includes('material') && !materialName.includes('material_')) {
            console.log(`🎨 Applying fur color to: ${meshName} (${materialName})`);
            child.material.color.setHex(parseInt(design.furColor.replace('#', '0x')));
          }
          
          // Apply mane color to mane parts
          if (materialName.includes('material_7') || materialName.includes('material_10')) {
            console.log(`🎨 Applying mane color to: ${meshName} (${materialName})`);
            child.material.color.setHex(parseInt(design.maneColor.replace('#', '0x')));
          }
          
          // Apply eye color to eye parts
          if (materialName.includes('material_3') || materialName.includes('material_6')) {
            console.log(`🎨 Applying eye color to: ${meshName} (${materialName})`);
            child.material.color.setHex(parseInt(design.eyeColor.replace('#', '0x')));
            child.material.emissive.setHex(parseInt(design.eyeColor.replace('#', '0x')));
            child.material.emissiveIntensity = 0.3;
          }
          
          // Apply nose color to nose parts
          if (materialName.includes('material_11') || materialName.includes('material_9')) {
            console.log(`🎨 Applying nose color to: ${meshName} (${materialName})`);
            child.material.color.setHex(parseInt(design.noseColor.replace('#', '0x')));
          }
          
          // Apply horn color to horn parts (only for objects with material without underscore)
          if ((meshName.includes('object_15') || meshName.includes('object_16')) && 
              materialName.includes('material') && !materialName.includes('material_')) {
            console.log(`🎨 Applying horn color to: ${meshName} (${materialName})`);
            child.material.color.setHex(parseInt(design.hornColor.replace('#', '0x')));
          }
          
          // Apply fur texture (scales for Lân Sư)
          if (design.furTexture === 'scaled') {
            child.material.roughness = 0.3;
            child.material.metalness = 0.4;
            // Add scale-like effect
            child.material.normalScale.set(2, 2);
          } else if (design.furTexture === 'dragon') {
            child.material.roughness = 0.2;
            child.material.metalness = 0.6;
            child.material.normalScale.set(3, 3);
          } else if (design.furTexture === 'rough') {
            child.material.roughness = 0.8;
            child.material.metalness = 0.1;
          } else { // smooth
            child.material.roughness = 0.4;
            child.material.metalness = 0.2;
          }
          
          // Apply mane style (dragon mane for Lân Sư)
          if (meshName.includes('object_7') || meshName.includes('object_8')) {
            if (design.maneStyle === 'none') {
              child.visible = false;
            } else if (design.maneStyle === 'dragon') {
              child.visible = true;
              child.scale.set(1.2, 1.2, 1.2);
              // Add dragon-like effect
              child.material.emissive.setHex(0x222222);
              child.material.emissiveIntensity = 0.1;
            } else if (design.maneStyle === 'short') {
              child.visible = true;
              child.scale.set(0.7, 0.7, 0.7);
            } else if (design.maneStyle === 'full') {
              child.visible = true;
              child.scale.set(1.2, 1.2, 1.2);
            } else { // wild
              child.visible = true;
              child.scale.set(1.0, 1.0, 1.0);
            }
          }
          
          // Apply whiskers feature
          if (meshName.includes('object_13') || meshName.includes('object_14')) {
            child.visible = design.whiskers;
          }
          
          // Apply horns feature (dragon horns)
          if (meshName.includes('object_15') || meshName.includes('object_16')) {
            child.visible = design.horns;
            if (design.horns) {
              // Add dragon horn effect
              child.material.emissive.setHex(0x444444);
              child.material.emissiveIntensity = 0.2;
            }
          }
          
          // Apply pattern effects (emissive for special patterns)
          if (design.pattern === 'dragon') {
            child.material.emissive.setHex(0x444444);
            child.material.emissiveIntensity = 0.1;
          } else if (design.pattern === 'phoenix') {
            child.material.emissive.setHex(0x884422);
            child.material.emissiveIntensity = 0.15;
          } else if (design.pattern === 'clouds') {
            child.material.emissive.setHex(0x4444aa);
            child.material.emissiveIntensity = 0.1;
          } else if (design.pattern === 'flowers') {
            child.material.emissive.setHex(0xaa4444);
            child.material.emissiveIntensity = 0.1;
          } else { // traditional or none
            child.material.emissive.setHex(0x000000);
            child.material.emissiveIntensity = 0;
          }
        }
      });
    }
  }, [modelScene, design.furColor, design.maneColor, design.eyeColor, design.noseColor, design.hornColor,
       design.furTexture, design.maneStyle, design.whiskers, design.horns, design.pattern, design.background]);

  const handleModelLoad = (scene) => {
    console.log('✅ Model loaded successfully:', scene);
    setModelScene(scene);
    setModelError(null);
    onModelLoad(true);
    
    // Debug: Log all mesh names and materials
    console.log('🔍 Model structure:');
    scene.traverse((child) => {
      if (child.isMesh) {
        console.log(`Mesh: ${child.name}, Material: ${child.material?.name || 'unnamed'}`);
      }
    });
    
    // Auto-adjust model position and scale if needed
    if (scene) {
      // Center the model
      const box = new THREE.Box3().setFromObject(scene);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      
      // Adjust scale if model is too large or small
      const maxSize = Math.max(size.x, size.y, size.z);
      if (maxSize > 2) {
        const scale = 2 / maxSize;
        scene.scale.setScalar(scale);
      }
    }
  };

  const handleModelError = (error) => {
    console.error('❌ Failed to load model:', error);
    setModelError(error);
    onModelError(false);
  };

  return (
    <group ref={meshRef} scale={design.scale} position={[design.position.x, design.position.y, design.position.z]}>
      {/* Real 3D Model - Only show if no error */}
      {!modelError && (
        <ModelWithSuspense 
          modelPath="/models/lan-su-head.glb"
          onLoad={handleModelLoad}
          onError={handleModelError}
        />
      )}
      
      {/* If model fails to load, show nothing - just log error */}
      {modelError && (
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color="red" />
        </mesh>
      )}
    </group>
  );
};

// Main 3D Scene
const LionDesigner3D = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [modelLoaded, setModelLoaded] = useState(false);
  const canvasRef = useRef();
  const controlsRef = useRef();

  // Function to set camera to optimal export position
  const setExportCameraPosition = () => {
    if (canvasRef.current && controlsRef.current) {
      // Reset camera to front view
      controlsRef.current.reset();
      
      // Set camera to front view for optimal lion head capture
      const camera = controlsRef.current.object;
      camera.position.set(0, 0, 4);
      camera.lookAt(0, 0, 0);
      camera.updateMatrixWorld();
      
      // Force a render
      if (canvasRef.current.__r3f?.gl) {
        const gl = canvasRef.current.__r3f.gl;
        const scene = canvasRef.current.__r3f.scene;
        gl.render(scene, camera);
        
        // Force the canvas to update
        canvasRef.current.style.display = 'none';
        canvasRef.current.offsetHeight; // Force reflow
        canvasRef.current.style.display = 'block';
      }
    }
  };

  // Function to capture the current view as a data URL
  const captureCurrentView = () => {
    if (canvasRef.current) {
      try {
        // Force a render first
        const gl = canvasRef.current.__r3f?.gl;
        const scene = canvasRef.current.__r3f?.scene;
        const camera = canvasRef.current.__r3f?.camera;
        
        if (gl && scene && camera) {
          // Render the scene
          gl.render(scene, camera);
          
          // Wait a bit for the render to complete
          setTimeout(() => {
            // This will be handled by the store
          }, 100);
        }
        
        // Create a temporary canvas to capture only the 3D content area
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        
        // Set the temp canvas size to match the original
        tempCanvas.width = canvasRef.current.width;
        tempCanvas.height = canvasRef.current.height;
        
        // Copy the WebGL canvas content
        tempCtx.drawImage(canvasRef.current, 0, 0);
        
        // Use the temp canvas's toDataURL method
        const dataURL = tempCanvas.toDataURL('image/png', 1.0);
        console.log('Canvas data URL length:', dataURL.length);
        console.log('Captured canvas dimensions:', tempCanvas.width, 'x', tempCanvas.height);
        return dataURL;
      } catch (error) {
        console.error('Error capturing view:', error);
        return null;
      }
    }
    return null;
  };

  // Expose the function globally for the store to use
  React.useEffect(() => {
    window.setExportCameraPosition = setExportCameraPosition;
    window.captureCurrentView = captureCurrentView;
    return () => {
      delete window.setExportCameraPosition;
      delete window.captureCurrentView;
    };
  }, []);

  return (
    <div className="lion-3d-viewer" style={{ height: '100%', minHeight: '500px' }}>
      <Canvas
        ref={canvasRef}
        camera={{ position: [3, 2, 4], fov: 45 }}
        onCreated={() => setIsLoading(false)}
        style={{ height: '100%' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />

        {/* Environment */}
        <Environment preset="sunset" />

        {/* Lion Head */}
        <LionHead 
          onModelLoad={setModelLoaded}
          onModelError={(loaded) => setModelLoaded(loaded)}
        />

        {/* Controls */}
        <OrbitControls 
          ref={controlsRef}
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={2}
          maxDistance={10}
          target={[0, 0.5, 0]}
        />
      </Canvas>
      
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner">
            <div className="loading-spinner-text">Loading 3D Scene...</div>
          </div>
        </div>
      )}
      
      {modelLoaded && !isLoading && (
        <div className="model-loaded-notification">
          <span>✓ Model loaded successfully! Start customizing your Lân Sư</span>
        </div>
      )}
    </div>
  );
};

export default LionDesigner3D; 
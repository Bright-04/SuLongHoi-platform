import { create } from "zustand";
import * as THREE from 'three';

// Helper function to add overlays and download
const addOverlaysAndDownload = (ctx, width, height, design, format, quality, exportCanvas) => {
	// Add watermark
	ctx.fillStyle = 'rgba(217, 48, 37, 0.1)';
	ctx.font = 'bold 48px Arial';
	ctx.textAlign = 'center';
	ctx.fillText('SuLongHoi Platform', width / 2, height - 40);

	// Add design info overlay
	ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
	ctx.fillRect(20, height - 160, width - 40, 140);

	// Add design info text
	ctx.fillStyle = '#ffffff';
	ctx.font = 'bold 28px Arial';
	ctx.textAlign = 'left';
	ctx.fillText('Lân Sư Design', 40, height - 130);
	
	ctx.font = '18px Arial';
	ctx.fillText(`Colors: Fur(${design.furColor}) Mane(${design.maneColor}) Eyes(${design.eyeColor})`, 40, height - 105);
	ctx.fillText(`Style: ${design.furTexture} | ${design.maneStyle} | ${design.pattern}`, 40, height - 80);
	ctx.fillText(`Features: Whiskers(${design.whiskers ? 'Yes' : 'No'}) Horns(${design.horns ? 'Yes' : 'No'})`, 40, height - 55);
	
	// Add timestamp
	const now = new Date();
	ctx.font = '14px Arial';
	ctx.fillText(`Created: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`, 40, height - 30);

	// Convert to blob and download
	const mimeType = format === 'png' ? 'image/png' : 'image/jpeg';
	exportCanvas.toBlob((blob) => {
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = `lan-su-design-${Date.now()}.${format}`;
		link.click();
		URL.revokeObjectURL(url);
	}, mimeType, quality);
};

const useLionDesignStore = create((set, get) => ({
	// Lân Sư head design state (Lion-Dragon hybrid)
	design: {
		// Colors
		furColor: "#D4AF37", // Golden - màu truyền thống của Lân Sư
		maneColor: "#8B4513", // Brown - bờm Lân Sư
		eyeColor: "#FFD700", // Gold - mắt sáng đặc trưng của Lân Sư
		noseColor: "#000000", // Black - mũi Lân Sư
		hornColor: "#8B4513", // Brown - sừng Lân Sư

		// Textures and patterns
		furTexture: "scaled", // Lân Sư có vảy thay vì lông
		maneStyle: "dragon", // Bờm kiểu rồng
		pattern: "traditional", // Họa tiết truyền thống Lân Sư

		// Features
		eyeStyle: "bright", // Mắt sáng đặc trưng
		noseStyle: "dragon", // Mũi kiểu rồng
		whiskers: true, // Râu Lân Sư
		horns: true, // Sừng rồng trang trí

		// Background
		background: "light", // Background cho preview

		// 3D positioning
		position: { x: 0, y: -0.5, z: 0 },
		rotation: { x: 0, y: 0, z: 0 },
		scale: 1,
	},

	// Available options for Lân Sư
	options: {
		furColors: [
			{ name: "Golden", value: "#D4AF37" }, // Màu truyền thống Lân Sư
			{ name: "Red", value: "#DC143C" }, // Đỏ may mắn
			{ name: "Orange", value: "#FF8C00" }, // Cam sôi động
			{ name: "Yellow", value: "#FFD700" }, // Vàng rực rỡ
			{ name: "Green", value: "#228B22" }, // Xanh lá
			{ name: "Blue", value: "#4169E1" }, // Xanh dương
			{ name: "Purple", value: "#8A2BE2" }, // Tím hoàng gia
			{ name: "White", value: "#F5F5DC" }, // Trắng tinh khiết
		],
		maneColors: [
			{ name: "Golden", value: "#FFD700" }, // Vàng rực rỡ
			{ name: "Red", value: "#DC143C" }, // Đỏ may mắn
			{ name: "Orange", value: "#FF8C00" }, // Cam sôi động
			{ name: "Yellow", value: "#FFFF00" }, // Vàng chanh
			{ name: "Green", value: "#228B22" }, // Xanh lá
			{ name: "Blue", value: "#4169E1" }, // Xanh dương
			{ name: "Purple", value: "#8A2BE2" }, // Tím hoàng gia
			{ name: "White", value: "#F5F5DC" }, // Trắng tinh khiết
		],
		eyeColors: [
			{ name: "Gold", value: "#FFD700" }, // Mắt sáng Lân Sư
			{ name: "Red", value: "#FF0000" }, // Mắt đỏ
			{ name: "Green", value: "#32CD32" }, // Mắt xanh
			{ name: "Blue", value: "#4169E1" }, // Mắt xanh dương
			{ name: "Purple", value: "#8A2BE2" }, // Mắt tím
			{ name: "White", value: "#FFFFFF" }, // Mắt trắng
		],
		noseColors: [
			{ name: "Black", value: "#000000" }, // Mũi đen truyền thống
			{ name: "Brown", value: "#8B4513" }, // Mũi nâu
			{ name: "Red", value: "#DC143C" }, // Mũi đỏ
			{ name: "Pink", value: "#FF69B4" }, // Mũi hồng
			{ name: "Gold", value: "#FFD700" }, // Mũi vàng
			{ name: "White", value: "#F5F5DC" }, // Mũi trắng
		],
		hornColors: [
			{ name: "Brown", value: "#8B4513" }, // Sừng nâu truyền thống
			{ name: "Golden", value: "#D4AF37" }, // Sừng vàng
			{ name: "Red", value: "#DC143C" }, // Sừng đỏ
			{ name: "Black", value: "#000000" }, // Sừng đen
			{ name: "White", value: "#F5F5DC" }, // Sừng trắng
			{ name: "Gold", value: "#FFD700" }, // Sừng vàng rực
		],
		furTextures: [
			{ name: "Scaled", value: "scaled" }, // Vảy rồng (Lân Sư)
			{ name: "Smooth", value: "smooth" }, // Mượt
			{ name: "Rough", value: "rough" }, // Thô
			{ name: "Dragon", value: "dragon" }, // Vảy rồng đặc biệt
		],
		maneStyles: [
			{ name: "Dragon", value: "dragon" }, // Bờm kiểu rồng
			{ name: "Wild", value: "wild" }, // Bờm dày truyền thống
			{ name: "Full", value: "full" }, // Đầy đủ
			{ name: "Short", value: "short" }, // Ngắn
			{ name: "None", value: "none" }, // Không có
		],
		patterns: [
			{ name: "Traditional", value: "traditional" }, // Họa tiết truyền thống Lân Sư
			{ name: "Dragon", value: "dragon" }, // Họa tiết rồng
			{ name: "Phoenix", value: "phoenix" }, // Họa tiết phượng
			{ name: "Clouds", value: "clouds" }, // Họa tiết mây
			{ name: "Flowers", value: "flowers" }, // Họa tiết hoa
			{ name: "None", value: "none" }, // Không có
		],
		backgrounds: [
			{ name: "Light", value: "light" }, // Background sáng
			{ name: "Dark", value: "dark" }, // Background tối
			{ name: "Gradient Red", value: "gradient-red" }, // Gradient đỏ
			{ name: "Gradient Blue", value: "gradient-blue" }, // Gradient xanh
			{ name: "Gradient Gold", value: "gradient-gold" }, // Gradient vàng
			{ name: "Solid White", value: "solid-white" }, // Trắng đặc
		],
	},

	// Actions
	updateDesign: (updates) =>
		set((state) => ({
			design: { ...state.design, ...updates },
		})),

	resetDesign: () =>
		set((state) => ({
			design: {
				furColor: "#D4AF37", // Golden - màu truyền thống của Lân Sư
				maneColor: "#8B4513", // Brown - bờm Lân Sư
				eyeColor: "#FFD700", // Gold - mắt sáng đặc trưng của Lân Sư
				noseColor: "#000000", // Black - mũi Lân Sư
				hornColor: "#8B4513", // Brown - sừng Lân Sư
				furTexture: "scaled", // Lân Sư có vảy thay vì lông
				maneStyle: "dragon", // Bờm kiểu rồng
				pattern: "traditional", // Họa tiết truyền thống Lân Sư
				eyeStyle: "bright", // Mắt sáng đặc trưng
				noseStyle: "dragon", // Mũi kiểu rồng
				whiskers: true, // Râu Lân Sư
				horns: true, // Sừng rồng trang trí
				background: "light", // Background cho preview
				position: { x: 0, y: -0.5, z: 0 },
				rotation: { x: 0, y: 0, z: 0 },
				scale: 1,
			},
		})),

	// Export design as JSON
	exportDesign: () => {
		const { design } = get();
		const dataStr = JSON.stringify(design, null, 2);
		const dataBlob = new Blob([dataStr], { type: "application/json" });
		const url = URL.createObjectURL(dataBlob);
		const link = document.createElement("a");
		link.href = url;
		link.download = "lan-su-design.json";
		link.click();
		URL.revokeObjectURL(url);
	},

	// Export design as image
	exportDesignAsImage: async (format = 'png', quality = 0.9) => {
		try {
			// Find the 3D viewer canvas
			const canvas = document.querySelector('.lion-3d-viewer canvas');
			if (!canvas) {
				throw new Error('3D viewer canvas not found');
			}

			// Debug: Check if canvas has content
			console.log('Canvas dimensions:', canvas.width, 'x', canvas.height);
			console.log('Canvas style dimensions:', canvas.style.width, 'x', canvas.style.height);

			// Try to force a render and capture the current view
			let capturedImageData = null;
			if (window.setExportCameraPosition && window.captureCurrentView) {
				window.setExportCameraPosition();
				// Wait a bit for the render to complete
				await new Promise(resolve => setTimeout(resolve, 1000));
				capturedImageData = window.captureCurrentView();
				console.log('Captured image data:', capturedImageData ? 'Success' : 'Failed');
				if (capturedImageData) {
					console.log('Data URL length:', capturedImageData.length);
					console.log('Data URL starts with:', capturedImageData.substring(0, 50));
				}
			}

			// Create a new canvas for the export
			const exportCanvas = document.createElement('canvas');
			const ctx = exportCanvas.getContext('2d');
			
			// Set canvas size (you can adjust these dimensions)
			const width = 1920;
			const height = 1080;
			exportCanvas.width = width;
			exportCanvas.height = height;

			// Create background gradient based on design background
			const { design } = get();
			let gradient;
			
			switch (design.background) {
				case 'dark':
					gradient = ctx.createLinearGradient(0, 0, 0, height);
					gradient.addColorStop(0, '#1a1a2e');
					gradient.addColorStop(0.5, '#16213e');
					gradient.addColorStop(1, '#0f3460');
					break;
				case 'gradient-red':
					gradient = ctx.createLinearGradient(0, 0, 0, height);
					gradient.addColorStop(0, '#fef7ff');
					gradient.addColorStop(0.5, '#fee2e2');
					gradient.addColorStop(1, '#fef2f2');
					break;
				case 'gradient-blue':
					gradient = ctx.createLinearGradient(0, 0, 0, height);
					gradient.addColorStop(0, '#eff6ff');
					gradient.addColorStop(0.5, '#dbeafe');
					gradient.addColorStop(1, '#f0f9ff');
					break;
				case 'gradient-gold':
					gradient = ctx.createLinearGradient(0, 0, 0, height);
					gradient.addColorStop(0, '#fffbeb');
					gradient.addColorStop(0.5, '#fef3c7');
					gradient.addColorStop(1, '#fefce8');
					break;
				case 'solid-white':
					gradient = ctx.createLinearGradient(0, 0, 0, height);
					gradient.addColorStop(0, '#ffffff');
					gradient.addColorStop(1, '#ffffff');
					break;
				default: // light
					gradient = ctx.createLinearGradient(0, 0, 0, height);
					gradient.addColorStop(0, '#ffffff');
					gradient.addColorStop(1, '#f8f9fa');
					break;
			}

			// Fill background
			ctx.fillStyle = gradient;
			ctx.fillRect(0, 0, width, height);

			// Draw the 3D model in the center with better positioning
			const modelSize = Math.min(width, height) * 0.8; // Increased size for better visibility
			const x = (width - modelSize) / 2;
			const y = (height - modelSize) / 2 - 100; // Move up more to center the head

			if (capturedImageData) {
				// Use the captured image data if available
				const img = new Image();
				img.onload = () => {
					console.log('Image loaded successfully, dimensions:', img.width, 'x', img.height);
					
					// Create a temporary canvas to resize the captured image
					const tempCanvas = document.createElement('canvas');
					const tempCtx = tempCanvas.getContext('2d');
					tempCanvas.width = modelSize;
					tempCanvas.height = modelSize;

					// Calculate aspect ratio to maintain proportions
					const aspectRatio = img.width / img.height;
					let drawWidth = modelSize;
					let drawHeight = modelSize;
					let drawX = 0;
					let drawY = 0;

					if (aspectRatio > 1) {
						// Image is wider than tall
						drawHeight = modelSize / aspectRatio;
						drawY = (modelSize - drawHeight) / 2;
					} else {
						// Image is taller than wide
						drawWidth = modelSize * aspectRatio;
						drawX = (modelSize - drawWidth) / 2;
					}

					// Draw the captured image onto the temp canvas with better quality
					tempCtx.imageSmoothingEnabled = true;
					tempCtx.imageSmoothingQuality = 'high';
					tempCtx.drawImage(img, drawX, drawY, drawWidth, drawHeight);

					// Draw the resized model onto the export canvas
					ctx.drawImage(tempCanvas, x, y, modelSize, modelSize);

					// Add overlays and download
					addOverlaysAndDownload(ctx, width, height, design, format, quality, exportCanvas);
				};
				img.onerror = (error) => {
					console.error('Error loading captured image:', error);
					// Fallback to the original method
					fallbackToOriginalMethod();
				};
				img.src = capturedImageData;
			} else {
				// Fallback to the original method
				fallbackToOriginalMethod();
			}

		} catch (error) {
			console.error('Error exporting image:', error);
			alert('Failed to export image. Please try again.');
		}
	},
}));

// Helper function for fallback method
const fallbackToOriginalMethod = () => {
	const canvas = document.querySelector('.lion-3d-viewer canvas');
	if (!canvas) return;
	
	const exportCanvas = document.createElement('canvas');
	const ctx = exportCanvas.getContext('2d');
	
	// Set canvas size
	const width = 1920;
	const height = 1080;
	exportCanvas.width = width;
	exportCanvas.height = height;
	
	// Create background
	ctx.fillStyle = '#ffffff';
	ctx.fillRect(0, 0, width, height);
	
	// Draw the 3D model in the center
	const modelSize = Math.min(width, height) * 0.8;
	const x = (width - modelSize) / 2;
	const y = (height - modelSize) / 2 - 100;
	
	const tempCanvas = document.createElement('canvas');
	const tempCtx = tempCanvas.getContext('2d');
	tempCanvas.width = modelSize;
	tempCanvas.height = modelSize;
	
	tempCtx.imageSmoothingEnabled = true;
	tempCtx.imageSmoothingQuality = 'high';
	
	const canvasWidth = canvas.width || canvas.offsetWidth;
	const canvasHeight = canvas.height || canvas.offsetHeight;
	
	console.log('Fallback: Drawing canvas with dimensions:', canvasWidth, 'x', canvasHeight);
	tempCtx.drawImage(canvas, 0, 0, canvasWidth, canvasHeight, 0, 0, modelSize, modelSize);
	ctx.drawImage(tempCanvas, x, y, modelSize, modelSize);
	
	// Add overlays and download
	const { design } = useLionDesignStore.getState();
	addOverlaysAndDownload(ctx, width, height, design, 'png', 0.9, exportCanvas);
};

export default useLionDesignStore;

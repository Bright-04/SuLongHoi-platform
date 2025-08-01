import { create } from "zustand";

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
}));

export default useLionDesignStore;

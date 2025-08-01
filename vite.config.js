import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	assetsInclude: ["**/*.JPG", "**/*.JPEG", "**/*.PNG", "**/*.WEBP"],
	base: process.env.NODE_ENV === 'production' ? '/SuLongHoi-platform/' : '/',
});

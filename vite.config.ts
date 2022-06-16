import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/Playlist-ts-react/",
	plugins: [react()],
	server: {
		watch: {
			usePolling: true,
		},
	},
});

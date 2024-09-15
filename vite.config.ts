import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), tsconfigPaths()],
    define: {
      __BASE_URL__: JSON.stringify(env.BASE_URL),
      __KAKAOMAP_APP_KEY__: JSON.stringify(env.KAKAOMAP_APP_KEY),
    },
  };
});

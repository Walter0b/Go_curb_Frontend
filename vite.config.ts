import { UserConfig, defineConfig, loadEnv } from "vite";
import react from '@vitejs/plugin-react'
import { fileURLToPath } from "url";

// https://vitejs.dev/config/

// const env_data = (env: any) => ({
//   __APP_NAME__: env.VITE_APP_NAME,
//   __APP_DOMAINE__: env.VITE_APP_DOMAINE,
//   __APP_PORT__: env.VITE_APP_PORT,
//   __APP_BASE_URL__: env.VITE_APP_BASE_URL,
//   __APP_API_DOMAINE__: env.VITE_API_DOMAINE,
//   __APP_API_PORT__: env.VITE_API_PORT,
//   __APP_API_BASE_URL__: env.VITE_API_BASE_URL,
//   __APP_API_RESSOURCE__: env.VITE_API_RESSOURCE,
//   __APP_FAKER_API_RESSOURCE__: env.VITE_FAKER_API_RESSOURCE,
// });

export default defineConfig(({ _, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  //console.log(mode, command, +env.VITE_APP_PORT);

  const config: UserConfig = {
    plugins: [react()],
    resolve: {
      alias: {
        //"@": resolve(__dirname, "src"),
        // '@': path.resolve(__dirname, './src'),
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      minify: "esbuild",
    },
    server: {
      host: true,
      port: +env.VITE_APP_PORT,
    },
    preview: {
      host: true,
      port: +env.VITE_APP_PORT,
    },
  };

  return {
    ...config,
  };

  // if (command === "serve") {
  //   return {
  //     ...config,
  //   };
  // } else {
  //   // command === 'build'
  //   return {
  //     ...config,
  //   };
  // }
});


import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321",
  // Enable React to support React JSX components.
  integrations: [react(), icon({
    include: {
      // Include `iconoir` icons in the bundle
      iconoir: ['network-reverse', 'view-structure-down', 'cloud-sync', 'electronics-chip', 'database', 'code', 'pharmacy-squared-cross'],
      // Include `carbon` icons in the bundle
      carbon: ['api-1', 'container-services', 'dashboard', 'app-connectivity', 'add', 'email', 'password', 'login', 'error', 'logout', 'caret-down'],
      // Include `remix` icons in the bundle
      ri: ['arrow-down-circle-line', 'close-circle-line', 'mail-line', 'key-fill', 'menu-fill', 'add-box-line', 'file-copy-2-line', 'settings-5-line', 'user-add-line', 'code-box-line', 'menu-2-fill', 'file-list-3-line', 'user-add-line', 'home-2-line', 'user-3-line', 'database-2-line', 'login-box-line', 'logout-box-line', 'run-fill', 'folder-info-fill']
    }
  }), tailwind()],
  output: "server",
  adapter: netlify()
});
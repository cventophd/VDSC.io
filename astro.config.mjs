import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://<your-username>.github.io',
  // If deploying to a sub-page repository like username.github.io/repo-name, 
  // you must also add: base: '/repo-name',
});

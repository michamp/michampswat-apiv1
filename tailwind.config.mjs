/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	daisyui: {
    themes: [
      {
        templatetheme: {        
				"primary": "#dc2626",
				"secondary": "#ff6800",  
				"accent": "#0093fd",      
				"neutral": "#001811",        
				"base-100": "#1b222b",       
				"info": "#00e9ff",      
				"success": "#8ae42f",       
				"warning": "#ff9b36",       
				"error": "#c4003c",
          },
        },
      ],
    },

	plugins: [require('daisyui')],
}

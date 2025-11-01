export default {
	// Astro, TypeScript, and JavaScript files
	'*.{astro,ts,tsx,js,jsx}': ['prettier --write', 'eslint --fix'],

	// CSS and SCSS files
	'*.{css,scss}': ['prettier --write'],

	// Configuration and documentation files
	'*.{json,md,yaml,yml}': ['prettier --write']
}
module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: [
		'@nuxtjs/eslint-config-typescript',
		'plugin:prettier/recommended',
		'plugin:nuxt/recommended',
	],
	plugins: [],
	rules: {
		'@typescript-eslint/indent': ['error', 'tab'],
		semi: 'always',
		quotes: 'single',
		'prettier/prettier': [{ endOfLine: 'auto' }],
	},
}

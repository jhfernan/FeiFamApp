const config = require('./app.config')
import colors from 'vuetify/es5/util/colors'

export default {
	mode: 'universal',

	// Headers of the page
	head: {
		titleTemplate: '%s - ' + process.env.npm_package_name,
		title: 'Fei Family App',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		]
	},

	// Customize the progress-bar color
	loading: { color: '#fff' },

	// Global CSS
	css: [
		'@/assets/app.styl',
	],

	// Plugins to load before mounting the App
	plugins: [
		'@/plugins/axios',
		'@plugins/filters',
	],

	// Nuxt.js dev-modules
	buildModules: [
		'@nuxtjs/vuetify'
	],

	// Nuxt.js modules
	modules: [
		'@nuxtjs/auth',
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios'
	],

	auth: config.auth,

	// Axios module configuration | See https://axios.nuxtjs.org/options
	axios: config.axios,

	// vuetify module configuration | https://github.com/nuxt-community/vuetify-module
	vuetify: {
		customVariables: ['~/assets/variables.styl'],
		theme: {
			dark: false,
			themes: {
				// light: {
				// 	primary: '#3f51b5',
				// 	secondary: '#b0bec5',
				// 	accent: '#8c9eff',
				// 	error: '#b71c1c',
				// 	anchor: '#8c9eff'
				// },
				dark: {
					primary: colors.blueGrey.base,
					accent: colors.grey.darken2,
					secondary: colors.amber.base,
					info: colors.blue.base,
					warning: colors.yellow.base,
					error: colors.red.base,
					success: colors.green.base
				}
			}
		}
	},

	// Build configuration
	build: {
		// You can extend webpack config here
		extend (config, ctx) {
		}
	}
}

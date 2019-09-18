<template>
	<v-app>
		<v-app-bar app dense dark hide-on-scroll>
			<v-toolbar-title>
				<nuxt-link class="white--text" to="/">Fei Family</nuxt-link>
			</v-toolbar-title>
			<v-spacer />
			<v-btn icon>
				<v-icon>mdi-dots-vertical</v-icon>
			</v-btn>
		</v-app-bar>
		<v-content>
			<nuxt />
		</v-content>
	</v-app>
</template>

<script>
// import Navigation from '~/components/Navigation.vue'
//
// export default {
// 	components: { Navigation }
// }
</script>

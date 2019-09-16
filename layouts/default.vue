<template>
	<v-app>
		<v-app-bar app dense dark hide-on-scroll>
			<v-toolbar-title>
				<nuxt-link to="/">Fei Family</nuxt-link>
			</v-toolbar-title>
			<div class="flex-grow-1"></div>
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
export default {
	data () {
		return {
		}
	}
}
</script>

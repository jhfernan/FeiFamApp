<template>
	<div>
		<v-app-bar app clipped-right dark dense hide-on-scroll>
			<v-btn class="hidden-md-and-down" exact :key="i" nuxt router text :to="link.to" v-for="(link, i) in links">
				{{ link.name }}
			</v-btn>
			<v-spacer />
			<v-toolbar-title>
				<nuxt-link class="white--text" to="/">Fei Family</nuxt-link>
			</v-toolbar-title>
			<v-spacer />
			<v-btn class="hidden-md-and-down" exact :key="link.name" nuxt router text :to="link.to" v-for="link in linksTwo">
				{{ link.name }}
			</v-btn>
			<v-btn class="hidden-lg-and-up" @click.native.stop="drawer = !drawer" icon>
				<v-icon>mdi-dots-vertical</v-icon>
			</v-btn>
		</v-app-bar>
		<v-navigation-drawer app class="hidden-lg-and-up" clipped fixed right v-model="drawer">
			<v-list>
				<v-list-item
					:key="link.name"
					link
					:to="link.to"
					v-for="link in allLinks">
					<v-list-item-content>
						<v-list-item-title>{{ link.name }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script>
export default {
	computed: {
		allLinks () {
			return this.links.concat(this.linksTwo)
		}
	},
	data () {
		return {
			drawer: false,
			links: [
				{ name: 'Home', to: '/' },
			],
			linksTwo: [
				{ name: 'Login', to: '/login' },
			],
		}
	}
}
</script>

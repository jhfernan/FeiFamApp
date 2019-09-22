<template>
	<div>
		<v-app-bar app clipped-right dark fixed>
			<v-toolbar-title>
				<nuxt-link class="white--text" to="/home">Home</nuxt-link>
			</v-toolbar-title>
			<v-spacer />
			<v-app-bar-nav-icon @click="drawer = !drawer" />
			<v-btn class="hidden-md-and-down" icon @click.stop="toggleMini">
				<v-icon v-html="$store.state.nav.minivariant ? 'mdi-chevron-right' : 'mdi-chevron-left'" />
			</v-btn>
		</v-app-bar>
		<v-navigation-drawer
			absolute
			app
			bottom
			clipped
			dark
			fixed
			:mini-variant="$store.state.nav.minivariant"
			right
			v-model="drawer">
			<v-list>
				<template v-for="(item, i) in items">
					<v-list-item
						:key="i"
						link
						:to="item.to"
						v-if="!item.auth || $auth.user[item.auth] || $auth.user[item.secondaryAuth]">
						<v-list-item-icon>
							<v-icon>{{ item.icon }}</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>{{ item.title }}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</template>
				<v-list-item @click="logout">
					<v-list-item-icon>
						<v-icon>mdi-logout</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>Logout</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script>
import util from '~/components/app/util'

export default {
	data () {
		return {
			avatar: util.avatar(this.$auth.user.email),
			drawer: true,
			items: [
				{ icon: 'mdi-account', title: 'My Profile', to: '/home' },
				{ icon: 'mdi-account-group', title: 'Manage Users', to: '/users', auth: 'admin' },
				{ icon: 'mdi-android-messages', title: 'Discussion Board', to: '/board' },
			],
		}
	},
	methods: {
		async logout () {
			await this.$auth.logout()
		},
		toggleMini () {
			this.$store.commit('nav/toggleMini')
		},
	},
}
</script>

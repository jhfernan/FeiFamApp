<template>
	<v-container>
		<h1>Welcome Home <strong class="text-capitalize">{{ user.name }}</strong></h1>
		<v-layout row wrap>
			<v-flex xs12 md8>
				<v-card>
					Content here
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import util from '~/components/app/util.js'

export default {
	// asyncData ({ app, error }) {
	// 	return app.$axios.$get('/info/subjects')
	// 	.then(res => {
	// 		return { subjectInfo: res }
	// 	})
	// 	.catch(err => { error({ statusCode: '404', message: 'Info for subjects not found' }) })
	// },
	data () {
		return {
			avatar: util.avatar(this.$auth.user.email, 100),
			form: {},
			loading: false,
			user: this.$auth.user,
			util: util,
			valid: true,
		}
	},
	head () {
		return {
			title: 'Home Page',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Your User Home Page' }
			]
		}
	},
	// methods: {
	// 	clear () {
	// 		this.$refs.form.reset()
	// 	},
	// 	async fetch() {
	// 		await this.$auth.fetchUser()
	// 		.catch(err => {
	// 			this.util.catchErrors(err, 'There was an error fetching the new profile', this.$store)
	// 		})
	// 		.finally(() => {
	// 			this.user = this.$auth.user
	// 		})
	// 	},
	// 	async updateCredentials () {
	// 		await this.$axios.$get(`/api/v1/user/${this.user.username}/update_token`)
	// 		.then(res => {
	// 			this.$auth.setToken('local', res.token)
	// 		})
	// 		.catch(err => {
	// 			this.util.catchErrors(err, 'There was an error updating your profile', this.$store)
	// 		})
	// 		.finally(() => {
	// 			this.fetch()
	// 		})
	// 	},
	// 	async updateProfile () {
	// 		if (this.$refs.form.validate()) {
	// 			this.loading = true
	// 			await this.$axios.$put(`/api/v1/user/${this.user.username}`, this.form)
	// 			.then(res => {
	// 				this.$store.dispatch('snack/showSnack', 'Profile updated!')
	// 				this.clear()
	// 			})
	// 			.catch(err => {
	// 				this.util.catchErrors(err, 'There was an error updating your profile', this.$store)
	// 			})
	// 			.finally(() => {
	// 				this.loading = false
	// 				this.updateCredentials()
	// 			})
	// 		}
	// 	},
	// },
	middleware: 'member',
	// async mounted () {
	// 	this.updateCredentials()
	// },
}
</script>

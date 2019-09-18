<template>
	<c-construction :name="'Settings'" />
</template>

<script>
import util from '~/components/app/util.js'

export default {
	data () {
		return {
			user: this.$auth.user,
			util: util,
		}
	},
	head () {
		return {
			title: 'Settings',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Page to change your settings' }
			]
		}
	},
	methods: {
		// async changePassword () {
		// 	if (this.$refs.form.validate()) {
		// 		await this.$axios.$put(`/api/v1/user/${this.$auth.user.id}`, this.form)
		// 		.then(res => {
		// 			this.$store.dispatch('snack/showSnack', 'Password change successful!')
		// 			this.$refs.form.reset()
		// 		}).catch(err => {
		// 			err.response
		// 				? this.$store.dispatch('snack/showSnack', `${err.response.data.status}: ${err.response.data.message}`)
		// 				: this.$store.dispatch('snack/showSnack', 'There was an error changing your password')
		// 		})
		// 	}
		// },
	},
	middleware: 'member',
}
</script>

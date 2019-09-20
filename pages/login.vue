<template>
	<v-container fluid fill-height>
		<v-layout align-center justify-center>
			<v-flex xs12 sm8 md4 lg3>
				<v-card class="elevation-12">
					<v-toolbar color="primary" dark dense>
						<v-toolbar-title>Login</v-toolbar-title>
					</v-toolbar>
					<v-card-text>
						<v-alert class="mb-3" :value="err" type="error">
							{{ err }}
						</v-alert>
						<v-form @submit.prevent="login" @keyword.enter="login">
							<v-text-field prepend-icon="mdi-account" label="Username" type="text" v-model="form.username" />
							<v-text-field prepend-icon="mdi-lock" label="Password" type="password" v-model="form.password" />
							<v-toolbar dense flat>
								<v-spacer />
								<v-btn @click="login" color="primary" type="submit">Login</v-btn>
							</v-toolbar>
						</v-form>
					</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	data () {
		return {
			err: null,
			form: {},
		}
	},
	head () {
		return {
			title: 'Log In',
			meta: [
				{ hid: 'description', name: 'description', content: 'Login portal for our clients and members' }
			]
		}
	},
	methods: {
		async login() {
			this.err = null
			await this.$auth.loginWith('local', { data: this.form })
				.catch(e => {
					this.err = e + ''
				})
		},
		// async login() {
		// 	try {
		// 		await this.$auth.loginWith('local', { data: this.form })
		// 	} catch (err) {
		// 		console.log(err.response)
		// 		err.response && err.response.data
		// 			? this.err = `Error ${err.response.data.status}: ${err.response.data.message}`
		// 			: this.err = 'There was an error during the log in process'
		// 	}
		// },
	}
}
</script>

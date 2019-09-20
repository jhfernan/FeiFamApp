<template>
	<v-container fluid fill-height>
		<v-layout align-center justify-center>
			<v-flex xs12 sm8 md6 lg3>
				<v-card class="pt-3">
					<v-img aspect-ratio="1" contain height="75" src="/images/logo.png"></v-img>
					<v-card-text>
						<div class="text-xs-center">
							<h1 class="headline mr-1">{{ error.statusCode }}</h1>
							<p>{{ error.message }}</p>
						</div>
					</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	props: {
		error: {
			type: Object,
			default: null
		}
	},
	head () {
		const title =
			this.error.statusCode === 404 ? this.pageNotFound : this.otherError
		return {
			title
		}
	},
	data () {
		return {
			pageNotFound: '404 Not Found',
			otherError: 'An error occurred'
		}
	}
}
</script>

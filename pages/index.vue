<template>
	<v-container>
		<v-layout align-center column justify-center>
			<v-flex xs12 sm8 md6>
				<v-card>
					<v-card-title class="headline">
						Welome to the Fei Family App about our move to China!
					</v-card-title>
					<v-card-text>
						<p>When my wife and I got married, we decided we wanted to move overseas for a couple years and teach. Little did we know that we would bring some "little helpers" along the way and we definitely did not think we would be moving to China. Nonetheless, here we are!</p>
						<p>We decided to make an app to chronicle all our little misadventures and experiences in hopes that it might help an expat get something as simple as a meal when they finally take the plunge into this amazing place!</p>
						<div class="text-xs-right">
							<em>&mdash; Jonathan Fernandes</em>
						</div>
					</v-card-text>
					<v-card-actions>
						<v-spacer />
						<v-btn color="primary" nuxt to="/tools/budget">
							Check out our budget tool
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	// data () {
	// 	return {}
	// },
	head () {
		return {
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'We are the Fei Family. We decided to move to China in hopes of growing as a family. What we got was one crazy big adventure. This app is all about our experience and mishaps along the way.' }
			]
		}
	}
}
</script>

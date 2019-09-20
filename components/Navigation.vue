<template>
	<section>
		<backbar v-if="$store.state.auth && $auth.loggedIn" />
		<navbar v-else />
		<v-snackbar top right v-model="$store.state.snack.available">
			{{ $store.state.snack.text }}
			<v-btn color="grey" @click.native="$store.dispatch('snack/toggleSnack')" text>Close</v-btn>
		</v-snackbar>
	</section>
</template>

<script>
import Backbar from '~/components/layouts/Backbar'
import Navbar from '~/components/layouts/Navbar'

export default {
	components: { Backbar, Navbar }
}
</script>

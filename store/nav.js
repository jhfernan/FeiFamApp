export const state = () => ({
	minivariant: false,
})

export const mutations = {
	toggleMini (state) {
		state.minivariant = !state.minivariant
	},
}

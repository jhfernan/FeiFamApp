export default function ({ redirect, store }) {
	if (store.state.auth && store.state.auth.loggedIn) {
		return redirect('/home')
	}
}

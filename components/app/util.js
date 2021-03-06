import gravatar from 'gravatar'

export default {
	// Helpers
	avatar: (email, size=70) => {
		return gravatar.url(email, {s: size, r: 'x', d: 'mm'}, true)
	},
	// tabber (event, body) {
	// 	let text = body,
	// 		originalSelectionStart = event.target.selectionStart,
	// 		textStart = text.slice(0, originalSelectionStart),
	// 		textEnd =  text.slice(originalSelectionStart);
	//
	// 	body = `${textStart}\t${textEnd}`
	// 	event.target.value = body
	// 	event.target.selectionEnd = event.target.selectionStart = originalSelectionStart + 1
	// },
	catchErrors: (err, message, store) => {
		err.response
			? store.dispatch('snack/showSnack', `${err.response.data.status}: ${err.response.data.message}`)
			: store.dispatch('snack/showSnack', message)
	},
	permissions: [
		{ text: 'Admin', value: 'admin' },
		{ text: 'Manager', value: 'manager' },
		{ text: 'Staff', value: 'staff' },
		{ text: 'Member', value: 'member' }
	],

	// Form rules
	rules: {
		confirmPassword: password => {
			return [
				v => !!v || 'This is required',
				v => (v === password) || 'Password does not match'
			]
		},
		email: [
			v => !!v || 'E-mail is required',
			v => /.+@.+/.test(v) || 'E-mail must be valid'
		],
		emailNotRequired: [
			v => (/.+@.+/.test(v) || !v) || 'E-mail must be valid'
		],
		max: length => {
			return [
				v => (v && v.length <= length) || !v || `Must be less than ${length} characters`
			]
		},
		mi: [
			v => ((v && v.length < 2) || !v) || 'Middle initial must be one character',
		],
		name: [
			v => !!v || 'This is required',
			v => (v && v.length <= 15) || 'Name must be 15 characters or less'
		],
		required: [
			v => !!v || 'This is required'
		],
		selectOne: [
			v => (v && v.length > 0) || 'You must select at least one choice'
		],
		title: [
			v => !!v || 'The title is required',
			v => (v && v.length <= 75) || 'The title must be 75 characters or less'
		],
		usernamePassword: [
			v => (v && v.length <= 20 && v.length >= 5) || 'Must be between 5 and 20 characters'
		],
		usernamePassword: [
			v => !!v || 'This is required',
			v => (v && v.length <= 20 && v.length >= 5) || 'Must be between 5 and 20 characters'
		],
	}
}

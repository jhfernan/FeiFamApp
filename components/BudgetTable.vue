<template>
	<v-container>
		<v-toolbar :color="headerColor" dark dense>
			<v-toolbar-title v-html="title" />
			<v-spacer />
			<!-- <v-btn icon>
				<v-icon>mdi-dots-vertical</v-icon>
			</v-btn> -->
		</v-toolbar>
		<v-simple-table>
			<tbody>
				<tr v-for="item in budget" :key="item.name">
					<td>{{ item.name }}</td>
					<td class="text-right">&yen;{{ item.amount }}</td>
				</tr>
			</tbody>
		</v-simple-table>
		<v-toolbar color="grey lighten-2" dense flat>
			<v-toolbar-title class="text-uppercase" v-html="sumName" />
			<v-spacer />
			<v-toolbar-title class="text-right">
				&yen;{{ sum(budget) }}
			</v-toolbar-title>
		</v-toolbar>
	</v-container>
</template>

<script>
export default {
	methods: {
		sum (array) {
			return array.reduce((a, b) => a + b.amount, 0)
		}
	},
	props: {
		budget: {
			type: Object,
			default: [
				{ name: 'Kaiwen Academy', amount: 15000 },
				{ name: 'Ikids Teaching', amount: 1500 }
			]
		},
		headerColor: {
			type: String,
			default: "success"
		},
		title: {
			type: String,
			default: 'Money In'
		},
		sumName: {
			type: String,
			default: 'Total Income'
		}
	}
}
</script>

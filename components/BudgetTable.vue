<template>
	<v-container>
		<v-toolbar :color="headerColor" dark dense>
			<v-toolbar-title v-html="title" />
			<v-spacer />
			<v-btn icon small v-if="crudData">
				<v-icon small @click="addRow">fas fa-plus</v-icon>
			</v-btn>
		</v-toolbar>
		<v-simple-table>
			<tbody>
				<template v-for="(item, i) in budget">
					<tr :class="crudData ? 'cb-cursor' : ''" @click="updateRow(i)" :key="i">
						<td>{{ item.name }}</td>
						<td class="text-right">&yen;{{ item.amount }}</td>
					</tr>
				</template>
			</tbody>
		</v-simple-table>
		<v-toolbar color="grey lighten-2" dense flat>
			<v-toolbar-title class="text-uppercase" v-html="sumName" />
			<v-spacer />
			<v-toolbar-title class="text-right">
				&yen;{{ sum }}
			</v-toolbar-title>
		</v-toolbar>
	</v-container>
</template>

<script>
export default {
	computed: {
		sum () {
			return this.budget.reduce((a, b) => a + (b.amount ? b.amount : 0), 0)
		}
	},
	methods: {
		addRow () {
			this.$emit('add')
		},
		updateRow (i) {
			this.$emit('updateRowAction', i)
		}
	},
	props: {
		budget: {
			type: Array,
			default: function () {
				return [
					{ name: 'Kaiwen Academy', amount: 15000 },
					{ name: 'Ikids Teaching', amount: 1500 }
				]
			}
		},
		crudData: {
			type: Boolean,
			default: false
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

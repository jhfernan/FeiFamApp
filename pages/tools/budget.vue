<template>
	<v-container>
		<h1 class="my-3 text-center">Budgeting Tool</h1>
		<v-layout>
			<v-flex xs12 lg6>
				<budget-table
					:budget="budget.income"
					:title="'Income'"
				/>

				<budget-table
					:budget="budget.expenses"
					:headerColor="'error'"
					:title="'Expenses'"
					:sumName="'Total Expenses'"
				/>

				<v-container>
					<v-toolbar color="info" dark dense>
						<v-toolbar-title>Net</v-toolbar-title>
					</v-toolbar>
					<v-toolbar dense flat>
						<v-toolbar-title class="text-uppercase">Total</v-toolbar-title>
						<v-spacer />
						<v-toolbar-title class="text-right">
							&yen;{{ sum(budget.income) - sum(budget.expenses) }}
						</v-toolbar-title>
					</v-toolbar>
				</v-container>
			</v-flex>

			<v-flex xs12 lg6>
				<spark-chart bar :data="budget.expenses" toggleType />
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import BudgetTable from '~/components/BudgetTable.vue'
import SparkChart from '~/components/SparkChart.vue'

export default {
	async asyncData ({ app }) {
		let { data } = await app.$axios.get('budget.json')
		console.log(data)
		return { budget: data }
	},
	components: { BudgetTable, SparkChart },
	methods: {
		sum (array) {
			return array.reduce((a, b) => a + b.amount, 0)
		}
	}
}
</script>

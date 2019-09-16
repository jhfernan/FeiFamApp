<template>
	<v-container>
		<h1 class="my-3 text-center">Budgeting Tool</h1>
		<v-layout>
			<v-flex xs12 lg4>
				<budget-table
					crudData
					@add="addRow('income')"
					@updateRowAction="updateRowIncome"
					:budget="budget.income"
					:title="'Income'"
				/>

				<budget-table
					crudData
					@add="addRow('expenses')"
					@updateRowAction="updateRowExpenses"
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

			<v-flex xs12 lg8>
				<spark-chart bar :data="budget.expenses" :height="75" toggleType />
			</v-flex>
		</v-layout>

		<v-dialog v-model="updateDialog" persistent max-width="600px">
			<v-card>
				<v-card-title>
					<span class="headline">Update Info</span>
				</v-card-title>
				<v-card-text>
					<v-container>
						<v-layout row wrap>
							<v-flex class="px-3" xs12 lg6>
								<v-text-field label="Name" required v-model="updateForm.name"></v-text-field>
							</v-flex>
							<v-flex class="px-3" xs12 lg6>
								<v-text-field label="Amount" type="number" required v-model.number="updateForm.amount"></v-text-field>
							</v-flex>
						</v-layout>
					</v-container>
				</v-card-text>
				<v-card-actions>
					<div class="flex-grow-1"></div>
					<v-btn color="blue darken-1" text @click="updateInfo()">Done</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-container>
</template>

<script>
import BudgetTable from '~/components/BudgetTable.vue'
import SparkChart from '~/components/SparkChart.vue'

export default {
	async asyncData ({ app }) {
		let { data } = await app.$axios.get('budget.json')
		return { budget: data }
	},
	components: { BudgetTable, SparkChart },
	data () {
		return {
			updateName: '',
			updateForm: {},
			updateDialog: false
		}
	},
	methods: {
		addRow (dataName) {
			this.budget[dataName].push({ name: 'New', amount: 0  })
		},
		setUpdateInfo (type, index) {
			this.updateName = type
			this.updateForm = this.budget[type][index]
			this.updateDialog = true
		},
		updateRowIncome (e) {
			this.setUpdateInfo('income', e)
		},
		updateRowExpenses (e) {
			this.setUpdateInfo('expenses', e)
		},
		updateInfo () {
			this.updateDialog = false
		},
		sum (array) {
			return array.reduce((a, b) => a + (b.amount ? b.amount : 0), 0)
		}
	}
}
</script>

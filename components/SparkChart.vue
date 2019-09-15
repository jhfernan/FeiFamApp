<template>
	<v-container>
		<v-card class="mx-auto text-center" :color="tableColor" dark>
			<v-card-text>
				<v-sheet class="py-3" color="rgba(0, 0, 0, .12)">
					<v-sparkline
						:value="values"
						:auto-line-width="bar || false"
						color="rgba(255, 255, 255, .7)"
						height="120"
						:line-width="2"
						padding="30"
						:smooth="!bar || false"
						:type="bar ? 'bar' : 'trend'"
					>
						<template v-slot:label="item">
							{{ data[item.index].name }}
						</template>
					</v-sparkline>
				</v-sheet>
			</v-card-text>
			<v-card-text class="pt-0">
				<div class="display-1 font-weight-medium">{{ title }}</div>
			</v-card-text>
			<!-- <v-divider></v-divider>
			<v-card-actions class="justify-center">
				<v-btn block text>Go to Report</v-btn>
			</v-card-actions> -->
		</v-card>
	</v-container>
</template>

<script>
export default {
	computed: {
		values () {
			return this.data.map(item => item.amount)
		}
	},
	props: {
		bar: {
			type: Boolean,
			default: false
		},
		data: {
			type: Array,
			default: function () {
				return [
					{ name: 'Rent', amount: 600 },
					{ name: 'Utilities', amount: 500 },
					{ name: 'Food', amount: 4000 }
				]
			}
		},
		tableColor: {
			type: String,
			default: "primary"
		},
		title: {
			type: String,
			default: 'Expenses Quick Look'
		}
	}
}
</script>
